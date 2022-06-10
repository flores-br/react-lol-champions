import './styles.css';

const Header = () => {
  return (
    <div className="wrapper">
      <h1>
        League of Legends <strong>Champion</strong> Database
      </h1>
      <form className="searchbox">
        <input type="search" placeholder="Search for a champion..." />
      </form>
    </div>
  );
};

export default Header;
