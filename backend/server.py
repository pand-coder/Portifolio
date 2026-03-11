from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime, timezone

app = FastAPI()
api_router = APIRouter(prefix="/api")

# -----------------------------
# In-memory storage (no DB)
# -----------------------------
status_checks_db = []

# -----------------------------
# Models
# -----------------------------
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


# -----------------------------
# Routes
# -----------------------------
@api_router.get("/")
async def root():
    return {"message": "Portfolio API running successfully"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(client_name=input.client_name)
    status_checks_db.append(status_obj)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    return status_checks_db


# -----------------------------
# Include Router
# -----------------------------
app.include_router(api_router)


# -----------------------------
# CORS Configuration
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[        
        "https://pand-coder.github.io"   
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)
