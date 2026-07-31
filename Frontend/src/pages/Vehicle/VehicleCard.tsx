import React from "react";
import { Card, Tag, Button } from "antd";
import { Vehicle } from "../../redux/vehicle/vehicleTypes";

interface Props {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: Props) => {
  return (
    <Card
      hoverable
      cover={
        <img
          src={vehicle.image}
          className="h-52 object-cover"
          alt={vehicle.name}
        />
      }
    >
      <h2 className="text-lg font-bold">{vehicle.name}</h2>

      <p>
        {vehicle.brand} {vehicle.model}
      </p>

      <Tag color="blue">{vehicle.type}</Tag>

      <h3 className="mt-3 text-xl font-bold">₹{vehicle.rentPerDay}/day</h3>

      <Button type="primary" className="mt-4 w-full">
        View Details
      </Button>
    </Card>
  );
};

export default React.memo(VehicleCard);
