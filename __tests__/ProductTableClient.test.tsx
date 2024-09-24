import { render, screen, fireEvent } from '@testing-library/react';
import ProductTableClient from '../app/components/ProductTableClient';

const mockProducts = [
  { id: 1, title: 'Product 1', category: 'Category 1', price: 100, rating: 4.5, stock: 10, brand: 'Brand A', tags: ['tag1', 'tag2'], description: 'Test product' },
  { id: 2, title: 'Product 2', category: 'Category 2', price: 200, rating: 3.5, stock: 5, brand: 'Brand B', tags: ['tag3', 'tag4'], description: 'Test product' },
];

describe('ProductTableClient', () => {
  it('renders the product table', () => {
    render(<ProductTableClient products={mockProducts} />);

    // Check that table headers are rendered
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText('Tags')).toBeInTheDocument();
    
    // Check that table rows are rendered
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('opens the modal when "View Reviews" is clicked', () => {
    render(<ProductTableClient products={mockProducts} />);

    const button = screen.getAllByText(/view reviews/i)[0];
    fireEvent.click(button);

    // Check that the modal is displayed
    expect(screen.getByText('Test product')).toBeInTheDocument();
  });
});
