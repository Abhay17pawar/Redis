import { createReadStream } from 'fs';
import { stdout } from 'process';
const filestream = createReadStream(new URL('./stream.txt', import.meta.url));
const outputstream = stdout;
filestream.pipe(outputstream);
