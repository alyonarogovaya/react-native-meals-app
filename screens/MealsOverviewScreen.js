import { StyleSheet, View, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import Meal from '../components/Meal';

function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;

  const filteredMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMeals}
        renderItem={({ item }) => <Meal item={item} />}
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
