const Header = ({selectedTeam, teamMemberCount}) => {

    return ( 
        <header>
        <h2>Team Member Allocation</h2>
        <h4>{selectedTeam} has {teamMemberCount} Members</h4>
        </header>
     );
}
 
export default Header;