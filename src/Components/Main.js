import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Main.css";

export default function Main() {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/ChatScreen");
  };

  return (
    <div style={{flex:1,justifyContent:'space-between'}}>
      <img
          src="https://www.cioinsight.com/wp-content/uploads/2022/08/Chatbots-in-Machine-Learning-scaled.jpeg"
          alt=""
          className="fpImg"
      />
      <button className="headerBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}
