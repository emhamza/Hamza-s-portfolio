import MyLogo  from "../../assets/My-logo.png";
import "./Card.scss";

const IntroCard = () => {
  return (
    <div className="card-container">
      <div className="logo-container">
        <img src={MyLogo} alt="my-logo" className="my-logo" ></img>
        <div className="stack">Full Stack Developer</div>
      </div>
    </div>
  )
}

export default IntroCard;
