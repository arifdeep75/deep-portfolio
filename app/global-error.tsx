"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center p-4 text-center font-sans">
        <h2 className="text-2xl font-bold mb-3 text-slate-900">
          Something went wrong!
        </h2>
        <p className="text-sm text-slate-600 mb-6 max-w-md">
          An unexpected error occurred. You can attempt to recover by clicking below.
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-500 cursor-pointer"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
