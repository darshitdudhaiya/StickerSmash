import { View, Text, StyleSheet } from "react-native";
import tailwind from "twrnc";

export default function About() {
  return (
    <View style={tailwind`bg-indigo-500 h-full justify-center items-center`}>    
      <Text style={style.text}>About</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"gray"
  },
  text:{
    color:"white",
    fontSize: 29,
  }
});
