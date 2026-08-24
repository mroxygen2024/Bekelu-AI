from fastapi import APIRouter, HTTPException
from app.schemas.review import ReviewRequest, APIResponse
from app.services.resume_review_service import resume_review_service
from app.api.routes.resumes import resumes_store
from app.core.logging import logger

router = APIRouter()

@router.post("/resumes/{resume_id}/review", response_model=APIResponse)
async def review_resume(resume_id: str, request: ReviewRequest):
    try:
        if resume_id not in resumes_store:
            raise HTTPException(status_code=404, detail="Resume not found")
        
        review = await resume_review_service.review_resume(
            file_id=resume_id,
            target_role=request.target_role,
            job_description=request.job_description
        )
        
        return APIResponse(
            success=True,
            message="Resume reviewed successfully",
            data=review.model_dump()
        )
        
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Review error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
