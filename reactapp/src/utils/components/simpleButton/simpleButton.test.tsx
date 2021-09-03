import React from 'react';
import { render, screen } from '@testing-library/react';
import { ISimpleButtonProps, SimpleButton } from '@utils/components/simpleButton/simpleButton.component';

// test('renders', () => {
//   render(<SimpleButton />);
//   const headerElement = screen.getByText(/Hi/i);
//   expect(headerElement).toBeInTheDocument();
// });

describe('a simple button', () => {

    test('renders primary button', () => {
        const props: ISimpleButtonProps = {
            buttonText: 'A Button',
            buttonType: 'Primary',
            onClick: () => {}
        };

        render(<SimpleButton {...props} />);

        expect(screen.getByText(/A Button/)).toHaveClass('btn-primary');
    });

    test('renders secondary button', () => {
        const props: ISimpleButtonProps = {
            buttonText: 'A Button',
            buttonType: 'Secondary',
            onClick: () => {}
        };

        render(<SimpleButton {...props} />);

        expect(screen.getByText(/A Button/)).toHaveClass('btn-secondary');
    });

    test('renders danger button', () => {
        const props: ISimpleButtonProps = {
            buttonText: 'A Button',
            buttonType: 'Danger',
            onClick: () => {}
        };

        render(<SimpleButton {...props} />);

        expect(screen.getByText(/A Button/)).toHaveClass('btn-danger');
    });
});