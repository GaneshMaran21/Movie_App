import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import themeConfig from '../themes'

const SearchBarComponent = () => {
    const [inputText,setInputText] = useState("")
  return (

    <View style={{borderColor:"#fff",borderWidth:1,borderStyle:"solid",display:"flex",flexDirection:"row",backgroundColor:themeConfig.dark2,paddingVertical:15, paddingHorizontal:12}}> 
      {/* <Image source={icons.search} height={15} resizeMode='contain' tintColor={"#ab8bff"}/> */}
      <TextInput 
    //   onPress={()=>{}}
      placeholder='Search'
      value={inputText}
      onChangeText={(e)=>{setInputText(e)}}
      placeholderTextColor={"#a8b5db"} 
      style={{marginLeft:6,flex:1,borderColor:"yellow",borderWidth:1,borderStyle:"solid"}}
      />
    </View>
  )
}

export default SearchBarComponent

const styles = StyleSheet.create({})