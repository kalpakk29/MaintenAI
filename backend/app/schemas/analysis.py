from pydantic import BaseModel


class AnalysisUpdate(BaseModel):
    machine_id: int

    status: str

    health_score: float

    diagnosis: str

    recommendation: str