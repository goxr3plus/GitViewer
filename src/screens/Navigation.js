import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { DashboardScreen } from './DashboardScreen'
import { NavigationContainer } from '@react-navigation/native'
import { ProfileScreen } from './ProfileScreen'
import { FollowersScreen } from './FollowersScreen'
import { RepositoriesScreen } from './RepositoriesScreen'
import { SearchUserScreen } from './SearchUserScreen'
import { EvilIcons } from '@expo/vector-icons'

const Stack = createStackNavigator()

export const Navigation = ({}) => {

	const SearchUser = (props) => <SearchUserScreen {...props} />

	const Dashboard = (props) => <DashboardScreen {...props} />

	const Followers = (props) => <FollowersScreen {...props} />

	const Profile = (props) => <ProfileScreen {...props} />

	const Repositories = (props) => <RepositoriesScreen {...props} />

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'SearchUser'}

							 screenOptions={{
								 // headerMode: 'screen',
								 backgroundColor: 'skyblue',
								 headerTintColor: 'white',
								 headerStyle: { backgroundColor: 'skyblue' }
							 }}
			>
				<Stack.Screen name='Search' component={SearchUserScreen}
							  options={({ navigation, route }) => ({
								  title: 'Search',
								  headerRight: () => (
									  <EvilIcons
										  name='user'
										  size={50}
										  color='red'
										  style={{ marginRight: 15 }}
										  onPress={() => navigation.navigate('Dashboard')}
									  />
								  )
							  })}
				/>
				<Stack.Screen name='Dashboard' component={Dashboard}
							  options={({ navigation, route }) => ({
								  title: 'Dashboard',
								  headerRight: () => (
									  <EvilIcons
										  name='user'
										  size={50}
										  color='red'
										  style={{ marginRight: 15 }}
										  onPress={() => console.log('a')}
									  />
								  )
							  })} />
				<Stack.Screen name='Followers' component={Followers}
							  options={({ navigation, route }) => ({
								  title: 'Followers',
								  headerRight: () => (
									  <EvilIcons
										  name='user'
										  size={50}
										  color='red'
										  style={{ marginRight: 15 }}
										  onPress={() => console.log('a')}
									  />
								  )
							  })} />
				<Stack.Screen name='Profile' component={Profile}
							  options={({ navigation, route }) => ({
								  title: 'Profile',
								  headerRight: () => (
									  <EvilIcons
										  name='user'
										  size={50}
										  color='red'
										  style={{ marginRight: 15 }}
										  onPress={() => console.log('a')}
									  />
								  )
							  })} />
				<Stack.Screen name='Repositories' component={Repositories}
							  options={({ navigation, route }) => ({
								  title: 'Repositories',
								  headerRight: () => (
									  <EvilIcons
										  name='user'
										  size={50}
										  color='red'
										  style={{ marginRight: 15 }}
										  onPress={() => console.log('a')}
									  />
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
