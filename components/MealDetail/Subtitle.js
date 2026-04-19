import { StyleSheet, View, Text } from 'react-native';

function Subtitle(props) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
  },
});
