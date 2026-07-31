import { useCallback, useEffect, useState } from "react";

import { message, Typography } from "antd";

import { cancelBooking, getMyBookings } from "../../api/booking.api";
import EmptyState from "../../components/common/EmptyState";
import BookingTable from "./BookingTable";
import Loader from "../../components/common/Loader";

const { Title } = Typography;

const MyBookings = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const loadBookings = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getMyBookings();

      setBookings(response.data.data);
    } catch (error: any) {
      message.error(error.response?.data?.message ?? "Failed to load bookings");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBookings();
  }, [loadBookings]);

  const handleCancel = useCallback(
    async (id: string) => {
      try {
        await cancelBooking(id);

        message.success("Booking cancelled successfully");

        loadBookings();
      } catch (error: any) {
        message.error(
          error.response?.data?.message ?? "Unable to cancel booking"
        );
      }
    },
    [loadBookings]
  );

  if (loading && bookings.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <Title level={3}>My Bookings</Title>

      {bookings.length === 0 ? (
        <EmptyState />
      ) : (
        <BookingTable
          bookings={bookings}
          loading={loading}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default MyBookings;
