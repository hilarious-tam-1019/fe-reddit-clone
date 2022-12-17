const Navbar = () => {
  return (
    <nav>
      <label className="logo">Reddit</label>
      <ul className="list">
        <li>
          <a href="#">Reddit Recap</a>
        </li>
        <li>
          <a className="button button_grey" href="#">
            Get App
          </a>
        </li>
        <li>
          <a className="button button_red" href="#">
            Log In
          </a>
        </li>
        <li>
          <a href="#">User Icon</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
