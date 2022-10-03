import { useState } from "react";
import femaleProfile from "../Images/femaleProfile.jpg";
import maleProfile from "../Images/maleProfile.jpg";

const Employees = () => {
//we can select a team from the drop down
  const [selectedTeam, setTeam] = useState("TeamB")
  //tracks the usestate of the employees
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);
//select the drop down clicked
  function handleTeamSelectionChange(event){
    setTeam(event.target.value);
  }

  //to removed the unclicked and show the relevant clicked.
  function handleEmployeeCardClick(event){
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)?(employee.teamName === selectedTeam)?{...employee, teamName: ''}:{...employee, teamName: selectedTeam}:employee);

    setEmployees(transformedEmployees);
  }

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
