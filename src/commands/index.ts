import type { CommandDef } from "citty";

const _toCommandDef = (r: any) => (r.default || r) as Promise<CommandDef>;

export const commands = {
  init: () => import("./init").then(_toCommandDef),
};
