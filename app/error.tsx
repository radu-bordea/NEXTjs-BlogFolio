"use client";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-red-500">
        Something went wrong!
      </h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 rounded"
      >
        Try again
      </button>
    </div>
  );
}