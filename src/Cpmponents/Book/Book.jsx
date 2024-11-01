
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    return (

        <div>
            <div className="card-compact rounded-xl bg-base-100 border-2">
                <figure className='bg-[#F3F3F3] m-6 rounded-xl py-8'>
                    <img
                        className="max-w-[134px] h-[166px] mx-auto object-cover rounded-md"
                        src={book.image}
                        alt="books.image"
                    />
                </figure>
                <div className="card-body">
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

Book.propTypes = {

};

export default Book;