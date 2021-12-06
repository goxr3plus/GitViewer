import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function App() {
	const [mainScreenVisible, setMainScreenVisible] = useState(false)

	return (
		<View style={styles.container}>
			{/*<StatusBar hidden />*/}
			{/*<Navigation />*/}
			{/*<Toast*/}
			{/*	position='top'*/}
			{/*	bottomOffset={70}*/}
			{/*	config={toastConfig}*/}
			{/*	visibilityTime={1500}*/}
			{/*/>*/}
			<Text style={{ fontWeight: 'bold', fontSize: 50 }}>Holla Amigos what's poppin!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
