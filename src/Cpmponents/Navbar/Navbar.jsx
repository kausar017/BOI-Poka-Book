
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = props => {
    return (
        <section className='my-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 cursor-pointer shadow">
                            <li>Home</li>
                            <li>Listed Books</li>
                            <li>Pages to Read</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-5 text-lg ">
                        <NavLink to={'/'}><span className='px-3'>Home</span></NavLink>
                        <NavLink to={'/dasbord'}><span className='px-3'>Listed Books</span></NavLink>
                        <NavLink to={'/22'}><span className='px-3'>Pages to Read</span></NavLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <a className="btn bg-[#23BE0A]">Sign In</a>
                    <a className="btn bg-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </section>
    );
};

Navbar.propTypes = {

};

export default Navbar;