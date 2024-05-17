import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { Link } from 'expo-router';

const index = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
			<Text style={styles.heading}>Food Ordering App</Text>
			<Link
				href={'/sign-in'}
				asChild
			>
				<Button text='Sign In' />
			</Link>
		</View>
	);
};

const styles = StyleSheet.create({
	heading: {
		fontSize: 20,
		alignSelf: 'center',
		fontWeight: 'bold',
		marginBottom: 5,
	},
});

export default index;
