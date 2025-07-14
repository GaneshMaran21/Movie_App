import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from "react-native";
import SearchBarComponent from "../component/searchBar";
import themeConfig from "../themes";

export default function Index() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{flex:1}}>
 <View style={{display:"flex",flex:1,backgroundColor:themeConfig.primary,zIndex:-1}}>
    <Image source={images.bg} style={{width:"100%",zIndex:1,position:"absolute",}}  />
    <ScrollView keyboardShouldPersistTaps="handled" 
     style={{padding:5,flexDirection:"column",gap:12}} showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:"100%",flex:1}}>
      <View style={{width:"100%",justifyContent:"center",display:"flex",alignItems:"center",marginTop:"20%",zIndex:0}}>

      <Image source={icons.logo} width={12} style={{}}/>
      </View>
      <View style={{display:"flex",width:"100%",marginTop:20}}>
          <SearchBarComponent/>
      </View>
      <TextInput />
    </ScrollView>
 </View>
 </KeyboardAvoidingView>
  );
}
