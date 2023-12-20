// 풀이 1
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i += 1) {
    console.log('*'.repeat(a));
  }
});

// 풀이 2
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  console.log(`${'*'.repeat(a)}\n`.repeat(b));
});
