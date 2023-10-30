const isSubsequence = function(s, t) {
  if (s.length > t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (!t.includes(s[i])) {
      return false;
    }

    t = t.slice(t.indexOf(s[i]) + 1);
  }

  return true;
};
