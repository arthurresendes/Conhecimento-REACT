from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

alunos = [{"id":1, "name": "Arthur"},{"id": 2, "name": "Matheus"}, {"id": 3, "name": "Josias"}]

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/ver_alunos")
def ver_alunos():
    return {"alunos": alunos}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)