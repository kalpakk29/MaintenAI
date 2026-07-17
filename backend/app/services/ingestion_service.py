from pathlib import Path
import shutil

from fastapi import UploadFile, HTTPException

from app.services.pdf_service import extract_text
from app.services.chunk_service import chunk_text
from app.services.embedding_service import create_embeddings
from app.services.rag_service import store_embeddings

BASE_DIR = Path(__file__).resolve().parent.parent
UPLOAD_DIR = BASE_DIR / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


def ingest_pdf(file: UploadFile):
    try:
        print("\n========== START UPLOAD ==========")

        file_path = UPLOAD_DIR / file.filename

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        print("✅ File saved")

        extracted_text = extract_text(file_path)

        print("Characters:", len(extracted_text))

        if len(extracted_text.strip()) == 0:
            raise HTTPException(
                status_code=400,
                detail="No text could be extracted from this PDF."
            )

        chunks = chunk_text(extracted_text)

        print("Chunks:", len(chunks))

        embeddings = create_embeddings(chunks)

        print("Embeddings:", len(embeddings))

        store_embeddings(
            chunks=chunks,
            embeddings=embeddings,
            filename=file.filename,
        )

        print("✅ Stored in ChromaDB")

        return {
            "filename": file.filename,
            "characters": len(extracted_text),
            "chunks": len(chunks),
            "embeddings": len(embeddings),
            "dimension": len(embeddings[0]),
        }

    except Exception as e:
        print("❌ ERROR:", repr(e))
        raise