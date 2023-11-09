import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DateInput } from './Pages/Calendar/DateInput';
import Header from './layouts/Header';

function App() {
  return (
    <>
    <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DateInput />}/>
          </Routes>
        </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

export default App;
