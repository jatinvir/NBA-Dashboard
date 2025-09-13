# ETL

Bootstrap (one-time or quarterly):

fetch teams, players → upsert teams, players.

Season load:

for each season in range, fetch games → upsert games.

per game, fetch box scores → upsert box_scores.

Aggregate step (after each season chunk):

compute per-season totals/rates → upsert player_season_agg.

compute derived metrics (TS%, eFG%, per-36, %, rates).

Refresh cadence:

Off-season: none. In-season: nightly or manual for demo