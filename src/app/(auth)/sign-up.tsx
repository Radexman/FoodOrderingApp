import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '@/src/components/Button';
import Colors from '@/src/constants/Colors';
import { Link, Stack } from 'expo-router';

const SignUp = () => {
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
			<Stack.Screen options={{ title: 'Sign up' }} />
			<Text style={styles.label}>Email</Text>
			<TextInput
				value={email}
				onChangeText={setEmail}
				keyboardType='email-address'
				placeholder='jon@gmail.com'
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
				text='Create Account'
			/>
			<Link
				href={'/sign-in'}
				asChild
			>
				<Text style={styles.textButton}>Sign in</Text>
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

export default SignUp;
