import { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Button from '@/src/components/Button';
import products from '@/assets/data/products';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
	const [selectedSize, setSelectedSize] = useState('M');
	const { id } = useLocalSearchParams();
	const product = products.find((p) => p.id.toString() === id);

	const addToCart = () => {
		console.warn('Product added, size', selectedSize);
	};

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
			<Text style={styles.selectSizeText}>Select size</Text>
			<View style={styles.sizes}>
				{sizes.map((size, index) => (
					<Pressable
						onPress={() => {
							setSelectedSize(size);
						}}
						key={index}
						style={[styles.size, { backgroundColor: selectedSize === size ? 'gainsboro' : 'white' }]}
					>
						<Text style={[styles.sizeText, { color: selectedSize === size ? 'black' : 'lightgray' }]}>
							{size}
						</Text>
					</Pressable>
				))}
			</View>
			<Text style={styles.price}>{`Price: $${product.price.toFixed(2)}`}</Text>
			<Button
				onPress={addToCart}
				text='Add to cart'
			/>
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
		marginTop: 'auto',
	},
	sizes: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 10,
	},
	size: {
		backgroundColor: 'gainsboro',
		width: 50,
		aspectRatio: 1,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	sizeText: {
		fontSize: 20,
		fontWeight: '500',
	},
	selectSizeText: {
		fontSize: 15,
		fontWeight: '500',
	},
});
