import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
     
      <div className="py-12 sm:py-20 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {" "}
          {/* Changed max-w-7x1 to max-w-7xl */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Break the language barriers
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-680 dark:text-gray-300">
              You speak your language, they speak their language. <br />
              <span
                className="text-indigo-600 dark:text-indigo-500"
                style={{ display: "block" }}
              >
                LingoLink will handle the translation for you.
              </span>
            </p>
            <div className="mt-18 flex items-center justify-center gap-x-6">
              <Link
                href="/chat"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>{" "}
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                View Pricing <span aria-hidden="true"></span>
              </Link>
            </div>
          </div>
          <div className="mt-16 flex items-center justify-center sm:mt-24">
            <div
              className="-m-2 rounded-xl bg-gray-908/5 p-2 ring-1 ring-inset ring-gray-908/10 lg:rounded-2xl lg:p-4"
              style={{ width: "500px", height: "500px" }}
            >
              <Image
                unoptimized
                src="/landingPage/app.jpeg"
                alt="App screenshot"
                width={500}
                height={500}
                className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
