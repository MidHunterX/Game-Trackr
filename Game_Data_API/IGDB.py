import os
import requests
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


def get_field_names(game, field):
    return ", ".join(item.get("name", "N/A") for item in game.get(field, []))


def get_first_field(game, field, key):
    return game.get(field, [{}])[0].get(key, "N/A")


# FETCHING IGDB GAME DATA (WITH ACCESS TOKEN)
def fetch_game_details(title):
    igdb_url = "https://api.igdb.com/v4/games"
    headers = {"Client-ID": TWITCH_CLIENT_ID, "Authorization": f"Bearer {ACCESS_TOKEN}"}
    body = f"""
    fields name, summary, cover.url, genres.name, themes.name, websites.url,
    game_engines.name, game_modes.name, platforms.name,
    player_perspectives.name; where name = "{title}"; limit 1;
    """

    response = requests.post(igdb_url, headers=headers, data=body)

    if response.status_code == 200:
        game = response.json()[0] if response.json() else {}
        return [
            game.get("name", "N/A"),
            game.get("summary", "N/A"),
            game.get("cover", {}).get('url', 'N/A'),
            get_field_names(game, "genres"),
            get_field_names(game, "themes"),
            get_first_field(game, "websites", "url"),
            get_field_names(game, "game_engines"),
            get_field_names(game, "game_modes"),
            get_field_names(game, "platforms"),
            get_field_names(game, "player_perspectives"),
        ]
    else:
        print(f"Request for {title} failed. Status: {response.status_code}")
        print("Looks like it's time to regenerate your ACCESS_TOKEN")
        return [title, "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"]  # BATMAN!!!


game_details = fetch_game_details("The Witcher 2: Assassins of Kings")
print(game_details)
