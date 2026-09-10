import React, { useEffect, useState } from "react";
import API from "../../../api/axiosConfig";
import "./YourReservation.css";

function YourReservation() {

  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const customerId = localStorage.getItem("userId");

    if (!customerId) {
      setLoading(false);
      return;
    }

    const fetchReservation = async () => {

      try {

        const response = await API.get(
          `/reservations/customer/${customerId}`
        );

        console.log(
          "CUSTOMER RESERVATIONS:",
          response.data
        );

        // Show the latest reservation
        if (response.data && response.data.length > 0) {

          const latestReservation =
            response.data[response.data.length - 1];

          setReservation(latestReservation);

        }

      } catch (error) {

        console.error(
          "RESERVATION FETCH ERROR:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchReservation();

  }, []);

  if (loading) {
    return (
      <div className="your-reservation-box">
        <h2>🍽️ YOUR RESERVATION</h2>
        <p>Loading reservation...</p>
      </div>
    );
  }

  if (!reservation) {
    return (
      <div className="your-reservation-box">
        <h2>🍽️ YOUR RESERVATION</h2>

        <p className="no-reservation">
          You don't have any reservations yet.
        </p>
      </div>
    );
  }

  return (

    <div className="your-reservation-box">

      <h2>🍽️ YOUR RESERVATION</h2>

      <div className="reservation-details">

        <div className="reservation-row">
          <span>👤 Name</span>
          <strong>{reservation.customerName}</strong>
        </div>

        <div className="reservation-row">
          <span>📅 Date</span>
          <strong>{reservation.reservationDate}</strong>
        </div>

        <div className="reservation-row">
          <span>🕐 Time</span>
          <strong>{reservation.reservationTime}</strong>
        </div>

        <div className="reservation-row">
          <span>👥 Guests</span>
          <strong>{reservation.guests}</strong>
        </div>

        <div className="reservation-row">
          <span>📱 Phone</span>
          <strong>{reservation.phone}</strong>
        </div>

        <div className="reservation-row">
          <span>📧 Email</span>
          <strong>{reservation.email}</strong>
        </div>

        <div className="reservation-status">
          <span>Status</span>

          <strong>
            🟡 {reservation.status}
          </strong>
        </div>

      </div>

    </div>

  );
}

export default YourReservation;