import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Calendar from 'react-calendar';
import { DatePick } from './Pages/Calendar/DatePick';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DateInput } from './Pages/Calendar/DateInput';
function App() {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calendar/>}/>
          <Route path="/dateInput" element={<DateInput />}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

export default App;
