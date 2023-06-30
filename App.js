import React from "react";
import {
  View,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
  Text,
} from "react-native";

const data = [
  require("./assets/default.png"),
  require("./assets/default.png"),
  require("./assets/default.png"),
  require("./assets/default.png"),
  require("./assets/default.png"),
  require("./assets/default.png"),
];

const App = () => {
  const windowWidth = Dimensions.get("window").width;

  // Render gallery as a grid on larger screens
  if (windowWidth >= 600) {
    const renderItem = ({ item }) => (
      <View style={styles.gridItem}>
        {/* Render your image component here */}
        <Image source={item} style={styles.image} />
      </View>
    );

    return (
      <FlatList
        data={data}
        numColumns={3} // Adjust the number of columns as needed
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    );
  }
  // Render gallery as a carousel on smaller screens
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        automaticallyAdjustContentInsets
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <Image source={item} style={styles.category} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minHeight: 50,
    gap: 5,
  },
  category: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 5,
  },
  text: {
    fontWeight: "bold",
    letterSpacing: 1,
  },
  gridItem: {
    marginTop: 100,
    flex: 1,
    aspectRatio: 1, // Maintain aspect ratio of each grid item
    margin: 5,
    borderRadius: 5,
  },
  carouselItem: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    borderRadius: 5,
  },
};

export default App;
