/* ============================================================
   GAMES CONFIG — edit this file to add / remove games
   ------------------------------------------------------------
   Each entry:
     title    : shown big
     tagline  : short description
     url      : opens when LAUNCH is clicked
     tag      : small label (DEMO, WEBGL, ...)
     color    : accent color in oklch() — presets below
     glyph    : single symbol icon (try ✦ ◈ ▲ ❖ ◐ ✺ ✱ ◆ ⬡ ☼)

   Color presets:
     cyan   "oklch(0.78 0.22 180)"
     pink   "oklch(0.7 0.3 330)"
     yellow "oklch(0.8 0.2 90)"
     orange "oklch(0.65 0.25 30)"
     green  "oklch(0.75 0.25 140)"
     purple "oklch(0.65 0.28 290)"
     red    "oklch(0.65 0.28 20)"
   ============================================================ */

window.GAMES = [
  {
    title: "The Tree",
    tagline: "very stupid game",
    url: "https://romanguy-games.itch.io/the-tree",
    tag: "ADVENTURE",
    color: "oklch(0.78 0.22 180)",
    glyph: "✦",
  },
  {
    title: "Big Goofy Project Plus",
    tagline: "WebGL Port — play in browser",
    url: "https://romanguy-games.itch.io/bgppwp",
    tag: "WEBGL",
    color: "oklch(0.7 0.3 330)",
    glyph: "◈",
  },
  {
    title: "BGP+ [DEMO]",
    tagline: "Big Goofy Project Plus — demo build",
    url: "https://romanguy-games.itch.io/big-goofy-project-plus",
    tag: "DEMO",
    color: "oklch(0.8 0.2 90)",
    glyph: "▲",
  },
  {
    title: "BGP+ Archive",
    tagline: "Older versions of BGP+",
    url: "https://romanguy-games.itch.io/big-goofy-project-plus-archive",
    tag: "ARCHIVE",
    color: "oklch(0.65 0.25 30)",
    glyph: "❖",
  },
  {
    title: "BGP Textures/Images",
    tagline: "Asset pack from the BGP universe",
    url: "https://romanguy-games.itch.io/bgppp",
    tag: "ASSETS",
    color: "oklch(0.75 0.25 140)",
    glyph: "◐",
  },
];
