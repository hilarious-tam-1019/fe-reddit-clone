import { useState } from 'react';
import { ButtonProps } from './types';

const PrimaryButton = ({ title, type }: ButtonProps) => {
  return (
    <a
      role="button"
      href="#"
      tabIndex={0}
      className={`${
        type == 'redOrange'
          ? `bg-redOrange text-white`
          : `bg-background-grey text-black`
      } text-center border-transparent px-3 py-2 md:w-30 md:ml-4 font-semibold rounded-full text-base`}>
      {title}
    </a>
  );
};
export default PrimaryButton;
