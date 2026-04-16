import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: '#fff',
            contentStyle: {
              backgroundColor: '#b2a297',
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
