import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './Components/BookingForm';

const availableTimes = {
    availableTimes: ['17:00', '18:00', '19:00']
};

describe('BookingForm Component', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  });

  test('Checking if date input renders as expected', () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min');
    expect(dateInput).toHaveAttribute('required');
  });

  test('Checking if time select element renders as expected', () => {
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('required');
    availableTimes.availableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('Checking if "guests" input renders as expected', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');
  });

  test('renders occasion select with correct attributes', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('required');
  });

  test('submits the form with valid data', () => {
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: 2024-12-31 } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    const submitButton = screen.getByRole('button', { name: /Make A Reservation/i });
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);
    expect(mockSubmitForm).toHaveBeenCalled();
  });

  test('does not submit the form with invalid data', () => {
    // Invalid date
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    let submitButton = screen.getByRole('button', { name: /Make A Reservation/i });
    expect(submitButton).toBeDisabled();
    fireEvent.click(submitButton);
    expect(mockSubmitForm).not.toHaveBeenCalled();

    // Invalid number of guests
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: new Date() } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    submitButton = screen.getByRole('button', { name: /Make A Reservation/i });
    expect(submitButton).toBeDisabled();
    fireEvent.click(submitButton);
    expect(mockSubmitForm).not.toHaveBeenCalled();

    // Invalid occassion
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: new Date() } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Select Occassion' } });

    submitButton = screen.getByRole('button', { name: /Make A Reservation/i });
    expect(submitButton).toBeDisabled();
    fireEvent.click(submitButton);
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });
});
