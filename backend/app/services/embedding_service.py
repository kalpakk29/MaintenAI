from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")


def create_embeddings(chunks):
    """
    Generate embeddings for a list of chunks.
    """

    embeddings = model.encode(chunks)

    return embeddings