import { createContext } from "svelte";

interface ScrollContext {
  targetAccessor: () => HTMLElement | undefined
}

export const [getScrollContext, setScrollContext] = createContext<ScrollContext>()
