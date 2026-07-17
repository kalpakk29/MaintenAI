import os
from pathlib import Path

import fitz


def extract_text(pdf_path: Path) -> str:
    """
    Extract text from a PDF.

    1. Try normal PyMuPDF extraction.
    2. If the PDF is scanned, try OCR.
    3. If OCR dependencies are unavailable, fail gracefully.
    """

    document = fitz.open(pdf_path)

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    # Searchable PDF
    if len(text.strip()) > 100:
        print("✅ Text PDF detected.")
        return text

    print("⚠️ Scanned PDF detected. Attempting OCR...")

    try:
        from pdf2image import convert_from_path
        import pytesseract

        # Windows development machine
        if os.name == "nt":
            pytesseract.pytesseract.tesseract_cmd = (
                r"C:\Program Files\Tesseract-OCR\tesseract.exe"
            )

            poppler_path = r"D:\poppler-26.02.0\Library\bin"

            images = convert_from_path(
                str(pdf_path),
                poppler_path=poppler_path,
                dpi=300,
            )

        # Linux (Render)
        else:
            images = convert_from_path(
                str(pdf_path),
                dpi=300,
            )

        ocr_text = ""

        for i, image in enumerate(images):
            print(f"OCR Page {i + 1}/{len(images)}")

            page_text = pytesseract.image_to_string(
                image,
                lang="eng",
            )

            ocr_text += page_text + "\n"

        print(f"✅ OCR Complete. Characters: {len(ocr_text)}")

        return ocr_text

    except Exception as e:
        print(f"⚠️ OCR unavailable: {e}")
        print("Returning extracted text only.")

        return text