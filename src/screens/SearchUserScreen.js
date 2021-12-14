import React, { useRef, useState } from 'react'
import { Image, Modal, Pressable, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import styles from '../css/HomePage.js'
import { showErrorToast, showSuccessToast, showWarningToast } from '../lib/Toaster'
import { isEmpty } from '../lib/Tools'

const SearchUserScreen = ({ onSearchPress }) => {
	const [searchUserName, changeSearchUserName] = React.useState('')
	const [accessToken, changeAccessToken] = React.useState('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')
	const [loginModalVisible, setLoginModalVisible] = useState(false)
	const [logoutModalVisible, setLogoutModalVisible] = useState(false)
	const [avatarUrl, setAvatarUrl] = useState('')
	const loggedInUserData = useRef()

	const login = async (access_token) => {
		try {
			const response = await axios.get('https://api.github.com/user', {
				headers: {
					'Authorization': `token ${access_token}`
				}
			})

			loggedInUserData.current = response.data
			// console.log(response.data)
			setAvatarUrl(response.data.avatar_url)
			setLoginModalVisible(!loginModalVisible)
			showSuccessToast('You have successfully loggedin')

		} catch (e) {
			console.error(e)
			showErrorToast('Error: ' + e)
		}
	}

	const logout = () => {
		setAvatarUrl('')
		setLogoutModalVisible(false)
		showWarningToast('Logged out successfully')
	}

	const onSearch = () => {
		if (isEmpty(searchUserName)) {
			showErrorToast('Please type a user name!')
		} else if (isEmpty(loggedInUserData.current)) {
			showErrorToast('You have to login!')
		} else {
			onSearchPress(searchUserName, accessToken, loggedInUserData.current)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<TouchableHighlight onPress={() => {
					avatarUrl === '' ? setLoginModalVisible(true) : setLogoutModalVisible(true)
				}}>
					<Image style={styles.image}
						   source={avatarUrl === '' ? require('../images/profile.png') : { uri: avatarUrl }} />
				</TouchableHighlight>
			</View>
			<View style={styles.search}>
				<Text style={styles.text}>
					Search for a Git User
				</Text>
				<TextInput style={styles.input} onChangeText={text => changeSearchUserName(text)} value={searchUserName}
						   placeholder='GitHub User' />

				{loginModalVisible &&
					<Modal animationType='slide' transparent={true} visible={loginModalVisible}>
						<View style={styles.modalView}>
							<TouchableOpacity onPress={() => setLoginModalVisible(false)}>
								<Text style={styles.modalHeaderCloseText}>X</Text>
							</TouchableOpacity>
							<Text style={styles.modalText}>Add Credentials</Text>
							<TextInput style={styles.input} onChangeText={tokenText => changeAccessToken(tokenText)}
									   value={accessToken} placeholder='' />
							<Pressable style={styles.button}
									   onPress={() => login(accessToken)}>
								<Text style={styles.textStyle}>Login</Text>
							</Pressable>
						</View>
					</Modal>
				}


				{logoutModalVisible &&
					<Modal animationType='slide' transparent={true} visible={logoutModalVisible}>
						<View style={styles.modalView}>
							<TouchableOpacity onPress={() => setLogoutModalVisible(false)}>
								<Text style={styles.modalHeaderCloseText}>X</Text>
							</TouchableOpacity>
							<Pressable style={styles.button}
									   onPress={logout}>
								<Text style={styles.textStyle}>Logout</Text>
							</Pressable>

						</View>
					</Modal>
				}

				<Pressable style={styles.button} onPress={onSearch}>
					<Text style={styles.textButton}>Search</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default SearchUserScreen
