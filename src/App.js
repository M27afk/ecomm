
import './App.css';
import Announcement from './components/Announcement';
import Category from './components/Category';
import Navbar from './components/navbar';
import Slider from './components/Slider';

export default function App() {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Category/>
    </div>
  )
}

