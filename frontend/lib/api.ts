const API_URL = "https://maintenai-production.up.railway.app";

// =====================
// MACHINES
// =====================

export async function getMachines() {
  const res = await fetch(`${API_URL}/machines`);

  if (!res.ok) {
    throw new Error("Failed to load machines");
  }

  return res.json();
}

export async function createMachine(machine: any) {
  const res = await fetch(`${API_URL}/machines`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(machine),
  });

  if (!res.ok) {
    throw new Error("Failed to create machine");
  }

  return res.json();
}

export async function updateMachine(
  id: number,
  machine: any
) {
  const res = await fetch(
    `${API_URL}/machines/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(machine),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update machine");
  }

  return res.json();
}

export async function deleteMachine(id: number) {
  const res = await fetch(`${API_URL}/machines/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete machine");
  }

  return res.json();
}

// =====================
// MANUALS
// =====================

export async function getManuals() {
  const res = await fetch(`${API_URL}/manuals`);

  if (!res.ok) {
    throw new Error("Failed to load manuals");
  }

  return res.json();
}

export async function uploadManual(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const res = await fetch(`${API_URL}/upload-manual`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to upload manual");
  }

  return res.json();
}

// =====================
// AI CHAT
// =====================

export async function askMaintenAI(
  machineId: number,
  question: string
) {
  const res = await fetch(
    `${API_URL}/chat?machine_id=${machineId}&question=${encodeURIComponent(question)}`
  );

  if (!res.ok) {
    throw new Error("Failed to contact AI");
  }

  return res.json();
}