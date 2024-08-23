import style from "./ButtonStyle";

function Button({buttonType = 'button', text, onClickHandler, styleType}){

  return (
    <>
    <button className={style(styleType)} type={buttonType} onClick={onClickHandler}>{text}</button>
    </>
  );
};

export default Button;