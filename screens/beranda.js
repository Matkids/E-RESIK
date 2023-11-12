import { Heading, Center } from "native-base";
import { Header } from "../component";



const Beranda = () => {
  return (
    <>
      <Header title={"Beranda"} />
      <Center flex={1}>
        <Heading>Beranda</Heading>
      </Center>
    </>
  );
};

export default Beranda;
