"use client";

import localFont from "next/font/local";
import UsingFormikYupLibrary from "./components/UsingFormikYupLibrary";
import UsingReactFormsLibrary from "./components/UsingReactFormsLibrary";
import WithoutUsingLibrary from "./components/WithoutUsingLibrary";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-8 flex items-start justify-center font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="w-full">
        <div className="mb-6 flex flex-col items-center">
          <div>
            <h2 className="text-6xl font-bold text-center">
              React Forms Submission Examples by{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                ToofanCoder
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-200 pt-6 dark:bg-gray-700 p-2 rounded-lg">
            <WithoutUsingLibrary />
          </div>
          <div className="bg-gray-200 pt-6 dark:bg-gray-700 p-2 rounded-lg">
            <UsingFormikYupLibrary />
          </div>
          <div className="bg-gray-200 pt-6 dark:bg-gray-700 p-2 rounded-lg">
            <UsingReactFormsLibrary />
          </div>
          {/* <div className="bg-gray-200 pt-6 dark:bg-gray-700 p-2 rounded-lg">
            <UsingAntdFormsLibraryV2 />
          </div> */}
        </div>
      </main>
    </div>
  );
}
