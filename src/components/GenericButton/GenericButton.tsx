import React, { ReactElement } from 'react';

interface GenericButtonProps {
  className: string;
  title?: string;
  onClick: () => void;
  disabled?: boolean;
  children?: string | ReactElement;
}

const GenericButton = ({
  className,
  title,
  onClick,
  disabled,
  children
}: GenericButtonProps) => (
  <button
    type='button'
    disabled={disabled}
    title={title}
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

export default GenericButton;
