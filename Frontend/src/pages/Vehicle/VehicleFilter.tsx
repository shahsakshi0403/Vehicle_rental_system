import { Select } from "antd";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const VehicleFilter = ({ value, onChange }: Props) => {
  return (
    <Select
      className="w-full"
      value={value}
      placeholder="Vehicle Type"
      onChange={onChange}
      options={[
        { label: "All", value: "" },
        { label: "SUV", value: "SUV" },
        { label: "Car", value: "Car" },
        { label: "Bike", value: "Bike" },
      ]}
    />
  );
};

export default VehicleFilter;
