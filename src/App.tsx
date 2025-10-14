import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/pages/layout";
import HomePage from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
