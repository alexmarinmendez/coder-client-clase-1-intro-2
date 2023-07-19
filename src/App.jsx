import { BrowserRouter, Routes, Route } from "react-router-dom"
import Words from './components/Words'
import Numbers from "./components/Numbers"

const App = () => {
  return (
    <BrowserRouter>
      <h1>Class 1 App example</h1>
      <hr />
      <Routes>
        <Route path="/words" element={<Words />} />
        <Route path="/numbers" element={<Numbers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App