import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function index() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(231, 125, 53, 1)' }}>
            <StatusBar barStyle="light-content" backgroundColor="#F28C5A" />
             {/* HEADER  */}
                <View style={styles.header}>
                    <Text style={styles.title}>Congés</Text>
                    <View style={styles.rightSection}>
                        <Text style={styles.em}>EM</Text>
                        <Text style={styles.language}>Français </Text>
                    </View>
                </View>
                {/* CONTENU  */}
            <ScrollView style={styles.container}>
               <View style={styles.entryExitContainer}>
                          <View style={[styles.card1, { marginRight: 10 }]}>
                            <Text style={styles.label}>Toute les demandes</Text>
                            <Text style={styles.numeric}>0</Text>
                          </View>
                
                          <View style={styles.card1}>
                            <Text style={styles.label}>Demandes approuvees</Text>
                            <Text style={styles.numeric}>0</Text>
                          </View>
                </View>
                <View style={styles.entryExitContainer}>
                          
                         <View style={[styles.card , { marginRight: 10 }]}>
                            <Text style={styles.label}>Demandes en attente</Text>
                            <Text style={styles.numeric}>0</Text>
                          </View>
                           <View style={styles.card}>
                            <Text style={styles.label}>Demandes rejetee</Text>
                            <Text style={styles.numeric}>0</Text>
                          </View>
                </View>
                </ScrollView>
                
           </SafeAreaView>
            )
}
const styles = StyleSheet.create({
    container: {
    backgroundColor: '#c5d4e0ff',
    padding: 16,
    },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 10,
  },
  backArrow: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  rightSection: {
    flexDirection: 'row',
    gap: 10,
  },
  em: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  language: {
    fontSize: 14,
    color: '#fff',
  },
entryExitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card1: {
    flex: 1,
    backgroundColor: '#c8f3f5ff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderColor: '#1266f8ff',
    marginTop: 23,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderColor: '#1266f8ff',
    marginTop: 23,

  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  numeric: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  



});