from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
# ... import database logic lainnya

app = FastAPI()

@app.get("/tasks", response_model=list[TaskResponse])
def get_tasks(db: Session = Depends(get_db)):
    return db.query(Task).order_by(Task.deadline.asc()).all()

@app.post("/tasks")
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    new_task = Task(**task.dict())
    db.add(new_task)
    db.commit()
    return new_task