import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { CartItem, PizzaSize, Product } from '@/assets/types';
import { randomUUID } from 'expo-crypto';

type CartType = {
	items: CartItem[];
	total: number;
	addItem: (product: Product, size: CartItem['size']) => void;
	updateQuantity: (itemId: string, amount: -1 | 1) => void;
};

const CartContext = createContext<CartType>({
	items: [],
	total: 0,
	addItem: () => {},
	updateQuantity: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
	const [items, setItems] = useState<CartItem[]>([]);

	const addItem = (product: Product, size: PizzaSize) => {
		const existingItem = items.find((item) => item.product === product && item.size === size);

		if (existingItem) {
			updateQuantity(existingItem.id, 1);
			return;
		}

		const newCartItem: CartItem = {
			id: randomUUID(),
			product,
			product_id: product!.id,
			size,
			quantity: 1,
		};

		setItems((prevState) => [...prevState, newCartItem]);
	};

	const updateQuantity = (itemId: string, amount: -1 | 1) => {
		setItems(
			items
				.map((item) =>
					item.id !== itemId
						? item
						: {
								...item,
								quantity: item.quantity + amount,
						  }
				)
				.filter((item) => item.quantity > 0)
		);
	};

	const total = items.reduce((sum, item) => (sum += item.product!?.price * item.quantity), 0);

	return <CartContext.Provider value={{ items, total, addItem, updateQuantity }}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => {
	return useContext(CartContext);
};
