import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Stack } from "expo-router";

const colors = ["#667eea", "#f093fb", "#4facfe", "#43e97b", "#fa709a", "#f5c518"];

function Section({
  label,
  code,
  gap,
  rowGap,
  columnGap,
}: {
  label: string;
  code: string;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionLabel}>{label}</Text>
      <Text style={styles.sectionCode}>{code}</Text>
      <View style={[styles.grid, { gap, rowGap, columnGap }]}>
        {colors.map((color, i) => (
          <View key={i} style={[styles.box, { backgroundColor: color }]} />
        ))}
      </View>
    </View>
  );
}

export default function FlexboxGapScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: "Flexbox Gap" }} />
      <Text style={styles.heading}>Flexbox Gap</Text>
      <Text style={styles.code}>{"gap / rowGap / columnGap"}</Text>
      <Section label="No gap" code="gap: 0" gap={0} />
      <Section label="Uniform gap" code="gap: 12" gap={12} />
      <Section label="Large gap" code="gap: 24" gap={24} />
      <Section
        label="Different row & column"
        code="rowGap: 6, columnGap: 28"
        rowGap={6}
        columnGap={28}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 24, gap: 32 },
  heading: { fontSize: 28, fontWeight: "700", color: "#fff" },
  code: {
    fontSize: 13,
    color: "#43e97b",
    fontFamily: "monospace",
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 8,
  },
  section: { gap: 8 },
  sectionLabel: { fontSize: 15, fontWeight: "600", color: "#fff" },
  sectionCode: { fontSize: 12, color: "#555", fontFamily: "monospace" },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: 72,
    height: 72,
    borderRadius: 14,
  },
});
