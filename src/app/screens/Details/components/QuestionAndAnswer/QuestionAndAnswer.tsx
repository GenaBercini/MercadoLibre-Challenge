import {Box, Button, Heading, Icon, Input, Link, Stack, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {BsArrowReturnRight} from "react-icons/bs";

import {QandA} from "../../types";

import s from "./style.module.css";

const QuestionAndAnswer: React.FC = () => {
  const frequentQuestions: string[] = [
    "Costo y tiempo de envío",
    "Devoluciones gratis",
    "Medios de pagos y promociones",
    "Garantía",
  ];

  const [questionAndAnswers, setQuestionAndAnswers] = useState<QandA[]>([
    {
      question:
        "Hola buenos dias, queria saber si llega envuelto y con tarjetita de dedicatoria? Espero su repuesta.",
      answer: "Hola se envía envuelto y si queres le podemos poner una dedicatoria",
      date: "08/08/2022",
    },
    {
      question: "Hacen envios a todo el pais no? lo empacan para regalo??",
      answer: "Si hacemos envíos y lo enviamos con bolsa de regalo",
      date: "09/05/2022",
    },
    {
      question: "Hola tenes en stock el de 70cm?",
      answer: "Si lo tenemos disponible",
      date: "12/02/2022",
    },
    {
      question: "Hola buen día!! Como andas? mide 1 metro sin extender las oreja para arriba?",
      answer: "Hola la medida es de los pies a la cabeza.",
      date: "07/03/2022",
    },
  ]);

  const [newQ, setNewQ] = useState({
    question: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.value.length === 1) {
      event.target.value = event.target.value.toUpperCase();
    }
    setNewQ((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (newQ.question.length > 0 && newQ.question.trim().length > 0) {
      setQuestionAndAnswers((prev) => [...prev, {question: newQ.question, answer: "", date: ""}]);
      setNewQ({
        question: "",
      });
    }
    if (newQ.question.trim().length === 0) setNewQ({question: ""});
  };

  return (
    <Stack
      marginInline="auto"
      paddingInline="0.5rem"
      paddingY="25px"
      position="relative"
      width="95%"
    >
      <Box paddingTop="24px">
        <Heading fontSize="24px" fontWeight="400" paddingBottom="22px">
          Preguntas y respuestas
        </Heading>
        <Stack paddingY="1rem">
          <Text fontSize="18px" fontWeight="bold" paddingBottom="1em">
            ¿Qué querés saber?
          </Text>
          <Stack direction="row" spacing={3}>
            {frequentQuestions?.map((p, i) => (
              <Link
                key={i}
                backgroundColor="rgba(65,137,230,.15)"
                borderRadius="5px"
                color="rgb(52, 131, 250)"
                cursor="pointer"
                fontSize="14px"
                fontWeight="extrabold"
                height="32px"
                lineHeight="32px"
                paddingX="12px"
              >
                {p}
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack paddingY="1.8rem">
          <Text fontSize="18px" fontWeight="bold" paddingBottom="10px">
            Preguntale al vendedor
          </Text>
          <form>
            <Stack direction="row" spacing={4}>
              <Input
                _placeholder={{
                  color: "blackAlpha.500",
                }}
                borderColor="blackAlpha.400"
                height="3rem"
                name="question"
                placeholder="Escribí tu pregunta..."
                value={newQ.question}
                width="100%"
                onChange={handleChange}
              />
              <Button
                _hover={{backgroundColor: "blue.600"}}
                backgroundColor="#3483fa"
                color="white"
                height="3rem"
                paddingX="3rem"
                onClick={(event) => handleSubmit(event)}
              >
                Preguntar
              </Button>
            </Stack>
          </form>
        </Stack>
        <Stack spacing={5}>
          <Text fontSize="18px" fontWeight="bold">
            Últimas realizadas
          </Text>
          <Stack spacing={3}>
            {questionAndAnswers?.map((element) => (
              <Box key={element.date}>
                <Stack className={s.question} direction="row">
                  <Text display="inline">
                    {element.question}
                    <Link className={s.report} fontSize="sm">
                      Denunciar
                    </Link>
                  </Text>
                </Stack>
                {element.answer?.length ? (
                  <Stack
                    alignItems="baseline"
                    className={s.question}
                    color="blackAlpha.700"
                    direction="row"
                    marginLeft="10px"
                  >
                    <Icon as={BsArrowReturnRight} height="25px" />
                    <Stack direction="row">
                      <Text display="inline">
                        {element.answer}
                        <Text display="inline" fontSize="14px">
                          {` ${element.date}`}
                        </Text>
                        <Link className={s.report} fontSize="sm">
                          Denunciar
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                ) : (
                  ""
                )}
              </Box>
            ))}
          </Stack>
          <Link fontSize="sm" paddingBottom="1.3rem">
            Ver todas las preguntas
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
};

export default QuestionAndAnswer;
