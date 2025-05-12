import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReservationTable() {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = () => {
    axios.get("http://localhost:8000/api/reservations/")
      .then(res => setReservations(res.data))
      .catch(err => console.error("Erreur:", err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Supprimer cette réservation ?")) {
      axios.delete(`http://localhost:8000/api/reservations/${id}/`)
        .then(fetchReservations);
    }
  };

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/reservations/", formData)
      .then(() => {
        fetchReservations();
        setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '', message: '' });
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🗓️ Réservations</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Nom</th><th>Email</th><th>Téléphone</th><th>Date</th><th>Heure</th><th>Invités</th><th>Message</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(r => (
            <tr key={r.id}>
              <td>{r.name}</td><td>{r.email}</td><td>{r.phone}</td><td>{r.date}</td><td>{r.time}</td><td>{r.guests}</td><td>{r.message}</td>
              <td>
                <button onClick={() => handleDelete(r.id)} className="btn btn-sm btn-danger">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-5">➕ Ajouter une réservation</h4>
      <form onSubmit={handleSubmit} className="row g-3 mt-2">
        <div className="col-md-6">
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" required />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone" required />
        </div>
        <div className="col-md-3">
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <input type="number" className="form-control" name="guests" value={formData.guests} onChange={handleChange} placeholder="Invités" required />
        </div>
        <div className="col-md-9">
          <input type="text" className="form-control" name="message" value={formData.message} onChange={handleChange} placeholder="Message (optionnel)" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">💾 Enregistrer</button>
        </div>
      </form>
    </div>
  );
}

export default ReservationTable;
