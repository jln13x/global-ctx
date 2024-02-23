// @ts-nocheck

import { setGlobalPageContext } from "@/app/[id]/global-ctx";
import { NestedRSC } from "@/app/[id]/nested-rsc";

const Page = (props) => {
  setGlobalPageContext(props);

  return (
    <div>
      <NestedRSC />
    </div>
  );
};

export default Page;
