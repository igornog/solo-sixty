import { render, screen, fireEvent } from '@testing-library/react';
import VerificationEmail from './email-verification';
import { PageLinks } from '../../constants';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Verification Email Component', () => {
  const mockRouterPush = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
    });
  });

  it('renders the component', () => {
    render(<VerificationEmail setCreatePassword={jest.fn()} />);
    const title = screen.getByText('verify your email');
    const emailIcon = screen.getByAltText('EmailSentIcon');
    const message = screen.getByText(
      "We've sent you an email verification to the email address provided. Please click the link to continue using Solo60 Portal.",
    );
    const loginButton = screen.getByTestId('log-in-button');

    expect(title).toBeInTheDocument();
    expect(emailIcon).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('redirects to create new password page on button click', () => {
    render(<VerificationEmail setCreatePassword={jest.fn()} />);
    const loginButton = screen.getByTestId('log-in-button');
    fireEvent.click(loginButton);
    expect(mockRouterPush).toHaveBeenCalledWith(PageLinks.CreateNewPassword);
  });
});
