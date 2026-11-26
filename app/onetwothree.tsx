import { StyleSheet, Text, View } from "react-native";

// Layout exercise: ONE / TWO on top, a green row with a blue square,
// then a light-blue area with two black squares and THREE.
export default function OneTwoThree() {
  return (
    <View style={styles.screen}>
      {/* Top row: two boxes side by side */}
      <View style={styles.topRow}>
        <View style={[styles.topBox, styles.red]}>
          <Text style={styles.label}>ONE</Text>
        </View>
        <View style={[styles.topBox, styles.yellow]}>
          <Text style={styles.label}>TWO</Text>
        </View>
      </View>

      {/* Green row with a blue square in the middle */}
      <View style={styles.greenRow}>
        <View style={[styles.square, styles.blue]} />
      </View>

      {/* Light-blue area: two black squares, then THREE */}
      <View style={styles.bottom}>
        <View style={[styles.square, styles.black]} />
        <View style={[styles.square, styles.black]} />
        <Text style={styles.label}>THREE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#7AC1EE", // light blue, also shows as the thin frame
    padding: 3,
  },
  topRow: {
    flexDirection: "row",
    height: 200,
    gap: 10,
  },
  topBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greenRow: {
    height: 130,
    marginTop: 3,
    backgroundColor: "#7DC36F",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    gap: 30,
  },
  square: {
    width: 105,
    height: 88,
  },
  label: {
    fontSize: 26,
    color: "black",
  },
  red: { backgroundColor: "#DB5B48" },
  yellow: { backgroundColor: "#EFCF60" },
  blue: { backgroundColor: "#3A5FE8" },
  black: { backgroundColor: "black" },
});
