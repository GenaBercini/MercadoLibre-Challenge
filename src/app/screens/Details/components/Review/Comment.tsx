import {Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Icon, Text, Link} from "@chakra-ui/react";
import React, {useState} from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiTwotoneDislike,
  AiTwotoneLike,
  AiFillStar,
} from "react-icons/ai";

import mock from "../../utils/mock";

import s from "./styles.module.css";

const Comment: React.FC = () => {
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);
  const [like3, setLike3] = useState(0);
  const [dislike1, setDislike1] = useState(0);
  const [dislike2, setDislike2] = useState(0);
  const [dislike3, setDislike3] = useState(0);

  return (
    <Stack height="35rem" marginTop="2rem">
      <Tabs isFitted>
        <TabList borderBottom="1px solid" borderColor="lightgray" color="black">
          <Tab
            _focus={{
              outline: "none",
              color: "#3483fa",
              borderBottom: "3px solid #3483fa",
            }}
            _hover={{color: "#3483fa"}}
            _selected={{color: "#3483fa", borderBottom: "3px solid #3483fa"}}
            fontWeight="bold"
          >
            Todas
          </Tab>
          <Tab
            _focus={{
              outline: "none",
              color: "#3483fa",
              borderBottom: "3px solid #3483fa",
            }}
            _hover={{color: "#3483fa"}}
            _selected={{color: "#3483fa", borderBottom: "3px solid #3483fa"}}
            fontWeight="bold"
          >
            Positivas
          </Tab>
          <Tab
            _focus={{
              outline: "none",
              color: "#3483fa",
              borderBottom: "3px solid #3483fa",
            }}
            _hover={{color: "#3483fa"}}
            _selected={{color: "#3483fa", borderBottom: "3px solid #3483fa"}}
            fontWeight="bold"
          >
            Negativas
          </Tab>
        </TabList>

        <TabPanels marginTop="15px">
          <TabPanel paddingLeft={0}>
            {mock.product.comments?.map((el) => (
              <Stack key={el.id} marginBottom="1.5rem">
                <Stack direction="row" height="25px" spacing={1.5}>
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                </Stack>
                <Stack marginBottom="0px" marginTop="5px" spacing={0}>
                  <Text fontWeight="bold">{el.title}</Text>
                  <Stack className={s.comment} direction="row">
                    <Text display="inline">
                      {el.comment}
                      <Text color="blackAlpha.600" display="inline" fontSize="14px">
                        {` ${el.date}`}
                      </Text>
                      <Link className={s.report} fontSize="sm">
                        Denunciar
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
                {el.id === 0 ? (
                  <Stack direction="row" spacing={5}>
                    <Stack
                      alignItems="center"
                      color={!!like1 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        key={el.id}
                        as={!!like1 ? AiTwotoneLike : AiOutlineLike}
                        cursor="pointer"
                        onClick={() => setLike1(like1 + 1)}
                      />
                      <Text>{like1}</Text>
                    </Stack>
                    <Stack
                      alignItems="center"
                      color={!!dislike1 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        as={!!dislike1 ? AiTwotoneDislike : AiOutlineDislike}
                        cursor="pointer"
                        onClick={() => setDislike1(dislike1 + 1)}
                      />
                      <Text>{dislike1}</Text>
                    </Stack>
                  </Stack>
                ) : el.id === 1 ? (
                  <Stack direction="row" spacing={5}>
                    <Stack
                      alignItems="center"
                      color={!!like2 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        key={el.id}
                        as={!!like2 ? AiTwotoneLike : AiOutlineLike}
                        cursor="pointer"
                        onClick={() => setLike2(like2 + 1)}
                      />
                      <Text>{like2}</Text>
                    </Stack>
                    <Stack
                      alignItems="center"
                      color={!!dislike2 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        as={!!dislike2 ? AiTwotoneDislike : AiOutlineDislike}
                        cursor="pointer"
                        onClick={() => setDislike2(dislike2 + 1)}
                      />
                      <Text>{dislike2}</Text>
                    </Stack>
                  </Stack>
                ) : el.id === 2 ? (
                  <Stack direction="row" spacing={5}>
                    <Stack
                      alignItems="center"
                      color={!!like3 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        key={el.id}
                        as={!!like3 ? AiTwotoneLike : AiOutlineLike}
                        cursor="pointer"
                        onClick={() => setLike3(like3 + 1)}
                      />
                      <Text>{like3}</Text>
                    </Stack>
                    <Stack
                      alignItems="center"
                      color={!!dislike3 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        as={!!dislike3 ? AiTwotoneDislike : AiOutlineDislike}
                        cursor="pointer"
                        onClick={() => setDislike3(dislike3 + 1)}
                      />
                      <Text>{dislike3}</Text>
                    </Stack>
                  </Stack>
                ) : (
                  ""
                )}
              </Stack>
            ))}
          </TabPanel>
          <TabPanel paddingBottom="0px" paddingLeft={0}>
            {mock.product.comments?.map((el) => (
              <Stack key={el.id} marginBottom="1.5rem">
                <Stack direction="row" height="25px" spacing={1.5}>
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                  <Icon as={AiFillStar} color="#3483fa" height={5} width={5} />
                </Stack>
                <Stack marginBottom="0px" marginTop="5px" spacing={0}>
                  <Text fontWeight="bold">{el.title}</Text>
                  <Stack className={s.comment} direction="row">
                    <Text display="inline">
                      {el.comment}
                      <Text color="blackAlpha.600" display="inline" fontSize="14px">
                        {` ${el.date}`}
                      </Text>
                      <Link className={s.report} fontSize="sm">
                        Denunciar
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
                {el.id === 0 ? (
                  <Stack direction="row" spacing={5}>
                    <Stack
                      alignItems="center"
                      color={!!like1 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        key={el.id}
                        as={!!like1 ? AiTwotoneLike : AiOutlineLike}
                        cursor="pointer"
                        onClick={() => setLike1(like1 + 1)}
                      />
                      <Text>{like1}</Text>
                    </Stack>
                    <Stack
                      alignItems="center"
                      color={!!dislike1 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        as={!!dislike1 ? AiTwotoneDislike : AiOutlineDislike}
                        cursor="pointer"
                        onClick={() => setDislike1(dislike1 + 1)}
                      />
                      <Text>{dislike1}</Text>
                    </Stack>
                  </Stack>
                ) : el.id === 1 ? (
                  <Stack direction="row" spacing={5}>
                    <Stack
                      alignItems="center"
                      color={!!like2 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        key={el.id}
                        as={!!like2 ? AiTwotoneLike : AiOutlineLike}
                        cursor="pointer"
                        onClick={() => setLike2(like2 + 1)}
                      />
                      <Text>{like2}</Text>
                    </Stack>
                    <Stack
                      alignItems="center"
                      color={!!dislike2 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        as={!!dislike2 ? AiTwotoneDislike : AiOutlineDislike}
                        cursor="pointer"
                        onClick={() => setDislike2(dislike2 + 1)}
                      />
                      <Text>{dislike2}</Text>
                    </Stack>
                  </Stack>
                ) : el.id === 2 ? (
                  <Stack direction="row" spacing={5}>
                    <Stack
                      alignItems="center"
                      color={!!like3 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        key={el.id}
                        as={!!like3 ? AiTwotoneLike : AiOutlineLike}
                        cursor="pointer"
                        onClick={() => setLike3(like3 + 1)}
                      />
                      <Text>{like3}</Text>
                    </Stack>
                    <Stack
                      alignItems="center"
                      color={!!dislike3 ? "" : "blackAlpha.500"}
                      direction="row"
                    >
                      <Icon
                        as={!!dislike3 ? AiTwotoneDislike : AiOutlineDislike}
                        cursor="pointer"
                        onClick={() => setDislike3(dislike3 + 1)}
                      />
                      <Text>{dislike3}</Text>
                    </Stack>
                  </Stack>
                ) : (
                  ""
                )}
              </Stack>
            ))}
          </TabPanel>
          <TabPanel
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginY="3rem"
          >
            <Text fontSize="18px" marginBottom="10px">
              ¡Nada por acá!
            </Text>
            <Text
              color="blackAlpha.700"
              fontSize="14px"
              lineHeight="1.09"
              textAlign="center"
              width="210px"
            >
              Este producto aún no tiene opiniones negativas.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Link fontSize="sm">Ver todas las opiniones</Link>
    </Stack>
  );
};

export default Comment;
