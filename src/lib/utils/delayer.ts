
export type DelayerTime = number | Promise<unknown>

export default function delayer(time: DelayerTime): Promise<unknown> {
  if (typeof time === "number") {
    let done: (value: unknown) => void;
    const wait = new Promise((res) => { done = res }); 
    
    setTimeout(() => {
      done(true);
    }, time);
    
    return wait;
  }
  
  return time;
  
}

