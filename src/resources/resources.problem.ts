export function resourcesProblem(resources: number[], capacity: number) {
  validateProblemParams(resources, capacity);

  const resourcesAmount = resources.reduce(
    (acc, resource) => acc + resource,
    0
  );

  if (capacity >= resourcesAmount) {
    return resources;
  }

  const rate = capacity / resourcesAmount;

  const distributedResources = resources.map((resource) =>
    Math.floor(resource * rate)
  );

  const distributedResourcesAmount = distributedResources.reduce(
    (acc, resource) => acc + resource,
    0
  );

  let remainder = capacity - distributedResourcesAmount;

  if (remainder === 0) {
    return distributedResources;
  }

  let i = 0;
  while (remainder > 0) {
    if (distributedResources[i] + 1 <= resources[i]) {
      distributedResources[i] += 1;
      remainder -= 1;
    }

    i = i < distributedResources.length - 1 ? i + 1 : 0;
  }

  return distributedResources;
}

function validateProblemParams(resources: number[], capacity: number) {
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
