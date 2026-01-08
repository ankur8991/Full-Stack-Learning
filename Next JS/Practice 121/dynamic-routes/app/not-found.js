import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold text-sky-400 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>

        <p className="text-slate-400 mb-6">
          Bhai lagta hai jo page tu dhoondh raha hai wo exist nahi karta ya phir move ho chuka hai.
        </p>

        <Link
          href="/"
          className="inline-block rounded-xl bg-sky-400 px-6 py-3 text-slate-900 font-semibold
                     hover:bg-sky-300 transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
