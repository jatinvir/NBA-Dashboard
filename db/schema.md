# DB Design

Tables that will be used

```sql
players(player_id PK, first_name, last_name, position)
```
```sql
teams(team_id PK, name, city, abbreviation)
```
```sql
seasons(season_id PK, year_start)
```
```sql
games(game_id PK, season_id FK, date, home_team_id FK, away_team_id FK)
```
```sql
box_scores(game_id FK, player_id FK, minutes, fga, fgm, fta, ftm, tpa, tpm, oreb, dreb, ast, stl, blk, tov, pf, pts, team_id, opp_team_id, PRIMARY KEY (game_id, player_id))
```
```sql
player_season_agg(player_id, season_id, gp, min, fga, fgm, fta, ftm, tpa, tpm, oreb, dreb, ast, stl, blk, tov, pf, pts, ts_pct, efg_pct, usg_pct, ast_pct, tov_pct, orb_pct, drb_pct, trb_pct, stl_pct, blk_pct, pts_per36, reb_per36, ast_per36, …, PRIMARY KEY (player_id, season_id))
```
```sql
team_game_totals(game_id, team_id, min, fga, fgm, fta, ftm, tpa, tpm, oreb, dreb, reb, ast, stl, blk, tov, pf, pts, , PRIMARY KEY(game_id, team_id))
```