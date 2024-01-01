import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Text, VStack, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ title, withBack = false }) => {
  const colour = "#FFFF";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={colour} />
      <Box bg={colour} p={"4"} px={2} py={4}>
        <HStack alignItems="center">
          {!withBack ? (
            <>
              <Image
                source={require("../assets/icon.png")}
                w="12"
                h="12"
                alt="Logo"
                mr={"3"}
              />
            </>
          ) : (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}
            >
              <Box mr={3} ml={2}>
                <Ionicons name="arrow-back-outline" size={32} color="black" />
              </Box>
            </TouchableOpacity>
          )}
          <Heading color={"black"} size={"md"}>
            {title}
          </Heading>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
