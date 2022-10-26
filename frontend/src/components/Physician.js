/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import React from 'react';

const Physician = () => {
  const { physicianList } = useSelector((state) => state.physicians);
  const physicianDetail = physicianList.filter(({ show }) => show);
  return (
    <div key={physicianDetail[0].id} className="doctor-container">
      <div>
        <img src={physicianDetail[0].photo} alt="Doctor" className="doctor-image" />

      </div>
      <div className="doctor-info">
        <div className="doctor-name">{physicianDetail[0].name}</div>
        <div className="doctor-specialization">{physicianDetail[0].specialization}</div>
        <div className="doctor-fee">
          <span>Consultation Price:  </span>
          {physicianDetail[0].consultation_fee}
          $
        </div>
        <div className="doctor-bio">{physicianDetail[0].bio}</div>
        <div className="doctor-city">{physicianDetail[0].city}</div>
        <button type="button">Book Appointment</button>
      </div>
    </div>

  );
};

export default Physician;
