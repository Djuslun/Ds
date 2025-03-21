export function isString(arg: unknown): arg is string {
  return typeof arg === 'string';
}

export function isNumber(arg: unknown): arg is number {
  return typeof arg === 'number';
}
