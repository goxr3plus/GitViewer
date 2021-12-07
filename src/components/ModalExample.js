import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal'

const { width, height } = Dimensions.get('window')

export const ModalExample = (props) => {
	const [isModalVisible, setModalVisible] = useState(true)

	return (
		<Modal
			animationIn={'bounceInDown'}
			animationInTiming={1500}
			animationOut={'bounceOutUp'}
			animationOutTiming={1200}
			backdropOpacity={1}
			onBackButtonPress={() => setModalVisible(false)}
			style={{
				backgroundColor: 'rgba(9,130,194,0.9)',
				marginTop: 0,
				maxHeight: height / 1.1
			}}
			isVisible={isModalVisible}>
			<View style={styles.modalView}>

				<Text> Modal Example </Text>
			</View>
			)}
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
