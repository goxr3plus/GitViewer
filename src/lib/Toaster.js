import React from 'react'
import Toast from 'react-native-toast-message'
import { Dimensions, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

const toasterBody = (props, backgroundColor, icon) => {
	return (
		<View style={{
			width: width,
			backgroundColor: backgroundColor,
			padding: 10,
			paddingBottom: props.title ? 10 : 10,
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
				<View style={{ flex: 9, alignItems: 'center', justifyContent: 'center' }}>
					{props.title ?
						<Text style={{ fontSize: 23, color: 'white', textAlign: 'center' }}>{props.title}</Text> : null}
					<Text style={{ fontSize: 18, color: 'white' }}>{props.text}</Text>
				</View>
				{/*<View style={{ flex: 1, flexDirection: 'row-reverse' }}>*/}
				<AntDesign name={icon} size={40} color='white' />
				{/*</View>*/}
			</View>
		</View>
	)
}

export const toastConfig = {
	errorToast: ({ props }) => toasterBody(props, 'rgba(252,41,66,0.96)', 'closecircle'),
	warningToast: ({ props }) => toasterBody(props, 'rgba(252,169,41,0.96)', 'warning'),
	infoToast: ({ props }) => toasterBody(props, 'rgba(0,158,184,0.96)', 'infocircle'),
	successToast: ({ props }) => toasterBody(props, 'rgba(41,180,2,0.96)', 'checkcircle')
}

export const showSuccessToast = (text = '', title = '') => {
	Toast.show({
		type: 'successToast',
		props: { title, text }
	})
}

export const showWarningToast = (text = '', title = '') => {
	Toast.show({
		type: 'warningToast',
		props: { title, text }
	})
}

export const showErrorToast = (text = '', title = '') => {
	Toast.show({
		type: 'errorToast',
		props: { title, text }
	})
}

export const showInfoToast = (text = '', title = '') => {
	Toast.show({
		type: 'infoToast',
		props: { title, text }
	})
}
