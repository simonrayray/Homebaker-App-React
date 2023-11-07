module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "Unit": "16px",
        "OneAndHalfUnits": "24px",
        "TwoUnits": "32px",
        "SixUnits": "96px",
        "ThreeUnits": "48px",
        "FourUnits": "64px",
        "FiveUnits": "80px",
        "HalfUnit": "8px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Round": "50%",
        "Radius8": "8px",
        "Radius2": "2px"
      },
      "scale": {
        "Large": "144px",
        "Medium": "96px",
        "XLarge": "192px",
        "XXLarge": "288px",
        "XSmall": "16px",
        "Small": "48px",
        "MaxWidth": "1400px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}