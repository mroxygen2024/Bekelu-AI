import uuid
from datetime import datetime
from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.file_service import file_service
from app.services.resume_parser import resume_parser
from app.schemas.resume import ResumeResponse
from app.schemas.review import APIResponse
from app.core.logging import logger

router = APIRouter()

# In-memory store for demo purposes
resumes_store = {}

@router.post("/resumes/upload", response_model=APIResponse)
async def upload_resume(file: UploadFile = File(...)):
    try:
        file_service.validate_file(file)
        
        content = await file.read()
        
        file_info = file_service.save_file(file, content)
        
        file_path = file_service.get_file_path(file_info["id"])
        text_content = resume_parser.extract_text(file_path, file_info["content_type"])
        
        resume_data = ResumeResponse(
            id=file_info["id"],
            filename=file_info["original_filename"],
            content_type=file_info["content_type"],
            file_size=file_info["file_size"],
            created_at=datetime.now(),
            text_content=text_content
        )
        
        resumes_store[file_info["id"]] = resume_data
        
        logger.info(f"Resume uploaded: {file_info['id']}")
        
        return APIResponse(
            success=True,
            message="Resume uploaded successfully",
            data=resume_data.model_dump()
        )
        
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Upload error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/resumes/{resume_id}", response_model=APIResponse)
async def get_resume(resume_id: str):
    if resume_id not in resumes_store:
        raise HTTPException(status_code=404, detail="Resume not found")
    
    resume = resumes_store[resume_id]
    return APIResponse(
        success=True,
        message="Resume retrieved successfully",
        data=resume.model_dump()
    )

@router.delete("/resumes/{resume_id}", response_model=APIResponse)
async def delete_resume(resume_id: str):
    if resume_id not in resumes_store:
        raise HTTPException(status_code=404, detail="Resume not found")
    
    file_service.delete_file(resume_id)
    del resumes_store[resume_id]
    
    return APIResponse(
        success=True,
        message="Resume deleted successfully",
        data=None
    )
