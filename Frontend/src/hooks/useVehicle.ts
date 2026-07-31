import { useAppSelector } from "../redux/hooks";

export default function useVehicles() {
  return useAppSelector(
    (state) => state.vehicle
  );
}