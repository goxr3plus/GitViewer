import React, { useState } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { toastConfig } from './src/lib/Toaster'
import Toast from 'react-native-toast-message'
import SearchUserScreen from './src/screens/SearchUserScreen'
import { Navigation } from './src/screens/Navigation'

export default function App() {
	const [mainScreenVisible, setMainScreenVisible] = useState(false)
	
	return (
		<>
			<StatusBar />
			<Navigation />
			<Toast
				position='top'
				bottomOffset={70}
				config={toastConfig}
				visibilityTime={1500}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
