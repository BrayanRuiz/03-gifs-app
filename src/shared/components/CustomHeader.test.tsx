import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CustomHeader from './CustomHeader';

describe('CustomHeader', () => {
    const title = 'Test Title';

    test('should render the title correctly', () => {
        render(<CustomHeader title={title} />)
        expect(screen.getByText(title)).toBeDefined();
    });
});