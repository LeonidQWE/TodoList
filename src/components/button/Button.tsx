import s from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode,
  onClick: () => void,
  title: string,
  disabled?: boolean
};

export const Button = ({children, onClick, title, disabled}: ButtonProps) => {
  return (
    <button
      data-testid='btn'
      className={s.btn}
      onClick={onClick}
      title={title}
      disabled={disabled}>
      {children}
    </button>
  )
}
