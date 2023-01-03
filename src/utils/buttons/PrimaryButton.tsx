import { useState } from 'react';
import { ButtonProps } from './types';

const PrimaryButton = ({ title, fontSize, background }: ButtonProps) => {
  return (
    <a
      role="button"
      href="#"
      tabIndex={0}
      className="text-center border-transparent px-3 py-2 md:w-30 md:ml-4 font-semibold rounded-full text-base {fontSize, background}">
      {title}
    </a>
  );
};
export default PrimaryButton;
