import "./Introduce.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Introduce = () => {
  return (
    <div>
      <section className="hero-header">
        <div>
          <div>
            <h4 className="circular-border">
              <FontAwesomeIcon icon={faHome} /> INTRODUCE
            </h4>
            <h1>Say Hi from <span className="hamza"> Hamza</span>, full-stack Developer</h1>
            <p>I design and code beautifully simple things and I love what I do. <br/> Just simple like that!</p>
          </div>
          <a href="#portfolio" className="go-to-project-btn scroll-to scroll-animation">
            <img decoding="async" src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png" alt="Rounded Text" />
            <i className="las la-arrow-down"></i>
          </a>
          <div className="d-flex my-5 py-5">
            <div className="exp-block">
              <h1 className="hamza">2+</h1>
              <p>YEARS OF <br/> EXPERIENCE</p>
            </div>
            <div className="exp-block">
              <h1 className="hamza">10+</h1>
              <p>PROJECTS COMPLETED <br/> FOR GLOBAl CLIENTS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduce;
