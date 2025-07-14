import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

interface tabBarIcon {
  name?:string,
  icon?:any,
  bg?:any,
  focused?:boolean
}

const TabBarIcon=(props:tabBarIcon)=>{
  const {name,icon,bg,focused} = props
  if(focused){

    return (
      
       <ImageBackground source={bg}  style={name !=="Profile" ? styles.focused : styles.right}>
            <Image source={icon} tintColor="#151312" height={5}  />
            <Text style={styles.text} >
              {name}
            </Text>
  
            </ImageBackground>
    )
  }
  else {
    return (

<View style={styles.unfocused}>
  <Image source={icon} tintColor="#A8B5DB" height={5} />
</View>
    )   
           
  }
}

const _Layout = () => {
  return (
   <Tabs screenOptions={{tabBarShowLabel:false,
    tabBarItemStyle:{
      alignItems:"center",
      height:"100%",
      // minHeight:"max-content",
      width:"100%",
      // minWidth:"max-content",
      justifyContent:"center",

    },
    tabBarStyle:{
      backgroundColor:"#0f0D23",
      borderRadius:50,
      marginHorizontal:20,
      marginBottom:36,
      position:"absolute",height:54,
      overflow:"hidden",
      borderWidth:1,
      borderColor:"0f0D23"

    }


   }} 
    
   >
    <Tabs.Screen name='index' options={{
        title:"Home",
        headerShown:false,
        tabBarIcon:({focused})=>(
          <>
          <TabBarIcon name='Home' bg={images.highlight} icon={icons.home} focused={focused} />
          </>
        )
    }}/>
    <Tabs.Screen name='search' options={{
        title:"Search",
        headerShown:false,
           tabBarIcon:({focused})=>(
          <>
          <TabBarIcon name='Search' bg={images.highlight} icon={icons.search} focused={focused} />
          </>
        )
    }}/>
    <Tabs.Screen name='details' options={{
        title:"Details",
        headerShown:false,
        // animation:"fade"
           tabBarIcon:({focused})=>(
          <>
          <TabBarIcon name='Saved' bg={images.highlight} icon={icons.save} focused={focused} />
          </>
        )
    }}/>
        <Tabs.Screen name='profile' options={{
        title:"Profile",
        headerShown:false,
           tabBarIcon:({focused})=>(
          <>
          <TabBarIcon name='Profile' bg={images.highlight} icon={icons.person} focused={focused}/>
          </>
        )
    }}/>
   </Tabs>
  )
}

export default _Layout

const styles = StyleSheet.create({
  focused:{
    display:"flex",
    flexDirection:"row",
    gap:8,
    // width:"100%",
    // borderWidth:1,
    // borderStyle:"solid",
    // borderColor:"black",
    minWidth:110,
    borderRadius:50,
    overflow:'hidden',
    alignItems:'center',
    // height:20,
    // padding:8,
    // paddingHorizontal:8,
    justifyContent:"center",
    textAlign:"center",
    minHeight:64,
    marginTop:13,
    marginLeft:20,
    

  },
  text:{
    fontSize:14,
    fontWeight:500,
    color:"white"
  },
  unfocused:{
    justifyContent:"center",
    marginTop:16
  },
  right:{
     display:"flex",
    flexDirection:"row",
    gap:8,
    minWidth:110,
    borderRadius:50,
    overflow:'hidden',
    alignItems:'center',
    justifyContent:"center",
    textAlign:"center",
    minHeight:59,
    marginTop:12,
    marginRight:10,
    // marginLeft:20,
    // borderWidth:1,borderColor:"black",borderStyle:"solid"
  }
})