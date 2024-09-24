import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../app/components/LoginForm';

// Mock the router and fetch
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
);

describe('LoginForm', () => {
  it('renders the form', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('shows validation errors when fields are empty', async () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText('Username is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });

  it('submits the form with valid inputs', async () => {
    render(<LoginForm />);

    userEvent.type(screen.getByLabelText(/username/i), 'admin');
    userEvent.type(screen.getByLabelText(/password/i), 'admin');

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Check that fetch was called
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/login', expect.anything());
    });

    // Test that the button becomes disabled during loading
    expect(screen.getByRole('button', { name: /logging in/i })).toBeInTheDocument();
  });

  it('handles login failure', async () => {
    // Mock fetch to return a failed login
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({}),
      })
    );

    render(<LoginForm />);

    userEvent.type(screen.getByLabelText(/username/i), 'wronguser');
    userEvent.type(screen.getByLabelText(/password/i), 'wrongpassword');

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/login failed/i)).toBeInTheDocument();
    });
  });
});
