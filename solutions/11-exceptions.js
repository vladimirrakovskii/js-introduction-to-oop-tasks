export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export const parseJson = (jsonString) => {
  try {
    const parsedObject = JSON.parse(jsonString);
    return parsedObject;
  } catch {
    throw new ParseError('Invalid JSON string');
  }
};
// END
