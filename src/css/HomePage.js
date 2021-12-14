import { StyleSheet } from "react-native"

export default StyleSheet.create({
                 container: {
                   flex: 1,
                   justifyContent: 'center'
               //    alignItems: 'center',
                 },
                 box: {
                   flex:1/8,
                   backgroundColor: '#fff',
                   flexDirection: "row",
                   justifyContent: "flex-end",
                   alignItems: 'center'
                 },
                   search: {
                     flex:1,
                     backgroundColor: '#018BCC',
                     alignItems: 'center',
                     justifyContent: 'center'
                   },
                   image: {
                      width: 40,
                      height: 40
                   },
                   text: {
                      color: '#fff',
                      fontSize: 24,
                      padding: 10,
                   },
                   input: {
                     width: 350,
                     padding: 10,
                     borderWidth: 1,
                     color: '#555555',
                     fontSize: 24,
                     borderColor: 'white'
                         },
                  button: {
                   alignItems: 'center',
                   justifyContent: 'center',
                   width: 350,
                   paddingHorizontal: 32,
                   borderRadius: 4,
                   elevation: 3,
                   backgroundColor: 'white',
                   height: 40,
                   marginTop: 10
                 },
                 textButton:{
                   color:'black',
                    fontSize: 20
                 },
                    modalView: {
                      margin: 20,
                      height: 500,
                      backgroundColor: "#018BCC",
                      color: "#fff",
                      borderRadius: 20,
                      padding: 35,
                      alignItems: "center",
                      shadowColor: "#000",
                      justifyContent: 'center',
                      shadowOffset: {
                        width: 0,
                        height: 2
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 4,
                      elevation: 5
                    },
                    modalText: {
                    color: "#fff",
                    fontSize: 20
                    },
                     textStyle:{
                          color: "black"
                     },
                     modalHeaderCloseText: {
                         textAlign: "center",
                         paddingTop: 5,
                         marginTop: 10,
                         paddingRight: 5
                       }
               });
