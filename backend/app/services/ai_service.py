import json
import google.generativeai as genai
from app.core.config import settings
from app.core.logging import logger

class AIService:
    def __init__(self):
        genai.configure(api_key=settings.GEMINI_API_KEY)
        self.model = genai.GenerativeModel(settings.GEMINI_MODEL)
    
    async def generate_review(self, system_prompt: str, user_message: str) -> dict:
        try:
            full_prompt = f"{system_prompt}\n\n{user_message}"
            
            response = await self.model.generate_content_async(
                full_prompt,
                generation_config=genai.types.GenerationConfig(
                    temperature=0.7,
                    response_mime_type="application/json",
                )
            )
            
            content = response.text
            return json.loads(content)
            
        except Exception as e:
            logger.error(f"Gemini service error: {e}")
            raise ValueError(f"AI service error: {str(e)}")

ai_service = AIService()
