# Beletu - AI Resume Reviewer

AI-powered resume review system that provides detailed, evidence-based feedback.

## Features

- PDF and DOCX resume upload
- AI-powered comprehensive review
- ATS compatibility analysis
- Skills and experience evaluation
- Bullet point review with suggestions
- Target job matching
- Priority-based recommendations

## Tech Stack

- **Backend**: Python + FastAPI
- **Frontend**: React + Vite + Tailwind CSS
- **AI**: OpenAI API (configurable)

## Setup

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Add your OPENAI_API_KEY to .env
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Documentation

Once the backend is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Environment Variables

### Backend (.env)

```
APP_ENV=development
FRONTEND_URL=http://localhost:5173
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4
MAX_FILE_SIZE_MB=10
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:8000/api
```

## License

MIT
