import { Text, View } from "react-native";
import themeConfig from "./themes";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       
      }}
    >
      <Text style={{color:themeConfig.accent
      }}>Hey Maran!</Text>
    </View>
  );
}
