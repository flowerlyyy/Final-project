import './Questions.scss';
import { Question } from '../Question/Question';

export const Questions = () => {
  const questions = [
    'How do I place an order ?',
    'On which days and at what hours does the delivery take place ?',
    'For how long can I order a diet?',
    'Can I change the delivery address?',
    'Can I suspend catering?',
  ];

  return (
    <>
      <div className="question-block narrow-container">
        {questions.map((question, index) => (
          <Question question={questions[index]} key={index} />
        ))}
      </div>
      <div className="strange-thing">
        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="198" viewBox="0 0 85 198" fill="none">
          <line x1="42.5" y1="-2.18557e-08" x2="42.5" y2="161" stroke="#EAEAEA" />
          <path
            d="M0 197.435C34 196.078 42 183.5 42 159H43V198L0 197.435Z"
            fill="url(#paint0_linear_22_941)"
          />
          <path
            d="M85 197.435C51 196.078 43 183.5 43 159H42V198L85 197.435Z"
            fill="url(#paint1_linear_22_941)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_22_941"
              x1="21.5"
              y1="159"
              x2="21.5"
              y2="198"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EAEAEA" />
              <stop offset="1" stop-color="#F5F5F5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_22_941"
              x1="63.5"
              y1="159"
              x2="63.5"
              y2="198"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EAEAEA" />
              <stop offset="1" stop-color="#F5F5F5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};
