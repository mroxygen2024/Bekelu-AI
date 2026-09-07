from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import health, resumes, reviews
from app.core.config import settings

app = FastAPI(
    title="Biiftuu - AI Resume Reviewer",
    description="AI-powered resume review system",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[url.strip() for url in settings.FRONTEND_URL.split(",") if url.strip()],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")
app.include_router(resumes.router, prefix="/api")
app.include_router(reviews.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Biiftuu AI Resume Reviewer API"}
