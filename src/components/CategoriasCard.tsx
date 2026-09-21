import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { Genre } from '../interfaces/game';



interface CategoriasCardProps {
    category: Genre[];    //category recibe datos de generos
    selectedCategory: string;
    onSelectCategory: (category: Genre) => void;
}

export const CategoryCard : React.FC<CategoriasCardProps> = ({
    category,
    selectedCategory,
    onSelectCategory,
}) => {

    return(
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={category}

        keyExtractor = {(item) => item.id.toString()}

        contentContainerStyle={styles.categoriesList}
        
        renderItem={({item})=> {
            const isSelected = item.slug === selectedCategory;
            return(
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onSelectCategory(item)}
                    style={styles.categoryItem}
                >
                    {isSelected ? (
                        <LinearGradient
                        colors={['#695CE0', '#D64781']}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.categoryBadge}
                        >
                        <Text style={styles.categoryTextActive}>
                            {item.name}
                        </Text>

                        </LinearGradient>
                    ) : (
                        <View style={styles.categoryBadgeInactive}>
                            <Text style={styles.categoryTextInactive}>
                                {item.name}
                            </Text>
                        </View>
                    )}

                </TouchableOpacity>
            )
        }}
        />

    )
}

const styles = StyleSheet.create({
  categoriesList: {
    paddingBottom: 16,
  },
  categoryItem: {
    marginRight: 10,
  },
  categoryBadge: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 20,
  },
  categoryBadgeInactive: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#1E293B',
  },
  categoryTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'serif',
  },
  categoryTextInactive: {
    color: '#eceef0',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'serif',
  },
})