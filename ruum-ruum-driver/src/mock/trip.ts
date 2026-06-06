export const trips = [
  {
    id: "TRP-001",
    client: "Kavak",
    status: "accepted",
    estimatedPayment: 2450,
    date: "12 Jun",
    time: "09:30",
    segments: [
      {
        id: "SEG-001",
        sequence: 1,
        origin: "CDMX",
        destination: "Guadalajara",
        vehicle: "Toyota Prius",
        status: "in_transit",
      },
      {
        id: "SEG-002",
        sequence: 2,
        origin: "Guadalajara",
        destination: "Zapopan",
        vehicle: "Toyota Prius",
        status: "pending",
      },
    ],
  },
];