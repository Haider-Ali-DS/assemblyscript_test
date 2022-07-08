// The entry file of your WebAssembly module.

import { js } from "./lib/sol_helper";



export function add(a:i32, b:i32): any {
  return a + b;
}
