import {Box, Stack, Text} from "@chakra-ui/react";
import React from "react";

import QandA from "../QuestionAndAnswer/QuestionAndAnswer";

const Description: React.FC = () => {
  return (
    <Stack paddingY="25px" position="relative" width="95%">
      <Box paddingBottom="30px">
        <Text fontSize="24px" paddingBottom="22px">
          Descripción
        </Text>
        <Stack color="#666" fontSize="20px" spacing={5}>
          <Text>PELUCHE IMPORTADO PERSONAJE STITCH</Text>
          <Text>MEDIDA 1 METRO (100 CM )</Text>
          <Text>GIGANTE</Text>
          <Text>DISPONIBLE: STITCH (CELESTE) O ANGEL (ROSA)</Text>
          <Text>MATERIAL: PLUSH MUY SUAVE, RELLENO DE VELLON SILICONADO</Text>
          <Text>SE PUEDE RETIRAR POR:</Text>
          <Stack>
            <Text>• AV. CORRIENTES Y URUGUAY</Text>
            <Text>• VILLA PUEYRREDON</Text>
          </Stack>
          <Text>
            Realizamos envíos por motomensajeria y tambien por correo argentino a todo el país
          </Text>
          <Text>****NO SE OLVIDE DE VISITAR TODOS NUESTROS PRODUCTOS****</Text>
        </Stack>
      </Box>
      <QandA />
    </Stack>
  );
};

export default Description;
