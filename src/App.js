import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './componants/Header';
import Home from './componants/Home';
import AddBook from './componants/AddBook';
import About from './componants/About';
import Books from './componants/Book/Books';
import BookDetail from './componants/Book/BookDetails';

function App() {
  return (
    <>
    <header>
    <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/add' element={<AddBook/>} exact/>
        <Route path='/books' element={<Books/>} exact/>
        <Route path='/about' element={<About/>} exact/>
        <Route path="/books/:id" element={<BookDetail/>} exact />
      </Routes>
    </main>
    </>
  );
}

export default App;
