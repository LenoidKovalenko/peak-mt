import React, { ReactNode } from "react";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Simple Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center container mx-auto px-4">
        {children}
      </main>
      <footer className="flex h-24 w-full mt-8 items-center justify-center border-t">
        <div className="text-2xl md:text-4xl">Interesting Blogs</div>
      </footer>
    </div>
  );
}
