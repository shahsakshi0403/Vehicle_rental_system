import { Input } from "antd";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <Input
      placeholder="Search vehicle..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      allowClear
      size="large"
    />
  );
};

export default SearchBar;
