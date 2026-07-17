"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getMachines,
  createMachine,
  updateMachine,
  deleteMachine,
} from "@/lib/api";

export interface Machine {
  id: number;

  name: string;
  manufacturer: string;
  model: string;
  serial_number: string;
  location: string;
  manual: string;

  ai_status: string;
  health_score: number;
  diagnosis: string;
  recommendation: string;
}

interface ContextType {
  machines: Machine[];

  addMachine(machine: any): Promise<void>;

  editMachine(
    id: number,
    machine: any
  ): Promise<void>;

  removeMachine(id: number): Promise<void>;

  refreshMachines(): Promise<void>;
}

const MachineContext = createContext<ContextType>(null!);

export function MachineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [machines, setMachines] = useState<Machine[]>([]);

  async function refreshMachines() {
    const data = await getMachines();

    setMachines(data);
  }

  async function addMachine(machine: any) {
    await createMachine(machine);

    await refreshMachines();
  }

  async function editMachine(
    id: number,
    machine: any
  ) {
    await updateMachine(id, machine);

    await refreshMachines();
  }

  async function removeMachine(id: number) {
    await deleteMachine(id);

    await refreshMachines();
  }

  useEffect(() => {
    refreshMachines();
  }, []);

  return (
    <MachineContext.Provider
      value={{
        machines,
        addMachine,
        editMachine,
        removeMachine,
        refreshMachines,
      }}
    >
      {children}
    </MachineContext.Provider>
  );
}

export function useMachines() {
  return useContext(MachineContext);
}