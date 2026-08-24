import re

def clean_resume_text(text: str) -> str:
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    return text

def extract_sections(text: str) -> dict:
    sections = {}
    current_section = "header"
    current_content = []
    
    lines = text.split('\n')
    
    section_keywords = [
        "experience", "education", "skills", "projects",
        "certifications", "summary", "objective", "contact"
    ]
    
    for line in lines:
        line_lower = line.lower().strip()
        
        is_section_header = False
        for keyword in section_keywords:
            if keyword in line_lower and len(line.strip()) < 50:
                if current_content:
                    sections[current_section] = '\n'.join(current_content)
                current_section = line.strip()
                current_content = []
                is_section_header = True
                break
        
        if not is_section_header:
            current_content.append(line)
    
    if current_content:
        sections[current_section] = '\n'.join(current_content)
    
    return sections
