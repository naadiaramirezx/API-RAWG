import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, StatusBar, FlatList, ActivityIndicator, } from 'react-native';
import { Header } from '../components/HeaderMenu';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryCard } from '../components/CategoriasCard';
import { GameCard } from '../components/GameCard';
import { NavMenu } from '../components/NavMenu';
import { getGames, getGenres, getGamesByGenres } from '../services/rawgApi';
import { Genre, RawgGame } from '../services/game';

export default function HomeScreen() {
    const navigation = useNavigation<any>();

    // interface Generos {
    //     id: number
    //     name: string
    //     slug: string
    // }

    //juegos
    const [games, setGames] = useState<RawgGame[]>([]);

    //carga y errores
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //buscador
    const [search, setSearch] = useState('');

    //categorias
    const [categories, setCategories] = useState<Genre[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('');



    //navegacion
    const [activeTab, setActiveTab] =
        useState<'home' | 'favorites'>('home');

    //Obtener todos los juegos o los juegos de la categoria seleccionada.
    useEffect(() => {
        const loadGames = async () => {
            setLoading(true);
            setError('');

            try {
                const rawgGames = selectedCategory
                    ? await getGamesByGenres(selectedCategory)
                    : await getGames();

                setGames(
                    rawgGames
                        .filter((game) => game.background_image)
                );
            } catch {
                setError('No se pudieron cargar los juegos');
            } finally {
                setLoading(false);
            }
        };

        loadGames();
    }, [selectedCategory]);

    //obtener categorias
    useEffect(() => {
        const loadCategories = async () => {
            try {
                const rawgCategories = await getGenres();
                setCategories(rawgCategories)
            } catch {
                setError('No se pudieron cargar las categorias');
            }
        }

        loadCategories();
    }, []);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="light-content" backgroundColor="#0B132B" />

            {/* parte del header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Explora tus juegos favoritos</Text>
                <Header value={search} onChangeText={setSearch} />

                {/* Card de categorias */}
                <CategoryCard
                    category={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={(category) => {
                        setSelectedCategory(category.slug);
                    }}
                />
            </View>



            {/* Card de juegos */}
            {loading && (
                <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
            )}

            {!!error && <Text style={styles.error}>{error}</Text>}

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
                        iconName="arrow-up-right"
                    />
                )}
            />

            {/* menu de navegacion */}
            <NavMenu 
                activeTab={activeTab} 
                onTabChange={setActiveTab} 
            />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#06112F', // Fondo azul marino oscuro
    },

    header: {
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

    gamesList: {
        paddingHorizontal: 16,
        paddingBottom: 90,
    },

    loader: {
        marginTop: 24,
    },

    error: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 24,
    },

    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
});