import React from 'react';
import { RawgGame } from '../services/game';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

// interface GameCardProps {
//   id: string;
//   title: string;
//   image: string;
//   onPress: (id: string) => void;
//   iconName?: React.ComponentProps<typeof Feather>['name'];  //prop del icono para cambiarlo cada que se use la card
// }

interface GameCardProp {
  game: RawgGame;
  onPress: (id: number) => void;
  iconName?: React.ComponentProps<typeof Feather>['name'];  //prop del icono para cambiarlo cada que se use la card
}

export const GameCard: React.FC<GameCardProp> = ({
  game,
  onPress,
  iconName = 'arrow-up-right',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(game.id)}
      style={styles.card}
    >
      <View style={styles.cardHeader}>

        <Text style={styles.cardTitle} numberOfLines={1}>
          {game.name}
        </Text>

        <View style={styles.iconButton}>

          <Feather name={iconName} size={18} color="#FFFFFF" />

        </View>
      </View>

      <Image
        source={{
          uri: game.background_image ?? undefined,
        }}
        style={styles.cardImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'serif',
    flex: 1,
    marginRight: 6,
  },
  iconButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 145,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});