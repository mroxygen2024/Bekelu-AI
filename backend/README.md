# Biiftuu Backend

AI Resume Reviewer backend built with FastAPI.

## Setup

1. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Copy .env.example to .env and configure:
```bash
cp .env.example .env
```

4. Run the server:
```bash
uvicorn app.main:app --reload
```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/resumes/upload` - Upload resume
- `GET /api/resumes/{id}` - Get resume
- `DELETE /api/resumes/{id}` - Delete resume
- `POST /api/resumes/{id}/review` - Review resume

## Testing

```bash
pytest
```
