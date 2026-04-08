import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Stack } from "expo-router";

const blendModes = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "difference",
  "exclusion",
] as const;

type BlendMode = (typeof blendModes)[number];

function BlendCard({ mode }: { mode: BlendMode }) {
  return (
    <View style={styles.item}>
      <View style={styles.canvas}>
        <View style={styles.circleBlue} />
        <View style={[styles.circlePink, { mixBlendMode: mode }]} />
      </View>
      <Text style={styles.label}>{mode}</Text>
    </View>
  );
}

export default function MixBlendModeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: "Mix Blend Mode" }} />
      <Text style={styles.heading}>Mix Blend Mode</Text>
      <Text style={styles.code}>{"mixBlendMode: 'multiply' | 'screen' | ..."}</Text>
      <View style={styles.grid}>
        {blendModes.map((mode) => (
          <BlendCard key={mode} mode={mode} />
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
    color: "#fa709a",
    fontFamily: "monospace",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  item: {
    width: "47%",
    gap: 8,
  },
  canvas: {
    height: 130,
    backgroundColor: "#f0f0f0",
    borderRadius: 18,
    overflow: "hidden",
  },
  circleBlue: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#4facfe",
    position: "absolute",
    top: 25,
    left: 15,
  },
  circlePink: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#f5576c",
    position: "absolute",
    top: 25,
    left: 50,
  },
  label: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    fontFamily: "monospace",
  },
});
