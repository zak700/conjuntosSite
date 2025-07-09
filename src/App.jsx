import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Main from "./pages/main/Main";
import JavaScript from "./pages/javascript_basico/Javascript";
import Loops from "./pages/loops/Loops";
import Objetos from "./pages/objetos/Objetos";
import ObjetosQuiz from "./pages/objetosQuiz/ObjetosQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/conjuntosSite" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route
            path="/conjuntosSite/javascript_basico"
            element={<JavaScript />}
          />
          <Route path="/conjuntosSite/loops" element={<Loops />} />
          <Route path="/conjuntosSite/objetos" element={<Objetos />} />
          <Route path="/conjuntosSite/quiz-objetos" element={<ObjetosQuiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
