import { Image, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: "https://i.pravatar.cc/200" }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Windu</Text>
      <Text style={styles.email}>windu@example.com</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Status Keuangan</Text>
        <Text style={styles.cardText}>Stabil • Baik • Rekomendasi menabung Rp 500.000/bulan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#fff" },
  avatar: { width: 110, height: 110, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: "bold", color: "#2e7d32" },
  email: { color: "#777", marginBottom: 20 },
  card: {
    width: "100%",
    backgroundColor: "#e8f5e9",
    padding: 20,
    borderRadius: 15
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#1b5e20" },
  cardText: { fontSize: 14, marginTop: 5 }
});
