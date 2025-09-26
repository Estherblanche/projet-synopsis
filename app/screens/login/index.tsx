import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';




export default function LoginScreen() {
  const [code, setCode] = useState('');
  const router = useRouter();

  return (
    //<SafeAreaView className='h-full W-full'>
      <ImageBackground
      className='h-full '
          source={require('@/assets/images/image.png')}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.overlay} />
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Text style={styles.logo}>SYNOPSIS ERP</Text>
        <Text style={styles.subtitle}>La performance au bout des doigts.</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Entrez votre code secret</Text>
        <TextInput
          style={styles.input}
          placeholder="Code secret"
          placeholderTextColor="#999"
          value={code}
          onChangeText={setCode}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: '/screens/login/password', params: { code } })}>
          <Text style={styles.buttonText}>Continuer</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progress}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.dot, styles.inactiveDot]} /> 
      </View>
    </View>
    </ImageBackground>
    //</SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)', 
  },
   background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
    
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.85,
  },
  content: {
    width : '100%',
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 14,
    textAlign: 'center',
    color: '#0c0c0cff',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    width: '100%',
    backgroundColor: '#F5A623',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#F5A623',
    width: 16,
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});