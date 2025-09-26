// screens/PasswordScreen.tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';


type StackParamList = {
 index: undefined;
  Password: { code?: string };
};

export default function PasswordScreen() {
  const router = useRouter();
 const params = useLocalSearchParams();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  

  return (
    <ImageBackground
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
          <Text style={styles.greeting}>
            Bon retour <Text style={styles.username}>Jhon Doe</Text>,
          </Text>
          <Text style={styles.message}>Veuillez entrer votre mot de passe pour continuer.</Text>

          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword((s) => !s)}
            >
              <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: '/screens/(tabs)/home', params: { code: params.code, password } })}>
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progress}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 18,
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
    opacity: 0.85,
    textAlign: 'center',
  },
  content: {
    width: '100%',
    paddingTop: 18,
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
  },
  username: {
    color: '#F5A623',
    fontWeight: '700',
  },
  message: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 18,
  },
  inputRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    marginBottom: 16,
    paddingRight: 8,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  eyeButton: {
    padding: 8,
  },
  eyeIcon: {
    fontSize: 18,
    color: '#666',
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
    fontWeight: '700',
    fontSize: 16,
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
});
