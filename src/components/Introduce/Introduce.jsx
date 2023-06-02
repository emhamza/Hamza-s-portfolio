import "./Introduce.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Introduce = () => {
  return (
    <div>
        <section>
            <div>
                <div>
                    <h4 className="circular-border">
                        <FontAwesomeIcon icon={faHome} /> INTRODUCE
                    </h4>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Introduce;