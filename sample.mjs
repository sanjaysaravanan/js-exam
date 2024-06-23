counting();
console.log(count);
import { count, counting } from "./module.mjs";

console.log("count: " + count);

// can class method can have multiple decorators, but it has to be nested properly
document.removeEventListener;
