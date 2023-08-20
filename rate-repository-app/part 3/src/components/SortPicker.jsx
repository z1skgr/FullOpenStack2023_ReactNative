import React from 'react';
import { Picker } from '@react-native-picker/picker';

const SortPicker = ({ sortType, setSortType }) => {
  return (
    <Picker
      selectedValue={sortType}
      onValueChange={(itemValue) => setSortType(itemValue)}
      prompt="Select a sort type"
    >
      <Picker.Item label="Most recent" value="most-recent" />
      <Picker.Item label="Highest rated" value="highest-rated" />
      <Picker.Item label="Lowest rated" value="lowest-rated" />
    </Picker>
  );
};

export default SortPicker;