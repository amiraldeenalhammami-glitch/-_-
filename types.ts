
export interface RouteInfo {
  id: string;
  name: string;
  description: string;
  importance: string;
}

export interface Era {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  color: string;
  description: string;
  mapUrl?: string;
  lane?: number; // Added to handle overlapping visual layers
}

export interface Station {
  id: string;
  name: string;
  description: string;
  coords: { lat: number; lng: number };
}

export interface HajjStats {
  century: string;
  count: number;
}
