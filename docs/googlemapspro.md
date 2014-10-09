Google Maps Pro
===============

This documentation offers help and guidance for ZOOlanders **Google Maps Pro** Extension. More information about it can be find on the [official page](http://www.zoolanders.com/extensions/google-maps-pro).

**Google Maps Pro** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Requirements
------------

* **[Joomla](http://www.joomla.org) 2.5.6** or higher
* **[ZOO](http://www.yootheme.com/zoo) 3.1** or higher
* **[ZOOlanders component](https://www.zoolanders.com/extensions/zoolanders) 3.1** or higher

Installation
============

Through ZOOlanders Manager
-------------------------
1. Go to *Joomla Administration / Components / ZOOlanders*.
2. Set your zoolanders.com site login credentials trough the Options button.
3. Find the **Google Maps Pro** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, the page will be refreshed once done.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download **Google Maps Pro** package from [ZOOlanders site](https://www.zoolanders.com/extensions/google-maps-pro).
2. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the Google Maps Pro downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

#### Quick Note

**Google Maps Pro** element is installed under the same plugin, *ZL Elements*, as any other ZL Element for performance reasons. If you want to check it's installation, visit the ZOO configuration and edit any Type from any App. If **Google Maps Pro** shows up on the right section under ZOOlanders Group, then you're good to go!

Configuration
=============

First steps
-----------

### Set up the Type

Add the *Google Maps Pro* element to the desired Type and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types). For details about the element config options review the [Type Config section](#params-in-detail-type-config).

### Position assignment

Assign the *Google Maps Pro* element to the desired layout positions and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions). For details about the element assignment options review the [Assignment section](#params-in-detail-position-assignment).

Upgrading to Pro version
------------------------

If you have a site with a standard ZOO element, it would would be a lot of work to manually transfer the data to the Pro version. The good news is that you can switch in a few steps without loosing any data!

Follow the next steps and be sure you have [installed](#installation) the *Google Maps Pro* element.

**Note**: please backup before proceeding. ZOOlanders will not take any responsability of lost data.

1. Locate the *media / zoo / applications / [YOURAPP] / types / [YOURTYPE].config* file and open it for editing with any plain text editor.
2. Search for the param that relates to the specific element you are upgrading.
3. Locate the *type* entry for the element (it should be at the bottom of the specific element's section).
4. Change the *type* from `googlemaps` to `googlemapspro`.
5. Save the changes and return to your ZOO admin area.
6. Edit that same Type elements.
7. Locate and open the element that you are switching from. That element that was a Google Maps element before should now be *Google Maps Pro* element.
8. Open the Element options and [configure](#configuration) it as needed.
9. Save the Type. Your entries should now be updated to use the *Google Maps Pro* element.

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoo_zlelements_googlemapspro.ini**

**Note:** The default **en-GB.plg_system_zoo_zlelements_googlemapspro.ini** language file is located in the **administrator/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

Params in detail
================

Type Config
-----------

### Basic Parameters

*Basic Parameters* define common element settings.

IMAGE HERE

* **Name** - Allows to set element's name, that will be used in layouts and item properties.
* **Description** - Allows to describe element shortly.
* **Access Level** - Allows to setup element accessibility. In order to make it totally accessible, set this parameter to *"Public".*

### Specific Parameters

IMAGE HERE

* **API Key** - Allows to specify the Google API key if necesary.
* **Backend Location Map** - Settings for the backend Map

  * **Type** - Allows to choose the initial Map Type.
  * **Zoom level** - Allows to choose the initial Map Zoom level.
  * **Width** - Allows to set the initial Map width.
  * **Height** - Allows to set the initial Map height.
  * **Default center** - Allows to set the initial Map ubication.

Position Assignment
-------------------

### Basic Parameters

*Basic Parameters* define common element settings.

IMAGE HERE

* **Show Label** - Allows to choose if the element label should be rendered or not.
* **Alternative Label** - Allows to customoze the default label (the element's name set in the Type) for this specific position.

### Layout Parameters

*Layout Parameters* shows the available layouts for the element.

* **Main Layout** - Allows to specify main layout.
* **Sub Layout** - If available, allows to specify additional sublayout.

For more information about the Layouts please review the [Layouts section](#params-in-detail-layouts).

Layouts
-------

Listed are the inbuild layouts of Google Maps Pro element but if those don't meet your project requirements you can [create your own](#customizations-layouts) ones.

#### Default

Displays the a Google Map with the selected coordinate as the marker.

#### Address

Displays the address.

Customizations
==============

Layouts
-------

Although we try to provide many layouts with different options you've possibly run into a situation where you need to render the element in some specific way. With just a little PHP, HTML, or CSS coding knowledge you can easily make it render just like you want it to, by creating your own layout for an element.

Although you could just directly change and override the code of an existing layout, that will create confusions in the future as the default element behaviour would change without any indication.

What we suggest is to create your own layout (you can copy/paste an existing one) and store the resultant file in one of the ZOO overrable Elements folder. That way the file will be easily localizable and risk free on updates.

### Before starting

As much as we try to make our docs complete, with a system as versitle as ZOO and some of the integrations included in our elements (like WidgetKit and qTip) even our documentation might not make a potential rendering manner obvious. Feel free to ask us in our support center.

### Step 1. Locate the layouts path

The *Google Maps Pro layouts* are located in **plugins / system / zoo_zlelements / zoo_zlelements / elements / googlemapspro / tmpl / render folder.** If the layout supports sublayouts is those that you should work on, instead go to the **... / render / [MAIN LAYOUT] / _sublayouts** folder.

### Step 2. Create your layout

Copy one of the existing layouts in the path from the Step 1 and change it name to a custom one. Be sure to keep the underscore `_` at the begining of the file if it's a sublayout.

### Step 3. Place your layout

Your layout is ready but should be stored in a safe place, as we mentioned in the begining. You can place your custom layout in:

* **media / zoo / custom_elements / googlemapspro / tmpl / render**

  This path will make the layout available for all the Apps.

* **media / zoo / applications / [APP NAME] / elements / googlemapspro / tmpl / render**

  This path will make the layout available only for the App being placed in.

When dealing with sublayout, remember it should be placed into **... / render / [MAIN LAYOUT] / _sublayouts** instead.

**Note**: if the **custom_elements** folder does not exist, just create it.

### Done!

Now that your layout is placed it can be selected when setting the Element view on the Positions assignment. Do so and start editing it until it suits your project needs.

Widgetkit
=========

*Widgetkit Map Widget*  will not autorecognize the *Google Maps Pro* values, as a solution download and install the ZL Widget Plugin available in the Google Maps Pro product downloads. Once installed and enabled create new ZL Map widget and use it instead.
