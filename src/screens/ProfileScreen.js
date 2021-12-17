import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import axios from 'axios'

export const ProfileScreen = ({userName}) => {
 const [userData,setUserData] = useState({})

  useEffect(async () => {
    const result = await axios(
      'https://api.github.com/users/'+userName,
    );

    setUserData(result.data);
  });

//console.log(userData);
	return (
		<View style={styles.container}>
			<View style={styles.top}>
                <Image
                  style={styles.stretch}
                  source={{
                    uri: userData.avatar_url,
                  }}
                />
                  <View>
                    <Text style={styles.text}>{userData.name}</Text>
                  </View>
                      <View>
                     <Text style={styles.text}>{userData.login}</Text>
                       </View>
			</View>
			<View style={styles.details}>
                 <View>
                    <Text style={styles.title}>Company</Text>
                    <Text style={styles.profileinfo}>{userData.company}</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>Location</Text>
                    <Text style={styles.profileinfo}>{userData.location}</Text>
                  </View>
               <View>
                    <Text style={styles.title}>Followers</Text>
                    <Text style={styles.profileinfo}>{userData.followers}</Text>
                  </View>

               <View>
                    <Text style={styles.title}>Following</Text>
                    <Text style={styles.profileinfo}>{userData.following}</Text>
               </View>
                <View>
                    <Text style={styles.title}>Public Repos</Text>
                    <Text style={styles.profileinfo}>{userData.public_repos}</Text>
                </View>
			</View>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	  stretch: {
        width: 100,
        height: 100,
        alignItems: 'center',
      },
	  details: {
         flex:2,
         backgroundColor: '#dcdcdc',
         alignItems: 'flex-start',
         justifyContent: 'center'
         },
	  top: {
         flex:1,
         backgroundColor: '#87cefa',
         flexDirection: "column",
         justifyContent: "center",
         alignItems: 'center',
         marginRight:10,

      },
        text: {
          color: "#fff",
          fontSize: 24,
          padding: 10,
        },
title: {
                  color: "#87cefa",
                  fontSize: 15,
                  padding: 5
                },
                        profileinfo: {
                          color: "black",
                          fontSize: 15,
                          padding: 5
                        }
})
