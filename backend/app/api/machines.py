from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database import crud

from app.schemas.machine import (
    MachineCreate,
    MachineUpdate,
)

router = APIRouter()


@router.get("/machines")
def get_machines(
    db: Session = Depends(get_db),
):
    return crud.get_machines(db)


@router.post("/machines")
def create_machine(
    machine: MachineCreate,
    db: Session = Depends(get_db),
):
    return crud.create_machine(db, machine)


@router.put("/machines/{machine_id}")
def update_machine(
    machine_id: int,
    machine: MachineUpdate,
    db: Session = Depends(get_db),
):
    return crud.update_machine(
        db=db,
        machine_id=machine_id,
        updated_machine=machine,
    )


@router.delete("/machines/{machine_id}")
def delete_machine(
    machine_id: int,
    db: Session = Depends(get_db),
):
    crud.delete_machine(
        db,
        machine_id,
    )

    return {
        "success": True,
    }