import React, { useState } from "react";
import "./ReservationTable.css";
import API from "../../api/axiosConfig";

function ReservationTable() {

  const getCustomerData = () => ({
    customerId: localStorage.getItem("userId"),
    customerName: localStorage.getItem("fullName") || "",
    phone: localStorage.getItem("phone") || "",
    email: localStorage.getItem("email") || "",
  });

  const customer = getCustomerData();

  const [formData, setFormData] = useState({
    customerName: customer.customerName,
    phone: customer.phone,
    email: customer.email,
    reservationDate: "",
    reservationTime: "",
    guests: ""
  });

  const [message, setMessage] = useState("");

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));

  };

  // =====================================================
  // SUBMIT RESERVATION
  // =====================================================

  const handleSubmit = async (e) => {
  e.preventDefault();

  const customerId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  console.log("========== FRONTEND TOKEN CHECK ==========");
  console.log("Customer ID:", customerId);
  console.log("Token exists:", !!token);
  console.log("Token:", token);

  if (!customerId) {
    setMessage("Please login first.");
    return;
  }

  if (!token) {
    setMessage("Login session expired. Please login again.");
    return;
  }

  // keep the rest of your existing code here

    try {

      // =====================================================
      // SEND RESERVATION USING AXIOS
      // JWT IS AUTOMATICALLY ADDED BY axiosConfig.js
      // =====================================================

      const response = await API.post(
        "/reservations",
        {
          customerId: Number(customerId),
          customerName: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          reservationDate: formData.reservationDate,
          reservationTime: formData.reservationTime,
          guests: Number(formData.guests)
        }
      );

      console.log(
        "Reservation response status:",
        response.status
      );

      console.log(
        "RESERVATION SUCCESS:",
        response.data
      );

      setMessage(
        "✅ Reservation successful!"
      );

      // Clear date/time/guests
      // Keep logged-in customer's details

      setFormData({
        customerName:
          localStorage.getItem("fullName") || "",

        phone:
          localStorage.getItem("phone") || "",

        email:
          localStorage.getItem("email") || "",

        reservationDate: "",
        reservationTime: "",
        guests: ""
      });

    } catch (error) {

      console.error(
        "RESERVATION ERROR:",
        error
      );

      console.error(
        "SERVER RESPONSE:",
        error.response?.data
      );

      console.error(
        "SERVER STATUS:",
        error.response?.status
      );

      if (error.response?.status === 401) {

        setMessage(
          "❌ Login expired. Please login again."
        );

      } else if (error.response?.status === 403) {

        setMessage(
          "❌ You are not authorized. Please login again."
        );

      } else {

        setMessage(
          "❌ Failed to create reservation."
        );

      }

    }

  };

  // =====================================================
  // UI
  // =====================================================

  return (

    <div className="reservation-container">

      <h2>🍽 Reserve Your Table</h2>

      {message && (
        <p className="reservation-message">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit}>

        {/* CUSTOMER NAME */}

        <input
          type="text"
          name="customerName"
          placeholder="Full Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />

        {/* PHONE */}

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* EMAIL */}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* DATE */}

        <input
          type="date"
          name="reservationDate"
          value={formData.reservationDate}
          onChange={handleChange}
          required
        />

        {/* TIME */}

        <select
          name="reservationTime"
          value={formData.reservationTime}
          onChange={handleChange}
          required
        >

          <option value="">
            Select Time
          </option>

          <option value="12:00 PM">
            12:00 PM
          </option>

          <option value="1:00 PM">
            1:00 PM
          </option>

          <option value="2:00 PM">
            2:00 PM
          </option>

          <option value="6:00 PM">
            6:00 PM
          </option>

          <option value="7:00 PM">
            7:00 PM
          </option>

          <option value="8:00 PM">
            8:00 PM
          </option>

        </select>

        {/* GUESTS */}

        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        >

          <option value="">
            Number of Guests
          </option>

          <option value="2">
            2 Guests
          </option>

          <option value="4">
            4 Guests
          </option>

          <option value="6">
            6 Guests
          </option>

          <option value="8">
            8 Guests
          </option>

          <option value="12">
            12 Guests
          </option>

        </select>

        {/* SUBMIT */}

        <button
          type="submit"
          className="reserve-btn"
        >
          Reserve Now
        </button>

      </form>

    </div>

  );

}

export default ReservationTable;