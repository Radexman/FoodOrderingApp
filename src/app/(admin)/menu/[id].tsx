import { useCart } from '@/src/provider/CartProvider';
import { Link, Stack, router, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import products from '@/assets/data/products';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProductDetailsScreen = () => {
	const { addItem } = useCart();
	const { id } = useLocalSearchParams();
	const product = products.find((p) => p.id.toString() === id);

	if (!product) {
		return <Text>Product not found</Text>;
	}

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: 'Menu',
					headerRight: () => (
						<Link
							href={`/(admin)/menu/create?id=${id}`}
							asChild
						>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='pencil'
										size={25}
										color={Colors.light.tint}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>

			<Stack.Screen options={{ title: product.name }} />
			<Image
				source={{ uri: product.image }}
				resizeMode='contain'
				style={styles.image}
			/>
			<Text style={styles.productText}>Product: {product.name}</Text>
			<Text style={styles.productText}>{`Price: $${product.price.toFixed(2)}`}</Text>
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
	productText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
