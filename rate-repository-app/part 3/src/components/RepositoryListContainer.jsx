import React, {useState} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import RepositoryItem  from './RepositoryItem';
import { FlatList, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import SortPicker from './SortPicker';

import { useDebouncedCallback } from 'use-debounce';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  header: {
      paddingHorizontal: 16,
    },
    bar: {
      backgroundColor: 'white',
      marginTop:10,
      borderRadius:5
    }
});


const Header = ({ sortType, setSortType, searchKeyword, setSearchKeyword }) => {
  const [searchValue, setSearchValue] = useState(searchKeyword);

  const debouncedSetSearchKeyword = useDebouncedCallback((text) => setSearchKeyword(text), 500);

  return (
    <View style={styles.header}>
      <TextInput
        style={styles.bar}
        value={searchValue}
        autoCapitalize="none"
        placeholder="Search..."
        onChangeText={(text) => {
          setSearchValue(text);
          debouncedSetSearchKeyword(text);
        }}
      />
      <SortPicker sortType={sortType} setSortType={setSortType} />
    </View>
  );
};



const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { sortType, setSortType, searchKeyword, setSearchKeyword } = this.props;

    return (
      <Header
        sortType={sortType}
        setSortType={setSortType}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    );
  };

  render() {
    const { repositories } = this.props;

    const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    return (
      <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={this.renderHeader}
      renderItem={({ item }) => (
        <Link to={`/repository/${item.id}`} component={Pressable}>
          <RepositoryItem item={item}/>
        </Link>
      )}
    />
    );
  }
}

export default RepositoryListContainer;