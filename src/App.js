import React from "react";
import "./App.css";
import HeaderBootstrap from "./components/HeaderBootstrap";
import axios from "axios";
import { useState, useEffect } from 'react';


function App() {
  let currentDate = new Date().toJSON().slice(0, 10);

  const [apodData, setApodData] = useState(null);
  const [datePicker, setDatePicker] = useState(currentDate);

  const handleDateChange = (event) => {
    setDatePicker(event.target.value);
    console.log(datePicker);
  };

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: '6rC7pAI9HrbQLcAu636n1GE9rkWTrYzj3FBymre6',
          date: datePicker,
        },
      })
      .then((response) => {
        setApodData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [datePicker]);



  return (
    <div className="App"
      style={apodData && {
        backgroundImage: `url(${apodData.hdurl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
      }}>
      <HeaderBootstrap handleDateChange={handleDateChange} apodData={apodData} />
      {apodData && <p style={{color: 'white'}}>{apodData.explanation}</p>}
    </div>
  );
}
export default App;
