const fs = require('fs');

const distDir = './server';

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const dbFileSrc = './src/db.json';
const dbFileDist = distDir + '/db.json';

if (
  !fs.existsSync(dbFileDist) && // comment out this line to always overwrite db.json
  fs.existsSync(dbFileSrc)
){
  fs.copyFileSync(dbFileSrc, dbFileDist);
}

if (fs.existsSync(dbFileDist)){
  const jsonServer = require('json-server');
  const server = jsonServer.create();
  const router = jsonServer.router(dbFileDist);
  const middlewares = jsonServer.defaults({
    static: 'dist',
    // noCors: true,
  });
  const port = process.env.PORT || 3131;

  server.use(middlewares);
  server.use(router);

  server.listen(port);
}
