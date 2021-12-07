import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const SearchUserScreen = ({}) => {

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 35, fontWeight: 'bold' }}> Search User </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
