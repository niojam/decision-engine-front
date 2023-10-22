import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  id?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  placeHolder: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  htmlInputOriginalProps?: object;
  errorMessage?: string;
}

function Input({
  id,
  placeHolder,
  type,
  name,
  onChange,
  value,
  label,
  htmlInputOriginalProps,
  errorMessage,
}: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-700"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
          {...htmlInputOriginalProps}
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder={placeHolder}
        />
      </div>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export { Input };
