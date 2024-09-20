import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddEvent from './Pages/AddEvent';
import ViewEvent from './Pages/ViewEvent';
import EventType from './Pages/EventType';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addEvent' element={<AddEvent />} />
          <Route path='/eventType' element={<EventType />} />
          <Route path='/viewEvent' element={<ViewEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
