import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route index element={<Home />} />

          {/* extra paths not found, e.g. alfredsoriano.com/a1njk3 will be redirected to NotFound.tsx */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
