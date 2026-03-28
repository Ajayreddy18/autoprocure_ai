AutoProcure AI – Autonomous Procurement Agent

AutoProcure AI is a functional prototype of an agentic supply chain tool designed to automate the manual overhead of Request for Quotation (RFQ) management. Built with a focus on reliability and autonomous decision-making, it mimics the core workflows of enterprise procurement teams.

 The Problem
Procurement teams spend 40% of their time manually following up with suppliers and tracking RFQ statuses. AutoProcure AI solves this by deploying an "Always-On" agent that handles the end-to-end communication lifecycle.

 Key Features
- **Autonomous RFQ Generation:** Uses a local LLM to generate professional, context-aware procurement emails based on product and quantity requirements.
- **Stateful Agent Memory:** Maintains a persistent state of all active RFQs, tracking timestamps and reply statuses.
- **Automated Follow-up Engine:** A decision-making agent that monitors supplier silence. If no reply is detected within a set threshold, the agent automatically crafts and triggers a follow-up.
- **State Control:** Integrated endpoints to mark RFQs as "Replied," instantly halting the autonomous follow-up loop.

 Tech Stack
- **Backend:** Python / FastAPI
- **AI Orchestration:** Ollama (TinyLlama) — *Privacy-first, local inference*
- **Architecture:** Asynchronous event-driven logic for follow-up checks.
- **API Documentation:** Interactive Swagger UI for rapid testing.

 Getting Started

 1. Prerequisites
* Install [Ollama](https://ollama.com/)
* Pull the model: `ollama pull tinyllama`

 2. Setup & Installation
```bash
# Clone the repository
git clone [https://github.com/Ajayreddy18/autoprocure-ai.git](https://github.com/Ajayreddy18/autoprocure-ai.git)
cd autoprocure-ai

# Set up virtual environment
python -m venv venv
source venv/bin/activate  # venv\Scripts\activate on Windows

# Install dependencies
pip install fastapi uvicorn requests pydantic
