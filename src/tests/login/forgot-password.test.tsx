import { render, screen, fireEvent, act } from '@testing-library/react';
import ForgotPassword from '../../pages/login/forgot-password';
import { PageLinks } from '../../constants';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const routerPushMock = jest.fn();
const originalRouter = require('next/router');
originalRouter.useRouter = jest.fn().mockReturnValue({
  push: routerPushMock,
});

describe('Forgot Password Component', () => {
  it('should render form fields and button', () => {
    render(<ForgotPassword />);
    const emailInput = screen.getByLabelText('email');
    const resetButton = screen.getByText('Reset Password');
    expect(emailInput).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  it('should call router.push with EmailVerification page link when form is submitted', async () => {
    render(<ForgotPassword />);
    const emailInput = screen.getByLabelText('email');
    const resetButton = screen.getByText('Reset Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    await act(async () => {
      fireEvent.click(resetButton);
    });

    expect(routerPushMock).toHaveBeenCalledWith(PageLinks.EmailVerification);
  });

  it('should redirect to login page when back button is clicked', async () => {
    render(<ForgotPassword />);
    const backButton = screen.getByText('Back');

    await act(async () => {
      fireEvent.click(backButton);
    });

    expect(routerPushMock).toHaveBeenCalledWith(PageLinks.Login);
  });
});
