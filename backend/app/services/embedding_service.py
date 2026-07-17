from sentence_transformers import SentenceTransformer

_model = None


def get_model():
    """
    Lazily load the embedding model only when it's first needed.
    """
    global _model

    if _model is None:
        print("Loading embedding model...")
        _model = SentenceTransformer("all-MiniLM-L6-v2")
        print("Embedding model loaded.")

    return _model


def create_embeddings(chunks):
    """
    Generate embeddings for a list of text chunks.
    """
    model = get_model()
    embeddings = model.encode(chunks)

    return embeddings