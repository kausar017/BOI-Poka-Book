
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    return (

        <div>
            <div className="card-compact rounded-xl bg-base-100 border-2">
                <figure className='bg-[#F3F3F3] m-6 rounded-xl py-8'>
                    <img
                        className="w-[134px] h-[166px] mx-auto object-cover rounded-md"
                        src={book.image}
                        alt="books.image"
                    />
                </figure>
                <div className="card-body">
                    <div className='space-x-2'>
                        {
                            book.tags.map(tag => <button className="btn btn-xs text-[#23BE0A] font-semibold">{tag}</button>)
                        }

                    </div>
                    <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
                    <p className='text-lg font-semibold text-gray-500'>By: {book.publisher}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="flex flex-row  items-center justify-between w-full">
                        <p className="text-gray-500 font-bold flex-1">{book.category}</p>
                        <p className="text-gray-500 font-bold flex-1 text-right">{book.rating}
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                
                            </div>

                        </p>
                    </div>


                </div>
            </div>
        </div>

    );
};
Book.propTypes = {

};

export default Book;