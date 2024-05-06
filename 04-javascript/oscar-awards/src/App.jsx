import {BrowserRouter, Route, Routes } from "react-router-dom";
import Award from "./routes/Award.jsx";
import AwardsPage from "./routes/AllAwards.jsx";
import NoMatch from "./routes/NoMatch.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<AwardsPage />} />
              <Route path="/awards/:awardId" element={<Award/>} />
              <Route path="*" element={<NoMatch />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
