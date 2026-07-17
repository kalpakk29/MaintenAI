from fastapi import APIRouter

from app.rag.retriever import retrieve
from app.services.gemini_service import ask_gemini

router = APIRouter()


@router.get("/chat")
def chat(question: str):

    context = retrieve(question)

    answer = ask_gemini(
        question=question,
        context=context,
    )

    return {
        "question": question,
        "answer": answer,
    }