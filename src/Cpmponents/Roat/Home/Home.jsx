
import PropTypes from 'prop-types';
import bannarimg from '../../../assets/pngwing 1.png'
import Books from '../../Books/Books';
const Home = props => {
    return (
        <div>
            <section className=" min-h-[554px] rounded-xl flex flex-row items-center justify-center bg-base-200 mx-4">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                    <img
                        src={bannarimg}
                    />
                    <div className="flex-1 space-y-5">
                        <h1 className="text-5xl font-bold max-w-[554px] Playfair-Display">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A]">Get Started</button>
                    </div>
                </div>
            </section>
                <div>
                    <Books></Books>
                </div>
        </div>

    );
};

Home.propTypes = {

};

export default Home;