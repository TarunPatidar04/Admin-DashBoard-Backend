import express from 'express';
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).send('Hello Worlddddddddddddddddddddddddd!');
});

router.route('/register').get((req, res) => {
  res.status(200).send('Hello Rggister!');
});


export default router;