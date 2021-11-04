export const isIterable = (value) => {
    return Symbol.iterator in Object(value);
  }

