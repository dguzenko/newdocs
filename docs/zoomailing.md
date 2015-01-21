ZOOmailing
==========

This documentation offers help and guidance for ZOOlanders **ZOOmailing** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zoomailing).

**ZOOmailing** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

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
3. Find the **ZOOmailing** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOmailing** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download **ZOOmailing** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zoomailing).
2. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOmailing** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOmailing** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Uninstallation
==============

Through Joomla Manager
----------------------

**Note:** Uninstallation through Joomla Manager would uninstall ALL elements at once as they share the same plugin. 

1. Go to the *Joomla Administration / Extensions / Extension Manager / Manage*.
2. Search the extension in list and tick the checkbox near its name.
3. Click on the "Uninstall" button on the top.

Manually
--------

To uninstall the extension you should manually delete the relevant folder from *%Joomla root% / plugins / system*.

Configuration
=============

Steps
-----

### Step 1. Set up the Layout

Locate and open the *ZOOmailing* Default layout assignment view for the App and Type you would like to render the Items from. For detailed information please review the [ZOO Positions Assignments](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) and [ZOOmailing Layouts section](#layouts).

Drag & Drop the elements you would like to be rendered for the AcyMailing content.

### Step 2. Set up AcyMailing

Go to AcyMailing Extension and create or edit a newsletter. If you are not familiar with this process please review the [official AcyMailing docs](http://www.acyba.com/acymailing/118-acymailing-create-send-newsletter.html#create).

1. In the newsletter content editor place the cursor where you want the ZOO Items to be rendered.
2. Click the *Tags* button in the top bar.
3. From the insert lightbox menu, select ZOO.
4. Select the ZOO Application from which you would like to select the Items.
5. Select the Item or Categories to include. Please review the [AcyMailing ZOO Tag](#layouts) doc for more information on the content including features.
6. Click the *Insert the tag* button.

Your newsletter should now include the appropriate tag to include your ZOO content.

**Note:** Please be aware that *Replace Tags* option doesn't work with ZOOmailing as its content is User related and while editing there is no user defined. The user is available only while sending.

### Done!

You are ready to send your email with ZOO content!

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_acymailing_zoomailing.ini**

**Note:** The default **en-GB.plg_acymailing_zoomailing.ini** language file is located in the **administrator/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

Layouts
=======

There are ZOOmailing layouts accessible within ZOO App Layouts. These layouts are used to render the Item content that will replace the AcyMailing newsletter tags.

Custom Layout
-------------

There are situations where your newsletter design will require a custom Item rendering layout. As with all ZOO layouts that is possible. For more information please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/developers/create-a-new-layout-with-positions).

AcyMailing Tags
===============

The AcyMailing ZOO Tag allows for including individual Items (Items Tab) or Items from a Category (Categories Tab). They are meant for different purposes and involves different configuration. Let's look at each one individually.

Individual Items tag
--------------------

The *Items* tab will allow you to insert specific ZOO items within your newsletter. This is often used when you are manually creating a standard newsletter, or when you need to insert a static ZOO item into a campaign or other automated newsletter.

### Filtering the available items

If you have a lot of ZOO items you might want to filter them down to locate the specific ZOO item you wish to insert. You can use the filtering settings in the top portion of the Items tab:

IMAGE HERE

* **Type** - Allows to choose the TYPE of item/s that you would like to insert into the newsletter (you can select multiple types here).
* **Category** - Allows to choose the category that has the item/s you wish to include.
* **Tag** - Select any tag/s to filter upon tags.
* **Filter** - Enter any standard text to use to filter the ZOO item title.

Click the GO button to have the selected filters applied to the list of ZOO items. (Click Reset to clear any filtering you have applied).

### Setting the layout for the items

You can choose which ZOO layout should be used when the items are rendered and inserted into your newsletter.

IMAGE HERE

* **Layout** - Allows to select the Layout that will be used to display the item within the emailed newsletter.
* **Online Layout** - Allows to select the Layout that will be used when a user views the newsletter on the web site.

For more information on the layouts please review the doc[ZOOmailing Layouts](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

### ZOO item selection

Now that you have filtered the items and have selected the layouts you can actually select the items to include.

IMAGE HERE

To select any item, just click on it's title, click again to deselect it. To select multiple items just click on each of them.

Category Items tag
------------------

The *Categories* tab will allow you to insert ZOO items from a specific category and additional rules within your newsletter.

IMAGE HERE

### Item Selection Rules

The rules you set here will determine how many items are included in your newsletter, as well as some other features.

IMAGE HERE

* **Min. Items** - Allows to determine the minimum amount of items to include (this needs to be set to at least 1 for any items to be included).
* **Max. Items** - Allows to limit the total amount of items included (leave blank to include all items - if they match other requirements).
* **Order by** - Allows to set what order is used to sort items that are going to be displayed.
* **Num. of columns** - Allows to set the number of columns which will be used to display the items.

### Layout

Allows to select the Layout that will be used to display the item within the emailed newsletter. For more information on the layouts please review the [ZOOmailing Layouts](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types) doc.

### Selecting Categories

Now you can select the categories from which the items will be retrieved.

IMAGE HERE

To select any category, just click on it's title, click again to deselect it. To select multiple categories just click on each of them.
