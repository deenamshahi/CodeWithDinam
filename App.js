import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Use the basic createStackNavigator instead of native stack
import BottomTabNavigator from './src/BottomTabNavigator/BottomTabNavigator';
import ProfileScreen from './src/ProfileScreen/ProfileScreen';
import EditProfileScreen from './src/ProfileScreen/EditProfileScreen';
import ChangePasswordScreen from './src/ProfileScreen/ChangePasswordScreen';
import SettingsScreen from './src/ProfileScreen/SettingsScreen';
import AboutUsScreen from './src/ProfileScreen/AboutUsScreen';
import PrivacyPolicyScreen from './src/ProfileScreen/PrivacyPolicyScreen';
import PropertyDescription from './src/PropertyDescription/PropertyDescription'; // Import the PropertyDescription screen
import EditPropertyScreen from './src/PropertyDescription/EditPropertyScreen'; // Import the EditPropertyScreen

const Stack = createStackNavigator(); // Use the regular stack navigator

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: '#f3f3f3' },
                    headerTintColor: '#333',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                <Stack.Screen 
                    name="Home" 
                    component={BottomTabNavigator} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{ title: 'Profile' }}
                />
                <Stack.Screen 
                    name="EditProfile" 
                    component={EditProfileScreen} 
                    options={{ title: 'Edit Profile' }}
                />
                <Stack.Screen 
                    name="ChangePassword" 
                    component={ChangePasswordScreen} 
                    options={{ title: 'Change Password' }}
                />
                <Stack.Screen 
                    name="Settings" 
                    component={SettingsScreen} 
                    options={{ title: 'Settings' }}
                />
                <Stack.Screen 
                    name="AboutUs" 
                    component={AboutUsScreen} 
                    options={{ title: 'About Us' }}
                />
                <Stack.Screen 
                    name="PrivacyPolicy" 
                    component={PrivacyPolicyScreen} 
                    options={{ title: 'Privacy Policy' }}
                />
                <Stack.Screen 
                    name="PropertyDescription" 
                    component={PropertyDescription} 
                    options={{ title: 'Property Details' }}
                />
                <Stack.Screen 
                    name="EditProperty" 
                    component={EditPropertyScreen}  // Add EditPropertyScreen to the stack
                    options={{ title: 'Edit Property' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
