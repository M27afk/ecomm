
import './App.css';
import Announcement from './components/Announcement';
import Category from './components/Category';
import Navbar from './components/navbar';
import Newsletter from './components/Newsletter';
import Product from './components/Product';
import Slider from './components/Slider';

export default function App() {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Category/>
      <Product/>
      <Newsletter/>
    </div>
  )
}

