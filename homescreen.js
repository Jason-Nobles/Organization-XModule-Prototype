export const handler = async (event) => {
  console.log("HTTP Request", JSON.stringify(event))
  
  
  let xmJson = {
        "metadata": {
            "version": "2.0"
        },
        "contentContainerWidth": "wide",
        "contentBackgroundImage": {
          "url": "https://www.ncat.edu/news/2022/08/tm76023-e-homecoming-game-127-2.jpg",
          "overlayType": "solid",
          "overlayBlend":"darken"
        },
        "contentStyle": "focal",
        "backToTopBackgroundColor": "#004684",
        "backToTopTextColor": "white",
        "content": [
        {
          "elementType": "blockHeading",
          "heading": "NCATConnect",
          "headingFontWeight": "semibold",
          "headingFontSize": "3.27rem",
          "headingFontStyle": "italic",
          "headingTextAlignment": "center",
          "headingTextColor": "#fdb927",
          "headingFontFamily": "Montserrat Semi-Bold Italic, serif",
          
          "descriptionTextColor": "white", //#004684
          "descriptionFontStyle": "normal",
          "descriptionTextAlignment": "right",
          "descriptionFontFamily": "Rendered HTML, serif",
          "description": `<i>North Carolina A&T State University</i><br>     <br> `
        },
        {
            "elementType": "grid",
            "id": "density_medium_springboard",
            "gridStyle": "springboard",
            "gridDensity": "medium",
            "textblockLineClamp": 1,
            "titleFontSize": "small",
            "titleTextColor": "white",
            "titleFontWeight": "bold",
            "marginBottom": "loose",
            "items": [
                {
                    "label": "Directory",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/people.png"
                    }
                },
                {
                    "label": "Blackboard",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/blackboard.png"
                    }
                },
                {
                    "label": "Athletics",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/athletics.png"
                    }
                },
                {
                    "label": "Map",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/map.png"
                    }
                },
                {
                    "label": "Library",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/libraries.png"
                    }
                },
                {
                    "label": "Emergency",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/emergency.png"
                    }
                },
                {
                    "label": "News",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/news.png"
                    }
                },
                {
                    "label": "Events",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/calendar.png"
                    }
                },
                {
                    "label": "Videos",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/video.png"
                    }
                },
                {
                    "label": "Alumni",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/alumni.png"
                    }
                },
                {
                    "label": "Social",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/social.png"
                    }
                },
                {
                    "label": "Wellness",
                    "link": {
                        "relativePath": ""
                    },
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/health.png"
                    }
                },
                {
                    "label": "Organizations",
                    "image": {
                        "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/my_circle.png"
                    },
                    "link": {
                      "module": {
                          "id": "campus_organizations",
                          "page": "index",
                          "targetNewWindow": true,
                      }
                    }
                }
            ]
        }]
  };

  
  
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(xmJson),
  };
  return response;
};