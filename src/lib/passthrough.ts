import { ServerResponse } from 'http';

const fs = require('fs');
const stream = require('stream')

export default function passthrough(filepath: string, res: ServerResponse): ServerResponse {
  // @todo:
  // 1. implement this function, use `PassThrough` stream to pipe the file content to the response explain what `PassThrough` stream is and why it is used here, could you tell another way to do this?
  // 2. add headers:
  //   - Cache-Control: max-age=3600, public
  //   - X-Metadata: technical-test
  // to see result, check `http://localhost:3000/api/storages/working.json`

  res.setHeader('Cache-Control', 'max-age=3600, public')
  res.setHeader('X-Metadata', 'technical-test')
  
  // we use passThrough to pass byte value to the response in the browser
  // Another way to achieve this is using fs.readFile and then write the result in response
  const fileStream = new stream.PassThrough();
  fs.createReadStream(filepath).pipe(fileStream);

  return fileStream.pipe(res);
}
