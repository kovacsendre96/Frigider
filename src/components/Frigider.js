import { FrigiderStyle } from './styles/FrigiderStyle';
import { Link } from 'react-router-dom';


const Frigider = ({ put }) => {
    return (
        <FrigiderStyle  >
            
                <Link to="/list" className={`frigider${put ? ' frigide-rotate' : ''}`}></Link>

            
        </FrigiderStyle>

    );
};

export default Frigider;