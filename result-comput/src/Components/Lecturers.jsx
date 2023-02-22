import React from "react";

const Lecturers = () => {
  return (
    <>
    <div className="cont-lecturer my-5 bg-danger">
      <h1 className="text-center my-5">Main Lecturers Dashboard</h1>
      <div className="container d-row justify-center">
        <ul className="cont-list d-column pt-5 ">
          <li>Register Student</li>
          <li>Continous Assessment</li>
          <li>Class Attendance</li>
          <li>Final Examination</li>
          <li>View Student Record</li>
        </ul>
        <ul className="cont-discription d-row justify-center ">
          <li>Register Students</li>
          <li>Continous Assessment</li>
          <li>View Students Record</li>
          <li>Class Attendece</li>
          <li>Final Examination</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Lecturers;
