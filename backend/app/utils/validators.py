import re
from typing import Optional

def validate_email(email: str) -> bool:
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

def validate_phone(phone: str) -> bool:
    pattern = r'^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
    return bool(re.match(pattern, phone))

def validate_linkedin(url: str) -> bool:
    pattern = r'^https?://(www\.)?linkedin\.com/in/[a-zA-Z0-9_-]+$'
    return bool(re.match(pattern, url))

def validate_github(url: str) -> bool:
    pattern = r'^https?://(www\.)?github\.com/[a-zA-Z0-9_-]+$'
    return bool(re.match(pattern, url))

def validate_url(url: str) -> bool:
    pattern = r'^https?://[^\s/$.?#].[^\s]*$'
    return bool(re.match(pattern, url))

def extract_emails(text: str) -> list:
    pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    return list(set(re.findall(pattern, text)))

def extract_phones(text: str) -> list:
    pattern = r'[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}'
    return list(set(re.findall(pattern, text)))
