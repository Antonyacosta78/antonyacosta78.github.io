import type { Attachment } from "svelte/attachments";

export default function delayDisplay(when: number | Promise<unknown>, useOpacity: boolean = false): Attachment<HTMLElement> {
  return (element) => {
    const initialStyle = useOpacity ? element.style.opacity : element.style.display;
    
    if(useOpacity) {
      element.style.opacity = "0%";
    } else {
      element.style.display = "none";
    }
    
    const resetStyle = () => {
      element.style[ useOpacity ? "opacity" : "display" ] = initialStyle;
    }
    
    if(typeof when === "number") {
      const timeout = setTimeout(() => {
        resetStyle()
      }, when);
      
      return () => {
        resetStyle();
        clearTimeout(timeout);
      }
    }
    
    when.then(() => {
      resetStyle();
    });
  }
}
