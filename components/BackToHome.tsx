import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";

export const BackToHome = () => (
  <Link
    href="/"
    className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 my-4"
  >
    <ArrowLongLeftIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
    Back to Home
  </Link>
);
