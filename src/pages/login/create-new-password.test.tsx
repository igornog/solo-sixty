import { render, screen, fireEvent, act } from '@testing-library/react';
import CreatePassword from './create-new-password';
import '@testing-library/jest-dom';
import { PageLinks } from '../../constants';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Create Password Component', () => {
  it('should render the create password form', () => {
    render(<CreatePassword />);

    expect(screen.getByLabelText('New Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm New Password')).toBeInTheDocument();
    expect(
      screen.getByTestId('create-new-password-button'),
    ).toBeInTheDocument();
  });

  it('should display password strength meter', () => {
    render(<CreatePassword />);

    const passwordInput = screen.getByLabelText('New Password');

    act(() => {
      fireEvent.change(passwordInput, { target: { value: 'a' } });
      expect(screen.getByText(/too weak/i)).toBeInTheDocument();
    });

    act(() => {
      fireEvent.change(passwordInput, { target: { value: 'a12' } });
      expect(screen.getByText(/weak/i)).toBeInTheDocument();
    });

    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(screen.getByText(/strong/i)).toBeInTheDocument();
  });

  it('displays an error message when the password is too short', async () => {
    render(<CreatePassword />);

    const newPasswordInput = screen.getByLabelText('New Password');

    await fireEvent.change(newPasswordInput, { target: { value: '1234' } });
    fireEvent.click(screen.getByTestId('create-new-password-button'));

    expect(
      await screen.findByText('Password must be at least 8 characters long.'),
    ).toBeInTheDocument();
  });

  it('displays an error message when the password does not start with a letter', async () => {
    render(<CreatePassword />);

    const newPasswordInput = screen.getByLabelText('New Password');

    await fireEvent.change(newPasswordInput, { target: { value: '12345678' } });
    fireEvent.click(screen.getByTestId('create-new-password-button'));

    expect(
      await screen.findByText('Password must start with a letter (A-Z, a-z).'),
    ).toBeInTheDocument();
  });

  it('displays an error message when the password does not contain a number', async () => {
    render(<CreatePassword />);

    const newPasswordInput = screen.getByLabelText('New Password');

    await fireEvent.change(newPasswordInput, { target: { value: 'abcdefg' } });
    fireEvent.click(screen.getByTestId('create-new-password-button'));

    expect(
      await screen.findByText(
        'Password must contain at least one number (0-9).',
      ),
    ).toBeInTheDocument();
  });

  it('should submit the form with valid inputs', async () => {
    const routerPushMock = jest.fn();
    const originalRouter = require('next/router');
    originalRouter.useRouter = jest.fn().mockReturnValue({
      push: routerPushMock,
    });

    render(<CreatePassword />);

    const passwordInput = screen.getByLabelText('New Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm New Password');

    act(() => {
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmPasswordInput, {
        target: { value: 'password123' },
      });
    });

    await act(async () => {
      // Submit the form
      fireEvent.click(screen.getByTestId('create-new-password-button'));
    });

    // Check that the form was submitted and the router was called
    expect(routerPushMock).toHaveBeenCalledWith(PageLinks.Login);
  });

  it('should display error message when passwords do not match', async () => {
    render(<CreatePassword />);

    const passwordInput = screen.getByLabelText('New Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm New Password');

    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'wrongpassword' },
    });

    await act(async () => {
      // Submit the form
      fireEvent.click(screen.getByTestId('create-new-password-button'));
    });

    expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
  });
});
