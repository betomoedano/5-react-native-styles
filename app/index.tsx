import { router } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

const examples = [
  { title: "Linear Gradient", route: "/linear-gradient" },
  { title: "Filter: Blur", route: "/filter-blur" },
  { title: "Box Shadow", route: "/box-shadow" },
  { title: "Flexbox Gap", route: "/flexbox-gap" },
  { title: "Mix Blend Mode", route: "/mix-blend-mode" },
];

export default function Index() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>5 React Native Styles</Text>
        <Text style={styles.subtitle}>you didnt know you could use</Text>
      </View>
      <View style={styles.buttons}>
        {examples.map((example) => (
          <Button
            key={example.route}
            title={example.title}
            onPress={() => router.push(example.route as any)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    marginTop: 32,
    marginBottom: 48,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  buttons: {
    gap: 12,
  },
});
