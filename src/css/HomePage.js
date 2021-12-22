import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	box: {
		flex: 0.1,
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginRight: 10
	},
	search: {
		flex: 1,
		backgroundColor: '#018BCC',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: 50,
		height: 50
	},
	text: {
		color: '#fff',
		fontSize: 24,
		padding: 10
	},
	input: {
		width: 300,
		minWidth: 300,
		maxWidth: 300,
		padding: 10,
		borderWidth: 1,
		color: '#000000',
		fontSize: 24,
		borderColor: 'white'
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'white',
		height: 40,
		marginTop: 10,
		width: 150,
		minWidth: 150,
		maxWidth: 150
	},
	textButton: {
		color: 'black',
		fontSize: 20
	},
	modalView: {
		width: 320,
		margin: 20,
		height: 650,
		backgroundColor: '#24aeea',
		color: '#fff',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		justifyContent: 'center',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	modalText: {
		width: 150,
		minWidth: 150,
		maxWidth: 150,
		color: '#fff',
		fontSize: 20,
		marginBottom: 15
	},
	textStyle: {
		color: 'black'
	},
	modalCloseView: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		flexDirection: 'row-reverse'
	},
	modalHeaderCloseText: {
		textAlign: 'center',
		fontSize: 20,
		marginBottom: 30,
		paddingTop: 10,
		fontWeight: 'bold',
		color: 'white',
		minWidth: 50,
		minHeight: 50,
		backgroundColor: 'black',
		borderRadius: 45
	}

})
