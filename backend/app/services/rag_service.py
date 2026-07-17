import chromadb

client = chromadb.PersistentClient(path="app/rag/chroma")

collection = client.get_or_create_collection(
    name="maintenance_manuals"
)


def store_embeddings(chunks, embeddings, filename):
    ids = []
    metadatas = []

    for i, chunk in enumerate(chunks):
        ids.append(f"{filename}_{i}")

        metadatas.append(
            {
                "source": filename,
                "chunk": i,
            }
        )

    collection.add(
        ids=ids,
        documents=chunks,
        embeddings=embeddings.tolist(),
        metadatas=metadatas,
    )