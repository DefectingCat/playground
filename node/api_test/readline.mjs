import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name? \n`, (name) => {
  console.log(`Greeting ${chalk.blueBright(name)}!`);
  rl.close();
});
