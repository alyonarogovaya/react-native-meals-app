import { FlatList } from 'react-native';
import { View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';
import { useNavigation } from '@react-navigation/native';

function CategoriesScreen() {
  const navigation = useNavigation();

  function pressHandler(categoryId) {
    navigation.navigate('MealsOverview', { categoryId });
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryItem
            title={item.title}
            color={item.color}
            onPress={() => pressHandler(item.id)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
