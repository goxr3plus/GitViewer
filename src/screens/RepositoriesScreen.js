import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const RepositoriesScreen = ({}) => {

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 35, fontWeight: 'bold' }}> Repositories screen </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
