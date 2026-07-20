# MaintenAI

> AI-Powered Industrial Maintenance Platform

MaintenAI is an AI-powered maintenance platform that helps industries manage machines, upload equipment manuals, and interact with an intelligent maintenance assistant. It combines document understanding, machine management, and AI to simplify industrial maintenance workflows.

Built for the **Flowzint AI Hackathon 2026**.

---

## Features

- AI Maintenance Assistant
  - Ask maintenance-related questions in natural language.
  - AI generates maintenance guidance using uploaded manuals.

- Manual Management
  - Upload PDF maintenance manuals.
  - OCR support for scanned documents.
  - Store and organize technical documentation.

- Machine Management
  - Add, edit, and delete machines.
  - Store machine details including:
    - Manufacturer
    - Model
    - Serial Number
    - Location
    - Linked Manual

- Dashboard
  - Overview of industrial assets.
  - Machine statistics.
  - Enterprise-style interface.

- Reports
  - Centralized report section for maintenance records.

- Cloud Deployment
  - Frontend deployed on Railway.
  - Backend deployed on Railway.

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- FastAPI
- SQLAlchemy
- SQLite

### AI & RAG

- Google Gemini API
- Sentence Transformers
- ChromaDB
- Tesseract OCR

### Deployment

- Railway
- GitHub

## Installation

### Clone the Repository

```bash
git clone https://github.com/kalpakk29/MaintenAI.git

cd MaintenAI
```

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Live Demo

https://maintenai-production-4923.up.railway.app

---

## Project Structure

```text
MaintenAI
│
├── backend
│   ├── api
│   ├── database
│   ├── models
│   ├── services
│   └── rag
│
├── frontend
│   ├── app
│   ├── components
│   ├── contexts
│   └── lib
│
└── README.md
```

---

## Future Improvements

- Authentication & User Management
- Predictive Maintenance using Sensor Data
- AI-generated Maintenance Reports
- Multi-user Workspaces
- IoT Integration
- Failure Prediction Models
- Maintenance Scheduling
- Analytics Dashboard

---

## Developer

**Kalpak Kulkarni**

GitHub:  
https://github.com/kalpakk29

LinkedIn:  
www.linkedin.com/in/kalpak-kulkarni-890338415

---

## License

This project was developed for educational purposes and the Flowzint AI Hackathon 2026.
