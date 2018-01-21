# WeChat logical layer

Apply your Javascript Skills in the WeChat framework
 
## Background & Objectives

In this challenge, you will build the 2nd page of your Wechat program Store Locator, using advanced **WXML** capabilities and some **built-in APIs**.

![capture](capture.gif)

Refresher:

- The **Logical Layer** is here to **process data** and send it to the View Layer

- The Logical Layer can receive and process **Events feedbacks** from the View Layer

- A wide range of APIs have been provided, including unique WeChat capabilities such as WeChat user data, QR code scanning, and payment.

- We can inject **dynamic content in WXML** thanks to the **data binding mechanism** with corresponding Page data.

## Step 1

Create a new page

### APP.JSON

Inject a new page named "**map**" in your `"pages"` array.

```
"pages":[
    "pages/index/index",
    "pages/map/map"
  ],
```
 

### WXML

Add following elements:
	
- A title for your page, styled like an H2!
- A map 👉 ([check the attributes list here](http://open.wechat.com/cgi-bin/newreadtemplate?t=overseas_open/docs/mini-programs/development/component/map#component_map)) with static data

### WXSS

- Arrange the style of your map, either through inline CSS (`style=''`) on the map component, or directly in the `map.wxss` file
- Arrange the global style of your page, e.g with a **black** page background and centered text

**Do it now!**

[Click here to reveal the solution](solution-1/)

## Step 2

Setting up your map in `map.js`

### Data Binding

1. Your map component should now use the mustach syntax to inject dynamic variables such as `longitude`, `lattitude`, `scale`, and of course `markers` !
2. Add raw data in your `data: {}` object (this is at the top of your `map.js` file!) 

	Tip: you can use on online [free service like this one](https://www.latlong.net/convert-address-to-lat-long.html) to calculate the GPS latitude/longitude of any address. For example, Alliance Française is Latitude 31.2485480 | Longitude 121.489422.

3. Make your first marker! They should be listed in an array. Here's an array with 1 marker only:

	```
	markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }]
    ```
    
   **Tip 1: icon**
	
	- The path of your icon should start with a slash /
	- Here's a marker you can use: ![marker](marker.png)
	- You can also [make your own](http://www.iconfont.cn/search/index?q=marker)... 
		    
	**Tip 2: tooltip**    
   
    Use the *callout* object in your marker to create a tooltip. 
    
    E.g  `callout: { content: "Xintiandi \n No. 230 Madang Road\n Luwan District\n Shanghai", fontSize: 15, color: "#000000", padding: 10 }` 

## Step 3

Let's fetch data from an API call!

### Check your API

Open this endpoint in your browser to discover the content provided by Tesla digital team:

[https://easy-mock.com/mock/5a641f8a0ea0400cac5a91df/tesla/stores](https://easy-mock.com/mock/5a641f8a0ea0400cac5a91df/tesla/stores)

They have compiled this data thanks to their own Content Management System or Back-end service! (note: any CMS can render a JSON like this example ;)

👉 Our objective is to get these shop markers and inject them dynamically in the WeChat mini program **when the map page is loading** ! This is an HTTP *GET* request....


### Use WeChat's "WX.REQUEST"

WX.Request is an API provided by Tencent to make network HTTP calls. We will use it to *get* all markers data when the page loads.

1. Locate the `onLoad: function ()` **in your map.js file**. Feel free to add some *console.log('test')* inside each part to test out the life cycle of your app..

2. Set a variable with your API endpoint
	`const endpoint = 'https://easy-mock.com/mock/5a641f8a0ea0400cac5a91df/tesla/stores'`
	
3. We will need a pointer to the current page, in the form of a variable.
	`var page = this`
	
	If you have time, [read about the this keyword here](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)
	
4. Create a **HTTP request** thanks to the **wx.request** API (👉 [documentation](https://www.w3schools.com/js/js_htmldom_eventlistener.asp))
	
	```
	wx.request({
      url: endpoint,
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log('success!' + res.statusCode);
        console.log(res)
      },
      fail: function (res) {

      },
      complete: function(res) {

      }
    })
  	```
5. You should see data in your console log now! Reload your app.

### Update the Data!

The `setData` function is used to send data from the logical layer to the view layer, while changing the corresponding page data values.

Add this line inside your **success function**, right after your console.log....

```
page.setData({ markers: res.data.stores })
```

**Do it now!**

[Click here to reveal the solution](solution-2/)

## Extra step


