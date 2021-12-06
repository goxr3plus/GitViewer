import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const DashboardScreen = ({}) => {

	return (
		<View style={styles.container}>
			<Text> Dashboard screen </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
