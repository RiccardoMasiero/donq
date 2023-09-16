import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { MyForm } from './components/MyForm'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyForm/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
