import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealInfo from '../components/MealInfo';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/IconButton';

function MealDetailsScreen({ route }) {
  const { id } = route.params;
  const navigation = useNavigation();
  const meal = MEALS.find((meal) => meal.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton icon="star" onPress={pressHandler} />,
    });
  }, [navigation, pressHandler]);

  function pressHandler() {
    console.log('Pressed');
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealInfo
        duration={meal.duration}
        affordability={meal.affordability}
        complexity={meal.complexity}
      />
      <View style={styles.listsContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={meal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={meal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  listsContainer: {
    marginHorizontal: 24,
  },
});
