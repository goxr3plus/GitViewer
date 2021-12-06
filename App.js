import React, { useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Navigation } from './src/screens/Navigation'
import Toast from 'react-native-toast-message'
import { toastConfig } from './src/lib/Toaster'


export default function App() {
	const [mainScreenVisible, setMainScreenVisible] = useState(false)

	return (
		<View style={styles.container}>
			{/*<StatusBar hidden />*/}
			<Navigation />
			<Toast
				position='top'
				bottomOffset={70}
				config={toastConfig}
				visibilityTime={1500}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
