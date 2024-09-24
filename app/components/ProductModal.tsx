"use client";
import { Modal, Box, Typography } from "@mui/material";
import { Product } from "../models/product";
import styled from "@emotion/styled";

interface ProductModalProps {
  open: boolean; // Whether the modal is open
  onClose: () => void; // Function to close the modal
  product: Product; // Product data to display
}

export default function ProductModal({
  open,
  onClose,
  product,
}: ProductModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContentContainer>
        <ModalBox>
          {/* Close button */}
          <CloseButtonContainer onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </CloseButtonContainer>

          {/* Product information */}
          <Typography variant="h6">{product?.title}</Typography>
          <Typography>{product?.description}</Typography>
          <Typography>Category: {product?.category}</Typography>
          <Typography>Price: ${product?.price}</Typography>
          <Typography>Rating: {product?.rating}</Typography>
        </ModalBox>
      </ModalContentContainer>
    </Modal>
  );
}

// Styled components
const ModalBox = styled(Box)`
  padding: 32px;
  background-color: #fff;
  margin: auto;
  width: 400px;
  color: #000;
  border-radius: 10px;
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const ModalContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
