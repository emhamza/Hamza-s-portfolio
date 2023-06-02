import "./Introduce.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Introduce = () => {
  return (
    <div>
        <section className="d-flex">
            <div>
                <div className="hero-header">
                    <h4 className="circular-border">
                        <FontAwesomeIcon icon={faHome} /> INTRODUCE
                    </h4>
                    <h1>Say Hi from <span className="hamza"> Hamza</span>, Webapp Designer and Developer</h1>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Introduce;