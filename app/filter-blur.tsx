import { Stack } from "expo-router";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const IMAGE_URI =
  "https://d3ynb031qx3d1.cloudfront.net/platano/before-after/avif/avatar-3d-before.avif";

const blurLevels = [
  { blur: 0, label: "blur(0px)" },
  { blur: 3, label: "blur(3px)" },
  { blur: 8, label: "blur(8px)" },
  { blur: 16, label: "blur(16px)" },
];

const brightnessLevels = [
  { value: 0.25, label: "brightness(0.25)" },
  { value: 0.5, label: "brightness(0.5)" },
  { value: 1, label: "brightness(1)" },
  { value: 1.75, label: "brightness(1.75)" },
];

const opacityLevels = [
  { value: 1, label: "opacity(1)" },
  { value: 0.75, label: "opacity(0.75)" },
  { value: 0.4, label: "opacity(0.4)" },
  { value: 0.1, label: "opacity(0.1)" },
];

const saturateLevels = [
  { value: 0, label: "saturate(0)" },
  { value: 0.5, label: "saturate(0.5)" },
  { value: 1, label: "saturate(1)" },
  { value: 3, label: "saturate(3)" },
];

const invertLevels = [
  { value: 0, label: "invert(0)" },
  { value: 0.25, label: "invert(0.25)" },
  { value: 0.75, label: "invert(0.75)" },
  { value: 1, label: "invert(1)" },
];

function BlurCard({ blur, label }: { blur: number; label: string }) {
  return (
    <View style={styles.item}>
      <View
        style={[
          styles.box,
          blur > 0 ? { filter: `blur(${blur}px)` } : undefined,
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

function ImageFilterCard({ filter, label }: { filter: object; label: string }) {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: IMAGE_URI }}
        style={[styles.imageBox, { filter: [filter] } as any]}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default function FilterBlurScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: "Filter: Blur" }} />

      {Platform.OS === "ios" ? (
        <>
          <Text style={styles.heading}>brightness</Text>
          <Text style={styles.code}>{"filter: [{brightness: 1.75}]"}</Text>
          <View style={styles.grid}>
            {brightnessLevels.map((item) => (
              <ImageFilterCard
                key={item.label}
                filter={{ brightness: item.value }}
                label={item.label}
              />
            ))}
          </View>

          <Text style={styles.heading}>opacity</Text>
          <Text style={styles.code}>{"filter: [{opacity: 0.4}]"}</Text>
          <View style={styles.grid}>
            {opacityLevels.map((item) => (
              <ImageFilterCard
                key={item.label}
                filter={{ opacity: item.value }}
                label={item.label}
              />
            ))}
          </View>
        </>
      ) : (
        <>
          <Text style={styles.heading}>blur</Text>
          <Text style={styles.code}>{"filter: 'blur(8px)'"}</Text>
          <View style={styles.grid}>
            {blurLevels.map((item) => (
              <BlurCard key={item.label} blur={item.blur} label={item.label} />
            ))}
          </View>

          <Text style={styles.heading}>saturate</Text>
          <Text style={styles.code}>{"filter: [{saturate: 3}]"}</Text>
          <View style={styles.grid}>
            {saturateLevels.map((item) => (
              <ImageFilterCard
                key={item.label}
                filter={{ saturate: item.value }}
                label={item.label}
              />
            ))}
          </View>

          <Text style={styles.heading}>invert</Text>
          <Text style={styles.code}>{"filter: [{invert: 1}]"}</Text>
          <View style={styles.grid}>
            {invertLevels.map((item) => (
              <ImageFilterCard
                key={item.label}
                filter={{ invert: item.value }}
                label={item.label}
              />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 24, gap: 24 },
  heading: { fontSize: 28, fontWeight: "700", color: "#111" },
  code: {
    fontSize: 13,
    color: "#9b59b6",
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
  box: {
    height: 140,
    borderRadius: 18,
    overflow: "hidden",
  },
  imageBox: {
    height: 140,
    borderRadius: 18,
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
    color: "#555",
  },
});
