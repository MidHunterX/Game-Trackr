import json
import requests
from IGDB import fetch_game_details
from datetime import datetime


def main():
    game = input(str("Enter Name of the Game: "))
    if game == "":
        game = "Assassins Creed Syndicate"

    game_details = fetch_game_details(game)
    (
        name,
        release_date,
        developer,
        description,
        cv,
        rating,
        genres,
        themes,
        keywords,
        website,
        engines,
        modes,
        platforms,
        povs,
    ) = game_details

    # DOUBLE TO 1 DECIMAL FLOAT
    if isinstance(rating, int):
        rating = round(rating, 1)  # Round to 1 decimal
    else:
        rating = 0

    # UNIX TIMESTAMP TO UTC ISO
    release_year = 0
    if release_date != "" and release_date != "N/A":
        release_year = datetime.fromtimestamp(int(release_date)).strftime("%Y")
        # .strftime('%Y-%m-%d %H:%M:%S'))

    # GET CONFIRMATION
    mini_details = {"name": name, "release_year": release_year, "developer": developer}
    print(mini_details)
    proceed = input(str("Proceed? (Y/n): ")).lower()
    if proceed == "y" or proceed == "":
        pass
    else:
        exit(0)

    game_details = {
        "name": name,
        "release_year": release_year,
        "developer": developer,
        "description": description,
        "rating": rating,
        "genres": genres,
        "themes": themes,
        "keywords": keywords,
        "website": website,
        "game_engines": engines,
        "player_modes": modes,
        "platforms": platforms,
        "pov": povs,
    }
    game_json = json.dumps(game_details, indent=2).replace("\\n", "")
    print(game_json)

    img = input(str("Enter cover image filename: "))
    download_cover_image(cv, img)


def download_cover_image(hash, file_name="cover"):
    import os
    dir_path = "covers"
    if not os.path.exists(dir_path):
        os.mkdir(dir_path)

    # Doc: https://api-docs.igdb.com/#images
    cover_size = "cover_big"  # 264 x 374
    if hash != "N/A":
        # //images.igdb.com/igdb/image/upload/t_thumb/xxxxxx.jpg
        url = f"https://images.igdb.com/igdb/image/upload/t_{cover_size}/{hash}.jpg"
        try:
            # COVER IMAGE
            response = requests.get(url)
            response.raise_for_status()
            with open(f"{dir_path}/{file_name}.jpg", "wb") as file:
                file.write(response.content)

        except requests.RequestException as e:
            print(f"Failed to download cover image: {e}")
    else:
        print("No valid cover URL provided.")


if __name__ == "__main__":
    main()
