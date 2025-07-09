import { Button, Card, Badge, Alert, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Objetos() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center mt-4 mb-4 display-4">
        <Badge bg="secondary" className="shadow">
          Objetos em JavaScript
        </Badge>
      </h1>

      <div className="d-flex mx-3 my-4 justify-content-center">
        <Card
          className="shadow-lg p-4"
          style={{ maxWidth: 800, width: "100%" }}
        >
          <Alert variant="secondary" className="mb-4">
            <strong>Programação Orientada a Objetos com JavaScript</strong>
          </Alert>

          <p>
            A programação orientada a objetos, quando aplicada com JavaScript, é
            como uma junção entre a ideia de conjuntos e as estruturas do
            próprio JavaScript.
          </p>

          <h5 className="mt-4 mb-2">Como criar um objeto?</h5>
          <p>
            Para criar um objeto em JavaScript, basta declarar uma variável com
            valor entre chaves:
          </p>

          <div className="card p-3 bg-dark text-light my-3">
            <code>const objeto = &#123;&#125;;</code>
          </div>

          <p>
            A estrutura se parece com um conjunto, mas com uma grande diferença:
            os <strong>elementos</strong> de um objeto são formados por{" "}
            <strong>pares chave-valor</strong>. Veja um exemplo:
          </p>

          <div className="card p-3 bg-dark text-light my-3">
            <code>
              const objeto = &#123;
              <br />
              &nbsp;&nbsp;cor: "amarelo",
              <br />
              &nbsp;&nbsp;outro_objeto: &#123; peixe: "pirarucu" &#125;,
              <br />
              &nbsp;&nbsp;numero_da_sorte: 3<br />
              &#125;;
            </code>
          </div>

          <hr />
          <h5 className="mt-4 mb-2">Operações básicas com objetos</h5>
          <p>
            Objetos armazenam pares <strong>chave: valor</strong> e têm
            operações similares às de conjuntos. Abaixo estão as mais comuns:
          </p>

          <h6 className="mt-3">➕ Adicionar uma propriedade</h6>
          <p>Adicionamos uma nova chave e valor ao objeto:</p>
          <div className="card p-3 bg-dark text-light my-3">
            <code>objeto.idade = 25;</code>
            <br />
            <code>objeto["altura"] = 1.75;</code>
          </div>

          <h6 className="mt-3">➖ Remover uma propriedade</h6>
          <p>
            Usamos o operador <code>delete</code>:
          </p>
          <div className="card p-3 bg-dark text-light my-3">
            <code>delete objeto.cor;</code>
          </div>

          <h6 className="mt-3">🔍 Verificar se uma chave existe</h6>
          <p>
            Com <code>in</code> ou <code>hasOwnProperty</code>:
          </p>
          <div className="card p-3 bg-dark text-light my-3">
            <code>"cor" in objeto</code>
            <br />
            <code>objeto.hasOwnProperty("cor")</code>
          </div>

          <h6 className="mt-3">🔁 Iterar sobre um objeto</h6>
          <p>
            Você pode usar um <code>for...in</code> para percorrer as chaves:
          </p>
          <div className="card p-3 bg-dark text-light my-3">
            <code>
              for (let chave in objeto) &#123;
              <br />
              &nbsp;&nbsp;console.log(chave + ": " + objeto[chave]);
              <br />
              &#125;
            </code>
          </div>

          <h6 className="mt-3">🔗 União de objetos (merge)</h6>
          <p>
            Para unir dois objetos, você pode usar o{" "}
            <code>Object.assign()</code> ou o spread operator <code>...</code>:
          </p>
          <div className="card p-3 bg-dark text-light my-3">
            <code>
              const obj1 = &#123; a: 1, b: 2 &#125;;
              <br />
              const obj2 = &#123; b: 3, c: 4 &#125;;
              <br />
              <br />
              const uniao = &#123; ...obj1, ...obj2 &#125;;
              <br />
              // Resultado: &#123; a: 1, b: 3, c: 4 &#125;
            </code>
          </div>
          <p>
            ⚠️ Se houver conflito de chaves (como <code>b</code>), o valor do
            último objeto sobrescreve o anterior.
          </p>
          <Button
            variant="outline-primary"
            className="w-100"
            onClick={() => navigate("/conjuntosSite/quiz-objetos")}
          >
            Fazer Quiz
          </Button>
        </Card>
      </div>
    </>
  );
}
