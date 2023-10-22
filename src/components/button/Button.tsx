export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

export enum ButtonTheme {
  SUCCESS = 'success',
  PRIMARY = 'primary',
}
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  theme?: `${ButtonTheme}`;
  type?: `${ButtonType}`;
  onClick?: () => void;
}

function Button({
  children,
  onClick = () => {},
  type = 'button',
  theme = 'primary',
}: ButtonProps) {
  const style: string =
    theme === 'primary'
      ? 'text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      : 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

  return (
    <button
      type={type}
      className={`rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { Button };
