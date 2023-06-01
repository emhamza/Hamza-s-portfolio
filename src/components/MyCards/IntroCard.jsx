import MyLogo  from "../../assets/My-logo.png";
import profile  from "../../assets/profile.png";
import '@fortawesome/fontawesome-free/css/all.min.css';


import "./Card.scss";

const IntroCard = () => {
  return (
    <div className="card-container">
      <div className="logo-container">
        <img src={MyLogo} alt="my-logo" className="my-logo" ></img>
        <div className="stack">Full Stack Developer</div>
      </div>
      <div className="profile-pic">
        <img src={profile} alt="profile-pic" />
        <div className="text-center">
          <h2>Umair Hamza</h2>
          <h4>Based in Punjab Pakistan</h4>
          <p>Open for Remote Work</p>
        </div>
        <ul className="social-icons">
          <a href="https://twitter.com/uhamzaz">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/emhamza">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/emhamza/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://wellfound.com/u/emhamza">
            <i className="fab fa-angellist"></i>
          </a>
          <a href="https://medium.com/@imumairhamza">
            <i className="fab fa-medium"></i>
          </a>
        </ul>
      </div>

    </div>
  )
}

export default IntroCard;
