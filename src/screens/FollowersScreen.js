import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FollowersScreen = ({}) => {

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 35, fontWeight: 'bold' }}> Followers screen </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
