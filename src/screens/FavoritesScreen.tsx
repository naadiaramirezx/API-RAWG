import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, StatusBar, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameCard } from '../components/GameCard'
import { NavMenu } from '../components/NavMenu';
import { RawgGame } from '../services/game';
import { getFavorites } from '../services/favorites';

export default function FavoritesScreen() {

    //juegos favoritos
    const [games, setGames] = useState<RawgGame[]>([]);
    

    useFocusEffect(useCallback(() => {
        setGames(getFavorites());
    }, []));

    //navegacion
    const navigation = useNavigation<any>();

    const [activeTab, setActiveTab] =
     useState<'home' | 'favorites'>('favorites');

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <StatusBar barStyle="light-content" backgroundColor="#0B132B" />

            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>Favorites</Text>
            </View>

            {/* seccion de juegos favoritos */}
            <FlatList
                data={games}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.gamesList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (

                    <GameCard
                        game={item}
                        onPress={() => navigation.navigate('GameDetail', { game: item })}
                        iconName="heart"

                    />
                )}
            />

            <NavMenu 
                activeTab={activeTab} 
                onTabChange={setActiveTab} 
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#06112F', // Fondo azul marino oscuro
    },
    headerView: {
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    headerTitle: {
        fontSize: 26,
        color: '#FFFFFF',
        fontWeight: '700',
        fontFamily: 'serif',
        marginBottom: 16,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    gamesList: {
        paddingHorizontal: 20,
        paddingBottom: 90,

    }
})
