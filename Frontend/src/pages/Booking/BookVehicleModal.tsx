import { Button, DatePicker, Form, Modal, message } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { createBooking, CreateBookingRequest } from "../../api/booking.api";

const { RangePicker } = DatePicker;

interface Props {
  open: boolean;
  vehicleId: string;
  onClose: () => void;
  onSuccess: () => void;
}

const BookVehicleModal = ({ open, vehicleId, onClose, onSuccess }: Props) => {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);

      const payload: CreateBookingRequest = {
        vehicleId,
        startDate: values.dates[0].format("YYYY-MM-DD"),
        endDate: values.dates[1].format("YYYY-MM-DD"),
      };

      await createBooking(payload);

      message.success("Booking created successfully");

      form.resetFields();

      onSuccess();

      onClose();
    } catch (error: any) {
      message.error(error.response?.data?.message ?? "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Book Vehicle"
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Booking Dates"
          name="dates"
          rules={[
            {
              required: true,
              message: "Select booking dates",
            },
          ]}
        >
          <RangePicker className="w-full" minDate={dayjs()} />
        </Form.Item>

        <Button htmlType="submit" type="primary" block loading={loading}>
          Confirm Booking
        </Button>
      </Form>
    </Modal>
  );
};

export default BookVehicleModal;
