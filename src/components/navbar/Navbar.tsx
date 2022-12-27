import Button from '../button/Button';

const pagination = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const Navbar = () => {
  return (
    <nav>
      <img>Logo</img>
      <div>Search bar</div>
      <img>Whale</img>
      <Button title="Get Started" />
    </nav>
  );
};
export default Navbar;
