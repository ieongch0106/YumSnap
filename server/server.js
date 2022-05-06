import express from 'express';
import { PeopleDatabase } from './user-db.js';

class PeopleServer {
  constructor(dburl) {
    this.dburl = dburl;
    this.app = express();
    this.app.use('/client/index.html', express.static('client'));
  }

  async initRoutes() {
    // Note: when using arrow functions, the "this" binding is lost.
    const self = this;

    this.app.post('/wordScore', async (req, res) => {
      try {
        const { id, name, word, score } = req.query;
        const player = await self.db.saveWordScore(id, name, word, score);
        res.status(200).json(player);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get('/highestWordScores', async (req, res) => {
      try {
        const scores = await self.db.highestWordScores();
        res.status(200).json(scores);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.post('/gameScore', async (req, res) => {
      try {
        const { id, name, score } = req.query;
        const player = await self.db.saveGameScore(id, name, score);
        res.status(200).json(player);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get('/highestGameScores', async (req, res) => {
      try {
        const scores = await self.db.highestGameScores();
        res.status(200).json(scores);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get('/all/word', async (req, res) => {
      try {
        const players = await self.db.readAllWordScores();
        res.send(JSON.stringify(players));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get('/all/game', async (req, res) => {
      try {
        const players = await self.db.readAllGameScores();
        res.send(JSON.stringify(players));
      } catch (err) {
        res.status(500).send(err);
      }
    });
  }

  async initDb() {
    this.db = new PeopleDatabase(this.dburl);
    await this.db.connect();
  }

  async start() {
    await this.initRoutes();
    await this.initDb();
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`PeopleServer listening on port ${port}!`);
    });
  }
}

const server = new PeopleServer(process.env.DATABASE_URL);
server.start();