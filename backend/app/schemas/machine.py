from pydantic import BaseModel


class MachineCreate(BaseModel):
    name: str
    manufacturer: str
    model: str
    serial_number: str
    location: str
    manual: str


class MachineUpdate(BaseModel):
    name: str
    manufacturer: str
    model: str
    serial_number: str
    location: str
    manual: str


class MachineResponse(BaseModel):
    id: int
    name: str
    manufacturer: str
    model: str
    serial_number: str
    location: str
    manual: str

    ai_status: str
    health_score: float
    diagnosis: str
    recommendation: str

    class Config:
        from_attributes = True