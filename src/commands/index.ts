import type { CommandDef } from "citty";

const _toCommandDef = (r: any) => (r.default || r) as Promise<CommandDef>;

export const commands = {
  init: () => import("./init").then(_toCommandDef),
  dev: () => import("./dev").then(_toCommandDef),
  build: () => import("./build").then(_toCommandDef),
};
