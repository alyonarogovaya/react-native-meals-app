import { StyleSheet, Text, View } from 'react-native';

function List({ data }) {
  return data.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    backgroundColor: '#351401',
  },
  text: {
    color: 'white',
  },
});
