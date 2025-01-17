function encode(str) {
  const substitutions = {
    'G': 'A', 'A': 'G',
    'D': 'E', 'E': 'D',
    'R': 'Y', 'Y': 'R',
    'P': 'O', 'O': 'P',
    'L': 'U', 'U': 'L',
    'K': 'I', 'I': 'K',
    'g': 'a', 'a': 'g',
    'd': 'e', 'e': 'd',
    'r': 'y', 'y': 'r',
    'p': 'o', 'o': 'p',
    'l': 'u', 'u': 'l',
    'k': 'i', 'i': 'k'
  };

  return str.split('').map(char => 
    substitutions[char] || char
  ).join('');
}

const decode = encode;
