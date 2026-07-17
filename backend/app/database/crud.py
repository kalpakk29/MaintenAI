from sqlalchemy.orm import Session

from app.database.models import Machine


def get_machines(db: Session):
    return db.query(Machine).all()


def get_machine_by_id(
    db: Session,
    machine_id: int,
):
    return (
        db.query(Machine)
        .filter(Machine.id == machine_id)
        .first()
    )


def create_machine(db: Session, machine):

    db_machine = Machine(
        name=machine.name,
        manufacturer=machine.manufacturer,
        model=machine.model,
        serial_number=machine.serial_number,
        location=machine.location,
        manual=machine.manual,
    )

    db.add(db_machine)

    db.commit()

    db.refresh(db_machine)

    return db_machine


def update_machine(
    db: Session,
    machine_id: int,
    updated_machine,
):

    machine = (
        db.query(Machine)
        .filter(Machine.id == machine_id)
        .first()
    )

    if machine is None:
        return None

    machine.name = updated_machine.name
    machine.manufacturer = updated_machine.manufacturer
    machine.model = updated_machine.model
    machine.serial_number = updated_machine.serial_number
    machine.location = updated_machine.location
    machine.manual = updated_machine.manual

    db.commit()

    db.refresh(machine)

    return machine


def delete_machine(
    db: Session,
    machine_id: int,
):

    machine = (
        db.query(Machine)
        .filter(Machine.id == machine_id)
        .first()
    )

    if machine:
        db.delete(machine)
        db.commit()


def update_machine_ai(
    db: Session,
    machine_id: int,
    status: str,
    health_score: float,
    diagnosis: str,
    recommendation: str,
):

    machine = (
        db.query(Machine)
        .filter(Machine.id == machine_id)
        .first()
    )

    if machine is None:
        return None

    machine.ai_status = status
    machine.health_score = health_score
    machine.diagnosis = diagnosis
    machine.recommendation = recommendation

    db.commit()

    db.refresh(machine)

    return machine