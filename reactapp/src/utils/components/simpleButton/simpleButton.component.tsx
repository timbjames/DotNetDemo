import React from 'react';

type ButtonType = 'Primary' | 'Secondary' | 'Danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ISimpleButtonProps {
    buttonSize?: ButtonSize;
    buttonText: string;
    buttonType?: ButtonType
    onClick: () => void;
}

const getButtonSize = (buttonSize: ButtonSize | undefined): string => {

    if (!buttonSize) {
        return '';
    }

    switch (buttonSize){
        case 'lg':
            return 'btn-lg';
        case 'sm':
            return 'btn-sm';
        default:
            return '';
    }
}

const getButtonType = (buttonType: ButtonType | undefined): string => {

    if (!buttonType){
        return '';
    }

    switch (buttonType){
        case 'Danger':
            return 'btn-danger';
        case 'Primary':
            return 'btn-primary';
        case 'Secondary':
            return 'btn-secondary';
        default:
            return 'btn-default';
    }
}

const SimpleButton: React.FC<ISimpleButtonProps> = ({ buttonSize, buttonText, buttonType, onClick }) => {

    const handleOnClick = (): void => {
        onClick();
    }

    return (
        <button className={`btn ${getButtonType(buttonType)} ${getButtonSize(buttonSize)}`} onClick={handleOnClick}>{ buttonText }</button>
    );
};

export {
    SimpleButton
}