
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
      container: {
      flex: 1,
      position: "absolute",
      top: 0,
      backgroundColor: "#2f2a92ff" 
            },

      tinyLogo:   {
            width: '100%',
            height: 120,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: "transparent"
                   },
      });

export default function Uppgift2() {
  
return (
 <><Image     
              style={styles.tinyLogo}
              source={(require('@/assets/images/Animated Aircraft.gif'))}/>
             

              <View
                    style={{
                        backgroundImage: '#2085f2ff',
                        flex: 1,borderBottomLeftRadius: 50,borderBottomRightRadius: 10,
                          flexDirection: 'row', alignItems: 'center',
                          justifyContent: 'center', backgroundColor: "#2085f2ff",
                                            
                    }} /></>

)
};
