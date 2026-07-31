export interface Vehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  type: string;
  year: number;
  rentPerDay: number;
  image: string;
  description: string;
  available: boolean;
  popularity: number;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface VehicleState {
  vehicles: Vehicle[];
  loading: boolean;
  error: string | null;
  pagination: Pagination;
}
