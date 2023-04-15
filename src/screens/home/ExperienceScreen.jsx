import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Experience from "./Experience";

export default function HomeScreen() {
  const data = [
    {
      id: 1,
      company: "Teknasyon",
      title: "Frontend Dev",
      startYear: "2021",
      endYear: "Present",
      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/qwh9lpus86lki8z8mppb",
    },
    {
      id: 2,
      company: "Fibabanka",
      title: "Fullstack Dev",
      startYear: "2020",
      endYear: "2021",
      image:
        "https://www.fibabanka.com.tr/images/default-source/default-album/gorsel-galeri.jpg?sfvrsn=27116bc7_4",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CV Projem</Text>
      </View>
      <View style={styles.userInfo}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1619677903628664833/uBGimaU__400x400.jpg",
          }}
        />
        <View>
          <Text style={styles.name}>Zafer AYAN</Text>
          <Text style={styles.title}>Frontend Dev.</Text>
        </View>
      </View>
      <View style={styles.header2}>
        <Text style={styles.header2Text}>Deneyim</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Experience item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

// JSS: JS-in-CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 22,
    color: "white",
    fontWeight: "500",
  },
  userInfo: {
    alignSelf: "center",
    gap: 16,
  },
  avatar: {
    marginTop: 16,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    textAlign: "center",
    fontSize: 22,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
  },
  header2: {
    margin: 16,
  },
  header2Text: {
    fontSize: 22,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
