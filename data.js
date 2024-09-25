var APP_DATA = {
  "scenes": [
    {
      "id": "0-terrasse",
      "name": "Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7073694122266039,
        "pitch": 0.062119614984338156,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.7026185709590749,
          "pitch": 0.12188147955331807,
          "rotation": 0,
          "target": "1-salle--manger"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salle--manger",
      "name": "Salle à manger",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7112724259359808,
        "pitch": 0.0006534173858039338,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.2756870222490928,
          "pitch": 0.39880907212264916,
          "rotation": 0,
          "target": "0-terrasse"
        },
        {
          "yaw": 2.38446988949503,
          "pitch": 0.09808770065304451,
          "rotation": 0,
          "target": "3-cuisine"
        },
        {
          "yaw": 1.3137238335423511,
          "pitch": 0.029127083280609867,
          "rotation": 0,
          "target": "2-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5568469824778646,
        "pitch": 0.022947670275557996,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.2062041369702623,
          "pitch": 0.06146494804595726,
          "rotation": 0,
          "target": "3-cuisine"
        },
        {
          "yaw": 1.6902073825974329,
          "pitch": 0.11301757020291703,
          "rotation": 0,
          "target": "1-salle--manger"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.3802424445376715,
        "pitch": -0.018330461646700158,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.840360389936058,
          "pitch": 0.05517740429806217,
          "rotation": 0,
          "target": "2-salon"
        },
        {
          "yaw": 0.6909134659836749,
          "pitch": 0.15562446973537014,
          "rotation": 0,
          "target": "1-salle--manger"
        },
        {
          "yaw": 0.06559465965257516,
          "pitch": 0.17072226908732624,
          "rotation": 0,
          "target": "0-terrasse"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "AR24",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
