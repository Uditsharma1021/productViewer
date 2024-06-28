import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProductList = ({ products, addToCart }) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				{products.map((product) => (
					<View key={product.id} style={styles.product}>
						<Image source={product.image} style={styles.image} />
						<Text style={styles.name}>{product.name}</Text>
						<Text style={styles.price}>{product.price}Rs</Text>
						<TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
							<Text style={styles.buttonText}>Add to Cart</Text>
						</TouchableOpacity>
					</View>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		marginTop: 10
	},
	product: {
		width: '48%',
		marginBottom: 20,
		backgroundColor: '#fff',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	image: {
		width: '100%',
		height: 200,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	name: {
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 10,
		marginHorizontal: 10
	},
	price: {
		fontSize: 14,
		marginHorizontal: 10,
		marginBottom: 10
	},
	button: {
		backgroundColor: '#4CAF50',
		paddingVertical: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 16
	}
});

export default ProductList;
