import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const { width, height } = Dimensions.get('window')

export const DashboardScreen = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<View style={{ flex: 5, alignItems: 'center' }}>
				<Text style={{ fontWeight: 'bold', fontSize: 35 }}>The Octocat</Text>
				<Image style={{ height: height / 2.1 }} source={require('../../assets/images/Octocat.png')}
					   resizeMode='contain'
				/>
			</View>

			<View style={{ flex: 5, justifyContent: 'center', marginTop: 150 }}>
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
