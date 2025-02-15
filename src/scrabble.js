function scrabble(word) {
  const newAlphabet = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10
  }
  let sum = 0
  let i

  if (word === null) {
    return 0
  }
  word = word.toLowerCase()
  for (i = 0; i < word.length; i++) {
    sum += newAlphabet[word[i]] || 0
  }
  if (word.includes('{' && '}')) {
    sum *= 2
  }
  return sum
}
const letter = '{oxyphenbutazone}'

console.log(scrabble(letter))
module.exports = scrabble
