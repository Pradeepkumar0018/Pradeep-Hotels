import AdvanceSearch from "@/app/components/Food-list/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LFood List",
};

export const dynamic = "force-static";

const Page = () => {
  return (
    <>
      <AdvanceSearch />
    </>
  );
};

export default Page;
