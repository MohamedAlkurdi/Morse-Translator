import './App.css';
import Navbar from './components/navbar';
import { Routes,Route } from 'react-router-dom';
import Main from "./pages/main"
import Learn from "./pages/learn"
import NotFound from './pages/notFound';
import Contact from './pages/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route index element={<Main/>} />
        <Route path='/Home' element={<Main/>} />
        <Route path='/Learn' element={<Learn/>}/>
        <Route path='/feedback' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
