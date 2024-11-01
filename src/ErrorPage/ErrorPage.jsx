
import PropTypes from 'prop-types';

const ErrorPage = props => {
    return (
        <section>
            <div className='max-w-full min-h-screen flex flex-col items-center justify-center text-center text-7xl font-bold '>
                <h1>Opps!! page Not Founded</h1>
                <h3>400</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWru8q17zpOzzzT1s475ZS_8fOL1GS0teSw&s" alt="" />
            </div>
        </section>
    );
};

ErrorPage.propTypes = {

};

export default ErrorPage;