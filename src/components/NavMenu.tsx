import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

interface NavMenuProps {
    activeTab: 'home' | 'favorites';
    onTabChange: (tab: 'home' | 'favorites') => void; 

}

export const NavMenu: React.FC<NavMenuProps> = ({ activeTab, onTabChange }) => {

    //manejo de navegacion
    const navigation = useNavigation<any>();
    const handleFavorites = () => {
        onTabChange('favorites');
        navigation.navigate('Favorites');
    }

    const handleHome = () => {
        onTabChange('home');
        navigation.navigate('Home');
    }

    return (
        <View style={styles.bottomContainer}>
            <View style={styles.bottomNav}>
                {/* tab de home */}
                <TouchableOpacity
                    onPress={handleHome}
                    style={[styles.navTab, activeTab === 'home' && styles.navTabActive]}
                >
                    <Ionicons name="home-outline" size={24} color="#FFFFFF" />
                </TouchableOpacity>

                {/* tab de favoritos */}
                <TouchableOpacity
                    onPress={handleFavorites}
                    style={[styles.navTab, activeTab === 'favorites' && styles.navTabActive]}
                >
                    <Ionicons name="heart-outline" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    bottomContainer: {
        position: 'absolute',
        bottom: 24,
        left: 0,
        right: 0,
        alignItems: 'center',

    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#1E293B',
        borderRadius: 35,
        padding: 6,
        width: 170,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    navTab: {
        flex: 1,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23,

    },
    navTabActive: {
        backgroundColor: '#334155',
    }
})