import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function index() {
  
  const days = [
    { day: 'Mar', date: '06', isToday: false },
    { day: 'Mer', date: '06', isToday: false },
    { day: 'Jeu', date: '06', isToday: true },
    { day: 'Ven', date: '07', isToday: false },
    { day: 'Sam', date: '07', isToday: false },
  ];

  const activities = [
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'À heure' },
  ];

  // Fonction pour afficher les jours du calendrier 
  const renderDays = () => {
    return days.map((item, index) => (
      <View key={index} style={[ styles.dayBox, item.isToday && styles.todayBox, ]} >
        <Text style={[styles.date, item.isToday && styles.todayDate]}>
          {item.date}
        </Text>
        <Text style={[styles.day, item.isToday && styles.todayDay]}>
          {item.day}
        </Text>
      </View>
    ));
  };

  //  Fonction pour afficher les activités
  const renderActivities = () => {
    return activities.map((item, index) => (
      <View key={index} style={styles.activityItem}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>→</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.timeStatus}>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={[styles.status, item.status === 'À heure' ? styles.onTime : styles.late]}>
            {item.status}
          </Text>
        </View>
      </View>
    ));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* HEADER  */}
      <StatusBar  backgroundColor="#F28C5A" />
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Présences</Text>
          <View style={styles.rightSection}>
            <Text style={styles.em}>EM</Text>
            <Text style={styles.language}>Français </Text>
          </View>
        </View>

      <ScrollView style={styles.container}>
        

        {/*CALENDRIER  */}
        <View style={styles.calendarContainer}>
          <Text style={styles.month}>Janvier, 2025</Text>
          <View style={styles.daysRow}>
            {renderDays()}
          </View>
        </View>

        {/* ENTRÉE/SORTIE  */}
        <View style={styles.entryExitContainer}>
          <Text style={styles.au}>Aujourd'hui</Text>
          
          <View style={[styles.card, { marginRight: 10 }]}>
            <Text style={styles.label}>Entrée</Text>
            <Text style={styles.time}>10:20 am</Text>
            <Text style={styles.status}>En retard</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Sortie</Text>
            <Text style={styles.time}>--:-- --</Text>
            <Text style={styles.status}>À heure</Text>
          </View>
        </View>

        {/* TEMPS DE TRAVAIL  */}
        <View style={styles.workTimeContainer}>
          <Text style={styles.workTitle}>Temps de travail</Text>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={[styles.value, { color: '#333' }]}>70 j</Text>
              <Text style={styles.label}>Total</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[styles.value, { color: '#F28C5A' }]}>70 j</Text>
              <Text style={styles.label}>À heure</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[styles.value, { color: '#4CAF50' }]}>70 j</Text>
              <Text style={styles.label}>En retard</Text>
            </View>
          </View>
        </View>

        {/*ACTIVITÉS RÉCENTES  */}
        <View style={styles.activityContainer}>
          <View style={styles.activityHeader}>
            <Text style={styles.activityTitle}>Mon activité</Text>
            <Text style={styles.seeAll}>Voir tout</Text>
          </View>
          {renderActivities()}
        </View>

        {/*BOUTON */}
        <View style={styles.addButtonContainer}>
          <Text style={styles.addButtonText}>+ Nouvelle activité</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaedeeff',
    padding: 16,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 10,
    backgroundColor: '#eb8768ff',
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
    color: '#ece5e5ff',
  },

  // Calendrier
  calendarContainer: {
    marginBottom: 20,
  },
  month: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayBox: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  todayBox: {
    backgroundColor: '#F28C5A',
    borderColor: '#F28C5A',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  todayDate: {
    color: '#fff',
  },
  day: {
    fontSize: 12,
    color: '#666',
  },
  todayDay: {
    color: '#fff',
  },

  // Entrée / Sortie
  entryExitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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
    marginTop: 25,
    marginHorizontal: 2,
  justifyContent: 'space-between',
  },
  au: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000'
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  status: {
    fontSize: 12,
    color: '#FF5757',
  },

  // Temps de travail
  workTimeContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  workTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  // Activités
  activityContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#F28C5A',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconBox: {
    width: 30,
    height: 30,
    backgroundColor: '#FFE0CC',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 14,
    color: '#F28C5A',
  },
  textContainer: {
    flex: 1,
  },
  type: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  timeStatus: {
    alignItems: 'flex-end',
  },
 
  late: {
    color: '#FF5757',
  },
  onTime: {
    color: '#4CAF50',
  },

  // Bouton "Nouvelle activité"
  addButtonContainer: {
    marginTop: 20,
    backgroundColor: '#F28C5A',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
