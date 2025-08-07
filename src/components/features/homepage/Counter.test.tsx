import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    it('renders correctly', () => {
        render(<Counter />);
        expect(screen.getByText(/counter/i)).toBeInTheDocument();
    });

    it('increments the counter', () => {
        render(<Counter />);
        const button = screen.getByRole('button', { name: /increment/i });
        button.click();
        expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    });

    it('decrements the counter', () => {
        render(<Counter />);
        const button = screen.getByRole('button', { name: /decrement/i });
        button.click();
        expect(screen.getByText(/count: -1/i)).toBeInTheDocument();
    });
});