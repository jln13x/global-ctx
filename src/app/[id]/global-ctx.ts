// @ts-nocheck
import "server-only";

export const setGlobalPageContext = (ctx) => {
  globalThis.pageCtx = ctx;
};

export const getGlobalPageContext = () => {
  return globalThis.pageCtx;
};
