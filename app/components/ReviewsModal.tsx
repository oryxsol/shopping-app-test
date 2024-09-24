/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';

import { Modal, Typography, Divider } from '@mui/material';
import styled from '@emotion/styled';

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

interface ReviewsModalProps {
  open: boolean;
  onClose: () => void;
  reviews: Review[];
}

// Styled components using @emotion/styled
const ModalContent = styled.div`
  padding: 16px;
  background-color: #fff;
  margin: auto;
  width: 500px;
  border-radius: 8px;
`;

const ReviewItem = styled.div`
  margin-bottom: 16px;
`;

const ReviewerName = styled(Typography)`
  font-weight: bold;
`;

const ReviewDetails = styled.div`
  margin: 8px 0;
`;

export default function ReviewsModal({ open, onClose, reviews }: ReviewsModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <Typography variant="h6">Product Reviews</Typography>
        <Divider sx={{ my: 2 }} />

        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewItem key={index}>
              <ReviewerName variant="subtitle1">
                {review.reviewerName} ({new Date(review.date).toLocaleDateString()}):
              </ReviewerName>
              <ReviewDetails>
                <Typography variant="body2">Rating: {review.rating} / 5</Typography>
                <Typography variant="body2">{review.comment}</Typography>
              </ReviewDetails>
              <Divider sx={{ my: 1 }} />
            </ReviewItem>
          ))
        ) : (
          <Typography variant="body2">No reviews available.</Typography>
        )}
      </ModalContent>
    </Modal>
  );
}
