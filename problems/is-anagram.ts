function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const hashKey = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    hashKey.set(s[i], (hashKey.get(s[i]) || 0) + 1);
  }

  for (let j = 0; j < t.length; j++) {
    const count = hashKey.get(t[j]);
    if (!count) return false;

    hashKey.set(t[j], count - 1);
  }

  return true;
}
