export const FormNav = ({
  onBack,
  onNext,
  hideBack = false,
  hideNext = false,
  backText = "Back",
  nextText = "Next",
}: {
  onBack?: () => void;
  onNext?: () => void;
  hideBack?: boolean;
  hideNext?: boolean;
  backText?: string;
  nextText?: string;
}) => {
  return (
    <div className="my-4 flex items-center justify-between border-t-2 border-border pt-4">
      {!hideBack ? (
        <button
          className="flex items-center justify-center gap-2 text-sm font-medium hover:underline"
          onClick={onBack}
        >
          <svg
            width="8"
            height="13"
            viewBox="0 1 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41 2.29965L6 0.889648L0 6.88965L6 12.8896L7.41 11.4796L2.83 6.88965L7.41 2.29965Z"
              fill="var(--color-primary)"
            />
          </svg>

          <p className="">{backText}</p>
        </button>
      ) : (
        <div></div>
      )}
      {!hideNext ? (
        <button
          className="aligns-end flex items-center justify-center gap-2 text-sm font-medium uppercase hover:underline"
          onClick={onNext}
        >
          <p className="">{nextText}</p>
          <svg
            width="8"
            height="13"
            viewBox="0 1 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 0.889648L0.589996 2.29965L5.17 6.88965L0.589996 11.4796L2 12.8896L8 6.88965L2 0.889648Z"
              fill="var(--color-primary)"
            />
          </svg>
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
