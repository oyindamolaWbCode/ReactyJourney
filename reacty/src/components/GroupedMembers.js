import { useState } from "react";

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [GroupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers()
    {
        let teams = [];

        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = {team: 'teamA', members:teamAMembers, collapsed:selectedTeam === 'TeamA'?false:true}
        teams.push(teamA);

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = {team: 'teamB', members:teamBMembers, collapsed:selectedTeam === 'TeamB'?false:true}
        teams.push(teamB);

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = {team: 'teamC', members:teamCMembers, collapsed:selectedTeam === 'TeamC'?false:true}
        teams.push(teamC);

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = {team: 'teamD', members:teamDMembers, collapsed:selectedTeam === 'TeamD'?false:true}
        teams.push(teamD);
    }

    function handleTeamClick(event){

        let transformedGroupData = GroupedEmployees.map((groupedData)=> groupedData.team === event.currentTarget.id ?{...groupedData,collapsed:!groupedData.collapsed}:groupedData);
    
        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return ( 
        <div className="containers">
            {
                GroupedEmployees.map((item) =>{
                    return(
                        <div key={item.team} className="card mt-2" style ={{cursor: "ponter"}}>
                            <h4 id={item.team} className="card-header text-bg-secondary bg-white" onClick={handleTeamClick}>
                                Team name: {item.team}
                            </h4>
                    )
                    <div id={"collapse_ " + item.item}
                    className={item.collapsed === true?"collapsed": ""}>
                    <hr/>
                    {
                        item.members.map(member =>{
                            return(
                                <div className="mt-2">
                                    <h5 className="card-title mt-2">
                                        <span className="text-dark">Full Name: {member.fullName}</span>
                                    </h5>
                                    <p>Desigantion: {member.designation}</p>
                                    </div>
                            )
                        })
                    }
                    </div>
                    </div>
                    )
                })
            }
        </div>
     );
}
 
export default GroupedTeamMembers;