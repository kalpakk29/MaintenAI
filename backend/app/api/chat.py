from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database import crud

from app.rag.retriever import retrieve
from app.services.gemini_service import ask_gemini

router = APIRouter()


@router.get("/chat")
def chat(
    machine_id: int,
    question: str,
    db: Session = Depends(get_db),
):

    context = retrieve(question)

    ai = ask_gemini(
        question,
        context,
    )

    crud.update_machine_ai(
        db=db,
        machine_id=machine_id,
        status=ai["status"],
        health_score=ai["health_score"],
        diagnosis=ai["diagnosis"],
        recommendation=ai["recommendation"],
    )

    return ai