import '../SignupPage/SignupPage.scss';
import * as yup from 'yup';
import { FormElement } from './FormElement';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { baseUrl } from '../../constants';
import { yupResolver } from '@hookform/resolvers/yup';
import tomato from './tomato.jpg';

interface IRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}
const schema = yup
  .object({
    firstName: yup
      .string()
      .required('You must enter firstname')
      .min(2, 'At least 2 characters are required')
      .max(10, 'At most 10 characters are required'),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8, 'At least 8 characters are required'),
    repeatPassword: yup
      .string()
      .required()
      .min(8, 'At least 8 characters are required')
      .oneOf([yup.ref('password')], 'Passwords must be match'),
  })
  .required();

export const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IRegisterFormData> = (data) => {
    // console.log(JSON.stringify(data));
    fetch(`${baseUrl}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((userId) => alert(userId));
  };

  return (
    <>
      <div className="sign-up">
        <img srcSet={tomato} id="tomato-salad" alt="main-tomato" />
        <div className="yellow-block">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="content-of-form">
              <div className="input-part centered">
                <h2>Sign up</h2>
                <div className="inputs">
                  <FormElement
                    register={register}
                    message={errors.firstName?.message}
                    name={'firstName'}
                    main={'Name'}
                  />
                  <FormElement
                    register={register}
                    message={errors.lastName?.message}
                    name={'lastName'}
                    main={'lastName'}
                  />
                  <FormElement
                    register={register}
                    message={errors.email?.message}
                    name={'email'}
                    main={'E-mail'}
                  />
                  <FormElement
                    register={register}
                    message={errors.password?.message}
                    name={'password'}
                    main={'password'}
                  />
                  <FormElement
                    register={register}
                    message={errors.repeatPassword?.message}
                    name={'repeatPassword'}
                    main={'repeatPassword'}
                  />
                </div>
              </div>
            </div>
            <div className="button-link">
              <button type="submit" className="sign-in-button btnshadow">
                Sign up
              </button>
              <Link to="/log-in" id="already-link" className="centered">
                Already have an account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
