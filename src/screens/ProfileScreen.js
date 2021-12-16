import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import axios from 'axios'

export const ProfileScreen = ({userName}) => {
 const [userData,setUserData] = useState({   "login": "octocat",
                                                        "id": 583231,
                                                        "node_id": "MDQ6VXNlcjU4MzIzMQ==",
                                                        "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
                                                        "gravatar_id": "",
                                                        "url": "https://api.github.com/users/octocat",
                                                        "html_url": "https://github.com/octocat",
                                                        "followers_url": "https://api.github.com/users/octocat/followers",
                                                        "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                                                        "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                                                        "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                                                        "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                                                        "organizations_url": "https://api.github.com/users/octocat/orgs",
                                                        "repos_url": "https://api.github.com/users/octocat/repos",
                                                        "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                                                        "received_events_url": "https://api.github.com/users/octocat/received_events",
                                                        "type": "User",
                                                        "site_admin": false,
                                                        "name": "The Octocat",
                                                        "company": "@github",
                                                        "blog": "https://github.blog",
                                                        "location": "San Francisco",
                                                        "email": null,
                                                        "hireable": null,
                                                        "bio": null,
                                                        "twitter_username": null,
                                                        "public_repos": 8,
                                                        "public_gists": 8,
                                                        "followers": 4238,
                                                        "following": 9,
                                                        "created_at": "2011-01-25T18:44:36Z",
                                                        "updated_at": "2021-12-14T04:39:03Z"})
//   useEffect( ()=>{
//   try{
//         const getUserData = async()=>{
//           const response = await axios('get','https://api.github.com/users/octocat')
//            setUserData(response.data)
//         }
//          getUserData()
//   } catch (e) {
//    			console.error(e)
//    		}
//   },[])


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
