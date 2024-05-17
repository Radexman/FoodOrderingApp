import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '@/src/components/Button';

const CreateProductScreen = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [errors, setErrors] = useState('');

	const resetFields = () => {
		setName('');
		setPrice('');
	};

	const validateInput = () => {
		if (!name) {
			setErrors('Name is requiered');
			return;
		}
		if (!price) {
			setErrors('Price is requiered');
			return;
		}
		if (isNaN(parseFloat(price))) {
			setErrors('Price is not a number');
			return false;
		}
		return true;
	};

	const onCreate = () => {
		if (!validateInput()) {
			return;
		}

		console.warn('Creating product', name, price);

		// @TODO Save in the database

		resetFields();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Name</Text>
			<TextInput
				value={name}
				onChangeText={setName}
				placeholder='Margarita...'
				style={styles.input}
			/>
			<Text style={styles.label}>Price ($)</Text>
			<TextInput
				value={price}
				onChangeText={setPrice}
				placeholder='9.99'
				keyboardType='number-pad'
				style={styles.input}
			/>
			<Text style={styles.errorText}>{errors}</Text>
			<Button
				onPress={onCreate}
				text='Create'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
	},
	input: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 5,
		marginTop: 5,
		marginBottom: 20,
	},
	label: {
		color: 'gray',
		fontSize: 16,
	},
	errorText: {
		color: 'red',
	},
});

export default CreateProductScreen;