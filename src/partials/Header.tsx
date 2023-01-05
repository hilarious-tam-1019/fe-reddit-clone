import redditLogo from '../images/reddit-logo.svg';
import PrimaryButton from '../utils/buttons/PrimaryButton';

const Header = () => {
  return (
    <>
      <PrimaryButton title="Log In" type="redOrange" />
      <PrimaryButton title="Get App" type="grey" />
    </>
  );
};
export default Header;
