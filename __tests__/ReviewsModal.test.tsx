import { render, screen, fireEvent } from '@testing-library/react';
import ReviewsModal from '../app/components/ReviewsModal';

const mockReviews = [
  {
    rating: 5,
    comment: "Amazing product! Highly recommend.",
    date: "2024-05-23T08:56:21.618Z",
    reviewerName: "Alice Smith",
  },
  {
    rating: 3,
    comment: "It's okay, but could be better.",
    date: "2024-05-20T08:56:21.618Z",
    reviewerName: "John Doe",
  },
];

describe('ReviewsModal', () => {
  it('displays the reviews when the modal is open', () => {
    render(<ReviewsModal open={true} onClose={() => {}} reviews={mockReviews} />);

    // Check that the reviews are displayed in the modal
    expect(screen.getByText("Amazing product! Highly recommend.")).toBeInTheDocument();
    expect(screen.getByText("It's okay, but could be better.")).toBeInTheDocument();
    expect(screen.getByText("Alice Smith")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it('does not display the modal when open is false', () => {
    render(<ReviewsModal open={false} onClose={() => {}} reviews={mockReviews} />);

    // Modal should not be visible when open is false
    expect(screen.queryByText("Amazing product! Highly recommend.")).not.toBeInTheDocument();
  });

  it('calls onClose handler when modal is closed', () => {
    const handleClose = jest.fn();
    render(<ReviewsModal open={true} onClose={handleClose} reviews={mockReviews} />);

    // Simulate closing the modal (e.g., clicking outside or pressing Esc)
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' });

    // Expect the onClose handler to be called
    expect(handleClose).toHaveBeenCalled();
  });
});
