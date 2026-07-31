import React from "react";
import { Button, Card, Tag } from "antd";
import { Vehicle } from "../../redux/vehicle/vehicleTypes";

interface Props {
  vehicle: Vehicle;
  onBook: (id: string) => void;
}

const VehicleCard = ({ vehicle, onBook }: Props) => {
  return (
    <Card
      hoverable
      cover={
        <img
          src={vehicle.image ?? "https://placehold.co/600x400?text=Vehicle"}
          alt={vehicle.name}
          className="h-52 object-cover"
        />
      }
    >
      <h2 className="text-lg font-bold">{vehicle.name}</h2>

      <p>
        {vehicle.brand} {vehicle.model}
      </p>

      <Tag color="blue">{vehicle.type}</Tag>

      <h3 className="mt-3 text-xl font-bold">₹{vehicle.rentPerDay}/day</h3>

      <Button
        className="mt-4 w-full"
        type="primary"
        onClick={() => onBook(vehicle._id)}
      >
        Book Now
      </Button>
    </Card>
  );
};

export default React.memo(VehicleCard);
