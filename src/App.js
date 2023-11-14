import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Student from "./components/student/Student";


function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/student' element={<Student/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
