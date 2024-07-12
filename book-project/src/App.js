import './App.css';
import BookList from './components/BookList';

function Header() {
  return <h1 className="amazonHeader">Amazon Bestsellers</h1>;
}

function App() {
  return (
    <>
      <Header />
      <BookList />
    </>
  );
}

export default App;
