from dotenv import load_dotenv

# Load environment variables before anything else
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import app.api.upload as upload
import app.api.manuals as manuals
import app.api.chat as chat
import app.api.machines as machines

from app.database.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="MaintenAI API",
    version="2.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload.router)
app.include_router(manuals.router)
app.include_router(chat.router)
app.include_router(machines.router)


@app.get("/")
def root():
    return {
        "message": "MaintenAI Backend Running 🚀"
    }