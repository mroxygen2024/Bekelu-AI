from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    APP_ENV: str = "development"
    FRONTEND_URL: str = "http://localhost:5173"
    
    GEMINI_API_KEY: Optional[str] = None
    GEMINI_MODEL: str = "gemini-1.5-flash"
    
    MAX_FILE_SIZE_MB: int = 10
    
    UPLOAD_DIR: str = "uploads"
    TEMP_DIR: str = "temp"
    
    class Config:
        env_file = ".env"

settings = Settings()
