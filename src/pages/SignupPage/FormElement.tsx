import { FieldValues, Path, UnPackAsyncDefaultValues, UseFormRegister } from 'react-hook-form';

interface IFormElementProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  message?: string;
  name: Path<UnPackAsyncDefaultValues<T>>;
  main: string;
  type: string;
}
export const FormElement = <T extends FieldValues>(props: IFormElementProps<T>) => {
  const { register, message, name, main, type } = props;
  return (
    <>
      <div className="label-input">
        <label>{main}</label>
        <br />
        <input
          type={type}
          placeholder={main}
          className={message ? ' data-from-user with-errors' : 'data-from-user'}
          {...register(name)}
        />
        <p className="validation-error">{message}</p>
      </div>
    </>
  );
};
