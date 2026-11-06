// Fetches your Steam library and writes steam-data.js. Runs in GitHub Actions.
import { writeFileSync } from "node:fs";
const { STEAM_API_KEY: key, STEAM_VANITY: vanity, STEAM_LIMIT = "24" } = process.env;
if (!key || !vanity) throw new Error("Add the STEAM_API_KEY secret and set STEAM_VANITY.");
const api = async (path) => {
  const r = await fetch(`https://api.steampowered.com/${path}&key=${key}&format=json`);
  if (!r.ok) throw new Error(`Steam API returned ${r.status}`);
  return (await r.json()).response;
};
const { steamid } = await api(`ISteamUser/ResolveVanityURL/v1/?vanityurl=${vanity}`);
if (!steamid) throw new Error("Could not find that Steam profile name.");
const { games = [] } = await api(`IPlayerService/GetOwnedGames/v1/?steamid=${steamid}&include_appinfo=1&include_played_free_games=1`);
if (!games.length) throw new Error("No games returned. Set Game details to Public in your Steam privacy settings.");
const hrs = (min) => Math.round(min / 6) / 10;
const top = games
  .filter((g) => g.playtime_forever > 0)
  .sort((a, b) => b.playtime_forever - a.playtime_forever)
  .slice(0, Number(STEAM_LIMIT))
  .map((g) => ({ appid: g.appid, name: g.name, hours: hrs(g.playtime_forever), recent: hrs(g.playtime_2weeks || 0) }));
const out = { updated: new Date().toISOString().slice(0, 10), games: top };
writeFileSync("steam-data.js", `// Written automatically by scripts/steam-sync.mjs. Do not edit by hand.\nwindow.STEAM = ${JSON.stringify(out, null, 1)};\n`);
