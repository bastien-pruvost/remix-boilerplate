import type { V2_MetaFunction } from "@remix-run/node";

import { Button } from "~/components/ui/button";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="h-screen flex flex-col justify-center text-center"
    >
      <h1>This is your Remix App, welcome...</h1>
      {/* <Link
        to="https://remix.run/docs"
        rel="noopener noreferrer"
        target="_blank"
        className="block text-emerald-500 hover:text-emerald-600 underline mb-4"
      >
        Here is the Remix.run documentation
      </Link> */}
      <Button />
    </div>
  );
}
