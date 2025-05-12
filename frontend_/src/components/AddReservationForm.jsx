import React, { useState } from "react";
import axios from "axios";

const AddReservationForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/reservations/", formData)
      .then(res => {
        onAdd(res.data);
        setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: 1, message: "" });
      })
      .catch(err => console.error("Erreur ajout réservation", err));
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mt-4 bg-light rounded shadow-sm">
      <h5>➕ Ajouter une réservation</h5>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Nom</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6 mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="col-md-6 mb-3">
          <label>Téléphone</label>
          <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="col-md-3 mb-3">
          <label>Date</label>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="col-md-3 mb-3">
          <label>Heure</label>
          <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="col-md-3 mb-3">
          <label>Personnes</label>
          <input type="number" className="form-control" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
        </div>
        <div className="col-md-12 mb-3">
          <label>Message (facultatif)</label>
          <textarea className="form-control" name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-success">Ajouter</button>
    </form>
  );
};

export default AddReservationForm;
