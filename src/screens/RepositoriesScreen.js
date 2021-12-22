import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

export const RepositoriesScreen = ({ userName }) => {
	const [userData, setUserData] = useState({})
	const [repositories, setRepositories] = useState([])

	useEffect(async () => {
		const result1 = await axios(
			'https://api.github.com/users/' + userName
		)

		setUserData(result1.data)

		const result = await axios(
			'https://api.github.com/users/' + userName + '/repos'
		)

		console.log(result.data[15])
		setRepositories(result.data.map(data => ({ name: data.html_url, stars: 0, description: 'Description' })))
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
				{repositories.map((data, index) => {
					return <View key={index}>
						<Text style={styles.title}>{data.name}</Text>
						<Text style={styles.stars}>Stars: {data.stars}</Text>
						<Text style={styles.description}>{data.description}</Text>
						<View
							style={{
								borderBottomColor: 'black',
								borderBottomWidth: 1
							}}
						/>
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
		borderRadius: 180,
		width: 100,
		height: 100,
		alignItems: 'center'
	},
	details: {
		flex: 3,
		backgroundColor: '#ffffff'
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
	stars: {
		color: '#87cefa',
		fontSize: 18,
		padding: 5
	},
	description: {
		color: 'black',
		fontSize: 18,
		padding: 5
	}
})