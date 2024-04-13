let userInput: unknown; // unknown is more restrictive than any
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}
//userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'

// Never type
// Never returns anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
