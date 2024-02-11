import "../../styles/button_styles.css";

type Props = {
  text: string;
  funcion: () => {};
};

const Button = ({ text, funcion }: Props) => {
  return (
    <>
      <button onClick={funcion} className="style_button">
        {text}
      </button>
    </>
  );
};

export default Button;
