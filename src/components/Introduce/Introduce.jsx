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
                    <p>I design and code beautifully simple things and i love what i do. <br/> Just simple like that!</p>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Introduce;