import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { HomePage } from "./pages/home/home";
import { WorldPage } from "./pages/world/world";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/world" element={<WorldPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
