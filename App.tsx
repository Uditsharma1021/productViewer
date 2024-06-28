import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast, { ToastRef } from 'react-native-toast-message';
import ProductList from './src/components/ProductList';
import { products } from './src/components/MockProducts';

const Stack = createStackNavigator();

const App = () => {
    const [cartItems, setCartItems] = useState<Array<string>>([]);
    const [searchText, setSearchText] = useState<string>('');

    const addToCart = (product:any) => {
        console.log("product", product)
        setCartItems([...cartItems, product]);
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: `${product.name} added to cart`
        });
    };

    const handleSearchTextChange = (text:string) => {
      setSearchText(text);
      console.log("search",text);
    };
      // Logic for filtering products based on searchText
    
      const filterProducts = () => {
        return products.filter(product => {
            const name = (product.name || '').toUpperCase(); // Default to empty string if name is undefined
            const category = (product.category || '').toUpperCase(); // Default to empty string if category is undefined
            
            
            return name.includes(searchText?.toUpperCase()) || category.includes(searchText?.toUpperCase());
        });
    };
      


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ProductList">
                <Stack.Screen name="ProductList" options={{ title: 'Product Viewer' }}>
                    {(props) => (
                        <View style={styles.container}>
                            <TextInput
                                style={styles.input}
                                placeholder="Search by name or category"
                                onChangeText={text => handleSearchTextChange(text)}
                                value={searchText}
                            />
                            <ProductList products={filterProducts()} addToCart={addToCart} />
                        </View>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
            <Toast/>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10
    },
    input: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderRadius: 10
    }
});

export default App;
