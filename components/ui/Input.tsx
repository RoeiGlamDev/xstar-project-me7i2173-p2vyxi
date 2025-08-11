import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="flex flex-col mb-6">
      <label className={text-lg font-semibold ${isFocused || value ? 'text-orange-600' : 'text-white'}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        className={mt-2 p-3 rounded-lg border-2 transition duration-300 ease-in-out 
          ${isFocused ? 'border-orange-600' : 'border-white'} 
          bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
      />
      <span className="text-sm text-white">{required ? 'This field is required.' : ''}</span>
    </div>
  );
};

export default Input;