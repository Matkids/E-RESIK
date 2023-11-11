import { SafeAreaView } from "react-native-safe-area-context";
import { Box, HStack, Image, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Header = ({ withBack = false }) => {
  const colour = "#FFFF";
  const navigation = useNavigation();
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
                Halo Juragan
              </Text>
              <Text fontSize="md">Zhahnur Arif</Text>
            </VStack>
          </HStack>
          <HStack>
            <TouchableOpacity>
              <FontAwesome5
                name="money-bill-wave"
                size={24}
                color="black"
                onPress={() => navigation.navigate("")}
              />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;