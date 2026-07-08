const machines = [
  {
    name: "CNC Machine #12",
    status: "Healthy",
    health: "98%",
    temp: "39°C",
  },
  {
    name: "Hydraulic Pump",
    status: "Critical",
    health: "41%",
    temp: "82°C",
  },
  {
    name: "Conveyor Belt",
    status: "Warning",
    health: "69%",
    temp: "63°C",
  },
  {
    name: "Boiler Unit",
    status: "Healthy",
    health: "96%",
    temp: "41°C",
  },
];

export default function MachineTable() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Machine Status
      </h2>

      <table className="w-full">

        <thead className="text-left text-slate-400">

          <tr>
            <th className="pb-4">Machine</th>
            <th>Status</th>
            <th>Health</th>
            <th>Temp</th>
          </tr>

        </thead>

        <tbody>

          {machines.map((machine) => (
            <tr
              key={machine.name}
              className="border-t border-slate-800"
            >

              <td className="py-5 text-white">
                {machine.name}
              </td>

              <td>{machine.status}</td>

              <td>{machine.health}</td>

              <td>{machine.temp}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}