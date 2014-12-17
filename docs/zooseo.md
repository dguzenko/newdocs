ZOOseo
======

This documentation offers help and guidance for ZOOlanders **ZOOseo** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zooseo).

**ZOOseo** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Requirements
------------

* **[Joomla](http://www.joomla.org) 2.5.6** or higher
* **[ZOO](http://www.yootheme.com/zoo) 3.1** or higher
* **[ZOOlanders component](https://www.zoolanders.com/extensions/zoolanders) 3.1** or higher

Installation
============

Through ZL Manager
------------------

1. Go to *Joomla Administration / Components / ZOOlanders*.
2. Set your zoolanders.com site login credentials trough the Options button.
3. Find the **ZOOseo** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOseo plugin** should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download **ZOOseo** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zooseo).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOseo** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOseo** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Configuration
=============

Steps
-----

### Step 1. Set up the Plugin

Access the configuration trough the **Joomla Plugin Manager** (*Joomla Administration / Extensions / Plug-in Manager / ZOOseo*) and set the options as needed. For more information review the [Settings section](#settings).

### Step 2. Set up the Layout

Locate and open the *ZOOseo* Item Metadata layout assignment view for the App and Type you would like to work on. For detailed information please review the [ZOO Positions Assignments doc](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

Drag & Drop the elements you would like to be rendered as Meta Data and Open Graph content. For more information review the [Metadata](#metadata) and [Open Graph](#opengraph) sections.

### Done!

Go on and start saving/displaying your Items to get set automatically it's metadata or check if the SEF URLs are working as expected!

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zooseo.ini**

**Note:** The default **en-GB.plg_system_zooseo.ini** language file is located in the **administrator/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

Settings
========

IMAGE HERE

* **Category path in URL** - generate the url using the category structure the item / category is in. This is the preferred version, and also what you probably expect. It removes /category and /item from the url, and limits the alias conflicts between category and items only to the category and items on the same level (ie: within the same category. The Result is something like /base/url/category/subcategory/subsubcategory/the-item-alias.
* **Remove /item** - removes the /item from the generated SEF urls.
* **Remove /category** - removes the /category from the generated SEF urls.
* **Redirect old urls** - will redirect the the old urls (/item and /category) to the new ones to avoid content duplication.
* **Alias Priority** - allows to choose which alias should take priority if a category and an item have the same one.
* **Overwrite Item Metadata** - if enabled, even the manually set metadata of the item will be overwritten. Recommended only if you're fixing your site metadata the first time. Should be disabled later to allow custom metadata.
* **Overwrite Category Metadata** - if enabled, even the manually set metadata of the category will be overwritten. Recommended only if you're fixing your site metadata the first time. Should be disabled later to allow custom metadata
* **Item: Generate on** - allows to set when the metadata should be generated, on item saving or displaying (init). On init is great for first time generation, but has very bad performance, so it's better to leave it to saved for live sites.
* **Category: Generate on** - allows to set when the metadata should be generated, on category saving or displaying (init). On init is great for first time generation, but has very bad performance, so it's better to leave it to saved for live sites.
* **Item Separator** - separator if there are more elements in the same position. For keywords, comma will always be used.
* **Category Separator** - separator if there are more elements in the same position. For keywords, comma will always be used.
* **Category Metatitle** - what fields has to be used to set the metatitle in the category.
* **Category Metadescription** - what fields has to be used to set the metadescription in the category.
* **Category Keywords** - what fields has to be used to set the keywords in the category.
* **Category Author** - what fields has to be used to set the author in the category.

Metadata
========

ZOOseo allows for automatic metadata insertion on your Items during saving or displaying. In both case the rendering content is set in the ZOOseo Item Metadata layout.

IMAGE HERE

* **Title** - the title of your page.
* **Description** - a one to two sentence description of your page.
* **Keywords** - a comma separate words describing your page.
* **Author** - the page author name

Opengraph
=========

ZOOseo allows setting the Open Graph data using the ZOOseo Item Metadata layout.

IMAGE HERE

* **Title** - the title of your page as it should appear within the graph.
* **Description** - a one to two sentence description of your page.
* **Type** - the type of your page, e.g., "video.movie".
* **Image** - an image URL which should represent your page within the graph. ZOOseo will retrieve automatically the url from the image element.
* **Url** - the canonical URL of your page that will be used as its permanent ID in the graph, e.g., "http://www.imdb.com/title/tt0117500/".
* **Custom** - set custom OG properties using the element **Alternative label** to set the property type.

For more information about Open Graph visit it's [official page](http://ogp.me/), for testing we recommend [Facebook Debuger](https://www.facebook.com/login.php?next=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fdebug%2F).

Known Issues
============

* Some services (e.g. Facebook) could be unable to reach the website when Joomla! GZIP compression is enabled.
