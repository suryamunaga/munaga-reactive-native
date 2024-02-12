import React, { useState } from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button} from 'react-native';


export default function App() {
  const [cnt,setCnt]=useState(0)
  const fnIncrement=()=>{
    setCnt(cnt+1)

  }
  return (

  <ScrollView>
    <h1 style={styles.cr}>{cnt}</h1>
    <Button
  onPress={fnIncrement}
  title="surya loves gayathri"
  color="#841584"
  
/>
  <Text>Some text</Text>
  <View>
    <Text>Some more text</Text>
    <Image
      source={{
        uri: "https://d2mk45aasx86xg.cloudfront.net/Best_React_Native_tools_206b76b4b7.webp",
      }}
      style={{width: 200, height: 200}}
    />
  </View>
  <TextInput
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
    }}
    defaultValue="You can type in me"
  />
</ScrollView>
)
}

const styles = StyleSheet.create({
 cr:{
  color:"orange"
 }
});