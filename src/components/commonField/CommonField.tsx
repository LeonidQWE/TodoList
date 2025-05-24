import s from './CommonField.module.scss';

type CommonFieldProps = {
  value?: string;
  setValue?: (value: string) => void;
  placeholder?: string;
  type?: string;
};

export const CommonField = ({type = 'text', value, setValue, placeholder}: CommonFieldProps) => {
  return (
    <input
      data-testid='commonField'
      type={type}
      className={s.commonField}
      onChange={(event) => setValue && setValue(event.target.value)}
      value={value}
      placeholder={placeholder}/>
  )
}
