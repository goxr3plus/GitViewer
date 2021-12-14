import React, { createContext, useContext, useMemo, useState } from 'react'
import { Image, Modal, Pressable, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import styles from '../css/HomePage.js'

const UserContext = createContext({
	avatarUrl: '',
	setAvatarUrl: () => {
	}
})

const HomeScreen = () => {
	const [text, onChangeText] = React.useState('')
	const [tokenText, onChangeTokenText] = React.useState('')
	const [modalVisible, setModalVisible] = useState(false)
	const [modalLogoutVisible, setModalLogoutVisible] = useState(false)
	const [avatarUrl, setAvatarUrl] = useState('')
	const value = useMemo(() => ({ avatarUrl, setAvatarUrl }), [avatarUrl])
	const [errorMessage, setErrorMessage] = useState('')

	const getGithubAccountData = async (access_token) => {
		axios.get('https://api.github.com/user', {
			headers: {
				'Authorization': `token ${access_token}`
			}
		})
			.then((res) => {
				console.log(res.data)
				setAvatarUrl(res.data.avatar_url)
				setModalVisible(!modalVisible)

			})
			.catch((error) => {
				console.error(error)
				setErrorMessage(error)
			})
	}

	const logoutFunction = () => {
		setAvatarUrl('')
		setModalLogoutVisible(false)
	}

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<TouchableHighlight onPress={() => {
					avatarUrl === '' ? setModalVisible(true) : setModalLogoutVisible(true)
				}}>
					<Image style={styles.image}
						   source={avatarUrl === '' ? require('../images/profile.png') : { uri: avatarUrl }} />
				</TouchableHighlight>
			</View>
			<View style={styles.search}>
				<Text style={styles.text}>
					Search for a Git User
				</Text>
				<TextInput style={styles.input} onChangeText={text => onChangeText(text)} value={text}
						   placeholder='GitHub User' />
				<Modal animationType='slide' transparent={true} visible={modalVisible}>
					<View style={styles.centeredView}>
						<TouchableOpacity onPress={() => setModalVisible(false)}>
							<Text style={styles.modalHeaderCloseText}>X</Text>
						</TouchableOpacity>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Add Credentials</Text>
							<TextInput style={styles.input} onChangeText={tokenText => onChangeTokenText(tokenText)}
									   value={tokenText} placeholder='' />
							<Pressable style={[styles.button, styles.buttonClose]}
									   onPress={() => getGithubAccountData(tokenText)}>
								<Text style={styles.textStyle}>Login</Text>
							</Pressable>
							<Text style={{ color: 'red' }}>{errorMessage === '' ? '' : errorMessage.message}</Text>
						</View>
					</View>
				</Modal>


				<Modal animationType='slide' transparent={true} visible={modalLogoutVisible}>
					<View style={styles.centeredView}>
						<TouchableOpacity onPress={() => setModalLogoutVisible(false)}>
							<Text style={styles.modalHeaderCloseText}>X</Text>
						</TouchableOpacity>
						<View style={styles.modalView}>
							<Pressable style={[styles.button, styles.buttonClose]}
									   onPress={() => getGithubAccountData(tokenText)}>
								<Text style={styles.textStyle}>Logout</Text>
							</Pressable>

						</View>
					</View>
				</Modal>
				<Pressable style={styles.button}>
					<Text style={styles.textButton}>Search</Text>
				</Pressable>
				<UserContext.Provider value={value}>
					<UserInfo />
				</UserContext.Provider>
			</View>
		</View>
	)
}

function UserInfo() {
	const { avatarUrl } = useContext(UserContext)
	return <Text></Text>
}

export default HomeScreen
