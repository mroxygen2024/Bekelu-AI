from typing import Optional
from pathlib import Path
from app.services.file_service import file_service
from app.services.resume_parser import resume_parser
from app.agents.resume_reviewer import resume_reviewer_agent
from app.schemas.review import ReviewResponse
from app.core.logging import logger

class ResumeReviewService:
    async def review_resume(
        self,
        file_id: str,
        target_role: Optional[str] = None,
        job_description: Optional[str] = None
    ) -> ReviewResponse:
        try:
            file_path = file_service.get_file_path(file_id)
            
            content_type = self._get_content_type(file_path)
            
            resume_text = resume_parser.extract_text(file_path, content_type)
            
            if not resume_text.strip():
                raise ValueError("Could not extract text from resume")
            
            review_result = await resume_reviewer_agent.review(
                resume_text=resume_text,
                target_role=target_role,
                job_description=job_description
            )
            
            review = ReviewResponse(**review_result)
            
            logger.info(f"Resume {file_id} reviewed successfully")
            return review
            
        except Exception as e:
            logger.error(f"Review service error: {e}")
            raise
    
    def _get_content_type(self, file_path: Path) -> str:
        ext = file_path.suffix.lower()
        content_types = {
            ".pdf": "application/pdf",
            ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ".doc": "application/msword"
        }
        return content_types.get(ext, "application/pdf")

resume_review_service = ResumeReviewService()
