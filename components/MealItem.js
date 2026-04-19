import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import MealInfo from './MealInfo';

function MealItem({ item }) {
  const { id, title, imageUrl, duration, complexity, affordability } = item;
  const navigation = useNavigation();

  function navigate() {
    navigation.navigate('MealDetails', { id });
  }

  return (
    <View style={styles.meal}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        onPress={navigate}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealInfo
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

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
});
