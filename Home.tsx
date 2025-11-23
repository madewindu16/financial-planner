import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Dashboard() {

  return (
    
    <ScrollView style={styles.container}>
      <SafeAreaView>
      
      {/* HEADER */}
      <View style={styles.heroHeader}>
        <Text style={styles.heroTitle}>Selamat Datang</Text>
        <Text style={styles.heroSub}>Pantau keuangan kamu</Text>
      </View>

      {/* SUMMARY CARD */}
      <View style={styles.summaryBox}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.label}>Pemasukan</Text>
            <Text style={[styles.money, { color: "#3ABF7C" }]}>Rp 5.200.000</Text>
          </View>

          <View>
            <Text style={styles.label}>Pengeluaran</Text>
            <Text style={[styles.money, { color: "#FF6B6B" }]}>Rp 2.450.000</Text>
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.label}>Saldo Bulan Ini</Text>
          <Text style={[styles.money, { color: "#16965E" }]}>Rp 2.750.000</Text>
        </View>
      </View>

      {/* CHART MOCKUP */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Grafik Pengeluaran</Text>

        <View style={styles.chartMock}>
          <View style={[styles.bar, { height: 40 }]} />
          <View style={[styles.bar, { height: 90 }]} />
          <View style={[styles.bar, { height: 65 }]} />
          <View style={[styles.bar, { height: 120 }]} />
          <View style={[styles.bar, { height: 80 }]} />
        </View>
      </View>

      <View style={{ height: 50 }} />

    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAF9",
    padding: 20,
  },

  /* HEADER PREMIUM */
  heroHeader: {
    backgroundColor: "#013b19ff",
    padding: 22,
    borderRadius: 26,
    marginBottom: 22,
    shadowColor: "#6CD196",
    shadowOpacity: 0.3,
    elevation: 6,

  },
  heroTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "white",
  },
  heroSub: {
    fontSize: 14,
    marginTop: 4,
    color: "#F0FFF5",
  },

  /* SUMMARY CARD */
  summaryBox: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#0002",
    marginBottom: 25,
  },
  label: {
    color: "#777",
    fontSize: 14,
  },
  money: {
    fontSize: 22,
    fontWeight: "700",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  /* CHART */
  chartContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#0002",
    marginBottom: 25,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },
  chartMock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 130,
  },
  bar: {
    width: 20,
    backgroundColor: "#A9EBC9",
    borderRadius: 8,
  },

  
});
