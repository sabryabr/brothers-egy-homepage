/* fleet-data.js
 * GENERATED from a live ERP export on 2026-10-10; regenerate via build-fleet-data.mjs; do not hand-edit.
 * Source snapshot: fleet-export.raw.json (exported 2026-10-10T16:06:48.359Z).
 *
 * Each entry is a CLASS the website sells (not a physical unit). Pricing fields
 * (tiers, pMin, dep, fc, branches, year) are REAL ERP data. Presentation fields
 * (seats, bags, old, ribbon, img, cat) are INDICATIVE prototype visuals — see README.md.
 */
window.BEGY_FLEET = {
  "soueast_s09": {
    "name": "SOUEAST S09",
    "make": "Soueast",
    "model": "S09",
    "slug": "soueast-s09",
    "cat": "PREMIUM SUV",
    "tier": "premium",
    "year": "2027",
    "seats": 7,
    "bags": 4,
    "old": 5400,
    "ribbon": "New 2026",
    "rc": "r-hot",
    "img": "https://brothersegy.com/wp-content/uploads/2026/06/Soueast-S09-scaled.png",
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 4500
      },
      {
        "min_days": 3,
        "max_days": 6,
        "daily_rate": 3800
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 3500
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 3300
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 3000
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 2800
      }
    ],
    "pMin": 2800,
    "pMax": 4500,
    "dep": 40000,
    "fc": 2000,
    "branches": [
      "hurghada"
    ],
    "branchesAssumed": false,
    "unitCount": 2
  },
  "jetour_x90_plus": {
    "name": "JETOUR X90 PLUS",
    "make": "Jetour",
    "model": "X90 Plus",
    "slug": "jetour-x90-plus",
    "cat": "FLAGSHIP 7-SEATER",
    "tier": "premium",
    "year": "2026",
    "seats": 7,
    "bags": 4,
    "old": 5000,
    "ribbon": "Flagship",
    "rc": "r-pop",
    "img": "https://brothersegy.com/wp-content/uploads/2026/06/Jetour-X90-Plus-scaled.png",
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 4200
      },
      {
        "min_days": 3,
        "max_days": 6,
        "daily_rate": 3500
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 3200
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 3000
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 2600
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 2500
      }
    ],
    "pMin": 2500,
    "pMax": 4200,
    "dep": 40000,
    "fc": 1800,
    "branches": [
      "hurghada",
      "rashid"
    ],
    "branchesAssumed": false,
    "unitCount": 2
  },
  "hyundai_tucson": {
    "name": "HYUNDAI TUCSON",
    "make": "Hyundai",
    "model": "Tucson",
    "slug": "hyundai-tucson",
    "cat": "PREMIUM SUV",
    "tier": "premium",
    "year": "2022",
    "seats": 5,
    "bags": 3,
    "old": 4800,
    "ribbon": "Premium",
    "rc": "r-pre",
    "img": "https://brothersegy.com/wp-content/uploads/2026/01/Hyundai-Tucson.png",
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 4000
      },
      {
        "min_days": 3,
        "max_days": 6,
        "daily_rate": 3200
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 3000
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 2800
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 2600
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 2500
      }
    ],
    "pMin": 2500,
    "pMax": 4000,
    "dep": 40000,
    "fc": 1600,
    "branches": [
      "hurghada"
    ],
    "branchesAssumed": false,
    "unitCount": 1
  },
  "haval_jolion": {
    "name": "HAVAL JOLION",
    "make": "Haval",
    "model": "Jolion",
    "slug": "haval-jolion",
    "cat": "TRENDING SUV",
    "tier": "premium",
    "year": "2022",
    "seats": 5,
    "bags": 3,
    "old": 4200,
    "ribbon": "Trending",
    "rc": "r-hot",
    "img": "https://brothersegy.com/wp-content/uploads/2026/01/Haval-Jolion-1.png",
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 3500
      },
      {
        "min_days": 3,
        "max_days": 6,
        "daily_rate": 2600
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 2500
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 2400
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 2300
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 2200
      }
    ],
    "pMin": 2200,
    "pMax": 3500,
    "dep": 35000,
    "fc": 1400,
    "branches": [
      "hurghada"
    ],
    "branchesAssumed": false,
    "unitCount": 1
  },
  "kia_sportage": {
    "name": "KIA SPORTAGE",
    "make": "Kia",
    "model": "Sportage",
    "slug": "kia-sportage",
    "cat": "PREMIUM CROSSOVER",
    "tier": "premium",
    "year": "2018",
    "seats": 5,
    "bags": 3,
    "old": 4200,
    "ribbon": "Top Rated",
    "rc": "r-top",
    "img": "https://brothersegy.com/wp-content/uploads/2026/01/Kia-Sportage.png",
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 3500
      },
      {
        "min_days": 3,
        "max_days": 6,
        "daily_rate": 2600
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 2500
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 2400
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 2300
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 2200
      }
    ],
    "pMin": 2200,
    "pMax": 3500,
    "dep": 40000,
    "fc": 1400,
    "branches": [
      "alexandria"
    ],
    "branchesAssumed": false,
    "unitCount": 1
  },
  "mg_zs": {
    "name": "MG ZS",
    "make": "Mg",
    "model": "ZS",
    "slug": "mg-zs",
    "cat": "COMPACT SUV",
    "tier": "crossover",
    "year": "2025",
    "seats": 5,
    "bags": 3,
    "old": 3800,
    "ribbon": "Best Value",
    "rc": "r-val",
    "img": "https://brothersegy.com/wp-content/uploads/2026/01/MG-ZS.png",
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 3200
      },
      {
        "min_days": 2,
        "max_days": 6,
        "daily_rate": 2500
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 2400
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 2300
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 2100
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 1900
      }
    ],
    "pMin": 1900,
    "pMax": 3200,
    "dep": 35000,
    "fc": 1200,
    "branches": [
      "hurghada",
      "cairo",
      "alexandria",
      "rashid"
    ],
    "branchesAssumed": true,
    "unitCount": 3
  },
  "renault_duster": {
    "name": "RENAULT DUSTER",
    "make": "Renault",
    "model": "Duster",
    "slug": "renault-duster",
    "cat": "RUGGED SUV",
    "tier": "crossover",
    "year": "2025",
    "seats": 5,
    "bags": 3,
    "old": 3800,
    "ribbon": "",
    "rc": "r-std",
    "img": "https://brothersegy.com/wp-content/uploads/2026/01/Renault-Duster-1.png",
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 3200
      },
      {
        "min_days": 3,
        "max_days": 6,
        "daily_rate": 2500
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 2400
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 2300
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 2100
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 1900
      }
    ],
    "pMin": 1900,
    "pMax": 3200,
    "dep": 35000,
    "fc": 1200,
    "branches": [
      "hurghada",
      "cairo",
      "alexandria",
      "rashid"
    ],
    "branchesAssumed": true,
    "unitCount": 1
  },
  "mg_5": {
    "name": "MG 5",
    "make": "Mg",
    "model": "5",
    "slug": "mg-5",
    "cat": "VALUE SEDAN",
    "tier": "sedan",
    "year": "2026",
    "seats": 5,
    "bags": 3,
    "old": 3300,
    "ribbon": "Best Value",
    "rc": "r-val",
    "img": "https://brothersegy.com/wp-content/uploads/2026/01/MG-5-2.png",
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 2800
      },
      {
        "min_days": 3,
        "max_days": 6,
        "daily_rate": 2200
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 2100
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 2000
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 1800
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 1700
      }
    ],
    "pMin": 1700,
    "pMax": 2800,
    "dep": 30000,
    "fc": 1000,
    "branches": [
      "hurghada",
      "cairo",
      "alexandria",
      "rashid"
    ],
    "branchesAssumed": true,
    "unitCount": 2
  },
  "renault_megane": {
    "name": "RENAULT MEGANE",
    "make": "Renault",
    "model": "Megane",
    "slug": "renault-megane",
    "cat": "COMFORT SEDAN",
    "tier": "sedan",
    "year": "2020",
    "seats": 5,
    "bags": 3,
    "old": 2900,
    "ribbon": "",
    "rc": "r-std",
    "img": null,
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 2500
      },
      {
        "min_days": 3,
        "max_days": 6,
        "daily_rate": 2000
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 1900
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 1800
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 1600
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 1400
      }
    ],
    "pMin": 1400,
    "pMax": 2500,
    "dep": 35000,
    "fc": 1200,
    "branches": [
      "hurghada"
    ],
    "branchesAssumed": false,
    "unitCount": 1
  },
  "nissan_sunny": {
    "name": "NISSAN SUNNY",
    "make": "Nissan",
    "model": "Sunny",
    "slug": "nissan-sunny",
    "cat": "RELIABLE SEDAN",
    "tier": "sedan",
    "year": "2026",
    "seats": 5,
    "bags": 3,
    "old": 3000,
    "ribbon": "",
    "rc": "r-std",
    "img": "https://brothersegy.com/wp-content/uploads/2026/01/Nissan-Sunny.png",
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 2500
      },
      {
        "min_days": 3,
        "max_days": 6,
        "daily_rate": 2000
      },
      {
        "min_days": 7,
        "max_days": 12,
        "daily_rate": 1900
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 1800
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 1600
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 1400
      }
    ],
    "pMin": 1400,
    "pMax": 2500,
    "dep": 30000,
    "fc": 900,
    "branches": [
      "cairo"
    ],
    "branchesAssumed": false,
    "unitCount": 3
  },
  "chevrolet_aveo": {
    "name": "CHEVROLET AVEO",
    "make": "Chevrolet",
    "model": "Aveo",
    "slug": "chevrolet-aveo",
    "cat": "BUDGET SEDAN",
    "tier": "sedan",
    "year": "2017",
    "seats": 5,
    "bags": 3,
    "old": 2200,
    "ribbon": "",
    "rc": "r-std",
    "img": null,
    "tiers": [
      {
        "min_days": 1,
        "max_days": 2,
        "daily_rate": 1800
      },
      {
        "min_days": 3,
        "max_days": 12,
        "daily_rate": 1500
      },
      {
        "min_days": 13,
        "max_days": 18,
        "daily_rate": 1400
      },
      {
        "min_days": 19,
        "max_days": 25,
        "daily_rate": 1300
      },
      {
        "min_days": 26,
        "max_days": 45,
        "daily_rate": 1200
      }
    ],
    "pMin": 1200,
    "pMax": 1800,
    "dep": 20000,
    "fc": 800,
    "branches": [
      "hurghada",
      "cairo",
      "alexandria",
      "rashid"
    ],
    "branchesAssumed": true,
    "unitCount": 1
  }
};
