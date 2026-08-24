import json
import re
import google.generativeai as genai
from app.core.config import settings
from app.core.logging import logger

class AIService:
    def __init__(self):
        genai.configure(api_key=settings.GEMINI_API_KEY)
        self.model = genai.GenerativeModel(settings.GEMINI_MODEL)
    
    async def generate_review(self, system_prompt: str, user_message: str) -> dict:
        try:
            full_prompt = f"{system_prompt}\n\n{user_message}\n\nIMPORTANT: Return ONLY the JSON object. No markdown, no code fences, no extra text."
            
            response = await self.model.generate_content_async(full_prompt)
            
            if not response.text:
                raise ValueError("Empty response from Gemini API")
            
            content = response.text.strip()
            
            # Strip markdown code fences if present
            content = re.sub(r'^```json\s*', '', content)
            content = re.sub(r'^```\s*', '', content)
            content = re.sub(r'\s*```$', '', content)
            content = content.strip()
            
            return json.loads(content)
            
        except json.JSONDecodeError as e:
            logger.error(f"JSON parse error: {e}\nRaw content: {content[:500]}")
            raise ValueError(f"Invalid JSON response from AI: {str(e)}")
        except Exception as e:
            logger.error(f"Gemini service error: {e}")
            raise ValueError(f"AI service error: {str(e)}")

ai_service = AIService()
