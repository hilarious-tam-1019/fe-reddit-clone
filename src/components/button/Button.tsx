export interface buttonProps {
  title: string;
}

const Button = ({ title }: buttonProps) => {
  return (
    <a role="button" tabIndex={0} href="#">
      {title}
    </a>
  );
};
export default Button;
