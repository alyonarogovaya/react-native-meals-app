import { StyleSheet, Text, View } from 'react-native';

function MealInfo({ duration, complexity, affordability }) {
  return (
    <View style={styles.info}>
      <Text style={styles.infoItem}>{duration}m</Text>
      <Text style={styles.infoItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.infoItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealInfo;

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    justifyContent: 'center',
  },
  infoItem: {
    fontSize: 12,
  },
});
