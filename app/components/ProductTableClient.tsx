"use client"; // Required for Client Components

import { useState } from "react";
import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import ReviewsModal from "./ReviewsModal";
import { Product } from "../models/product";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";

// Define the props for the component
interface ProductTableClientProps {
  products: Product[];
}

export default function ProductTableClient({
  products,
}: ProductTableClientProps) {
  const [open, setOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedReviews, setSelectedReviews] = useState<
    Product["reviews"] | null
  >(null);
  // Define columns for the react-table
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ getValue }) => getValue(),
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ getValue }) => getValue(),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ getValue }) => getValue(),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ getValue }) => getValue(),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ getValue }) => `$${getValue()}`,
    },
    {
      accessorKey: "discountPercentage",
      header: "Discount Percentage",
      cell: ({ getValue }) => `${getValue()}`,
    },
    {
      accessorKey: "rating",
      header: "Rating",
      cell: ({ getValue }) => getValue(),
    },
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ getValue }) => getValue(),
    },
    {
      accessorKey: "tags",
      header: "Tags",
      cell: ({ getValue }) => `${getValue()}`,
    },
    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ getValue }) => getValue(),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <Button
          variant="outlined"
          onClick={() => handleViewReviews(row.original.reviews)}
        >
          View Reviews
        </Button>
      ),
    },
  ];

  // Define table instance using useReactTable hook
  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleViewReviews = (reviews: Product["reviews"]) => {
    setSelectedReviews(reviews);
    setOpen(true);
  };

  return (
    <Container>
      <Title>Projects</Title>
      <Divider />
      <ActionContainer>
        <Button variant="outlined">Add Project</Button>
        <IconContainer>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
              stroke="#364152"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Add other icons */}
        </IconContainer>
      </ActionContainer>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Review Modal */}
      {selectedReviews && (
        <ReviewsModal
          open={open}
          onClose={() => setOpen(false)}
          reviews={selectedReviews}
        />
      )}
    </Container>
  );
}

// Styled components
const Container = styled.div`
  background-color: white;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Divider = styled.hr`
  margin: 8px 0;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 12px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 16px;
  cursor: pointer;

  svg {
    cursor: pointer;
  }
`;
