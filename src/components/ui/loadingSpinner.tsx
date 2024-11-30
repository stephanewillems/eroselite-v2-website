export const LoadingSpinner = () => (
  <div className="flex gap-2 justify-center items-center">
    <svg
      className="animate-spin"
      fill="none"
      height="40"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
    <span className="text-xl text-eros-white">Loading...</span>
  </div>
);
