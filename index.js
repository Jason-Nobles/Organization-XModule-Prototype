import orgs from './ncatorgs.js'

export const handler = async (event) => {
  console.log("HTTP Request", JSON.stringify(event));


  function getList(start, end) {
      let xmOrgList = {
      "elementType": "list",
      "itemSize": "large",
      "id": "org_cards",
      "imageStyle": "thumbnail",
      "descriptionFontFamily": "Rendered HTML, sans-serif",
      "descriptionTextColor": "black",
      "items": []
    };
    
      for(let i = start; i < end; i++)
      {
        if(orgs.ncatorgs[i].phone === ""){
          xmOrgList.items.push({
            "link": {
              "external": `${orgs.ncatorgs[i].page}`
            },
            "image": {
              "url": orgs.ncatorgs[i].photo,
              "alt": orgs.ncatorgs[i].name
            },
            "title": orgs.ncatorgs[i].name,
            "description": `<b>Contact:</b> ${orgs.ncatorgs[i].email}<br>`
          });
        }
        else{
          xmOrgList.items.push({
            "link": {
              "external": `${orgs.ncatorgs[i].page}`
            },
            "image": {
              "url": orgs.ncatorgs[i].photo,
              "alt": orgs.ncatorgs[i].name
            },
            "title": orgs.ncatorgs[i].name,
            "description": `<b>Contact:</b> ${orgs.ncatorgs[i].email}<br> <b>Phone:</b> ${orgs.ncatorgs[i].phone}`
          });
        }
      }

    return xmOrgList;
  }


  function loadList() {
      let start = 0;
      let end = 9;
      
      let listContain = {
      "elementType": "container",
      "id": "portlet_examples",
      "content": [{
        "elementType": "container",
        "wrapperStyle": "focal",
        "borderStyle": "solid",
        "borderRadius": "loose",
        "padding": "medium",
        "content": [{
            "elementType": "form",
            "relativePath": "",
            "items": [{
              "elementType": "formInputText",
              "label": "Search Organizations",
              "name": "search_info",
              "placeholder": "ncat organizations"
            }],
            "events": [{
                "eventName": "change",
                "action": "ajaxUpdate",
                "targetId": "ncat_orgs",
                "ajaxRelativePath": "",
                "propagateArgs": true
              },
              {
                "eventName": "submit",
                "action": "ajaxUpdate",
                "targetId": "ncat_orgs",
                "ajaxRelativePath": "",
                "propagateArgs": true
              }
            ]
          },
          {
            "elementType": "list",
            "id": "ncat_orgs",
            "imageStyle": "thumbnail",
            "descriptionFontFamily": "Rendered HTML, sans-serif",
            "descriptionTextColor": "black"
          },
          getList(start, end),
          {
        		"id": "content_container",
        		"elementType": "container",
        		"initiallyHidden": true,
        		"content": [getList(end, orgs.ncatorgs.length)]
          },
          getMore()
        ]
      }]
    };

      function getMore(){
          		let q = {
          		"elementType": "container",
          		"content": [
        			{
        				"elementType": "buttonContainer",
        				"buttons": [
        					{
        						"elementType": "linkButton",
        						"id": "button",
        						"title": "Load More",
        						"events": [
        							{
        								"eventName": "click",
        								"targetId": "content_container",
        								"action": "show"
        							},
        							{
        								"eventName": "click",
        								"targetId": "previous",
        								"action": "show"
        							}
        						]
        					},
        					{
        						"elementType": "linkButton",
        						"id": "previous",
        						"title": "Show Previous",
        						"initiallyHidden": true,
        						"events": [
        							{
        								"eventName": "click",
        								"targetId": "content_container",
        								"action": "hide"
        							},
        							{
        								"eventName": "click",
        								"targetId": "previous",
        								"action": "toggle"
        							}
        						]
        					}
        				]
        			}
        		]
          };
          return q;
    	  }
    
    	    
    return listContain;
  }


  let xmJson = {
    "metadata": {
      "version": "2.0"
    },
    "contentContainerWidth": "full",
    "contentStyle": "focal",
    "backToTopBackgroundColor": "#004684",
    "backToTopTextColor": "white",
    "content": [{
        "elementType": "container",
        "id": "content_container_width",
        "content": [{
          "elementType": "hero",
          "height": "fluid",
          "contentContainerWidth": "medium",
          "backgroundImage": {
            "url": "https://www.ncat.edu/campus-life/student-affairs/departments/student-center/student-center1-impact.jpg"
          },
          "content": [{
              "elementType": "heroImage",
              "image": [],
              "marginTop": "xloose",
              "marginBottom": "xxtight",
              "horizontalAlignment": "left",
              "imageSize": "155px"
            },
            {
              "elementType": "heroHeading",
              "heading": "",
              "textColor": "#ffffff",
              "fontSize": "2rem"
            },
            {
              "elementType": "heroSubheading",
              "subheading": "",
              "textColor": "#ffffff",
              "marginBottom": "2rem"
            }
          ]
        }]
      },
      loadList()
    ]
  };
  


  if ('queryStringParameters' in event && event.queryStringParameters != null && 'search_info' in event.queryStringParameters) {
    let findString = event.queryStringParameters.search_info.toLowerCase();
    let hold = [];
    for (let o of orgs.ncatorgs) {
      let fullName = `${o.name.toLowerCase()}`;
      if (fullName.includes(findString) && !o.phone == "") {
        hold.push({
          "link": {
            "external": `${o.page}`
          },
          "image": {
            "url": o.photo,
            "alt": o.name
          },
          "title": o.name,
          "description": `<b>Contact:</b> ${o.email}<br> <b>Phone:</b> ${o.phone}`
        });
      }
      if (fullName.includes(findString) && o.phone === ""){
        hold.push({
          "link": {
            "external": `${o.page}`
          },
          "image": {
            "url": o.photo,
            "alt": o.name
          },
          "title": o.name,
          "description": `<b>Contact:</b> ${o.email}<br>`
        });
      }
    }

    if (findString != null) {
      if (findString == '') {
        xmJson.elementFields = {};
      }
      else {
        if (hold.length == 1) {
          xmJson.elementFields = {
            "ajaxLoadingIndicator":"large", 
            "ajaxLoadingMessage": "loading",
            "items": hold,
            "heading": `${hold.length} organization found`
          };

        }
        else {
          xmJson.elementFields = {
            "ajaxLoadingIndicator":"large", 
            "ajaxLoadingMessage": "loading",
            "items": hold,
            "heading": `${hold.length} organizations found`
          };
        }

      }

    }
  }


  const response = {
    statusCode: 200,
    body: JSON.stringify(xmJson),
  };
  return response;
};