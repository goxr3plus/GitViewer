import React from 'react'
import { StyleSheet } from 'react-native'
import { HomeScreen } from './HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { DashboardScreen } from './DashboardScreen'

const Stack = createStackNavigator()


export const Navigation = ({}) => {

	const DashboardScreen = () => <DashboardScreen {...props} />

	const FollowersScreen = () => <HomeScreen {...props} />

	const ProfileScreen = () => <HomeScreen {...props} />

	const RepositoriesScreen = () => <HomeScreen {...props} />

	return (
		<Stack.Navigator initialRouteName={'Dashboard'}>
			<Stack.Screen name='Dashboard' component={DashboardScreen} />
			<Stack.Screen name='Followers' component={FollowersScreen} />
			<Stack.Screen name='Profile' component={ProfileScreen} />
			<Stack.Screen name='Repositories' component={RepositoriesScreen} />
		</Stack.Navigator>
	)
}

const styles = StyleSheet.create({})
