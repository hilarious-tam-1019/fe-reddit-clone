interface buttonProps {
  style: any;
  name: string;
}

const Button = ({ style, name }: buttonProps) => {
  return (
    <a className="button" href="#" style={style}>
      {name}
    </a>
  );
};
export default Button;
