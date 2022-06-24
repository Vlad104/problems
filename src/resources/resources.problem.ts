export function resourcesProblem(resources: number[], capacity: number) {
  validatePromlemParams(resources, capacity);

  const totalResources = resources.reduce((acc, resource) => acc + resource, 0);

  if (capacity >= totalResources) {
    return resources;
  }

  const rate = capacity / totalResources;

  return resources.map((resource) => Math.floor(resource * rate));
}

function validatePromlemParams(resources: number[], capacity: number) {
  resources.forEach(isPositiveInteger);
  isPositiveInteger(capacity);
}

function isPositiveInteger(value: number) {
  if (typeof value !== "number") {
    throw new Error(`value ${value} should be number`);
  }

  if (!Number.isSafeInteger(value)) {
    throw new Error(`value ${value} is not safe integer`);
  }

  if (value < 0) {
    throw new Error(`value ${value} should be positive`);
  }
}
