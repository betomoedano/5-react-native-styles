import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const blurLevels = [
  { blur: 0, label: "blur(0px)" },
  { blur: 3, label: "blur(3px)" },
  { blur: 8, label: "blur(8px)" },
  { blur: 16, label: "blur(16px)" },
];

function BlurCard({ blur, label }: { blur: number; label: string }) {
  return (
    <View style={styles.item}>
      <View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: "red",
            filter: "blur(8px",
          },
        ]}
      ></View>
      <View
        style={[
          styles.box,
          blur > 0 ? ({ filter: `blur(${blur}px)` } as any) : undefined,
        ]}
      >
        <View style={[styles.circle, styles.circleBlue]} />
        <View style={[styles.circle, styles.circlePink]} />
        <View style={[styles.circle, styles.circleYellow]} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default function FilterBlurScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: "Filter: Blur" }} />
      <Text style={styles.heading}>Filter: Blur</Text>
      <Text style={styles.code}>{"filter: 'blur(8px)'"}</Text>
      <View style={styles.grid}>
        {blurLevels.map((item) => (
          <BlurCard key={item.label} blur={item.blur} label={item.label} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 24, gap: 24 },
  heading: { fontSize: 28, fontWeight: "700" },
  code: {
    fontSize: 13,
    color: "#f093fb",
    fontFamily: "monospace",
    backgroundColor: "#1a1a1a",
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
  box: {
    height: 140,
    backgroundColor: "#111",
    borderRadius: 18,
    overflow: "hidden",
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
  },
  circleBlue: {
    backgroundColor: "#667eea",
    top: 10,
    left: 10,
  },
  circlePink: {
    backgroundColor: "#f5576c",
    top: 40,
    left: 45,
  },
  circleYellow: {
    backgroundColor: "#f5c518",
    top: 60,
    left: 5,
  },
  label: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "monospace",
  },
});
