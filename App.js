import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { toastConfig } from './src/lib/Toaster'
import Toast from 'react-native-toast-message'
import { Navigation } from './src/screens/Navigation'

export default function App() {
	const [mainScreenVisible, setMainScreenVisible] = useState(false)

	return (
		<>
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
