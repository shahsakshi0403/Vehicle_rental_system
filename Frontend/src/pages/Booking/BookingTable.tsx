import { Button, Popconfirm, Table, Tag } from "antd";

interface Props {
  bookings: any[];
  loading: boolean;
  onCancel: (id: string) => void;
}

const BookingTable = ({ bookings, loading, onCancel }: Props) => {
  const columns = [
    {
      title: "Vehicle",
      render: (_: any, record: any) => record.vehicle.name,
    },
    {
      title: "Brand",
      render: (_: any, record: any) => record.vehicle.brand,
    },
    {
      title: "Model",
      render: (_: any, record: any) => record.vehicle.model,
    },
    {
      title: "Type",
      render: (_: any, record: any) => record.vehicle.type,
    },
    {
      title: "Rent / Day",
      render: (_: any, record: any) => `₹${record.vehicle.rentPerDay}`,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Days",
      dataIndex: "totalDays",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      render: (price: number) => `₹${price}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Booked" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Popconfirm
          title="Cancel Booking"
          description="Are you sure you want to cancel this booking?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => onCancel(record._id)}
        >
          <Button danger disabled={record.status !== "Booked"}>
            Cancel
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Table
      rowKey="_id"
      loading={loading}
      columns={columns}
      dataSource={bookings}
      pagination={{
        pageSize: 5,
      }}
    />
  );
};

export default BookingTable;
