import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransfrom:"uppercase",
  p:"4",
  size:"4xl"

}
const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
          <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
          <Stack h={'full'} p='4' alignItems={'center'} direction={['column','row']}>
            <Image src={img5} h={['40','400']} filter={'hue-rotate(200deg)' }/>
            <Text letterSpacing={'wides'} lineHeight={'190%'} p={['4','16']} textAlign={'justify'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae minus laudantium a sunt at reprehenderit corrupti est tempora. Voluptatum architecto nostrum molestiae voluptas alias assumenda exercitationem recusandae, neque velit molestias vel dolor corporis, repellendus delectus consequatur doloremque fugiat, fugit perferendis cum asperiores odit sapiente sed inventore unde? Aperiam ea esse repellat soluta eos a tempore nobis eligendi, est vel architecto similique magnam, delectus mollitia reiciendis nostrum! Perferendis ratione molestias perspiciatis repellat ab quasi obcaecati facere nostrum aperiam eaque delectus velit ullam itaque, ad repudiandae deserunt, Maiores iusto molestiae doloribus! Obcaecati, autem inventore. Tempore veniam consequatur quos rerum illum eveniet  est vel architecto similique magnam, delectus mollitia reiciendis nostrum! Perferendis ratione molestias perspiciatis repellat ab quasi obcaecati facere nostrum aperiam eaque delectus velit ullam itaque, ad repudiandae deserunt, Maiores iusto molestiae doloribus! Obcaecati, autem inventore. Tempore veniam consequatur quos rerum illum eveniet  est vel architecto similique magnam, delectus mollitia reiciendis nostrum! Perferendis ratione molestias perspiciatis repellat ab quasi obcaecati facere nostrum aperiam eaque delectus velit ullam itaque, ad repudiandae deserunt, Maiores iusto molestiae doloribus! Obcaecati, autem inventore. Tempore veniam consequatur quos rerum illum eveniet.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} alt='Demo Image'/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future Here....
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Full Stack....
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console....
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool....
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img5} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future is Full Stack....
      </Heading>
    </Box>
  </Carousel>
)
export default Home;
