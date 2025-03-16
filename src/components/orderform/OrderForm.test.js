import { render, screen } from '@testing-library/react';
import OrderForm from './OrderForm';

describe('OrderForm Component', () => {
  const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00'],
    updateTimes: jest.fn(),
    submitForm: jest.fn(),
  };

  test('renders all form labels correctly', () => {
    render(<OrderForm {...mockProps} />);

    expect(screen.getByText('This is Reservation page!')).toBeInTheDocument();

    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Date input')).toBeInTheDocument();

    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /Choose time/i })).toBeInTheDocument();

    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests input')).toBeInTheDocument();

    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /Occasion/i })).toBeInTheDocument();

    expect(screen.getByLabelText('Make reservation')).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Make Your reservation/i)).toBeInTheDocument();
  });

  test('renders all options for occasion dropdown', () => {
    render(<OrderForm {...mockProps} />);
    
    const occasionSelect = screen.getByRole('combobox', { name: /Occasion/i });
    expect(occasionSelect).toBeInTheDocument();
 
    expect(screen.getByRole('option', { name: 'Select an occasion' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Birthday' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Anniversary' })).toBeInTheDocument();
  });

  test('renders available times correctly', () => {
    render(<OrderForm {...mockProps} />);

    expect(screen.getByRole('option', { name: 'Select a time' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '19:00' })).toBeInTheDocument();
  });
});