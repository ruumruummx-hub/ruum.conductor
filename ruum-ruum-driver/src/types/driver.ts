export type DriverAvailability = "available" | "unavailable" | "on_trip" | "paused";

export type Driver = {
  id: string;
  name: string;
  email: string;
  phone: string;
  availability: DriverAvailability;
};
