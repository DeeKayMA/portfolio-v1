import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Cursor } from './cursor';

describe('Cursor', () => {
    it('should render the cursor', () => {
        render(<Cursor />);
        const cursor = screen.getByTestId('custom-cursor');
        expect(cursor).toBeInTheDocument();
    });

    it('should have the correct styles', () => {
        render(<Cursor />);
        const cursor = screen.getByTestId('custom-cursor');
        expect(cursor).toHaveClass(
            'fixed top-0 left-0 w-4 h-4 bg-stone-200 rounded-full pointer-events-none mix-blend-difference z-50 transition-transform duration-150 ease-out hidden lg:block'
        );
    });
});