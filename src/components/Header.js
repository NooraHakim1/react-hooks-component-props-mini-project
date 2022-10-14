const Header = (props) => {
    const blogName = props.name;
    return (
      <header>
        <h1>{blogName}</h1>
      </header>
    );
  };
  export default Header;