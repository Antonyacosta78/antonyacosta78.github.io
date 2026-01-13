import type { Attachment } from "svelte/attachments";

function* characterGenerator(): Generator<string> {
  const characters = ["|", "/", "—", "\\"];
  let i = 0;
  while(true) {
    yield characters[i];
    i = i >= characters.length - 1 ? 0 : i + 1;
  }
}

export default function spinner(delay: number = 100): Attachment {
  return (element) => {
    const chars = characterGenerator();
    
    // set first element since interval's first run will take <delay> seconds
    element.innerHTML = chars.next().value;
    
    const interval = setInterval(() => {
      element.innerHTML = chars.next().value;
    }, delay);
    
    return () => {
      clearInterval(interval)
    }    
  }
}
