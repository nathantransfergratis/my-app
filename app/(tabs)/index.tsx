import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.layout}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={[styles.button, { backgroundColor: "red" }]}>
          Button with array usage
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Text style={{ ...styles.button, backgroundColor: "green" }}>
          Button with destructuring
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  button: {
    marginTop: 60,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 20,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
});
