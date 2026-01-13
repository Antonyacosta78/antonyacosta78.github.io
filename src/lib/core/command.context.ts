import { createContext } from "svelte";
import type { CommandComponent } from "./commands";

interface CommandContext {
  commandsMap: Map<string, CommandComponent>
}

export const [getCommandContext, setCommandContext] = createContext<CommandContext>();

