import Button from '../button/Button';
import redditLogo from '../../assets/svg/reddit-logo.svg';
import userIcon from '../../assets/icons/user.png';

const Navbar = () => {
  return (
    <nav>
      <img src={redditLogo} alt="reddit-logo" height="35" />
      <label className="logo">Search bar</label>
      <ul className="list">
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
        <img src={userIcon} alt="user-icon" height="20" />
      </ul>
    </nav>
  );
};
export default Navbar;
