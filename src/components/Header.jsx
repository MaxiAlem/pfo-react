const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <button className="hamburger" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1>heade header header</h1>
    </header>
  );
};

export default Header;
