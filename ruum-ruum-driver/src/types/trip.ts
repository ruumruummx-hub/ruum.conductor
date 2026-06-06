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
  | "pickup_evidence"
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