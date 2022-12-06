interface IQuestion {
  question: string;
  answer?: string;
}

export const Question = (props: IQuestion) => {
  const { question, answer } = props;
  return (
    <>
      <div className="block">
        <div className="question">{question}</div>
        <div className="arrow">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="16" viewBox="0 0 36 18" fill="none">
              <line x1="1" y1="9" x2="33" y2="9" stroke="#111112" stroke-width="2" stroke-linecap="round" />
              <path
                d="M25 17L34.6096 9.31235C34.8097 9.15222 34.8097 8.84778 34.6096 8.68765L25 1"
                stroke="#111112"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
