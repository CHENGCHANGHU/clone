/**
 * Clone a JS value
 * @param from Source JS value
 * @returns A new JS value
 */
export function clone<T = any>(from: T): T {
  switch (Object.prototype.toString.call(from)) {
    case '[object Array]':
      return (from as any[]).map(item => clone(item)) as T;
    case '[object Object]':
      return Object.keys(from as any).reduce((to: any, curr: string) => {
        to[curr] = clone((from as any)[curr]);
        return to;
      }, {} as T);
    case '[object Map]':
      return new Map(clone(Array.from(from as Map<any, any>))) as T;
    case '[object Set]':
      return new Set(clone([...(from as Set<any>)])) as T;
    case '[object Date]':
      return new Date((from as Date).getTime()) as T;
    case '[object RegExp]':
      return new RegExp((from as RegExp).source) as T;
    default:
      return from;
  }
}
