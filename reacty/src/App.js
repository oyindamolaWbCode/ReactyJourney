import React from "react";
import { useState,useEffect } from "react";
import Header from "./components/Header";
//import Content from "./components/Content";
import Footer from "./components/Footer";
import Employees from "./components/Employees";
import { Route, Routes } from "react-router-dom";

const App = () => {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam'))||"TeamB");

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

  useEffect(() =>{
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  
  useEffect(() =>{
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);
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
    <div className="content">
      <div>
      <Header selectedTeam={selectedTeam}
      teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}/>
      <Employees employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}
        />
      <Footer />
      </div>
      <Routes>
        <Route path="/header" element={<Header />} />
        {/* <Route path="/content" element={<Content />} /> */}
        <Route path="/footer" element={<Footer />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
};

export default App;
