import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";

export default function Main() {
  return (
    <>
      <h1 className="text-center mt-4 mb-4 display-4">
        <Badge bg="primary" className="shadow">
          CONJUNTOS
        </Badge>
      </h1>
      <div className="d-flex mx-3 my-4 justify-content-center">
        <Card
          className="shadow-lg p-4"
          style={{ maxWidth: 700, width: "100%" }}
        >
          <Alert variant="info" className="mb-4">
            <strong>Desenvolvido por George Cantor</strong>
          </Alert>
          <p>
            <strong>Conjuntos</strong> são um conceito fundamental da
            matemática, criado por George Cantor. Eles são a base da álgebra,
            funções, inequações e muitos outros conceitos matemáticos
            importantes.
          </p>
          <hr />
          <h5 className="mt-3 mb-2">Notação de Conjuntos</h5>
          <ul>
            <li>
              Usamos letras maiúsculas do alfabeto latino (ex: <b>A</b>,{" "}
              <b>B</b>, <b>C</b>...) para nomear conjuntos.
            </li>
            <li>
              Os elementos são escritos entre chaves e separados por vírgulas.
            </li>
            <li>Se houver padrão, usamos reticências.</li>
          </ul>
          <div className="card p-3 text-light bg-dark-subtle my-3">
            <span className="fw-bold">
              A = {"{"} a, b, c, d, e, f, ..., y, z {"}"}
            </span>
          </div>
          <p className="mb-4">
            Neste caso, <b>A</b> é o conjunto das letras do alfabeto brasileiro.
          </p>
          <hr />
          <h5 className="mt-3 mb-2">Operações Básicas com Conjuntos</h5>
          <ul>
            <li>
              <b>
                União (<span className="text-primary">U</span>)
              </b>
            </li>
            <li>
              <b>
                Interseção (<span className="text-success">∩</span>)
              </b>
            </li>
            <li>
              <b>
                Diferença (<span className="text-danger">-</span>)
              </b>
            </li>
          </ul>
          <div className="my-3">
            <h6 className="mb-2">
              União <Badge bg="primary">U</Badge>
            </h6>
            <div className="card p-3 text-light bg-dark-subtle my-3">
              <span>
                T = {"{"} 1, 3, 5 {"}"} &nbsp; L = {"{"} 2, 4 {"}"}
              </span>
              <br />
              <span>
                T <span className="text-primary fw-bold">U</span> L = {"{"} 1,
                2, 3, 4, 5 {"}"}
              </span>
            </div>
            <small className="text-secondary">
              Elementos repetidos não entram novamente na união.
            </small>
            <div className="card p-3 text-light bg-dark-subtle my-3">
              <span>
                H = {"{"} 1, 2 {"}"} &nbsp; F = {"{"} 1, 3 {"}"}
              </span>
              <br />
              <span>
                H <span className="text-primary fw-bold">U</span> F = {"{"} 1,
                2, 3 {"}"}
              </span>
            </div>
          </div>
          <div className="my-3">
            <h6 className="mb-2">
              Interseção <Badge bg="success">∩</Badge>
            </h6>
            <div className="card p-3 text-light bg-dark-subtle my-3">
              <span>
                T = {"{"} 1, 2, 3, 4 {"}"} &nbsp; L = {"{"} 1, 2, 3, 5 {"}"}
              </span>
              <br />
              <span>
                T <span className="text-success fw-bold">∩</span> L = {"{"} 1,
                2, 3 {"}"}
              </span>
            </div>
            <small className="text-secondary">
              Apenas os elementos que se repetem nos conjuntos.
            </small>
          </div>
          <div className="my-3">
            <h6 className="mb-2">
              Diferença <Badge bg="danger">-</Badge>
            </h6>
            <div className="card p-3 text-light bg-dark-subtle my-3">
              <span>
                T = {"{"} 1, 2, 3, 4 {"}"} &nbsp; L = {"{"} 1, 2, 4, 5, 6 {"}"}
              </span>
              <br />
              <span>
                T <span className="text-danger fw-bold">-</span> L = {"{"} 3{" "}
                {"}"}
              </span>
            </div>
            <small className="text-secondary">
              Só aparecem os elementos do primeiro conjunto que não estão no
              segundo.
            </small>
            <div className="card p-3 text-light bg-dark-subtle my-3">
              <span>
                L <span className="text-danger fw-bold">-</span> T = {"{"} 3, 5,
                6 {"}"}
              </span>
            </div>
          </div>
          <hr />
          <Alert variant="secondary" className="mt-4">
            <b>Curiosidade:</b> Os conjuntos estão em tudo! Você faz parte do
            conjunto de pessoas que leu isso, que é um conjunto de palavras, que
            é um conjunto de letras... tudo é conjunto!
          </Alert>
        </Card>
      </div>
    </>
  );
}
