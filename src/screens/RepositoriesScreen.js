import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

export const RepositoriesScreen = ({ userName }) => {
	const [userData, setUserData] = useState([])
	useEffect(async () => {
		const result = await axios(
			'https://api.github.com/users/' + userName + '/repos'
		)

		console.log(result.data[15].html_url)
		setUserData(result.data.map(data => data.html_url))
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Image
					style={styles.imageStyle}
					resizeMode='contain'
					source={{
						uri: userData.avatar_url
					}}
				/>
				<View>
					<Text style={styles.text}>{userData.name}</Text>
				</View>
				<View>
					<Text style={styles.text}>{userData.login}</Text>
				</View>
			</View>
			<ScrollView style={styles.details}>
				{userData.map((data, index) => {
					return <View key={index}>
						<Text style={styles.title}>Company</Text>
						<Text style={styles.profileinfo}>{data}</Text>
					</View>
				})}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageStyle: {
		width: 100,
		height: 100,
		alignItems: 'center'
	},
	details: {
		flex: 2,
		backgroundColor: '#ffffff',
		// alignItems: 'flex-start',
		// justifyContent: 'center'
	},
	top: {
		flex: 1,
		minWidth: width,
		backgroundColor: '#87cefa',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10

	},
	text: {
		color: '#fff',
		fontSize: 27,
		padding: 10
	},
	title: {
		color: '#87cefa',
		fontSize: 22,
		padding: 5
	},
	profileinfo: {
		color: 'black',
		fontSize: 18,
		padding: 5
	}
})