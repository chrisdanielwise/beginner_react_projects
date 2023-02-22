import React from "react";

const Student = () => {
  return (
    <>
      <div className="cont-student my-5 bg-success">
        <h1 className="text-center my-5">Main Lecturers Dashboard</h1>
        <div className="container d-row justify-center">
          <ul className="cont-list d-column pt-5 ">
            <li>View Personal Details</li>
            <li>View Continous Assessment</li>
            <li>View Class Attendance</li>
            <li>View Examination Result</li>
          </ul>
          <ul className="cont-discription d-row justify-center ">
            <li> View Personl Details</li>
            <li> View Continous Assessment</li>
            <li> View Fianl Examinatin Result</li>
            <li> View Class Attendece</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Student;
