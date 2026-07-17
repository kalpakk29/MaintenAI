import chromadb
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")

client = chromadb.PersistentClient(path="app/rag/chroma")

collection = client.get_collection(
    name="maintenance_manuals"
)


def retrieve(query: str, n_results: int = 5):

    query_embedding = model.encode(query)

    results = collection.query(
        query_embeddings=[query_embedding.tolist()],
        n_results=n_results,
    )

    documents = results["documents"][0]

    context = "\n\n".join(documents)

    return context