import {Button, Icon, Link, Stack, StackDivider, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {BsHeart, BsFillHeartFill} from "react-icons/bs";
import {AiFillStar, AiOutlineTrophy} from "react-icons/ai";
import {IoShieldCheckmarkOutline, IoReturnDownBackOutline} from "react-icons/io5";
import {MdKeyboardArrowDown} from "react-icons/md";
import {HiOutlineTruck} from "react-icons/hi";

import {Product} from "../../types";

const Information: React.FC<Product> = ({product}: Product) => {
  const {sold_quantity, title, price} = product;

  const [fav, setFav] = useState<boolean>(true);

  return (
    <Stack border="1px" borderColor="blackAlpha.200" borderRadius={8} maxWidth={370} padding="1rem">
      <Stack
        color="blackAlpha.600"
        direction="row"
        divider={<StackDivider alignSelf="center" borderColor="blackAlpha.500" height={2} />}
        marginTop={2}
      >
        <Text fontSize="sm">Nuevo</Text>
        <Text fontSize="sm">{sold_quantity} vendidos</Text>
      </Stack>
      <Stack direction="row" spacing={-1}>
        <Text fontSize="21px" fontWeight="bold" lineHeight="1.08">
          {title}
        </Text>
        <Icon
          as={fav ? BsHeart : BsFillHeartFill}
          color="blue.500"
          cursor="pointer"
          height={5}
          width={5}
          onClick={() => setFav(!fav)}
        />
      </Stack>
      <Stack direction="row">
        <Stack alignItems="center" direction="row" fontSize="16px" spacing={0.5}>
          <Icon as={AiFillStar} color="blue.500" height={4} width={4} />
          <Icon as={AiFillStar} color="blue.500" height={4} width={4} />
          <Icon as={AiFillStar} color="blue.500" height={4} width={4} />
          <Icon as={AiFillStar} color="blue.500" height={4} width={4} />
          <Icon as={AiFillStar} color="blue.500" height={4} width={4} />
        </Stack>
        <Text alignSelf="center" color="blue.500" fontSize="14px" marginLeft="1em" minWidth="100px">
          (4)
        </Text>
      </Stack>
      <Stack marginTop="1rem">
        <Text fontSize="38px" fontWeight="thin" lineHeight={0.5} marginTop={4}>
          ${new Intl.NumberFormat("es-AR").format(price)}
        </Text>
        <Text fontSize="18px">en 12x $1.166,60</Text>
        <Link color="blue.500" fontSize="sm">
          Ver los medios de pago
        </Link>
      </Stack>
      <Stack>
        <Stack color="rgb(0, 166, 80)" direction="row" marginTop={2} spacing={2}>
          <Icon as={HiOutlineTruck} height={6} width={6} />
          <Stack spacing={0}>
            <Text>
              Llega gratis <b>mañana sábado</b>
            </Text>
            <Link color="blue.500" fontSize="sm">
              Ver más formas de entrega
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack color="rgb(0, 166, 80)" direction="row" marginTop={2}>
          <Icon as={IoReturnDownBackOutline} height={5} width={5} />
          <Stack spacing={0}>
            <Text fontWeight={400}>Devolución gratis</Text>
            <Text color="blackAlpha.700" fontSize="sm">
              Tenés 30 días desde que lo recibís
            </Text>
            <Link color="blue.500" fontSize="sm">
              Conocer más
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="16px" fontWeight={600} marginTop={4}>
          Stock disponible
        </Text>
        <Stack>
          <Stack alignItems="center" direction="row" marginBottom={3} marginTop={4} spacing={0}>
            <Text>
              Cantidad: <b>1 unidad</b>
            </Text>
            <Icon as={MdKeyboardArrowDown} color="blue.400" height={5} width={5} />
            <Text color="blackAlpha.600" fontSize="sm">
              ({product.available_quantity} disponibles)
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Button
          _hover={{backgroundColor: "blue.600"}}
          backgroundColor="#3483fa"
          color="white"
          height="3rem"
          marginTop={5}
          paddingX="3rem"
        >
          Comprar ahora
        </Button>
        <Button
          backgroundColor="rgba(65,137,230,.15)"
          color="blue.500"
          height="3rem"
          paddingX="3rem"
        >
          Agregar al carrito
        </Button>
      </Stack>
      <Stack alignItems="flex-start" spacing={4}>
        <Stack direction="row" marginTop={4}>
          <Icon as={IoShieldCheckmarkOutline} color="blackAlpha.600" height={4} width={4} />
          <Stack fontSize="sm" lineHeight={1.3}>
            <Text color="blackAlpha.700">
              <b style={{color: "#3483fa", fontWeight: "normal", cursor: "pointer"}}>
                Compra Protegida
              </b>
              , recibí el producto que esperabas o te devolvemos tu dinero.
            </Text>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Icon as={AiOutlineTrophy} color="blackAlpha.600" height={4} width={4} />
          <Stack direction="row" fontSize="sm">
            <Text color="blackAlpha.700" marginBottom={2}>
              <b style={{color: "#3483fa", fontWeight: "normal", cursor: "pointer"}}>
                Mercado Puntos
              </b>
              . Sumás 159 puntos
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Information;
