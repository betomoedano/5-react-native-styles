import { Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const IMAGE_URI =
  "https://d3ynb031qx3d1.cloudfront.net/platano/before-after/avif/avatar-3d-before.avif";

const blendModes = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
] as const;

type BlendMode = (typeof blendModes)[number];

function BlendCard({ mode }: { mode: BlendMode }) {
  return (
    <View style={styles.item}>
      <View style={styles.canvas}>
        <Image source={{ uri: IMAGE_URI }} style={styles.image} />
        {mode !== "normal" && (
          <View style={[styles.overlay, { mixBlendMode: mode } as any]} />
        )}
      </View>
      <Text style={styles.label}>{mode}</Text>
    </View>
  );
}

export default function MixBlendModeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: "Mix Blend Mode" }} />
      <Text style={styles.heading}>mixBlendMode</Text>
      <Text style={styles.code}>
        {"mixBlendMode: 'multiply' | 'screen' | ..."}
      </Text>
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
    color: "purple",
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
    height: 160,
    borderRadius: 18,
    overflow: "hidden",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "orange",
  },
  label: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    fontFamily: "monospace",
  },
});
