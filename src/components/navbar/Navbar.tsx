import Button from '../button/Button';
import RedditLogo from '../../assets/svg/reddit-logo.svg';

const Navbar = () => {
  return (
    <nav>
      <img src={RedditLogo} alt="reddit-logo" height="35" />
      <label className="logo">Search bar</label>
      <ul className="list">
        <li className="list_item">
          <a href="#">Reddit Recap</a>
        </li>
        <li className="list_item">
          <Button
            style={{ background: '#c5c5c5', color: '#000' }}
            name="Get App"
          />
        </li>
        <li className="list_item">
          <Button
            style={{ background: '#ff5700', color: '#ffffff' }}
            name="Login In"
          />
        </li>
        <li className="list_item">
          <a href="#">User Icon </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
