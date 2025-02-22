export function isString(arg: unknown): arg is string {
  return typeof arg === 'string';
}

export interface Test {
  a: string;
  b: number;
}
