import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { DashboardScreen } from './DashboardScreen'
import { NavigationContainer } from '@react-navigation/native'
import { ProfileScreen } from './ProfileScreen'
import { FollowersScreen } from './FollowersScreen'
import { RepositoriesScreen } from './RepositoriesScreen'

const Stack = createStackNavigator()

export const Navigation = ({searchedUserName}) => {

	const Dashboard = (props) => <DashboardScreen {...props} />

	const Followers = (props) => <FollowersScreen {...props} />

	const Profile = (props) => <ProfileScreen userName={'octocat'} {...props} />

	const Repositories = (props) => <RepositoriesScreen {...props} />

	const getUserIcon = () => {
		const loggedIn = false

		// if (loggedIn) {
		// 	return <EvilIcons
		// 		name='user'
		// 		size={50}
		// 		color='green'
		// 		style={{ marginRight: 15 }}
		// 		onPress={() => console.log('Show Logout Modal')}
		// 	/>
		// } else {
		// 	return <EvilIcons
		// 		name='user'
		// 		size={50}
		// 		color='red'
		// 		style={{ marginRight: 15 }}
		// 		onPress={() => console.log('Show token modal')}
		// 	/>
		// }
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Dashboard'}
							 screenOptions={{
								 // headerMode: 'screen',
								 backgroundColor: 'skyblue',
								 headerTintColor: 'white',
								 headerStyle: { backgroundColor: 'skyblue' }
							 }}
			>
				<Stack.Screen name='Dashboard' component={Dashboard}
							  options={({ navigation, route }) => ({
								  title: 'Dashboard',
								  // headerLeft: ()=> null,
								  headerRight: () => (
									  getUserIcon()
								  )
							  })} />
				<Stack.Screen name='Followers' component={Followers}
							  options={({ navigation, route }) => ({
								  title: 'Followers',
								  headerRight: () => (
									  getUserIcon()
								  )
							  })} />
				<Stack.Screen name='Profile' component={Profile}
							  options={({ navigation, route }) => ({
								  title: 'Profile',
								  headerRight: () => (
									  getUserIcon()
								  )
							  })} />
				<Stack.Screen name='Repositories' component={Repositories}
							  options={({ navigation, route }) => ({
								  title: 'Repositories',
								  headerRight: () => (
									  getUserIcon()
								  )
							  })} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	}
})
