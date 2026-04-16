import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
} from 'react-native';

function Meal({ item }) {
  const { title, imageUrl, duration, complexity, affordability } = item;

  return (
    <View style={styles.meal}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        onPress={() => {}}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Meal;

const styles = StyleSheet.create({
  meal: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 4,
  },
  button: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.25,
  },
  image: {
    width: '100%',
    aspectRatio: 1 / 1,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    justifyContent: 'center',
  },
  detailItem: {
    fontSize: 12,
  },
});
