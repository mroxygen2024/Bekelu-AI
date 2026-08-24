import pytest
from pathlib import Path
from app.utils.text_cleaner import clean_resume_text, extract_sections
from app.utils.validators import validate_email, validate_phone

def test_clean_resume_text():
    text = "  This   is   a   test   "
    cleaned = clean_resume_text(text)
    assert cleaned == "This is a test"

def test_extract_sections():
    text = """John Doe
Experience
Software Engineer at Google
Education
BS Computer Science"""
    sections = extract_sections(text)
    assert "header" in sections or "experience" in sections

def test_validate_email():
    assert validate_email("test@example.com") is True
    assert validate_email("invalid-email") is False

def test_validate_phone():
    assert validate_phone("+1234567890") is True
    assert validate_phone("abc") is False
