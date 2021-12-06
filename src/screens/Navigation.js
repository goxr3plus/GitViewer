import React from 'react'
import { StyleSheet } from 'react-native'
import { HomeScreen } from './HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { DashboardScreen } from './DashboardScreen'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()


export const Navigation = ({}) => {

	const DashboardScreen = (props) => <DashboardScreen {...props} />

	const FollowersScreen = (props) => <HomeScreen {...props} />

	const ProfileScreen = (props) => <HomeScreen {...props} />

	const RepositoriesScreen = (props) => <HomeScreen {...props} />

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Dashboard'}>
				<Stack.Screen name='Dashboard' component={DashboardScreen} />
				<Stack.Screen name='Followers' component={FollowersScreen} />
				<Stack.Screen name='Profile' component={ProfileScreen} />
				<Stack.Screen name='Repositories' component={RepositoriesScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({})
