import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ProfileScreen = ({}) => {

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 35, fontWeight: 'bold' }}> Profile screen </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
