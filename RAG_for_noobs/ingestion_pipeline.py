import os

from langchain_community.document_loaders import TextLoader, DirectoryLoader # for text loading
from langchain_text_splitters import CharacterTextSplitter # for text splitting
from langchain_openai import OpenAIEmbeddings # connecting openAI embeddings for vectors
from langchain_chroma import Chroma # for storing the vectors in vectorDB
from dotenv import load_dotenv # to store secrets

load_dotenv()

def load_documents(docs_path = "docs"):
    print(f"Loading documents from {docs_path}...")

    

def main():
    print("Main Function")

    #1. Loading the files
    
    #2. Chunking the files
    #3. Embedding and Storing in Vector DB

if __name__ == "__main__":
    main()