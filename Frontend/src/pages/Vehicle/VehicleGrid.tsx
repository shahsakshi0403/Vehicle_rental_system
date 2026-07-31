
import { Vehicle } from "../../redux/vehicle/vehicleTypes";
import VehicleCard from "./VehicleCard";

interface Props {
  vehicles: Vehicle[];
}

const VehicleGrid = ({ vehicles }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleGrid;
