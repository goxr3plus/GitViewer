import React, { useRef, useState } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { toastConfig } from './src/lib/Toaster'
import Toast from 'react-native-toast-message'
import { Navigation } from './src/screens/Navigation'
import SearchUserScreen from './src/screens/SearchUserScreen'

export default function App() {
	const [searchedUserName, setSearchedUserName] = useState(false)
	const accessToken = useRef()
	const loggedInUserData = useRef()

	const onSearchPress = (searchedUserNamee, accessTokenn, loggedInUserDataa) => {
		accessToken.current = accessTokenn
		loggedInUserData.current = loggedInUserDataa
		setSearchedUserName(searchedUserNamee)
	}

	const logout = () => {
		setSearchedUserName(null)
	}

	return (
		<>
			<StatusBar />
			{searchedUserName === false
				? <SearchUserScreen onSearchPress={onSearchPress} />
				: <Navigation loggedInUserData={loggedInUserData} logout={logout} />
			}
			<Toast
				position='bottom'
				bottomOffset={5}
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
