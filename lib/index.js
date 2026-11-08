
import makeWASocket from './Socket/index.js';
import chalk from 'chalk';

const palette = [
  '#b026ff',
  '#9333ea',
  '#6366ff',
  '#3b82f6',
  '#00bfff',
  '#00ffff',
  '#00ff99',
  '#a3e635',
  '#ffff00',
  '#ff9900',
  '#ff3399'
];

function rainbow(text) {
  return [...text].map((char, i) =>
    char === ' '
      ? char
      : chalk.hex(palette[i % palette.length])(char)
  ).join('');
}

// ASCII ART

const art = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⢀⣀⠤⠤⠤⠤⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢤⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢤⣤⣀⣠⣤⣀⡤⠞⠉⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢢⣀⠀⠀⠀⠀⠀⠀⠀⠀
⢰⣿⣙⣿⣿⣟⡯⠂⠀⠀⡴⠁⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⣼⣦⣤⣤⡄⠀⠀⠀
⠈⡏⠐⠻⣿⠻⠙⠀⠀⢰⠁⠀⢼⡇⠀⠀⠀⠀⠀⠀⢰⣷⡀⠀⢣⠀⠀⠸⠸⢸⣿⣿⣿⣷⣦⠤⡄
⠀⠰⠀⠀⠀⠀⠀⢀⡾⠆⢇⡰⠆⠀⠀⠶⠶⠶⠀⠀⠈⠉⠀⠀⠀⢇⠀⠀⠀⠀⢏⣹⣿⠹⣿⠹⡇
⠀⠀⠈⠀⠐⠀⠉⠁⠀⠀⠀⠉⠒⠠⣤⠀⠀⠀⠀⣀⣀⣀⣈⣀⣠⢼⠓⡤⡀⠀⠀⠀⠙⠻⠋⢸⠆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠂⠀⠀⠀⠀⠀⡰⠛⠁⠈⠉⢢⠀⠈⠑⠒⠤⠤⠤⠒⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠚⠅⠀⠀⠀⠀⠀⠘⠁⠀⠠⠒⡄⡀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⡘⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠒⠒⠒⠒⠒⠛⠒⠀⠒⠓⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

console.log('');
art.split('\n').slice(1, -1).forEach(line => {
  console.log(rainbow(line));
});


console.log('');

console.log(rainbow(`
███████╗ █████╗ ██╗██╗███╗   ██╗██╗     ██╗███╗   ██╗
╚══███╔╝██╔══██╗██║██║████╗  ██║██║     ██║████╗  ██║
  ███╔╝ ███████║██║██║██╔██╗ ██║██║     ██║██╔██╗ ██║
 ███╔╝  ██╔══██║██║██║██║╚██╗██║██║     ██║██║╚██╗██║
███████╗██║  ██║██║██║██║ ╚████║███████╗██║██║ ╚████║
╚══════╝╚═╝  ╚═╝╚═╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝╚═╝  ╚═══╝
`));

console.log('');

console.log(
  rainbow('Telegram : ') + chalk.white('@momykamu')
);

console.log(
  rainbow('TikTok   : ') + chalk.white('@cyraww')
);

console.log(
  rainbow('WhatsApp : ') + chalk.white('wa.me/6281936654099')
);

console.log('');

console.log(rainbow('developer : @zaiinlin For More Update'));

console.log('');

// Baileys exports tetap di bawah
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
export * as MessageBuilder from './Socket/MessageBuilder.js';
export { default as MB } from './Socket/MessageBuilder.js';
