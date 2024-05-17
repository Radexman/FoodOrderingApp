import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import Button from '@/src/components/Button';
import Colors from '@/src/constants/Colors';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState('');

	const handleValidateInputs = () => {
		if (!email) {
			setErrors('Please input correct email');
			return;
		}
		if (!password) {
			setErrors('Please input correct password');
			return;
		}

		console.warn('User credentials', email, password);
		clearInputs();
		setErrors('');
	};

	const clearInputs = () => {
		setEmail('');
		setPassword('');
	};

	const handleSubmit = () => {
		handleValidateInputs();
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'Sign in' }} />
			<Text style={styles.label}>Email</Text>
			<TextInput
				value={email}
				onChangeText={setEmail}
				placeholder='jon@gmail.com'
				keyboardType='email-address'
				style={styles.input}
			/>
			<Text style={styles.label}>Password</Text>
			<TextInput
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={styles.input}
			/>
			<Text style={styles.errorText}>{errors}</Text>
			<Button
				onPress={handleSubmit}
				text='Sign in'
			/>
			<Link
				href={'/sign-up'}
				asChild
			>
				<Text style={styles.textButton}>Create an account</Text>
			</Link>
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
	textButton: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: Colors.light.tint,
		marginVertical: 10,
	},
});

export default SignIn;
