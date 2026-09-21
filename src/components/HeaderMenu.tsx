import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

export const Header : React.FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder = 'Buscar'
}) => {
    return (
        <View style={styles.searchBar}>
            <Feather 
                name="search" 
                size={20} 
                color="#e0e2e5c9" 
                style={styles.searchIcon} 
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#ccd0d7d6"
                value={value}
                onChangeText={onChangeText}
                style={styles.searchInput}
            />

        </View>
        
    )
}

const styles = StyleSheet.create({
    searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#bbc1c954',
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 18,
  },

    searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
});