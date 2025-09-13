# Metric

## Shooting: fg_pct, tp_pct (3p_pct), ft_pct, efg_pct, ts_pct

- fg_pct
    - Forumla: FGM/FGA
    - Inputs: FGM,FGA
    - Edge Case: Null if FGA = 0

- tp_pct
    - Forumla: 3PM/3PA
    - Inputs: 3PM,3PA
    - Edge Case: Null if 3PA = 0


- ft_pct
    - Forumla: FTM/FTA
    - Inputs: FTM,FTA
    - Edge Case: Null if FTA = 0


- efg_pct
    - Forumla: (FGM + 0.5*3PM) / FGA
    - Inputs: FGM, 3PM, FGA
    - Edge Case: Null if FPA = 0


- ts_pct
    - Forumla: PTS / [2 * (FGA + 0.44 * FTA)]
    - Inputs: PTS, FGA, FTA
    - Edge Case: Null if denom = 0



# Volume/Role: fga_per36, tpa_per36, fta_per36, usg_pct (proxy)


- fga_per36
    - Forumla: FGA/MIN * 36
    - Inputs: FGA,MIN
    - Edge Case: Null if MIN = 0

- tpa_per36
    - Forumla: 3PA/MIN * 36
    - Inputs: 3PA,MIN
    - Edge Case: Null if MIN = 0

- fta_per36
    - Forumla: FTA/MIN * 36
    - Inputs: FTA,MIN
    - Edge Case: Null if MIN = 0

- usg_pct
    - Forumla: 100 * ((FGA + 0.44 * FTA + TOV) * (TeamMIN/5)) / (MIN * (TeamFGA + 0.44*TeamFTA + TeamTOV))
    - Inputs: player FGA, FTA, TOV, Min; team total FGA, FTA, TOV, TeamMin
    - Edge Case: Null if MIN = 0 or denom = 0

# Playmaking: ast_pct, tov_pct, ast_to_ratio


- ast_pct
    - Forumla: 100 * AST / ( (MIN / (TeamMin/5)) * TeamFGM - FGM)
    - Inputs: AST, Min, TeamMin, TeamFGM
    - Edge Case: Null if denom = 0

- tov_pct
    - Forumla: 100 · TOV / (FGA + 0.44·FTA + TOV)
    - Inputs: TOV, FGA, FTA
    - Edge Case: Null if denom = 0

- ast_to_ratio
    - Forumla: AST/TOV
    - Inputs: TOV, AST
    - Edge Case: Null if TOV = 0



# Rebounding: orb_pct, drb_pct, trb_pct

- orb_pct
    - Forumla: 100 * OREB * (TeamMIN/5) / (MIN * (TeamOREB + OppDRB))
    - Inputs: player OREB, DREB, REB, MIN, team OREB, DREB, REB, opp OREB, DREB, REB
    - Edge Case: Null if denom = 0

- drb_pct
    - Forumla: 100 * OREB * (TeamMIN/5) / (MIN * (TeamOREB + OppDRB))
    - Inputs: player OREB, DREB, REB, MIN, team OREB, DREB, REB, opp OREB, DREB, REB
    - Edge Case: Null if denom = 0

- trb_pct
    - Forumla: 100 · REB · (TeamMIN/5) / ( MIN · (TeamREB + OppREB) )
    - Inputs: player OREB, DREB, REB, MIN, team OREB, DREB, REB, opp OREB, DREB, REB
    - Edge Case: Null if denom = 0


# Per-36: pts_per36, reb_per36, ast_per36
- pts_per36
    - Forumla: PTS / MIN * 36
    - Inputs: PTS , MIN
    - Edge Case: Null  denom = 0


- reb_per36
    - Forumla: REB / MIN * 36
    - Inputs: REB , MIN
    - Edge Case: Null  denom = 0


- ast_per36
    - Forumla: AST / MIN * 36
    - Inputs: AST , MIN
    - Edge Case: Null  denom = 0


