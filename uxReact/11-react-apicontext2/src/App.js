import { Nav } from '../src/Components/Navbar';
import './App.css';
import { BookList } from '../src/Components/Bookslist';
import { BookProvider } from './Components/BookContext';
import AddBook from './Components/AddBook'

function App() {

  return (
    <div className= 'App'>
    <BookProvider>
    <Nav />
    <AddBook/>
    <BookList />
    </BookProvider>
    </div>
  );
}

export default App;
