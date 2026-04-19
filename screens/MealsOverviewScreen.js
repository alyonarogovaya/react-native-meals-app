import { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useNavigation } from '@react-navigation/native';

function MealsOverviewScreen({ route }) {
  const navigation = useNavigation();
  const { categoryId } = route.params;

  const filteredMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId),
  );

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId,
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({ title: categoryTitle });
  }, [navigation, categoryTitle]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMeals}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
