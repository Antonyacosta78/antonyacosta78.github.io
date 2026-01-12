import type { Attachment } from "svelte/attachments";
import TypeIt, { type Options as TypeItOptions } from "typeit";

export default function typewriter(options: TypeItOptions = {}): Attachment<HTMLElement> {
  
  return (element) => {
    // we get the content of the HTML then we delete it so it can be rewritten by TypeIt
    const text = element.innerHTML;
    element.innerHTML = "";
    
    const afterComplete = (instance: { destroy: () => void; }) => {
      instance.destroy();
      if(options.afterComplete) {
        options.afterComplete();
      }
    }
    
    new TypeIt(element, {
      strings: text,
      waitUntilVisible: true,
      ...options,
      afterComplete
    }).go();
  }
}