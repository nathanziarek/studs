# Analytics Instantiation

## Order of Operations

1. [Load Google Analytics](#load-google-analytics)
2. Load Plguins
3. Set Page & Session Variables
4. Override URL
5. Mark Impressions
6. Track Pageview

### Load Google Analytics

This creates an instance of the ```ga``` tracker. Include the following properties:

| Key                   | Value     | Description                                                                   |
|-----------------------|-----------|-------------------------------------------------------------------------------|
| cookieDomain          | none      | This value allows the tracker to work across Storefront and GPO domains       |
| siteSpeedSampleRate   | 100       | A percentage that tells GA how many users to sample page speed from           |
| userID                | PER USER  | (Optional) If signed in, this is the value of the user's unified sign-in ID   |


```javascript
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-36863627-5', {
    'cookieDomain': 'none',
    'siteSpeedSampleRate': 100,
    'userId': '3929'
});
```

### Load Plugins

Google Analytics supports plugins that enhance the tracking and collection abilities.

```javascript
ga('require', 'linkid', 'linkid.js');
ga('require', 'ecommerce', 'ecommerce.js');
ga('require', 'ec');
```
    
### Set Page & Session Variables

Page & Session variables give the ability to *tag* data with additional attributes. For the ecommerce platform, these attribute currently consist of:

| Key           | Name              | Description                                                                                   |
|---------------|-------------------|-----------------------------------------------------------------------------------------------|
| dimension1    | Brand             | The name or brand of the site. This allows segmentation by GPO or storefront                  |
| dimension2    | Content Sorting   | If the page is primarily a list, this value indicates the sort style (relevance, etc)         |
| dimension3    | Content Grouping  | If the page is primarily a list, this value indicates the grouping style (by category, etc)   |
| dimension4    | Content View      | If the page is primarily a list, this value indicates the view style (detail, image, etc)     |

If any dimension is not available, set it's value to "N/A".

```
ga("set", "dimension1", "Direct Supply");
ga("set", "dimension2", "N/A");
ga("set", "dimension3", "N/A");
ga("set", "dimension4", "N/A");
```

### Override URL

In some cases there is a need to override the URL that is sent to Google Analytics in order to allow it to parse the correct meaning. To set the URL, use the following code...

```
ga("set", "page", URL);
```

...where **URL** is a url-encoded string.

#### Search Results Term

To help aggregate searches, we'll modify the search term (and querystring) before sending the data on to Google Analytics. Modifications:

* Lowercase
* <s>Stem</s>
* <s>Spellcheck</s>

```
/* Search for "Wheelchair Parts" */
var URL = "/search?term=wheelchair%20parts";
```
    
#### Search Results Filtering

Google Analytics provides a generic method for capturing search refinements. In order to be as inclusive as possible, we've set up five generic buckets that will accept a specially-formatted string.

The buckets are labeled: ```filtera```, ```filterb``` ... ```filtere```

* Single select facets are just the label and value. 
    *Brand: Invacare*
    
* Tree facets should have their values chained together with forward slashes. 
    *Category: Healthcare Equipment / Wheelchairs*
    
* Range facets indicate both the label and range. 
    *Weight Capacity: 100 - 1,000lbs*
    
* On-Off Facets just display their values.
    *Previously Purchased*
    
The first five facets, in the order the user selected them, should be appended to the page query string.

**Example**: User has search for "bariatric", selected a brand of "Invacare", navigated to the category "Wheelchairs" and selected "Previously Purchased". 

* filtera: Brand/Manufacturer: Invacare
* filterb: Category: Healthcare Equipment / Wheelchairs
* filterc: Previously Purchased

The final URL would look like: /search?term=bariatric&filtera=Brand/Manufacturer%3A%20Invacare&filterb=Category%3A%20Healthcare%20Equipment%20/%20Wheelchairs&filterc=Previously%20Purchased

### Mark Impressions

Impressions can be noted any time after the initial snippet is loaded, but must be completely rendered before the pageview is called. This can be important if AngularJS is asyncronously loading a directive that creates an impression -- the pageview must wait until the directives are rendered.

Search results, carousels and promotional images all send impression data.

### Track Pageview

```
ga('send', 'pageview');
```

### Open questions

* Where does ecommerce tracking fall in this process?
* How to document impressions?
* Should search do anything else to the term?
* Where to document additional search tracking, like result counts, etc?
