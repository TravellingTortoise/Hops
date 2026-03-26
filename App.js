
import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from "react-native";

const products = [
  {
    "name": "HopBurst Cascade",
    "aromas": [
      "citrus",
      "grapefruit"
    ],
    "stage": "Dry hop / Late addition",
    "styles": [
      "lager",
      "ale",
      "ipa"
    ],
    "dosage": "10\u201340 g/hl"
  },
  {
    "name": "HopBurst Citrulicious",
    "aromas": [
      "citrus",
      "tropical"
    ],
    "stage": "Dry hop / Late addition",
    "styles": [
      "lager",
      "ale",
      "ipa"
    ],
    "dosage": "10\u201340 g/hl"
  },
  {
    "name": "HopBurst Centennial",
    "aromas": [
      "citrus",
      "pine",
      "floral"
    ],
    "stage": "Dry hop / Late addition",
    "styles": [
      "lager",
      "ale",
      "ipa"
    ],
    "dosage": "10\u201340 g/hl"
  },
  {
    "name": "HopBurst Mosaic (Magnifico)",
    "aromas": [
      "tropical",
      "berry",
      "citrus"
    ],
    "stage": "Dry hop / Late addition",
    "styles": [
      "lager",
      "ale",
      "ipa"
    ],
    "dosage": "10\u201340 g/hl"
  },
  {
    "name": "HopPlus Tropical",
    "aromas": [
      "tropical",
      "mango",
      "pineapple"
    ],
    "stage": "Cold side",
    "styles": [
      "ipa"
    ],
    "dosage": "5\u201340 g/hl"
  },
  {
    "name": "HopPlus Mango IPA",
    "aromas": [
      "mango",
      "tropical"
    ],
    "stage": "Cold side",
    "styles": [
      "ipa"
    ],
    "dosage": "20\u201340 g/hl"
  },
  {
    "name": "HopPlus Orange Candy",
    "aromas": [
      "citrus",
      "orange"
    ],
    "stage": "Cold side",
    "styles": [
      "lager",
      "ale",
      "ipa"
    ],
    "dosage": "10\u201340 g/hl"
  },
  {
    "name": "HopPlus Grapefruit IPA",
    "aromas": [
      "grapefruit",
      "citrus"
    ],
    "stage": "Cold side",
    "styles": [
      "ipa"
    ],
    "dosage": "20\u201340 g/hl"
  },
  {
    "name": "HopAlpha ISO 30%",
    "aromas": [
      "bittering"
    ],
    "stage": "Pre/Post fermentation",
    "styles": [
      "all"
    ],
    "dosage": "Varies"
  },
  {
    "name": "HopGain FLOE Citra",
    "aromas": [
      "citrus",
      "tropical"
    ],
    "stage": "Whirlpool",
    "styles": [
      "lager",
      "ale",
      "ipa"
    ],
    "dosage": "5\u2013100 g/hl"
  },
  {
    "name": "HopSensation IPA",
    "aromas": [
      "hoppy",
      "citrus"
    ],
    "stage": "Cold side",
    "styles": [
      "ipa"
    ],
    "dosage": "10\u201340 g/hl"
  },
  {
    "name": "HopZero Fruity",
    "aromas": [
      "fruity"
    ],
    "stage": "Post fermentation",
    "styles": [
      "low alcohol"
    ],
    "dosage": "10\u201340 g/hl"
  }
];

export default function App() {
  const [mode, setMode] = useState("aroma");
  const [filter, setFilter] = useState("");

  const filtered = products.filter(p => {
    if (!filter) return true;
    return mode === "aroma"
      ? p.aromas.includes(filter)
      : p.styles.includes(filter);
  });

  const uniqueAromas = [...new Set(products.flatMap(p => p.aromas))];
  const uniqueStyles = [...new Set(products.flatMap(p => p.styles))];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hop Selector</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => setMode("aroma")} style={styles.button}>
          <Text>Aroma</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode("style")} style={styles.button}>
          <Text>Beer Style</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={{marginBottom:10}}>
        {(mode === "aroma" ? uniqueAromas : uniqueStyles).map((item, i) => (
          <TouchableOpacity key={i} onPress={() => setFilter(item)} style={styles.filter}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {filtered.map((p, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.name}>{p.name}</Text>
          <Text>Aroma: {p.aromas.join(", ")}</Text>
          <Text>Stage: {p.stage}</Text>
          <Text>Styles: {p.styles.join(", ")}</Text>
          <Text>Dosage: {p.dosage}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  row: { flexDirection: "row", gap: 10, marginBottom: 10 },
  button: { padding: 10, backgroundColor: "#ddd", borderRadius: 10 },
  filter: { padding: 8, backgroundColor: "#eee", marginRight: 5, borderRadius: 8 },
  card: { padding: 10, backgroundColor: "#fafafa", marginBottom: 10, borderRadius: 10 },
  name: { fontWeight: "bold" }
});
