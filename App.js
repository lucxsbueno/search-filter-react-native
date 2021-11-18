import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {

  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Amazon Prime Video"
    },
    {
      id: 2,
      name: "Netflix"
    },
    {
      id: 3,
      name: "HBO Max"
    },
    {
      id: 4,
      name: "Paramount+"
    },
    {
      id: 5,
      name: "Disney+"
    },
    {
      id: 6,
      name: "Directv GO"
    },
    {
      id: 7,
      name: "Apple TV+"
    },
    {
      id: 8,
      name: "Telecine Play"
    },
    {
      id: 9,
      name: "Globo Play"
    },
    {
      id: 10,
      name: "Claro Now"
    },
  ]);
  const [filteredData, setFilteredData] = React.useState([]);

  const handleSearch = (searchText) => {
    setSearch(searchText);

    let filteredData = data.filter(item => {
      return item.name.includes(searchText);
    });

    setFilteredData(filteredData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput placeholder="Type..." onChangeText={searchText => handleSearch(searchText)} style={styles.searchInput}/>
      </View>

      <Text style={styles.helperText}>Resultados para: {search}</Text>

      <FlatList
        data={filteredData && filteredData.length > 0 ? filteredData : data }
        renderItem={({item}) =>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        }
        keyExtractor={(item) => item.id.toString()}
        />

      <StatusBar barStyle="dark-content" backgroundColor="#E9E9E9" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchInput: {
    height: 56,
    paddingLeft: 20,
    borderWidth: 2,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  item: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  itemName: {
    fontSize: 18
  },
  helperText: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 10,
  }
});
