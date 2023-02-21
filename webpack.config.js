import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
    
export default {
  mode: 'development',
  entry: {
    worker: './'+join('lib', 'worker', 'index.ts'),
    client: './'+join('lib', 'client', 'index.ts'),
    handler: './'+join('lib', 'handler', 'index.ts'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    preferRelative: false,
  },
  module: {
    rules: [
      {
        test: /\.ts?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  output: {
    filename: 'dynamic.[name].js',
    path: join(__dirname, 'static', 'dynamic'),
  },
};