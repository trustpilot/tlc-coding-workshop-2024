import {BrowserRouter, Route, Routes } from "react-router-dom";
import AwardPage from "./routes/AwardPage.jsx";
import AwardsPage from "./routes/AllAwardsPage.jsx";
import NoMatchPage from "./routes/NoMatchPage.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<AwardsPage />} />
              <Route path="/awards/:awardId" element={<AwardPage/>} />
              <Route path="*" element={<NoMatchPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
