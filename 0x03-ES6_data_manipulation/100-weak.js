export const weakMap = new WeakMap();

export function queryAPI({ protocol, name }) {
  const count = weakMap.get(name) || 0;
  weakMap.set(name, count + 1);

  if (count >= 5) {
    throw new Error(`Endpoint ${name} load is high`);
  }
	return count;
}
