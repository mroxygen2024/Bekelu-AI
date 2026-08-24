from pathlib import Path
from app.services.pdf_parser import pdf_parser
from app.services.docx_parser import docx_parser
from app.core.logging import logger

class ResumeParser:
    def extract_text(self, file_path: Path, content_type: str) -> str:
        try:
            if content_type == "application/pdf":
                return pdf_parser.extract_text(file_path)
            elif content_type in [
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "application/msword"
            ]:
                return docx_parser.extract_text(file_path)
            else:
                raise ValueError(f"Unsupported content type: {content_type}")
        except Exception as e:
            logger.error(f"Resume parsing error: {e}")
            raise

resume_parser = ResumeParser()
