from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.ingestion_service import ingest_pdf

router = APIRouter()


@router.post("/upload-manual")
async def upload_manual(file: UploadFile = File(...)):
    try:
        result = ingest_pdf(file)

        return {
            "success": True,
            **result,
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )