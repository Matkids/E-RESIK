import { SafeAreaView } from "react-native-safe-area-context";
import { Box, HStack, Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

const Header = ({}) => {
  const colour = "#FFFF";
  return (
    <SafeAreaView edges={["top"]}>
      <Box bg={colour} p={"4"} px={2} py={2}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            <>
              <Image
                source={require("../assets/icon.png")}
                w="20"
                h="12"
                alt="laundry Logo"
                mr={"4"}
              />
            </>
            <VStack>
              <Text bold fontSize="xl">
                Hi! Welcome
              </Text>
              <Text fontSize="md">Arif Rahmat Farrel Anggi Risa</Text>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;