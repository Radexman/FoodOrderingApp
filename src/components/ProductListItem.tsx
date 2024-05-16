import { StyleSheet, Text, Image, Pressable } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '@/assets/types';
import { Link } from 'expo-router';

type ProductListItemProps = {
	product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<Link
			href={`menu/${product!.id}`}
			asChild
		>
			<Pressable style={styles.container}>
				<Image
					source={{ uri: product!.image }}
					style={styles.image}
					resizeMode='contain'
				/>
				<Text style={styles.title}>{product!.name}</Text>
				<Text style={styles.price}>{`$${product!.price.toFixed(2)}`}</Text>
			</Pressable>
		</Link>
	);
};

export default ProductListItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 12,
		borderRadius: 20,
		flex: 1,
		maxWidth: '50%',
	},
	image: {
		width: '100%',
		aspectRatio: 1,
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
		marginVertical: 10,
	},
	price: {
		color: Colors.light.tint,
		fontWeight: 'bold',
	},
});
