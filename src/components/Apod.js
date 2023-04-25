import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import styles from './Apod.module.css';

function Apod() {
  const [apodData, setApodData] = useState(null);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: '6rC7pAI9HrbQLcAu636n1GE9rkWTrYzj3FBymre6',
        },
      })
      .then((response) => {
        setApodData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!apodData) {
    return <div>Loading...</div>;
  }

  const { url, title, explanation } = apodData;

  return (
    <div className={styles.apod}>
      <h1 className={styles['apod-title']}>{title}</h1>
      <Button color="primary" onClick={() => setOffcanvasOpen(true)}>
        Show description
      </Button>
      <Offcanvas isOpen={offcanvasOpen} toggle={() => setOffcanvasOpen(false)}>
        <OffcanvasHeader toggle={() => setOffcanvasOpen(false)}>{title}</OffcanvasHeader>
        <OffcanvasBody>
          <img className={styles['apod-image']} src={url} alt={title} />
          <p className={styles['apod-description']}>{explanation}</p>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Apod;
