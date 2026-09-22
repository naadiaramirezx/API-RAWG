import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface DetailsNavProps {
    isFavorite: boolean;
    onBack: () => void;
    onToggleFavorite: () => void;
}

export const DetailsNav: React.FC<DetailsNavProps> = ({ isFavorite, onBack, onToggleFavorite }) => {
    return (
        <View style={styles.bottomContainer}>
            <View style={styles.bottomNav}>
                 <TouchableOpacity
                    onPress={onBack}
                    style={styles.navTab}
                >
                    <Ionicons name="chevron-back" size={32} color="#FFFFFF" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onToggleFavorite}
                    style={styles.navTab}
                >
                    <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={30} color="#ef4c83" />
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