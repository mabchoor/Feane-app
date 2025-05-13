import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookTable = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/reservations');
  }, [navigate]);

  return null;
};

export default BookTable; 