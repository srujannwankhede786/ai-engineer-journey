import os

from langchain_community.document_loaders import TextLoader, DirectoryLoader # for text loading
from langchain_text_splitters import CharacterTextSplitter # for text splitting
from langchain_openai import OpenAIEmbeddings # connecting openAI embeddings for vectors
from langchain_chroma import Chroma # for storing the vectors in vectorDB
from dotenv import load_dotenv # to store secrets

load_dotenv()

def load_documents(docs_path = "docs"):
    print(f"Loading documents from {docs_path}...")
    if not os.path.exists(docs_path):
        raise FileNotFoundError(f"The directory {docs_path} does not exist. Please create it and add your company files")
    
    documents = DirectoryLoader(path=docs_path, glob = "*.txt", loader_cls = TextLoader).load()
    if len(documents) == 0:
        raise FileNotFoundError(f"No .txt files found in {docs_path} path. Please add your company documents.")    
    
    print("TypeOfDocuments: ", type(documents))

    for i, doc in enumerate(documents[:2]):  # Show first 2 documents
        print(f"\nDocument {i+1}:")
        print(f"  Source: {doc.metadata['source']}")
        print(f"  Content length: {len(doc.page_content)} characters")
        print(f"  Content preview: {doc.page_content[:100]}...")
        print(f"  metadata: {doc.metadata}")

    return documents

def split_documents(documents):
    

def main():
    print("Main Function")

    #1. Loading the files
    documents = load_documents(docs_path = "docs")

    #2. Chunking the files
    chunks = split_documents(documents)

    #3. Embedding and Storing in Vector DB

if __name__ == "__main__":
    main()