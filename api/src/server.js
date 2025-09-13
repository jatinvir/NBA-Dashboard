import express from 'express';
import dotenv from 'dotenv';
import pool from './db.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/healthz', async (req, res) => {
    try {
        const reuslt = await pool`SELECT 1`;
        res.status(200).json({ status: 'ok', db: "up" });
    } catch (error) {
        res.status(500).json({ status: 'error', db: "down" });
    }
});

app.get('/players', async (req, res) => {
    try {
        const players = await pool`SELECT * FROM players ORDER BY full_name ASC, player_id ASC`;
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch players' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});