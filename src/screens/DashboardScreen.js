import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import axios from 'axios'

const { width, height } = Dimensions.get('window')

export const DashboardScreen = ({ navigation, userName, clearSearchedUser }) => {
	const [userData, setUserData] = useState({})

	useEffect(async () => {
		const result1 = await axios(
			'https://api.github.com/users/' + userName
		)

		setUserData(result1.data)
	}, [])

	return (
		<View style={styles.container}>
			<View style={{ flex: 5, alignItems: 'center' }}>
				<Text style={{
					fontWeight: 'bold',
					fontSize: 35,
					backgroundColor: 'skyblue',
					width: width,
					textAlign: 'center'
				}}>{userData.name}</Text>
				<Image style={styles.imageStyle} source={{ uri: userData.avatar_url }}
					   resizeMode='contain'
				/>
			</View>

			<View style={{ flex: 5, justifyContent: 'center', marginTop: 50 }}>
				<TouchableHighlight
					onPress={clearSearchedUser}
					style={[styles.buttonStyle, { backgroundColor: 'rgba(40,173,4,0.9)' }]}>
					<Text style={styles.buttonTextStyle}>Search Again</Text>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={() => navigation.push('Profile')}
					style={[styles.buttonStyle, { backgroundColor: 'rgba(5,161,161,0.85)' }]}>
					<Text style={styles.buttonTextStyle}>View Profile</Text>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={() => navigation.push('Repositories')}
					style={[styles.buttonStyle, { backgroundColor: 'rgba(239,30,116,0.85)' }]}>
					<Text style={styles.buttonTextStyle}>View Repos</Text>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={() => navigation.push('Followers')}
					style={[styles.buttonStyle, { backgroundColor: 'rgba(187,5,173,0.91)' }]}>
					<Text style={styles.buttonTextStyle}>View Followers</Text>
				</TouchableHighlight>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 10
	},
	imageStyle: {
		borderRadius: 180,
		width: width / 1.5,
		height: width,
		alignItems: 'center'
	},
	buttonStyle: {
		marginVertical: 2,
		padding: 25,
		fontWeight: 'bold',
		backgroundColor: 'rgba(31,28,26,0.8)',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white'
	},
	buttonTextStyle: {
		color: 'white',
		fontSize: 20
	}
})
