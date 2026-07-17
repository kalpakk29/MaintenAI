import fitz
import pytesseract

from pathlib import Path
from pdf2image import convert_from_path

# Tell Tesseract exactly where it is
pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)

# Tell pdf2image exactly where Poppler is
POPPLER_PATH = r"D:\poppler-26.02.0\Library\bin"


def extract_text(pdf_path: Path) -> str:
    """
    Extract text from a PDF.

    1. Try normal PyMuPDF extraction.
    2. If little/no text is found, fall back to OCR.
    """

    document = fitz.open(pdf_path)

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    # Normal searchable PDF
    if len(text.strip()) > 100:
        print("✅ Text PDF detected.")
        return text

    print("⚠️ Scanned PDF detected. Running OCR...")

    images = convert_from_path(
        str(pdf_path),
        poppler_path=POPPLER_PATH,
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