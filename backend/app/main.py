from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import health, resumes, reviews
from app.core.config import settings

app = FastAPI(
    title="Beletu - AI Resume Reviewer",
    description="AI-powered resume review system",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")
app.include_router(resumes.router, prefix="/api")
app.include_router(reviews.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Beletu AI Resume Reviewer API"}
