from typing import Optional
from app.services.ai_service import ai_service
from app.prompts.resume_reviewer import RESUME_REVIEWER_PROMPT, build_review_prompt
from app.core.logging import logger

class ResumeReviewerAgent:
    async def review(
        self,
        resume_text: str,
        target_role: Optional[str] = None,
        job_description: Optional[str] = None
    ) -> dict:
        try:
            user_message = build_review_prompt(resume_text, target_role, job_description)
            
            result = await ai_service.generate_review(
                system_prompt=RESUME_REVIEWER_PROMPT,
                user_message=user_message
            )
            
            logger.info("Resume review completed successfully")
            return result
            
        except Exception as e:
            logger.error(f"Resume review error: {e}")
            raise ValueError(f"Failed to review resume: {str(e)}")

resume_reviewer_agent = ResumeReviewerAgent()
