# GAME DATA API

Step 1: Register an **Application** on [Twitch Developers Page](https://dev.twitch.tv/console)
Step 2: Get **TWITCH_CLIENT_ID** and Generate **TWITCH_CLIENT_SECRET** from your **Application**
Step 3: Add **.env** file and put both **TWITCH_CLIENT_ID** and **TWITCH_CLIENT_SECRET** in it like

```bash
TWITCH_CLIENT_ID="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
TWITCH_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
ACCESS_TOKEN=""
```

Step 4: Run Python Script with

```bash
python IGDB.py
```

Step 5: That's it! You now got your **ACCESS_TOKEN** which will last only for an hour

For more details, refer [IGDB API Docs](https://api-docs.igdb.com/)