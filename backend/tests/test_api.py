import pytest
from fastapi.testclient import TestClient
from unittest.mock import AsyncMock, patch
from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True

def test_upload_unsupported_file():
    import io
    file_content = io.BytesIO(b"test content")
    response = client.post(
        "/api/resumes/upload",
        files={"file": ("test.txt", file_content, "text/plain")}
    )
    assert response.status_code == 400

def test_get_nonexistent_resume():
    response = client.get("/api/resumes/nonexistent-id")
    assert response.status_code == 404

def test_delete_nonexistent_resume():
    response = client.delete("/api/resumes/nonexistent-id")
    assert response.status_code == 404

@pytest.mark.asyncio
async def test_review_nonexistent_resume():
    response = client.post(
        "/api/resumes/nonexistent-id/review",
        json={"target_role": None, "job_description": None}
    )
    assert response.status_code == 404
