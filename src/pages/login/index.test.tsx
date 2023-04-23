import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Login from './index';
import { PageLinks } from '../../constants';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Login Component', () => {
  it('should render email and password inputs', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should show error messages when inputs are invalid', async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');

    // Set invalid values for the inputs
    act(() => {
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.change(passwordInput, { target: { value: 'short' } });
    });

    // Submit the form
    act(() => {
      fireEvent.click(screen.getByTestId('login-button'));
    });

    // Check that error messages are shown
    expect(
      await screen.findByText(/Must be a valid email/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Password must be at least 8 characters/i),
    ).toBeInTheDocument();
  });

  it('should redirect to the forgot password page when "Forgot Password?" link is clicked', () => {
    const routerPushMock = jest.fn();
    const originalRouter = require('next/router');
    originalRouter.useRouter = jest.fn().mockReturnValue({
      push: routerPushMock,
    });

    render(<Login />);

    const forgotPasswordLink = screen.getByTestId('forget-password-link');

    // Click the "Forgot Password?" link
    fireEvent.click(forgotPasswordLink);

    // Check that the router was called with the correct route
    expect(routerPushMock).toHaveBeenCalledWith(PageLinks.ForgotPassword);
  });

  it('should submit the form with valid inputs', async () => {
    const routerPushMock = jest.fn();
    const originalRouter = require('next/router');
    originalRouter.useRouter = jest.fn().mockReturnValue({
      push: routerPushMock,
    });

    render(<Login />);
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');

    // Set valid values for the inputs
    act(() => {
      fireEvent.change(emailInput, {
        target: { value: 'valid-email@example.com' },
      });
      fireEvent.change(passwordInput, { target: { value: 'valid-password' } });
    });

    await act(async () => {
      // Submit the form
      fireEvent.click(screen.getByTestId('login-button'));
    });
    // Check that the form was submitted and the router was called
    expect(routerPushMock).toHaveBeenCalledWith(PageLinks.ForgotPassword);
  });
});
