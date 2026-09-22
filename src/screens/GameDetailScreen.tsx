import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DetailsNav } from '../components/DetailsNav';
import { GameDetails, RawgGame } from '../services/game';
import { getGameDetails } from '../services/rawgApi';
import { isFavorite, toggleFavorite } from '../services/favorites';
import { Ionicons } from '@expo/vector-icons';

export default function GameDetailScreen() {
    //navegacion
    const navigation = useNavigation<any>();

    const route = useRoute<any>();

    //game id recibido desde el catalogo
    const game: RawgGame = route.params.game;

    const [details, setDetails] = useState<GameDetails | null>(null);

    const [favorite, setFavorite] = useState(isFavorite(game.id));

    //hook para obtener los detalles del juego
    useEffect(() => {
        getGameDetails(game.id)
            .then(setDetails)
            .catch(() => setDetails({
                id: game.id,
                name: game.name,
                slug: '',
                background_image: game.background_image,
                rating: 0,
                released: '',
                genres: [],
                developers: [],
                platforms: [],
            }));
    }, [game.id, game.name, game.background_image]);


    const activeGame = details ?? game;


    const handleToggleFavorite = () => {
        setFavorite(toggleFavorite(game));
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <StatusBar barStyle="light-content" backgroundColor="#06112F" />
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Image
                    source={{ uri: activeGame.background_image ?? undefined }}
                    style={styles.cover}
                    resizeMode="cover"
                />

                {!details && <ActivityIndicator color="#FFFFFF" style={styles.loader} />}

                <Text style={styles.title}>{activeGame.name}</Text>
                <Text style={styles.rating}> 
                    <Ionicons name="star" size={12} color="#ead00d"/>
                    {details?.rating?.toFixed(2) ?? '0.00'}
            
                </Text>

                {details && (
                    <View style={styles.info}>
                        <Text style={styles.detailText}>
                            <Text style={styles.label}>Género: </Text>
                            {details.genres.map((genre) => genre.name).join(', ') || 'Sin género'}
                        </Text>
                        <Text style={styles.detailText}>
                            <Text style={styles.label}>Desarrollador: </Text>
                            {details.developers.map((developer) => developer.name).join(', ') || 'Sin información'}
                        </Text>
                        <Text style={styles.detailText}>
                            <Text style={styles.label}>Plataformas:</Text>
                            {'\n'}
                            {details.platforms.map(({ platform }) => platform.name).join('\n') || 'Sin información'}
                        </Text>
                    </View>
                )}
            </ScrollView>

            <DetailsNav
                isFavorite={favorite}
                onBack={() => navigation.navigate('Home')}
                onToggleFavorite={handleToggleFavorite}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#06112F' },
    content: { paddingHorizontal: 22, paddingBottom: 120 },
    cover: { width: '100%', height: 285, borderRadius: 18, marginTop: 18 },
    loader: { marginTop: 18 },
    title: { color: '#FFFFFF', fontFamily: 'serif', fontSize: 23, fontWeight: '700', marginTop: 26 },
    rating: { color: '#FFFFFF', fontFamily: 'serif', fontSize: 16, marginTop: 5 },
    info: { marginTop: 22, gap: 10 },
    detailText: { color: '#B9BED0', fontFamily: 'serif', fontSize: 16, lineHeight: 25 },
    label: { color: '#FFFFFF', fontWeight: '700' },
});