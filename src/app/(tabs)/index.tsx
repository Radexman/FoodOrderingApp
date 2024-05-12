import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

const product = products[1];
const { id, name, image, price } = product;

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: image }}
				style={styles.image}
			/>
			<Text style={styles.title}>{name}</Text>
			<Text style={styles.price}>{`$${price}`}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 12,
		borderRadius: 20,
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
