import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, StatusBar } from 'react-native';

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
      <TextInput placeholder="Typing..." onChangeText={searchText => handleSearch(searchText)}/>

      <Text>{search}</Text>

      <FlatList
        data={filteredData && filteredData.length > 0 ? filteredData : data }
        renderItem={({item}) =>
          <Text>{item.name}</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
