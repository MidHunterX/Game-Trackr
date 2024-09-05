import json
from IGDB import fetch_game_details

# game = "Assassin's Creed Syndicate"
game = input(str("Enter Name of the Game: "))
game_details = fetch_game_details(game)
# print(game_details)

nm, dv, dc, cv, rt, gr, th, kw, wb, en, md, pf, pv = game_details

game_details = {
    "name": nm,
    "developer": dv,
    "description": dc,
    "rating": rt,
    "genres": gr,
    "themes": th,
    "keywords": kw,
    "website": wb,
    "game_engines": en,
    "player_modes": md,
    "platforms": pf,
    "pov": pv,
}
game_json = json.dumps(game_details, indent=2).replace("\\n", "")
print(game_json)
