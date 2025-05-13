import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OnlineOrder = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/menu');
  }, [navigate]);

  return null;
};

export default OnlineOrder; 