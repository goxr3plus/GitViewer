import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import axios from 'axios'

export const ProfileScreen = ({userName}) => {
console.log('username is -------------' , userName)
  const [userData,setUserData] = useState({})
   useEffect( ()=>{
   try{
         const getUserData = async()=>{
           const response = await axios('get','https://api.github.com/users?username=octocat')
            setUserData(response.data)
         }
          getUserData()
   } catch (e) {
    			console.error(e)
    		}
   },[])

console.log(userData);
	return (
		<View style={styles.container}>
			<View style={styles.top}>
                <Image
                  style={styles.stretch}
                  source={{
                    uri: userData.avatar_url,
                  }}
                />
			</View>
			<View style={styles.details}>



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
         alignItems: 'center',
         justifyContent: 'center'
         },
	  top: {
         flex:1,
         backgroundColor: '#87cefa',
         flexDirection: "row",
         justifyContent: "center",
         alignItems: 'center',
         marginRight:10
      }
})
