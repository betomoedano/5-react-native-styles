import { ScrollView, StyleSheet, View } from "react-native";

export default function LinearGradientScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <View
        style={[
          styles.gradientBox,
          {
            experimental_backgroundImage:
              "linear-gradient(135deg, orange 60%, cyan)",
          },
        ]}
      />
      <View
        style={[
          styles.gradientBox,
          {
            experimental_backgroundImage:
              "linear-gradient( to right, red 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%)",
          },
        ]}
      />
      <View
        style={[
          styles.gradientBox,
          {
            experimental_backgroundImage:
              "linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)",
          },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gradientBox: { height: 110, borderRadius: 18, marginBottom: 10 },
});
