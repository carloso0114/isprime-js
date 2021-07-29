const isprime = (a, b) => {
  let array = []
  for (let i = a; i <= b; i++) {
    array.push(i)
  }
  array = array.filter((x) => {
    for (var i = 2; i < x; i++)
      if (x % i === 0) return false;
    return x > 1;
  })
  return array
}

console.log(isprime(0, 50))
