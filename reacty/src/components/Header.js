const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8"></div>
        <h2>Team Member Allocation</h2>
        <h4>
          {selectedTeam} has {teamMemberCount} Members
        </h4>
      </div>
    </header>
  );
};

export default Header;
