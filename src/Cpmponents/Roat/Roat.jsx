
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Roat = props => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

Roat.propTypes = {

};

export default Roat;