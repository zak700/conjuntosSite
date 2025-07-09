import { Button, Card, Badge, Alert, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Loops() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center mt-4 mb-4 display-4">
        <Badge bg="info" text="dark" className="shadow">
          Loops em JavaScript
        </Badge>
      </h1>

      <div className="d-flex mx-3 my-4 justify-content-center">
        <Card
          className="shadow-lg p-4"
          style={{ maxWidth: 800, width: "100%" }}
        >
          <Alert variant="primary" className="mb-4">
            <strong>Repetindo tarefas com eficiência</strong>
          </Alert>

          <p>
            Loops em JavaScript são como atalhos para repetir uma tarefa várias
            vezes sem escrever tudo de novo. Imagine que você tem uma música
            favorita e quer tocá-la 10 vezes — em vez de apertar "play"
            manualmente, você usa um loop para isso acontecer automaticamente.
          </p>

          <hr />
          <h5 className="mt-3 mb-2">
            1. <code>for</code>
          </h5>
          <p>
            O loop <strong>for</strong> é o mais tradicional. Você define onde
            começa, onde termina e como ele vai avançar:
          </p>

          <div className="card p-3 bg-dark text-light my-3">
            <code>
              for (let i = 0; i &lt; 5; i++) &#123;
              <br />
              &nbsp;&nbsp;console.log("Oi! Esse é o loop número " + i);
              <br />
              &#125;
            </code>
          </div>

          <ul>
            <li>
              <code>let i = 0</code> → começa do zero
            </li>
            <li>
              <code>i &lt; 5</code> → repete enquanto <code>i</code> for menor
              que 5
            </li>
            <li>
              <code>i++</code> → incrementa 1 a cada repetição
            </li>
          </ul>

          <p>
            O resultado será: <code>0, 1, 2, 3, 4</code>. O loop para quando{" "}
            <code>i</code> atinge 5.
          </p>

          <hr />
          <h5 className="mt-3 mb-2">
            2. <code>while</code>
          </h5>
          <p>
            O loop <strong>while</strong> repete enquanto uma condição for
            verdadeira.
          </p>

          <div className="card p-3 bg-dark text-light my-3">
            <code>
              let i = 0;
              <br />
              while (i &lt; 5) &#123;
              <br />
              &nbsp;&nbsp;console.log("Oi! Estou no while " + i);
              <br />
              &nbsp;&nbsp;i++;
              <br />
              &#125;
            </code>
          </div>

          <p>
            Funciona de forma parecida com o <code>for</code>, mas você precisa
            declarar e atualizar o contador separadamente.
          </p>

          <hr />
          <h5 className="mt-3 mb-2">
            3. <code>do...while</code>
          </h5>
          <p>
            O loop <strong>do...while</strong> executa o bloco pelo menos uma
            vez, mesmo que a condição já seja falsa.
          </p>

          <div className="card p-3 bg-dark text-light my-3">
            <code>
              let i = 0;
              <br />
              do &#123;
              <br />
              &nbsp;&nbsp;console.log("Oi do...while " + i);
              <br />
              &nbsp;&nbsp;i++;
              <br />
              &#125; while (i &lt; 5);
            </code>
          </div>

          <p>
            Isso é útil quando você precisa garantir que o bloco execute ao
            menos uma vez antes da verificação da condição.
          </p>
        </Card>
      </div>
    </>
  );
}
