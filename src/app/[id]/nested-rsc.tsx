// @ts-nocheck
import { getGlobalPageContext } from "@/app/[id]/global-ctx";

export const NestedRSC = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  const ctx = getGlobalPageContext();
  return <p>RSC: {JSON.stringify(ctx, null, 2)}</p>;
};
