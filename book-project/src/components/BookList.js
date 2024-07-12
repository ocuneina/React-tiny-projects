import Book from './Book';
import './BookList.css';
import { bestBooks } from './Bestsellers.js';

const BookList = props => {
  return (
    <section className="booklist">
      {bestBooks.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};
export default BookList;
