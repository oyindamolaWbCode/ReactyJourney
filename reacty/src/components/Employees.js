import { useState } from "react";
import femaleProfile from "../Images/femaleProfile.jpg";
import maleProfile from "../Images/maleProfile.jpg";

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
//we can select a team from the drop down

  return (
    <main className="container">
      {/* {employees.map((employee)=> (
        <div className="employee-preview" key={employee.id}>
          <p>{employee.teamName}</p>
          <h4>{employee.fullName}</h4>
          <img src={femaleProfile}/>
          </div>
      ))} */}
      {/* to render each of the map array */}
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
          </div>
        </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
          {employees.map((employee) => (
            <div id={employee.id} className={(employee.teamName === selectedTeam?'card m-2 standout' : 'card m-2')} onClick={handleEmployeeCardClick}>
              {/* to iterate over the image and gender */}
              {(employee.gender === 'female') ? <img src={femaleProfile} alt="" className="card-img-top" />
              :<img src={maleProfile} alt="" className="card-img-top" />}
              <div className="card-body">
                <h5 className="card-title">Full Name: {employee.fullName}</h5>
                <p className="card-text"><b>Designation:</b> {employee.designation}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
