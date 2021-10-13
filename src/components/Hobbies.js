import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar } from '@fortawesome/free-solid-svg-icons'

const  Hobbies= () => {
    return (
    <div className= 'container d-flex align-center justify-content-center bg-secondary'>

      <div className= ' col-12 col-lg-12 d-flex align-center justify-content-center' p-3>
        <p><b>Derechos reservados para Cruz David Sánchez Barba 13/10/2021 <FontAwesomeIcon icon={faCalendar} /></b></p>
      </div>


      
    </div>
      );
}
 
export default Hobbies;