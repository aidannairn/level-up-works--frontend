import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentProjectBuilder from "./pages/StudentProjectBuilder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/student-project-builder' element={<StudentProjectBuilder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
