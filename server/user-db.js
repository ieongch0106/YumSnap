import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

export class PeopleDatabase {
    constructor(dburl) {
        this.dburl = dburl;
    }

    async connect() {
        this.client = await MongoClient.connect(this.dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1,
        });

        this.db = this.client.db('game');

        await this.init();
    }

    async init() {
        this.wordScore = this.db.collection('Word Score');
        this.gameScore = this.db.collection('Game Score')
    }

    async close() {
        this.client.close();
    }

    async saveWordScore(id, name, word, score) {
        score = parseInt(score);
        const res = await this.wordScore.insertOne({_id: id, name, word, score});
        return res;
    }

    async saveGameScore(id, name, score) {
        score = parseInt(score);
        const res = await this.gameScore.insertOne({_id: id, name, score});
        return res;
    }

    async highestWordScores() {
        const res = this.wordScore.find().sort({score:-1}).limit(10).toArray();
        return res;
    }

    async highestGameScores() {
        const res = this.gameScore.find().sort({score:-1}).limit(10).toArray();
        return res;
    }

    async readAllWordScores() {
        const res = await this.wordScore.find({}).toArray();
        return res;
    }

    async readAllGameScores() {
        const res = await this.gameScore.find({}).toArray();
        return res;
    }
}