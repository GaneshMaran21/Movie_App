interface Theme {
    primary?:string,
    secondary?:string,
    dark?:object,
    light?:object,
    selectedTab?:string,
    accent?:string
    dark2?:string
}

const themeConfig:Theme={
    primary:"#030014",
    secondary:"#151312",
    light:{
        100:'#D6C6FF',
        200:'#A8B5DB',
        300:'#9CA4AB'
    },
    dark:{
        100:"#221f3d",
        200:"#0f0d23",

    },
    accent:"#AB8BFF",
    dark2:"#0f0d23"


}

export default themeConfig