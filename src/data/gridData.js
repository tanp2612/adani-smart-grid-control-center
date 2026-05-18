export const liveStats = [
  { label: "Grid Frequency", value: "49.98 Hz", status: "Stable" },
  { label: "Current Demand", value: "7,840 MW", status: "High" },
  { label: "Supply Available", value: "8,120 MW", status: "Normal" },
  { label: "Active Outages", value: "14", status: "Attention" },
];

export const zoneLoads = [
  { zone: "Mumbai Central", load: 88, status: "Heavy Load" },
  { zone: "Andheri", load: 74, status: "Moderate" },
  { zone: "Bandra", load: 61, status: "Normal" },
  { zone: "Navi Mumbai", load: 79, status: "Moderate" },
  { zone: "Thane", load: 92, status: "Critical" },
];

export const demandSupplyData = [
  { time: "08 AM", demand: 5200, supply: 6100 },
  { time: "10 AM", demand: 6100, supply: 6800 },
  { time: "12 PM", demand: 6900, supply: 7200 },
  { time: "02 PM", demand: 7350, supply: 7600 },
  { time: "04 PM", demand: 7840, supply: 8120 },
  { time: "06 PM", demand: 8200, supply: 8350 },
];

export const outages = [
  {
    area: "Thane West",
    issue: "Transformer overload detected",
    priority: "Critical",
    eta: "28 min",
    team: "Team Alpha",
    affectedConsumers: "1,240",
    steps: [
      "Isolate overloaded transformer section",
      "Dispatch technician team for thermal inspection",
      "Reroute supply through alternate feeder",
      "Notify affected consumers through SMS alert",
      "Restore load gradually after safety clearance",
    ],
  },
  {
    area: "Andheri East",
    issue: "Feeder fluctuation reported",
    priority: "High",
    eta: "42 min",
    team: "Team Delta",
    affectedConsumers: "860",
    steps: [
      "Check feeder voltage variation logs",
      "Inspect local distribution node",
      "Balance load across nearby feeder lines",
      "Monitor frequency stability for 15 minutes",
      "Close ticket after stable supply confirmation",
    ],
  },
  {
    area: "Bandra",
    issue: "Voltage drop complaint cluster",
    priority: "Medium",
    eta: "1 hr",
    team: "Team Sigma",
    affectedConsumers: "420",
    steps: [
      "Review complaint cluster location",
      "Identify affected transformer zone",
      "Inspect meter and voltage reading anomalies",
      "Adjust load distribution if required",
      "Update complaint queue with resolution status",
    ],
  },
];

export const feeders = [
  { name: "FD-102", health: 92, zone: "Mumbai Central" },
  { name: "FD-118", health: 76, zone: "Andheri" },
  { name: "FD-209", health: 58, zone: "Thane" },
  { name: "FD-301", health: 84, zone: "Bandra" },
];

export const dispatchTeams = [
  { team: "Team Alpha", location: "Thane West", task: "Transformer check" },
  { team: "Team Delta", location: "Andheri East", task: "Feeder inspection" },
  { team: "Team Sigma", location: "Bandra", task: "Voltage complaint" },
];

export const complaints = [
  { id: "CMP-2041", type: "Power cut", area: "Thane", status: "Assigned" },
  { id: "CMP-2042", type: "Low voltage", area: "Bandra", status: "Open" },
  { id: "CMP-2043", type: "Meter issue", area: "Andheri", status: "In Review" },
];