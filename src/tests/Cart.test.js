import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../components/main/Cart';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('Cart component', () => {
  const mockCartItems = [
    {
      id: 1,
      name: 'Item 1',
      oldPrice: 10,
      newPrice: 8,
      quantity: 2,
      file: 'item1.jpg',
    },
    {
      id: 2,
      name: 'Item 2',
      oldPrice: 15,
      newPrice: null,
      quantity: 1,
      file: 'item2.jpg',
    },
  ];

  test('renders the cart items correctly', () => {
    render(<Cart cartItems={mockCartItems} />, { wrapper: MemoryRouter });

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getAllByAltText('Cart Item')).toHaveLength(2);
  });

  test('calls the appropriate handlers when buttons are clicked', async () => {
    const handleIncreaseQuantity = jest.fn();
    const handleDecreaseQuantity = jest.fn();
    const handleQuantityChange = jest.fn();
    const handleDeleteItem = jest.fn();
    const handlePurchase = jest.fn();

    render(
      <Cart
        cartItems={mockCartItems}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleQuantityChange={handleQuantityChange}
        handleDeleteItem={handleDeleteItem}
        handlePurchase={handlePurchase}
      />,
      { wrapper: MemoryRouter }
    );
    const plusButtons = screen.getAllByRole('button', { name: '+' });
    const minusButtons = screen.getAllByRole('button', { name: '-' });
    const deleteButtons = screen.getAllByRole('button', { name: '×' });
    const textboxes = screen.getAllByRole('textbox');
    const purchaseButton = screen.getByRole('button', { name: 'Purchase' });

    await user.click(plusButtons[0]);
    expect(handleIncreaseQuantity).toHaveBeenCalledTimes(1);

    await user.click(minusButtons[0]);
    expect(handleIncreaseQuantity).toHaveBeenCalledTimes(1);

    await user.type(textboxes[0], '3');
    expect(handleQuantityChange).toHaveBeenCalledTimes(1);

    await user.click(deleteButtons[0]);
    expect(handleDeleteItem).toHaveBeenCalledTimes(1);

    await user.click(purchaseButton);
    expect(handlePurchase).toHaveBeenCalledTimes(1);
  });

  test('displays the correct total price', () => {
    render(<Cart cartItems={mockCartItems} />, { wrapper: MemoryRouter });

    expect(screen.getByText('31.00 €')).toBeInTheDocument();
  });

  test('renders the empty cart message when there are no cart items', () => {
    render(<Cart cartItems={[]} />, { wrapper: MemoryRouter });

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
  });
});
