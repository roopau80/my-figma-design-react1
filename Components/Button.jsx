import React from 'react';

const Button = (props) => {
  return (
    <button className='px-5 py-2 italic font-semibold text-white rounded-full shadow-md bg-gradient-to-b from-black to-gray-500 hover:bg-gradient-to-t focus:outline-none'>
      {props.children}
    </button>
  );
}

export default Button;
