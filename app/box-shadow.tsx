import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const shadows = [
  {
    label: "Basic",
    shadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    accent: "#888",
  },
  {
    label: "Colored — Purple",
    shadow: "0 4px 24px rgba(102, 126, 234, 0.8)",
    accent: "#667eea",
  },
  {
    label: "Colored — Pink",
    shadow: "0 4px 24px rgba(245, 87, 108, 0.8)",
    accent: "#f5576c",
  },
  {
    label: "Multi-layer",
    shadow: "0 2px 4px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(67, 233, 123, 0.5)",
    accent: "#43e97b",
  },
];

export default function BoxShadowScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: "Box Shadow" }} />
      <Text style={styles.heading}>Box Shadow</Text>
      <Text style={styles.code}>{"boxShadow: '0 4px 24px rgba(...)'"}</Text>
      <View style={styles.list}>
        {shadows.map((s) => (
          <View
            key={s.label}
            style={[styles.card, { boxShadow: s.shadow } as any]}
          >
            <View style={[styles.dot, { backgroundColor: s.accent }]} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{s.label}</Text>
              <Text style={styles.cardCode}>{s.shadow}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 24, gap: 24 },
  heading: { fontSize: 28, fontWeight: "700", color: "#111" },
  code: {
    fontSize: 13,
    color: "#4facfe",
    fontFamily: "monospace",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 8,
  },
  list: { gap: 28 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  dot: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  cardText: { flex: 1, gap: 4 },
  cardTitle: { fontSize: 15, fontWeight: "600", color: "#111" },
  cardCode: { fontSize: 11, color: "#888", fontFamily: "monospace" },
});
