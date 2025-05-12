// src/components/MenuTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MenuTable() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/dishes/`)
      .then(res => setMenu(res.data))
      .catch(err => console.error("Erreur lors du chargement des plats :", err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Supprimer ce plat ?")) {
      axios.delete(`http://localhost:8000/api/dishes/${id}/`)
        .then(() => {
          setMenu(menu.filter(item => item.id !== id));
        })
        .catch(err => console.error("Erreur lors de la suppression :", err));
    }
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h2>📋 Liste des plats</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th>Image</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map(item => (
            <tr key={item.id} style={{ textAlign: 'center', borderBottom: '1px solid #ccc' }}>
              <td>
                <img
                  src={`http://localhost:8000${item.image}`}
                  width="80"
                  alt={item.name}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price} €</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => alert("Redirection vers édition")} style={{ marginRight: 10 }}>✏️</button>
                <button onClick={() => handleDelete(item.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuTable;
