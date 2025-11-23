import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Simulation() {
  const [target, setTarget] = useState<string>("");
  const [bulan, setBulan] = useState<string>("");
  const [hasil, setHasil] = useState<string | null>(null);
  const [tujuan, setTujuan] = useState<string>("");

  const hitung = () => {
    if (!target || !bulan) return;
    const result = parseInt(target) / parseInt(bulan);
    setHasil(result.toFixed(0));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Tabungan</Text>

        {/* INPUT SECTION */}
        <View style={styles.card}>
          <TextInput
            placeholder="Target (contoh: 200.000.000)"
            placeholderTextColor="#9DB8A6"
            keyboardType="numeric"
            style={styles.input}
            value={target}
            onChangeText={setTarget}
          />

          <TextInput
            placeholder="Waktu (bulan)"
            placeholderTextColor="#9DB8A6"
            keyboardType="numeric"
            style={styles.input}
            value={bulan}
            onChangeText={setBulan}
          />

          <TextInput
            placeholder="Tujuan (contoh: DP Rumah)"
            placeholderTextColor="#9DB8A6"
            style={styles.input}
            value={tujuan}
            onChangeText={setTujuan}
          />

          {/* BUTTON GRADIENT */}
          <TouchableOpacity onPress={hitung} style={{ marginBottom: 25 }}>
            <LinearGradient
              colors={["#9C27B0", "#E91E63"]} 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientBtn}
            >
              <Text style={styles.btnText}>Hitung</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* RESULT SECTION */}
        {hasil && (
          <View style={styles.resultCard}>
            <Text style={styles.resultText}>Kamu perlu menabung:</Text>
            <Text style={styles.resultAmount}>Rp {hasil} / bulan</Text>
          </View>
        )}

        {/* GOALS SECTION */}
        <Text style={styles.sectionTitle}>Tujuan Keuangan</Text>

        <TouchableOpacity 
          style={styles.goalCard}
          onPress={() => console.log("Klik Tabungan Haji!")}
        >
          <Text style={styles.goalTitle}>Tabungan Haji</Text>
          <Text style={styles.goalSubtitle}>Rp 8.000.000 / 40.000.000</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "20%" }]} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.goalCard}
          onPress={() => console.log("Klik DP Rumah")}
        >
          <Text style={styles.goalTitle}>DP Rumah</Text>
          <Text style={styles.goalSubtitle}>Rp 12.000.000 / 100.000.000</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "12%" }]} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.goalCard}
          onPress={() => console.log("Klik Pendidikan Anak")}
        >
          <Text style={styles.goalTitle}>Pendidikan Anak</Text>
          <Text style={styles.goalSubtitle}>Rp 5.000.000 / 100.000.000</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "5%" }]} />
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#F6FBF8",
    paddingBottom: 0, 
  },

  title: { 
    fontSize: 26, 
    fontWeight: "800",
    marginBottom: 20, 
    color: "#870c6aff",
    textAlign: "left",
  },

  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E4EEE8",
    marginBottom: 20,
    elevation: 0,
    shadowOpacity: 0,
  },

  input: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#DCEADF",
  },

  /* BUTTON GRADIENT STYLE */
  gradientBtn: {
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
  },

  btnText: { 
    color: "#fff", 
    fontWeight: "700",
    fontSize: 16 
  },

  resultCard: {
    backgroundColor: "#F3E2F8",
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 6,
    borderLeftColor: "#C71798",
    marginBottom: 30,
  },

  resultText: { 
    fontSize: 15, 
    color: "#5A4A57" 
  },

  resultAmount: {
    fontSize: 26,
    fontWeight: "800",
    color: "#B80E8A",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "800",
    marginBottom: 12,
    color: "#7F0E70",
  },

  goalCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DCEADF",
    elevation: 1,
  },

  goalTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#52093E"
  },

  goalSubtitle: {
    color: "#777",
    marginTop: 4,
    marginBottom: 8
  },

  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#F1E3F2",
    borderRadius: 10,
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#C92899",
    borderRadius: 10
  }
});
