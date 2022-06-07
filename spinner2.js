let spinner = "| / - \\ |";

let timer = 0;
while (timer < 5000) {
  for (let sym of spinner) {
    timer += 100;
    setTimeout(() => {
      process.stdout.write(`\r${sym}    `)
    }, timer);
  }
};
setTimeout(() => {process.stdout.write('\n')}, 600*spinner.length);