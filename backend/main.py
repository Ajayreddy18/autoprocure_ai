from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agent import generate_rfq, generate_followup

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For stricter security, use ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RFQRequest(BaseModel):
    product: str
    quantity: int

class FollowupRequest(BaseModel):
    product: str

@app.post("/generate-rfq")
async def create_rfq(request: RFQRequest):
    rfq_text = generate_rfq(request.product, request.quantity)
    return {"rfq": rfq_text}

@app.post("/generate-followup")
async def create_followup(request: FollowupRequest):
    followup_text = generate_followup(request.product)
    return {"followup": followup_text}