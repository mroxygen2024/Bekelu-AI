from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ResumeBase(BaseModel):
    filename: str
    content_type: str

class ResumeUpload(ResumeBase):
    file_size: int

class ResumeResponse(BaseModel):
    id: str
    filename: str
    content_type: str
    file_size: int
    created_at: datetime
    text_content: Optional[str] = None
