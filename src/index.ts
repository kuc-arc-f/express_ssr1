
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors')
import { renderToString } from 'react-dom/server';
//
import {Ssr} from './views/ssr/App';
import {Csr} from './views/csr/App';

//
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

//express-sessionモジュールを設定する
app.use(session({
  //暗号化に利用するキーを設定
  secret: 'secret key',
  //毎回セッションを作成しない
  resave: false,
  //未初期化状態のセッションを保存しない
  saveUninitialized: false,
  cookie: {
    //生存期間は3日
    maxAge: 3 * 24 * 60 * 1000,
    //httpsを使用しない
    secure: false
  }
}));
//
app.get('/', (req: any, res: any) => {
  try {
    res.send({ name: "welcome" });
  } catch (error) {
    res.sendStatus(500);
  }
});
//ssr
app.get('/ssr', (req: any, res: any) => {
  try {
    res.send(renderToString(Ssr()));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Csr
app.get('/csr', (req: any, res: any) => {
  try {
    res.send(renderToString(Csr()));
  } catch (error) {
    res.sendStatus(500);
  }
});


//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');

export default app;