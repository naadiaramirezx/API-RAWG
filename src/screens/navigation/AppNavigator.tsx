import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../index';
import HomeScreen from '../HomeScreen';
import FavoritesScreen from '../FavoritesScreen';
import GameDetailScreen from '../GameDetailScreen';

//gestor de navegacion
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            {/*pantalla que se muestra al abrir la aplicación*/}
            <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Inicio" component={SplashScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Favorites" component={FavoritesScreen}/>
                <Stack.Screen name="GameDetail" component={GameDetailScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}