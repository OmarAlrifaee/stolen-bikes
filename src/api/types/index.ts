export interface IBike {
  date_stolen: number;
  description?: string;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img?: string;
  location_found?: string;
  manufacturer_name: string;
  external_id?: number;
  registry_name?: string;
  registry_url?: string;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: number[];
  stolen_location: string;
  thumb?: string;
  title: string;
  url: string;
  year?: unknown;
  propulsion_type_slug: string;
  cycle_type_slug: string;
}
export interface IDataCount {
  non: number;
  stolen: number;
  proximity: number;
}
export interface ApiResponse<T, T2> {
  data: T;
  meta: T2;
}