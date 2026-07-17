from sqlalchemy import Column
from sqlalchemy import Float
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.database import Base


class Machine(Base):
    __tablename__ = "machines"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)
    manufacturer = Column(String)
    model = Column(String)

    serial_number = Column(String)

    location = Column(String)

    manual = Column(String)

    ai_status = Column(String, default="Unknown")

    health_score = Column(Float, default=0)

    diagnosis = Column(String, default="")

    recommendation = Column(String, default="")