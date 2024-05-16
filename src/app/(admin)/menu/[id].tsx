import { useCart } from '@/src/provider/CartProvider';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import products from '@/assets/data/products';

const ProductDetailsScreen = () => {
	const { addItem } = useCart();
	const { id } = useLocalSearchParams();
	const product = products.find((p) => p.id.toString() === id);

	if (!product) {
		return <Text>Product not found</Text>;
	}

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: product.name }} />
			<Image
				source={{ uri: product.image }}
				resizeMode='contain'
				style={styles.image}
			/>
			<Text style={styles.price}>{`Price: $${product.price.toFixed(2)}`}</Text>
		</View>
	);
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		padding: 10,
	},
	image: {
		width: '100%',
		aspectRatio: 1,
	},
	price: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
