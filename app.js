import express from 'express';
import dotenv from 'dotenv';
import connect from './schemas/index.js';
import characterRouter from './routes/characters.js';
import itemRouter from './routes/items.js';
import errorHandler from './middleware/erroHandlerMiddleware.js';
import router from './routes/items.js';

const app = express();
connect(); // MongoDB에 연결

// 미들웨어 설정
app.use(express.json());

// 라우터 설정
app.use('/api/characters/', characterRouter);
app.use('/api/items', itemRouter);

app.use(errorHandler);
// 포트 설정 및 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
