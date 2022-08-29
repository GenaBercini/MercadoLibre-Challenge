import {Container, Image, Stack, StackDivider, Text, Link, Box} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import {OtherProduct, Product} from "../../types";

import style from "./styles.module.css";

interface Props {
  product: Product;
  title: string;
}

const InterestCarrousel: React.FC<Props> = ({product, title}: Props) => {
  useEffect(() => {
    let prevBtn = document.querySelector(".swiper-button-prev");
    let nextBtn = document.querySelector(".swiper-button-next");

    prevBtn?.classList.add(style.btnPrev);
    nextBtn?.classList.add(style.btnNext);
  }, []);

  return (
    <Stack paddingY={6} position="relative" width="100%">
      <Stack alignItems="center" direction="row" spacing={5}>
        <Text fontSize="24px" marginBottom={1}>
          {title}
        </Text>
        {title === "Productos promocionados" && (
          <Link fontSize="16px" fontWeight="200">
            Anuncia aqui
          </Link>
        )}
      </Stack>
      <Swiper
        className={style.InterestSwiper}
        loop={true}
        modules={[Navigation]}
        navigation={true}
        slidesPerGroup={5}
        slidesPerView={5}
        spaceBetween={1}
      >
        <Stack>
          <Stack direction="row" spacing={0} width="100%">
            {product.otherProducts?.map((el: OtherProduct) => (
              <SwiperSlide key={el.id}>
                <Container padding={2}>
                  <Stack
                    _hover={{
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                    }}
                    backgroundColor="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="4px"
                    boxShadow="base"
                    cursor="pointer"
                    divider={<StackDivider />}
                    height={368}
                    width="100%"
                  >
                    <Box marginBottom={-2}>
                      <Image height="100%" objectFit="contain" src={el.url} width={224} />
                    </Box>
                    <Stack padding="5px 1rem 1rem 1rem" spacing={0}>
                      <Text color="#333" fontSize="24px">
                        ${new Intl.NumberFormat("es-AR").format(el.price)}
                      </Text>
                      {el.price! >= 4000 ? (
                        <Text color="#00a650" fontSize="14px" fontWeight="bold" margin={0}>
                          Envio Gratis
                        </Text>
                      ) : (
                        ""
                      )}
                      <Text color="blackAlpha.800" fontSize="14px">
                        {el.title.length > 50 && el.price! >= 4000
                          ? el.title.substring(0, 50) + "..."
                          : el.title}
                      </Text>
                    </Stack>
                  </Stack>
                </Container>
              </SwiperSlide>
            ))}
          </Stack>
        </Stack>
      </Swiper>
    </Stack>
  );
};

export default InterestCarrousel;
