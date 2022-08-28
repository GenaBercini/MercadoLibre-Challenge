import {Stack, Table, TableContainer, Tbody, Td, Text, Tr} from "@chakra-ui/react";
import React from "react";

const FeaturesTable: React.FC = () => {
  return (
    <Stack paddingY="25px" position="relative" width="95%">
      <Text fontSize="24px" paddingBottom="22px">
        Características principales
      </Text>
      <Stack>
        <TableContainer border="1px solid #ededed" borderRadius="5px">
          <Table>
            <Tbody>
              <Tr>
                <Td background="#ebebeb" fontWeight="bold" width="200px">
                  Marca
                </Td>
                <Td background="#f5f5f5">RUNNY MODA</Td>
              </Tr>
              <Tr>
                <Td background="#f5f5f5" fontWeight="bold" width="200px">
                  Modelo
                </Td>
                <Td>STITCH</Td>
              </Tr>
              <Tr>
                <Td background="#ebebeb" fontWeight="bold" width="200px">
                  Franquicia
                </Td>
                <Td background="#f5f5f5">RUNNY MODA</Td>
              </Tr>
              <Tr>
                <Td background="#f5f5f5" fontWeight="bold" width="200px">
                  Animal
                </Td>
                <Td>STITCH/ANGEL</Td>
              </Tr>
              <Tr>
                <Td background="#ebebeb" fontWeight="bold" width="200px">
                  Personaje
                </Td>
                <Td background="#f5f5f5">STITCH O ANGEL</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>{" "}
      <Stack spacing={5}>
        <Text fontSize="20px" paddingTop="22px">
          Otras características
        </Text>
        <Stack spacing={2}>
          <Stack direction="row">
            <Stack direction="row" marginRight="270px">
              <Text fontSize="sm" fontWeight="bold">
                Material:
              </Text>
              <Text fontSize="sm">Plush</Text>
            </Stack>
            <Stack direction="row">
              <Text fontSize="sm" fontWeight="bold">
                Altura x Ancho:
              </Text>
              <Text fontSize="sm">100cm x 1cm</Text>
            </Stack>
          </Stack>
          <Stack direction="row" paddingBottom="1rem">
            <Text fontSize="sm" fontWeight="bold">
              Es material hipoalergénico:
            </Text>
            <Text fontSize="sm">Si</Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeaturesTable;
