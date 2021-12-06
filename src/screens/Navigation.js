import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { DashboardScreen } from './DashboardScreen'
import { NavigationContainer } from '@react-navigation/native'
import { ProfileScreen } from './ProfileScreen'
import { FollowersScreen } from './FollowersScreen'
import { RepositoriesScreen } from './RepositoriesScreen'

const Stack = createStackNavigator()

export const Navigation = ({}) => {

	const Dashboard = (props) => <DashboardScreen {...props} />

	const Followers = (props) => <FollowersScreen {...props} />

	const Profile = (props) => <ProfileScreen {...props} />

	const Repositories = (props) => <RepositoriesScreen {...props} />

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Dashboard'}
							 screenOptions={{
								 // headerMode: 'screen',
								 headerTintColor: 'white',
								 headerStyle: { backgroundColor: 'tomato' }
							 }}
			>
				<Stack.Screen name='Dashboard' component={Dashboard} />
				<Stack.Screen name='Followers' component={Followers} />
				<Stack.Screen name='Profile' component={Profile} />
				<Stack.Screen name='Repositories' component={Repositories} />
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
