import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Main from "./pages/main/Main";
import JavaScript from "./pages/javascript_basico/Javascript";
import Loops from "./pages/loops/Loops";
import Objetos from "./pages/objetos/Objetos";
import ObjetosQuiz from "./pages/objetosQuiz/ObjetosQuiz";

function App() {
  return (
    <BrowserRouter basename="/conjuntosSite/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="/javascript_basico" element={<JavaScript />} />
          <Route path="/loops" element={<Loops />} />
          <Route path="/objetos" element={<Objetos />} />
          <Route path="/quiz-objetos" element={<ObjetosQuiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
