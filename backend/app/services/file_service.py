import os
import uuid
import magic
from pathlib import Path
from fastapi import UploadFile, HTTPException
from app.core.config import settings
from app.core.logging import logger

ALLOWED_MIME_TYPES = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword"
]

class FileService:
    def __init__(self):
        self.upload_dir = Path(settings.UPLOAD_DIR)
        self.upload_dir.mkdir(exist_ok=True)
    
    def validate_file(self, file: UploadFile) -> None:
        content = file.file.read()
        file.file.seek(0)
        
        mime_type = magic.from_buffer(content, mime=True)
        if mime_type not in ALLOWED_MIME_TYPES:
            raise HTTPException(
                status_code=400,
                detail=f"Unsupported file type: {mime_type}. Please upload PDF or DOCX files."
            )
        
        file_size = len(content)
        max_size = settings.MAX_FILE_SIZE_MB * 1024 * 1024
        if file_size > max_size:
            raise HTTPException(
                status_code=413,
                detail=f"File too large. Maximum size is {settings.MAX_FILE_SIZE_MB}MB."
            )
    
    def save_file(self, file: UploadFile, file_content: bytes) -> str:
        file_id = str(uuid.uuid4())
        ext = Path(file.filename).suffix or ".pdf"
        filename = f"{file_id}{ext}"
        file_path = self.upload_dir / filename
        
        with open(file_path, "wb") as f:
            f.write(file_content)
        
        logger.info(f"File saved: {filename} ({len(file_content)} bytes)")
        return file_id
    
    def get_file_path(self, file_id: str) -> Path:
        for ext in [".pdf", ".docx", ".doc"]:
            file_path = self.upload_dir / f"{file_id}{ext}"
            if file_path.exists():
                return file_path
        raise HTTPException(status_code=404, detail="File not found")
    
    def delete_file(self, file_id: str) -> None:
        for ext in [".pdf", ".docx", ".doc"]:
            file_path = self.upload_dir / f"{file_id}{ext}"
            if file_path.exists():
                file_path.unlink()
                logger.info(f"File deleted: {file_id}")
                return

file_service = FileService()
