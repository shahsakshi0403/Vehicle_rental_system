import {
  Card,
  Col,
  Row,
  Statistic,
  Table,
  Tag,
  Typography,
  message,
} from "antd";
import {
  CalendarOutlined,
  CarOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getMyBookings } from "../../api/booking.api";
import Loader from "../../components/common/Loader";

const { Title } = Typography;

const Dashboard = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadBookings = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getMyBookings();

      setBookings(response.data.data);
    } catch (error: any) {
      message.error(
        error.response?.data?.message || "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBookings();
  }, [loadBookings]);

  const bookingCount = useMemo(() => bookings.length, [bookings]);

  const totalSpent = useMemo(
    () => bookings.reduce((sum, booking) => sum + booking.totalPrice, 0),
    [bookings]
  );

  const activeBookings = useMemo(
    () => bookings.filter((booking) => booking.status === "Booked").length,
    [bookings]
  );

  const cancelBookings = useMemo(
    () => bookings.filter((booking) => booking.status !== "Booked").length,
    [bookings]
  );

  if (loading) return <Loader />;

  return (
    <div>
      <Title level={2}>Dashboard</Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title="Total Bookings"
              value={bookingCount}
              prefix={<CalendarOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title="Total Spent"
              value={totalSpent}
              prefix={<DollarOutlined />}
              precision={2}
            />
          </Card>
        </Col>

        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title="Active Bookings"
              value={activeBookings}
              prefix={<CarOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title="Cancel Bookings"
              value={cancelBookings}
              prefix={<CarOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
