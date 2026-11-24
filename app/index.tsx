import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "blue"
            }}>
            <View
                style={{

                    

                    flexDirection: "row",
                    backgroundColor: "red",
                    width: "100%",
                    height: 120,
                    alignItems: "center"
                }}>

            </View>
                    
            <View

                style={{
                    flexDirection: "row",
                    backgroundColor: "green",
                    width: "100%",
                    height: 120,
                    alignItems: "center"
            
                }}>
                <View
                        style={{
                            marginLeft: 100,
                            backgroundColor: "black",
                            width: 70,
                            height: 70,          
                        }}><Text 
                        style={{
                           flex: 1,
                           textAlign: "center",
                           fontSize: 30,
                           margin: 15,
                           color: "white"
                        }}>1</Text>
                </View>
                <View
                        style={{
                            marginLeft: 30,
                            backgroundColor: "white",
                            width: 70,
                            height: 70
                        }}><Text 
                        style={{
                           flex: 1,
                           textAlign: "center",
                           fontSize: 30,
                           margin: 15
                        }}>2</Text>
                </View>
            </View>
                <Text 
                        style={{
                           flex: 1,
                           textAlign: "center",
                           fontSize: 30
                        }}></Text>   

                        <View
                        style={{
                            backgroundColor: "yellow",
                            width: 150,
                            height: 150,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text
                            style={{
                            justifyContent: 'center',
                            fontSize: 30,
                            fontWeight: "bold"
                         }}>ABC</Text>
            </View> 
     </View>
    );
}
       
