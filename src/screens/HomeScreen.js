import React, { useState, useContext, createContext, useMemo } from "react";
import { View, StyleSheet, Image, Text, TextInput, Button, Alert, Pressable, Modal ,TouchableOpacity, TouchableHighlight} from 'react-native'
import axios from 'axios';
import styles from "../css/HomePage.js"


    const UserContext = createContext({
      avatarUrl: "",
      setAvatarUrl: () => {}
    });

const HomeScreen = () => {
  const [text, onChangeText] = React.useState("");
  const [tokenText, onChangeTokenText] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const value = useMemo(() => ({ avatarUrl, setAvatarUrl }), [avatarUrl]);
  const [errorMessage, setErrorMessage] = useState("");



getGithubAccountData = async (access_token) => {
   axios.get('https://api.github.com/user', {
     headers: {
       'Authorization': `token ${access_token}`
     }
   })
   .then((res) => {
     console.log(res.data);
     setAvatarUrl(res.data.avatar_url);
     setModalVisible(!modalVisible);
   })
   .catch((error) => {
     console.error(error)
     const errorMessage = error;

   })
};

  return (
    <View style={styles.container}>
      <View style={styles.box}>
         <TouchableHighlight
                  onPress={() => {
                    setModalVisible(true);
                  }}>
        <Image style={styles.image} source={avatarUrl ==="" ? require('../images/profile.png'):require('') } />
        </TouchableHighlight>
      </View>
      <View style={styles.search}>
        <Text style={styles.text}>
            Search for a Git User
        </Text>
         <TextInput
           style={styles.input}
           onChangeText={text => onChangeText(text)}
           value={text}
           placeholder="GitHub User"
         />
                   <Modal
                     animationType="slide"
                     transparent={true}
                     visible={modalVisible}
                   >
                     <View style={styles.centeredView}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                 <Text style={styles.modalHeaderCloseText}>X</Text>
                            </TouchableOpacity>
                       <View style={styles.modalView}>
                         <Text style={styles.modalText}>Add Credentials</Text>
                          <TextInput
                                    style={styles.input}
                                    onChangeText={tokenText => onChangeTokenText(tokenText)}
                                    value={tokenText}
                                    placeholder=""
                                  />
                         <Pressable
                           style={[styles.button, styles.buttonClose]}
                           onPress={() =>  getGithubAccountData(tokenText)}
                         >
                           <Text style={styles.textStyle}>Login</Text>
                            <Text style={{color: 'red'}}>{errorMessage === "" ? "" : errorMessage.data}</Text>


                         </Pressable>
                       </View>
                     </View>
                   </Modal>

             <Pressable style={styles.button}>
               <Text style={styles.textButton}>Search</Text>
             </Pressable>
              <UserContext.Provider value={value}>
                   <UserInfo />
                 </UserContext.Provider>
     </View>
    </View>
  );
};

    function UserInfo() {
//      const { userName } = useContext(UserContext);
      const { avatarUrl } = useContext(UserContext);
      return <Text>{avatarUrl}</Text>;
    }

export default HomeScreen;
