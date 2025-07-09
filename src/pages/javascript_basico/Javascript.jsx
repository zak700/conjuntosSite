import { Button, Card, Badge, Alert, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function JavaScript() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center mt-4 mb-4 display-4">
        <Badge bg="warning" text="dark" className="shadow">
          JavaScript
        </Badge>
      </h1>

      <div className="d-flex mx-3 my-4 justify-content-center">
        <Card
          className="shadow-lg p-4"
          style={{ maxWidth: 800, width: "100%" }}
        >
          <Alert variant="dark" className="mb-4">
            <strong>Introdução ao JavaScript</strong>
          </Alert>

          <p>
            JavaScript (JS) é uma linguagem de programação usada principalmente
            para adicionar interatividade a páginas web, mas também pode ser
            empregada em diversas outras aplicações, como em servidores, sites e
            jogos.
          </p>

          <p>
            Antes de começar a aprender JavaScript, é necessário entender o que
            é o <strong>console</strong>.
          </p>

          <p>
            O console refere-se a uma interface de linha de comando na qual o
            desenvolvedor pode interagir com o código, executar comandos e
            visualizar mensagens de depuração. A função{" "}
            <code>console.log()</code> é usada para exibir informações e testar
            se o código está funcionando corretamente.
          </p>

          <div className="card p-3 bg-dark text-light my-3">
            <code>console.log("amarelo"); // saída: amarelo</code>
          </div>

          <hr />
          <h5 className="mt-3 mb-2">Variáveis</h5>
          <p>
            Variáveis armazenam informações usadas durante a execução do
            programa. Existem três principais formas de declaração:
          </p>

          <ul>
            <li>
              <code>var</code>
            </li>
            <li>
              <code>let</code>
            </li>
            <li>
              <code>const</code>
            </li>
          </ul>

          <h6 className="mt-3">var</h6>
          <p>
            Possui escopo de função e sofre <strong>hoisting</strong> (a
            declaração é movida para o topo do escopo). Exemplo:
          </p>
          <div className="card p-3 bg-dark text-light my-3">
            <code>
              console.log(cor); // undefined
              <br />
              var cor = "roxo";
              <br />
              console.log(cor); // roxo
            </code>
          </div>

          <h6 className="mt-3">let</h6>
          <p>
            Introduzido no ES6 (2015), tem escopo de bloco. É mais previsível e
            evita muitos problemas do <code>var</code>.
          </p>
          <div className="card p-3 bg-dark text-light my-3">
            <code>
              let cor = "azul";
              <br />
              console.log(cor); // azul
              <br />
              <br />
              if (true) &#123;
              <br />
              &nbsp;&nbsp;let cor = "verde";
              <br />
              &nbsp;&nbsp;console.log(cor); // verde
              <br />
              &#125;
              <br />
              <br />
              console.log(cor); // azul
            </code>
          </div>

          <h6 className="mt-3">const</h6>
          <p>
            Também tem escopo de bloco, mas seu valor não pode ser reatribuído.
            Porém, objetos e arrays podem ter seus conteúdos alterados.
          </p>
          <div className="card p-3 bg-dark text-light my-3">
            <code>
              const cor = "amarelo";
              <br />
              console.log(cor); // amarelo
              <br />
              // cor = "vermelho"; // Erro
              <br />
              <br />
              const cores = ["vermelho", "azul"];
              <br />
              cores.push("verde");
              <br />
              console.log(cores); // ["vermelho", "azul", "verde"]
            </code>
          </div>

          <hr />
          <h5 className="mt-3 mb-2">Tipos de Dados</h5>
          <p>Alguns dos principais tipos de dados em variáveis são:</p>
          <ul>
            <li>
              <strong>String</strong>: Texto - <code>"Olá, mundo!"</code>
            </li>
            <li>
              <strong>Number</strong>: Números inteiros ou decimais -{" "}
              <code>42</code>, <code>-10</code>, <code>3.14</code>
            </li>
            <li>
              <strong>Boolean</strong>: Lógicos - <code>true</code> ou{" "}
              <code>false</code>
            </li>
            <li>
              <strong>Undefined</strong>: Variável declarada, mas sem valor -{" "}
              <code>let x;</code>
            </li>
            <li>
              <strong>Null</strong>: Ausência intencional de valor -{" "}
              <code>let y = null;</code>
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
}
