export type TripStatus =
  | "offered"
  | "accepted"
  | "in_progress"
  | "under_review"
  | "completed"
  | "rejected"
  | "cancelled";

export type SegmentStatus =
  | "pending"
  | "on_way_to_pickup"
  | "arrived_pickup"
  | "locating_vehicle"
  | "vehicle_found"
  | "pickup_evidence"
  | "ready_for_transfer"
  | "in_transit"
  | "arrived_destination"
  | "delivery_evidence"
  | "completed"
  | "failed";

export type Segment = {
  id: string;
  sequence: number;
  origin: string;
  destination: string;
  vehicle: string;
  status: SegmentStatus;
};

export type Trip = {
  id: string;
  client: string;
  status: TripStatus;
  estimatedPayment: number;
  date: string;
  time: string;
  segments: Segment[];
};

export const tripStatusLabels: Record<TripStatus, string> = {
  offered: "Oferta",
  accepted: "Aceptado",
  in_progress: "En curso",
  under_review: "En revisión",
  completed: "Completado",
  rejected: "Rechazado",
  cancelled: "Cancelado",
};
