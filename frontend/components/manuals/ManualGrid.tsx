"use client";

import {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";

import ManualCard from "./ManualCard";
import { getManuals } from "@/lib/api";

interface Manual {
  name: string;
  size: number;
}

const ManualGrid = forwardRef(function ManualGrid(_, ref) {

  const [manuals, setManuals] = useState<Manual[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadManuals() {

    try {

      const data = await getManuals();

      setManuals(data);

    } finally {

      setLoading(false);

    }

  }

  useImperativeHandle(ref, () => ({
    refresh: loadManuals,
  }));

  useEffect(() => {
    loadManuals();
  }, []);

  if (loading) {
    return (
      <p className="text-slate-400">
        Loading manuals...
      </p>
    );
  }

  if (manuals.length === 0) {
    return (
      <p className="text-slate-500">
        No manuals uploaded yet.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {manuals.map((manual) => (
        <ManualCard
          key={manual.name}
          name={manual.name}
          size={manual.size}
        />
      ))}

    </div>
  );

});

export default ManualGrid;