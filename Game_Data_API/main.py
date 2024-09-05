import json
import requests
from IGDB import fetch_game_details


def main():
    game = input(str("Enter Name of the Game: "))
    if game == "":
        game = "Assassins Creed Syndicate"

    game_details = fetch_game_details(game)
    (
        name,
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
    if isinstance(rating, int):
        rating = round(rating, 1)  # Round to 1 decimal
    else:
        rating = 0

    mini_details = {"name": name, "developer": developer}
    print(mini_details)

    proceed = input(str("Proceed? (Y/n): ")).lower()
    if proceed == "y" or proceed == "":
        pass
    else:
        exit(0)

    game_details = {
        "name": name,
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
    # Doc: https://api-docs.igdb.com/#images
    cover_size = "cover_big"  # 264 x 374
    if hash != "N/A":
        # //images.igdb.com/igdb/image/upload/t_thumb/xxxxxx.jpg
        url = f"https://images.igdb.com/igdb/image/upload/t_{cover_size}/{hash}.jpg"
        try:
            # COVER IMAGE
            response = requests.get(url)
            response.raise_for_status()
            with open(f"{file_name}.jpg", "wb") as file:
                file.write(response.content)

        except requests.RequestException as e:
            print(f"Failed to download cover image: {e}")
    else:
        print("No valid cover URL provided.")


if __name__ == "__main__":
    main()
