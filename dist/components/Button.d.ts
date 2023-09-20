import React from 'react';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    label: string;
}
export declare class Button extends React.Component<ButtonProps> {
    render(): React.JSX.Element;
}
export {};
