import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    return <button>{this.props.label}</button>;
  }
}
