import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-slate-100">
        404 - Page Not Found
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-indigo-500 hover:to-purple-500 transition-all"
      >
        Return to Portfolio
      </Link>
    </div>
  );
}
