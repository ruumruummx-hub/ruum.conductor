import type { Trip } from "@/types/trip";

export const trips: Trip[] = [
  {
    id: "TRP-001",
    client: "Kavak",
    status: "accepted",
    estimatedPayment: 2450,
    date: "12 Jun 2026",
    time: "10:30 AM",
    segments: [
      {
        id: "SEG-001",
        sequence: 1,
        origin: "Kavak Lerma",
        destination: "Kavak Pedregal",
        vehicle: "Jetta 2023",
        status: "on_way_to_pickup",
      },
      {
        id: "SEG-002",
        sequence: 2,
        origin: "Kavak Interlomas",
        destination: "Kavak Satélite",
        vehicle: "Versa 2022",
        status: "pending",
      },
    ],
  },
  {
    id: "TRP-002",
    client: "Agencia Toyota",
    status: "offered",
    estimatedPayment: 1250,
    date: "13 Jun 2026",
    time: "09:00 AM",
    segments: [
      {
        id: "SEG-003",
        sequence: 1,
        origin: "Toyota Metepec",
        destination: "Santa Fe",
        vehicle: "Corolla 2024",
        status: "pending",
      },
    ],
  },
];
