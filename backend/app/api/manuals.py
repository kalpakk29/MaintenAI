from pathlib import Path

from fastapi import APIRouter

router = APIRouter()

BASE_DIR = Path(__file__).resolve().parent.parent
UPLOAD_DIR = BASE_DIR / "uploads"


@router.get("/manuals")
def get_manuals():

    manuals = []

    for pdf in UPLOAD_DIR.glob("*.pdf"):

        manuals.append(
            {
                "name": pdf.name,
                "size": round(pdf.stat().st_size / 1024, 1),
            }
        )

    return manuals