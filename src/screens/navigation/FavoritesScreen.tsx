import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameCard } from '../../components/GameCard';
import { NavMenu } from '../../components/NavMenu';

export default function FavoritesScreen() {

    const [activeTab, setActiveTab] = useState<'home' | 'favorites'>('favorites');

    const FAVORITES_GAMES = [
        { id: '1', title: 'GTA V', image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.png' },
        { id: '2', title: 'STAR LOX', image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&auto=format&fit=crop&q=80' },
    ];

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <StatusBar barStyle="light-content" backgroundColor="#0B132B" />

            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>Favorites</Text>
            </View>

            {/* seccion de juegos favoritos */}
            <FlatList
                data={FAVORITES_GAMES}
                numColumns={2}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.gamesList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (

                    <GameCard
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        onPress={console.log}
                        iconName="heart"
                        
                    />
                )}
            />

            <NavMenu activeTab={activeTab} onTabChange={setActiveTab} />
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
