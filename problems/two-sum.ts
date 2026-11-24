function twoSum(nums: number[], target: number): number[] {
  const hashM = new Map();

  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];

    if (hashM.has(sub)) {
      return [hashM.get(sub), i];
    }

    hashM.set(nums[i], i);
  }

  return [];
}
