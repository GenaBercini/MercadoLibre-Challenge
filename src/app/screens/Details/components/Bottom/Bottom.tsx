import {Link, Stack, Text, StackDivider} from "@chakra-ui/react";
import React from "react";

const Bottom: React.FC = () => {
  return (
    <Stack fontSize={14} minWidth="1184px" spacing={5}>
      <Stack
        direction="row"
        divider={<StackDivider alignSelf="center" borderColor="blackAlpha.400" height={3} />}
        justifyContent="flex-end"
        marginBottom={-10}
        marginTop={5}
      >
        <Text>
          Publicación <b>#1108308238</b>
        </Text>
        <Link>Denunciar</Link>
      </Stack>
    </Stack>
  );
};

export default Bottom;
