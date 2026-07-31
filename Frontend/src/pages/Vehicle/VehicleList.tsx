import { useCallback, useEffect, useMemo, useState } from "react";
import { message } from "antd";

import EmptyState from "../../components/common/EmptyState";

import useDebounce from "../../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  setLoading,
  setVehicleError,
  setVehicles,
} from "../../redux/vehicle/vehicleSlice";

import { getVehicles } from "../../api/vehicle.api";
import SearchBar from "./VehicleSearchBar";
import VehicleFilter from "./VehicleFilter";
import VehicleGrid from "./VehicleGrid";
import Loader from "../../components/common/Loader";
import BookVehicleModal from "../Booking/BookVehicleModal";

const VehicleList = () => {
  const dispatch = useAppDispatch();
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");

  const [openBookingModal, setOpenBookingModal] = useState<boolean>(false);

  const { vehicles, loading } = useAppSelector((state) => state.vehicle);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const loadVehicles = useCallback(async () => {
    try {
      dispatch(setLoading(true));

      const response = await getVehicles({
        page: 1,
        limit: 10,
        search: debouncedSearch,
        type,
      });

      dispatch(
        setVehicles({
          vehicles: response.data.data.vehicles,
          pagination: response.data.pagination,
        })
      );
    } catch (error: any) {
      dispatch(
        setVehicleError(
          error.response?.data?.message || "Failed to load vehicles"
        )
      );

      message.error(error.response?.data?.message || "Failed to load vehicles");
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, debouncedSearch, type]);

  useEffect(() => {
    loadVehicles();
  }, [loadVehicles]);

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleType = useCallback((value: string) => {
    setType(value);
  }, []);

  const handleBook = useCallback((id: string) => {
    setSelectedVehicle(id);
    setOpenBookingModal(true);
  }, []);

  const filteredVehicles = useMemo(() => {
    return vehicles || [];
  }, [vehicles]);

  return (
    <>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SearchBar value={search} onChange={handleSearch} />

          <VehicleFilter value={type} onChange={handleType} />
        </div>

        {loading ? (
          <Loader />
        ) : filteredVehicles.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleGrid vehicle={vehicle} onBook={handleBook} />
            ))}
          </div>
        )}
      </div>

      <BookVehicleModal
        open={openBookingModal}
        vehicleId={selectedVehicle}
        onClose={() => setOpenBookingModal(false)}
        onSuccess={loadVehicles}
      />
    </>
  );
};

export default VehicleList;
