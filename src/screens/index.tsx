import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');

export default function SplashScreen() {

    const navigation = useNavigation<any>();
    const handleStart = () => {
      navigation.navigate('Home');
    };
    

    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fffafa" />

            {/* imagen de fondo */}
            <View style={styles.imageContainer}>
                <Image
                source={require('../../assets/images/fondo.png')}
                style={styles.headerImage}
                resizeMode="cover"
                />
                
              
            </View>

            {/*logo y titulo */}
            <View style={styles.centerContent}>
                <Image
                source={require('../../assets/images/logotipo.png')}
                style={styles.logoImage}
                resizeMode="contain"    //evita que se deforme
                />
                <Text style={styles.title}>DEXVERSE</Text>
            </View>

            {/* boton de iniciar */}
            <View style={styles.footer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleStart}
                    style={styles.buttonWrapper}>
                        <LinearGradient
                            colors={['#76488A', '#7689DE']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.buttonGradient}
                            >
                            <Text style={styles.buttonText}>Iniciar</Text>
                        </LinearGradient>
             </TouchableOpacity>

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imageContainer: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height * 0.60,
    filter: 'blur(1px)',
  },

  headerImage: {
    width: '100%',
    height: '100%',
    //rotar la imagen 180 grados
    transform: [{ rotate: '180deg' }],
    opacity: 0.5,
    
  },

  centerContent:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.15,
  },

  logoImage:{
    width: width ,
    height: height * 0.30,
  },


  title: {
    marginBottom: 10,
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 2,
    fontFamily: 'serif',
  },

  footer: {
    width: '100%',
    paddingHorizontal: 40,
    paddingBottom: 70,
    alignItems: 'center',
  },

  buttonWrapper: {
    width: '76%',
    height: 70,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.28)', // Sutil borde traslúcido
  },

  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'serif',
    letterSpacing: 0.5,
  },
});