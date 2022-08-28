import {Icon, Progress, Stack, Text} from "@chakra-ui/react";
import React from "react";
import {AiFillStar} from "react-icons/ai";

import mock from "../../utils/mock";

import Comment from "./Comment";

const Review: React.FC = () => {
  return (
    <Stack paddingY={10} position="relative" width="95%">
      <Text fontSize="24px" lineHeight="1" paddingBottom="2rem" paddingTop="1rem">
        Opioniones sobre {mock.product.title}
      </Text>
      <Stack direction="row">
        <Stack width="55%">
          <Text fontSize="64px" fontWeight="thin" lineHeight="1.03" paddingLeft="5rem">
            5.0
          </Text>
          <Stack direction="row" height="25px" spacing={1.5}>
            <Icon as={AiFillStar} color="#3483fa" height={7} width={7} />
            <Icon as={AiFillStar} color="#3483fa" height={7} width={7} />
            <Icon as={AiFillStar} color="#3483fa" height={7} width={7} />
            <Icon as={AiFillStar} color="#3483fa" height={7} width={7} />
            <Icon as={AiFillStar} color="#3483fa" height={7} width={7} />
          </Stack>
          <Text color="blackAlpha.700" fontSize="14px">
            Promedio entre 3 opiniones
          </Text>
        </Stack>
        <Stack marginLeft="2.5rem" paddingTop="0.5rem" spacing={0} width="100%">
          {mock.product.rating?.map((el) => (
            <Stack key={el.stars} alignItems="center" direction="row">
              <Text color="blackAlpha.600" width="20%">
                {el.stars} estrellas
              </Text>
              <Progress
                backgroundColor="rgba(0,0,0,.1)"
                borderRadius="2px"
                marginTop="5px"
                size="xs"
                value={el.value}
                width="45%"
              />
              <Text color="blackAlpha.600" paddingLeft="12px">
                {el.people}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Comment />
      </Stack>
    </Stack>
  );
};

export default Review;
