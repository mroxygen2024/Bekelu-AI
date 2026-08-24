from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from enum import Enum

class Priority(str, Enum):
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

class CandidateInfo(BaseModel):
    name: str = ""
    current_title: str = ""
    experience_level: str = ""
    years_of_experience: Optional[int] = None

class OverallReview(BaseModel):
    score: int
    summary: str
    strengths: List[str]
    top_priorities: List[str]

class ScoreBreakdown(BaseModel):
    ats: int
    content: int
    experience: int
    skills: int
    projects: int
    formatting: int
    clarity: int
    impact: int
    career_positioning: int

class ATSReview(BaseModel):
    score: int
    strengths: List[str]
    risks: List[str]
    recommendations: List[str]

class SummaryReview(BaseModel):
    present: bool
    score: int
    strengths: List[str]
    problems: List[str]
    recommendations: List[str]
    suggested_rewrite: str = ""

class ExperienceEntry(BaseModel):
    position: str
    company: str
    score: int
    strengths: List[str]
    problems: List[str]
    missing_impact: List[str]
    recommendations: List[str]

class BulletReview(BaseModel):
    original: str
    problem: str
    problem_type: str
    suggestion: str
    explanation: str

class SkillsReview(BaseModel):
    score: int
    strengths: List[str]
    problems: List[str]
    unsupported_skills: List[str]
    recommendations: List[str]

class ProjectReview(BaseModel):
    name: str
    score: int
    strengths: List[str]
    problems: List[str]
    recommendations: List[str]

class EducationReview(BaseModel):
    degree: str = ""
    institution: str = ""
    field: str = ""
    dates: str = ""
    score: int = 0
    strengths: List[str] = []
    problems: List[str] = []
    recommendations: List[str] = []

class FormattingReview(BaseModel):
    score: int
    strengths: List[str]
    problems: List[str]
    recommendations: List[str]

class CareerPositioning(BaseModel):
    score: int
    assessment: str
    recommendations: List[str]

class Recommendation(BaseModel):
    title: str
    priority: Priority
    category: str
    problem: str
    recommendation: str
    reason: str

class TargetJobAnalysis(BaseModel):
    target_role: str
    match_score: int
    matching_skills: List[str]
    missing_keywords: List[str]
    relevant_experience: List[str]
    recommendations: List[str]

class ReviewResponse(BaseModel):
    candidate: CandidateInfo
    overall: OverallReview
    score_breakdown: ScoreBreakdown
    ats_review: ATSReview
    summary_review: SummaryReview
    experience_review: List[ExperienceEntry]
    bullet_reviews: List[BulletReview]
    skills_review: SkillsReview
    projects_review: List[ProjectReview]
    education_review: EducationReview
    formatting_review: FormattingReview
    career_positioning: CareerPositioning
    missing_information: List[str]
    recommendations: List[Recommendation]
    target_job_analysis: Optional[TargetJobAnalysis] = None

class ReviewRequest(BaseModel):
    target_role: Optional[str] = None
    job_description: Optional[str] = None

class APIResponse(BaseModel):
    success: bool
    message: str
    data: Optional[Dict[str, Any]] = None
