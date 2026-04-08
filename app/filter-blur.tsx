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

function SectionHeader({
  title,
  code,
  platforms,
}: {
  title: string;
  code: string;
  platforms: "iOS · Android" | "iOS" | "Android";
}) {
  const badgeStyle =
    platforms === "iOS · Android"
      ? styles.badgeBoth
      : platforms === "iOS"
        ? styles.badgeIos
        : styles.badgeAndroid;

  return (
    <>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>{title}</Text>
        <View style={[styles.badge, badgeStyle]}>
          <Text style={styles.badgeText}>{platforms}</Text>
        </View>
      </View>
      <Text style={styles.code}>{code}</Text>
    </>
  );
}

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

function ImageFilterCard({
  filter,
  label,
}: {
  filter: object | null;
  label: string;
}) {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: IMAGE_URI }}
        style={[
          styles.imageBox,
          filter ? ({ filter: [filter] } as any) : undefined,
        ]}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default function FilterBlurScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {Platform.OS === "android" && (
        <>
          <SectionHeader
            title="blur"
            code={"filter: 'blur(8px)'"}
            platforms="Android"
          />
          <View style={styles.grid}>
            <BlurCard blur={0} label="blur(0px)" />
            <BlurCard blur={8} label="blur(8px)" />
          </View>

          <SectionHeader
            title="invert"
            code={"filter: [{invert: 1}]"}
            platforms="Android"
          />
          <View style={styles.grid}>
            <ImageFilterCard filter={null} label="original" />
            <ImageFilterCard filter={{ invert: 1 }} label="invert(1)" />
          </View>
        </>
      )}

      {Platform.OS === "android" && <View style={{ marginTop: 16 }} />}
      <SectionHeader
        title="brightness"
        code={"filter: [{brightness: 1.75}]"}
        platforms="iOS · Android"
      />
      <View style={styles.grid}>
        <ImageFilterCard filter={null} label="original" />
        <ImageFilterCard
          filter={{ brightness: 1.75 }}
          label="brightness(1.75)"
        />
      </View>

      <SectionHeader
        title="opacity"
        code={"filter: [{opacity: 0.4}]"}
        platforms="iOS · Android"
      />
      <View style={styles.grid}>
        <ImageFilterCard filter={null} label="original" />
        <ImageFilterCard filter={{ opacity: 0.4 }} label="opacity(0.4)" />
      </View>

      <SectionHeader
        title="saturate"
        code={"filter: [{saturate: 0}]"}
        platforms="Android"
      />
      <View style={styles.grid}>
        <ImageFilterCard filter={null} label="original" />
        <ImageFilterCard filter={{ saturate: 0 }} label="saturate(0)" />
      </View>

      {Platform.OS === "ios" && (
        <>
          <SectionHeader
            title="invert"
            code={"filter: [{invert: 1}]"}
            platforms="Android"
          />
          <View style={styles.grid}>
            <ImageFilterCard filter={null} label="original" />
            <ImageFilterCard filter={{ invert: 1 }} label="invert(1)" />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 24, gap: 32 },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  heading: { fontSize: 28, fontWeight: "700", color: "#111" },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeBoth: {
    backgroundColor: "#e8f5e9",
  },
  badgeIos: {
    backgroundColor: "#e3f2fd",
  },
  badgeAndroid: {
    backgroundColor: "#f3e8fd",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "monospace",
    color: "#555",
  },
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
    gap: 12,
  },
  item: {
    flex: 1,
    gap: 8,
  },
  box: {
    height: 160,
    borderRadius: 18,
    overflow: "hidden",
  },
  imageBox: {
    height: 200,
    borderRadius: 18,
    resizeMode: "cover",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
  },
  circleBlue: {
    backgroundColor: "#667eea",
    top: 10,
    left: 10,
  },
  circlePink: {
    backgroundColor: "#f5576c",
    top: 30,
    left: 50,
  },
  circleYellow: {
    backgroundColor: "#f5c518",
    top: 55,
    left: 5,
  },
  label: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "monospace",
    color: "#555",
  },
});
