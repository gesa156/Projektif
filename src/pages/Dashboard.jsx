
import { useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";


const Dashboard = () => {
  
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
      
      setAuth({});
      navigate('/linkpage');
  }
  return (

    
    <div>
      <h1>Welcome to your Dashboard, </h1>
      <button onClick={logout}>Sign Out</button>
    </div>


           
  );
};

export default Dashboard;



  
                



