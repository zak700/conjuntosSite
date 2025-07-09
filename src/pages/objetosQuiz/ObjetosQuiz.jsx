import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  Badge,
  Alert,
  Stack,
  Container,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Como se cria um objeto em JavaScript?",
    options: [
      'const obj = "objeto";',
      "const obj = {};",
      "let obj = [];",
      "objeto = conjunto();",
    ],
    answer: "const obj = {};",
  },
  {
    question:
      "Como adicionamos uma nova propriedade chamada 'idade' com valor 25?",
    options: [
      "objeto.idade = 25;",
      'objeto["idade"]: 25;',
      "add(objeto, idade, 25);",
      "idade = objeto.25;",
    ],
    answer: "objeto.idade = 25;",
  },
  {
    question: "Como verificamos se uma propriedade existe em um objeto?",
    options: [
      'tem(objeto, "cor")',
      '"cor" in objeto',
      'objeto ? "cor"',
      'verifica("cor", objeto)',
    ],
    answer: '"cor" in objeto',
  },
  {
    question: "Qual operador usamos para unir dois objetos com spread?",
    options: ["**", ">>", "...", "++"],
    answer: "...",
  },
];

export default function ObjetosQuiz() {
  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [hasStarted, setHasStarted] = useState(
    localStorage.getItem("name") ? true : false
  );
  const [wasNameSaved] = useState(!!localStorage.getItem("name"));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("quizScore", score);
  }, [name, score]);

  const handleAnswer = () => {
    if (!selected) return;
    if (selected === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    setSubmitted(true);
  };

  const nextQuestion = () => {
    setSelected("");
    setSubmitted(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSelected("");
    setSubmitted(false);
  };

  return (
    <Container className="my-4">
      <h1 className="text-center display-4 mb-4">
        <Badge bg="success">Quiz: Objetos em JS</Badge>
      </h1>

      <Card className="p-4 shadow">
        {!hasStarted ? (
          <>
            <h4 className="mb-3">Digite seu nome para começar:</h4>
            <Form.Control
              type="text"
              placeholder="Seu nome..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-3"
            />
            <Button
              onClick={() => {
                if (name.trim() !== "") {
                  localStorage.setItem("name", name);
                  setHasStarted(true);
                }
              }}
              disabled={name.trim() === ""}
            >
              Começar Quiz
            </Button>
          </>
        ) : currentQuestion < questions.length ? (
          <>
            <h5 className="mb-3">
              Olá, <strong>{name}</strong>!
            </h5>

            {wasNameSaved && currentQuestion === 0 && (
              <Button
                variant="outline-secondary"
                size="sm"
                className="mb-3"
                onClick={() => setHasStarted(false)}
              >
                Trocar nome
              </Button>
            )}
            <p>
              Pergunta {currentQuestion + 1} de {questions.length}
            </p>
            <h4 className="mb-4">{questions[currentQuestion].question}</h4>

            <Form>
              {questions[currentQuestion].options.map((option, idx) => (
                <Form.Check
                  type="radio"
                  name="options"
                  label={option}
                  key={idx}
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                  disabled={submitted}
                  className="mb-2"
                />
              ))}
            </Form>

            {submitted && (
              <Alert
                variant={
                  selected === questions[currentQuestion].answer
                    ? "success"
                    : "danger"
                }
                className="mt-3"
              >
                {selected === questions[currentQuestion].answer
                  ? "✅ Resposta correta!"
                  : `❌ Resposta incorreta. Correta: ${questions[currentQuestion].answer}`}
              </Alert>
            )}

            <Stack direction="horizontal" gap={3} className="mt-4">
              {!submitted ? (
                <Button
                  onClick={handleAnswer}
                  disabled={!selected}
                  className="w-100"
                >
                  Confirmar
                </Button>
              ) : (
                <Button onClick={nextQuestion} className="w-100">
                  Próxima
                </Button>
              )}
            </Stack>
          </>
        ) : (
          <>
            <h4 className="text-center">Parabéns, {name}!</h4>
            <Alert variant="info" className="my-3 text-center">
              Você acertou <strong>{score}</strong> de {questions.length}{" "}
              perguntas!
            </Alert>
            <Stack direction="horizontal" gap={3}>
              <Button variant="success" className="w-100" onClick={restartQuiz}>
                Tentar novamente
              </Button>
              <Button
                variant="secondary"
                className="w-100"
                onClick={() => navigate("/")}
              >
                Voltar ao início
              </Button>
            </Stack>
          </>
        )}
      </Card>
    </Container>
  );
}
