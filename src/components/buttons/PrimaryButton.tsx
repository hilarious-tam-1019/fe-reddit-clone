import { ButtonProps } from './types';

const PrimaryButton = ({ title }: ButtonProps) => {
  return (
    <a role="button" href="#" tabIndex={0} className="bg-redOrange ">
      {title}
    </a>
  );
};
export default PrimaryButton;
