import os
from requests import post
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

TWITCH_CLIENT_ID = os.getenv("TWITCH_CLIENT_ID")
TWITCH_CLIENT_SECRET = os.getenv("TWITCH_CLIENT_SECRET")
ACCESS_TOKEN = os.getenv("ACCESS_TOKEN")  # Lasts only for an Hour

# AUTHENTICATING TWITCH APP (TO GET ACCESS_TOKEN)
# POST REQUEST: https://id.twitch.tv/oauth2/token?client_id=abcdefg12345&client_secret=hijklmn67890&grant_type=client_credentials
# RESPONSE: { "access_token": "access12345token", "expires_in": 5587808, "token_type": "bearer" }
# response = post(f"https://id.twitch.tv/oauth2/token?client_id={TWITCH_CLIENT_ID}&client_secret={TWITCH_CLIENT_SECRET}&grant_type=client_credentials")
# print("RESPONSE: %s" % str(response.json()))


# FETCHING IGDB GAME DATA (WITH ACCESS TOKEN)
def fetch_game_details(title):
    igdb_url = 'https://api.igdb.com/v4/games'
    igdb_headers = { 'Client-ID': TWITCH_CLIENT_ID, 'Authorization': f'Bearer {ACCESS_TOKEN}' }
    igdb_body = f"fields name,genres.name,themes.name,websites.url,game_engines.name,game_modes.name,platforms.name,player_perspectives.name; where name=\"{title}\"; limit 1;"

    response = post(igdb_url, headers=igdb_headers, data=igdb_body)
    # print("RESPONSE: %s" % str(response.json()))

    if response.status_code == 200:
        igdb_data = response.json()
        if igdb_data:
            game = igdb_data[0]
            game_name = game.get('name', 'N/A')
            genres = ', '.join([g.get('name', 'N/A') for g in game.get('genres', [{'name': 'N/A'}])])
            themes = ', '.join([t.get('name', 'N/A') for t in game.get('themes', [{'name': 'N/A'}])])
            company_website = game.get('websites', [{'url': 'N/A'}])[0]['url']
            game_engine = ', '.join([ge.get('name', 'N/A') for ge in game.get('game_engines', [{'name': 'N/A'}])])
            game_modes = ', '.join([gm.get('name', 'N/A') for gm in game.get('game_modes', [{'name': 'N/A'}])])
            platforms = ', '.join([pl.get('name', 'N/A') for pl in game.get('platforms', [{'name': 'N/A'}])])
            player_perspectives = ', '.join([pp.get('name', 'N/A') for pp in game.get('player_perspectives', [{'name': 'N/A'}])])
            return [game_name, genres, themes, company_website, game_engine, game_modes, platforms, player_perspectives]
        else:
            return [title, 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A']  # BATMAN!!!
    else:
        print(f'IGDB request for {title} failed with status code {response.status_code}')
        print("Looks like it's time to regenerate your ACCESS_TOKEN")


game_details = fetch_game_details("The Witcher 2: Assassins of Kings")
print(game_details)

# fetch_game_details("The Witcher 2: Assassins of Kings")
# [0] 'The Witcher 2: Assassins of Kings',
# [1] 'Role-playing (RPG), Adventure',
# [2] 'Action, Fantasy',
# [3] 'http://thewitcher.com/witcher2/',
# [4] 'Havok Physics, REDengine, SpeedTree',
# [5] 'Single player',
# [6] 'Linux, PC (Microsoft Windows), Xbox 360, Mac',
# [7] 'Third person'
