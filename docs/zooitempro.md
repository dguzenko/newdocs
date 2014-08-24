ZOOitem Pro
===========

This documentation offers help and guidance for ZOOlanders **ZOOitem Pro** Extension. More information about it can be find on the ZOOlanders site, https://www.zoolanders.com/extensions/zooitem-pro.

Use the left menu to go trough the diferent sections.

Requirements
============

Requirements and Compatibility
------------------------------

**ZOOitem Pro** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

ZOOitem Pro 3.x requires
------------------------

* **Joomla 2.5.6** or higher
* Previously installed:

* **ZOO 3.1** or higher

  You may download it from [YOOtheme site](http://www.yootheme.com/zoo)

* **ZL Framework 3.1** or higher

  You may download it from [ZOOlanders site](https://www.zoolanders.com/extensions/zl-framework)

### Quick Note

ZL Framework plugin must be enabled, you may check it in Joomla Administration / Extensions / Plugin Manager.

Installation
============

Through Joomla Manager
----------------------

1. Download **ZOOitem Pro** package from https://www.zoolanders.com/extensions/zooitem-pro.
2. Install the previously unpacked App/s. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/install-a-new-app).
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
5. Click on the "Upload & Install" button.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOitem Pro** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Trough ZL Manager
-----------------

1. Be sure you have installed the **ZL Manager Extension**.
2. Open the Component (Components / ZOOlanders Manager).
3. Login clicking on the Options.
4. Find the **ZOOitem Pro** Extension in the list and click on the Install button.
5. Be patient while the Installation proceeds, the page will be refreshed once done.

For more information on using the Manager checkout it's Docs.

Configuration
=============

Step 1. Create a module instance
--------------------------------

Go to the **Joomla Module Manager** (Joomla Administration / Extensions / Module Manager) and create a new ZOOitem Pro module instance and populate the basic Moudule settings (Title, Position, Status, Assignement).

Step 2. Set up the Layout
-------------------------

In the Module Basic Options section choose the Layout you would like to display and set up it's params. For more information please review the [Layouts](#layouts) doc.

**Done!**

The Module will display the prefiltered Items with the chosen layout style.

Translation
===========

The **default en-GB.mod_zooitempro.ini** language file is located in the **language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **language/YOUR-LANG/YOUR-LANG.mod_zooitempro.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.

Layouts
=======

The ZOOitem Pro Layouts display the prefiltered Items with diferent styles and options but each of them use the same Filter and Order params that can be reviewed in the [Filter/Order Params](#filtering-params) doc.

Creating custom layouts is posible and recommended, more information can be found on the [Custom Layouts](#custom-layouts) doc.

Default layout
--------------

The Default layout renders a simple Item List.

* **Rendered Layout** - allows to choose the Item Rendering layout.
* **Media Position** - allows to choose the Media alignment.
* **Cache Time** - allows to set the Cache Time. If set to 0 will be ignored.

Widgetkit layout
----------------

Is the Widgetkit Integration layout which will render the Items using the choosen Widget style and features. F

* **Widget** - allows to choose the Widget to be used.
* **Rendered Layout** - allows to choose the Item Rendering layout.
* **Style** - allows to choose the Widget style.

For more information on the Widget Specific params or Widgetkit please review the [Widgetkit Official Page](http://www.yootheme.com/widgetkit).

ZOOtrack layout
--------------

Is the ZOOtrack Integration layout which will allow rendering special preselection of Items, such as current or last viewed Item/s.

* **ZOOtrack Layout** - allows to choose the ZOOtrack layout to be rendered.
* **Rendered Layout** - allows to choose the Item Rendering layout.
* **Media Position** - allows to choose the Media alignment.

For more information please review the [ZOOtrack Product Page](https://www.zoolanders.com/extensions/zootrack).



Filter/Order Params
===================

Filtering params
----------------

ZOOitem Pro filter/order params are very extense and flexible, following is a resume of the common options.

IMAGE HERE

* **Filter**

  * **Apps** - allows to choose the Apps the Item should be part of. No selection is equal to select all.
  * **Categories** - allows to choose the Categories the Item should be part of. No selection is equal to select all.
  * **Types** - allows to choose the Types the Item should be part of. No selection is equal to select all.
  * **Author** - allows to filter the Items by Authors settings it's User IDs delimeted by a comma. The [userid] variable can be used to add the ID of the curren User.
  * **Published State** - allows to set Published State the Items should have.
  * **Frontpage State** - allows to set Frontpage State the Items should have.
  * **Offset** - allows to set the query offset removing the first Items from the result.
  * **Limit** - allows to set the query limit removing the last Items from the result.
  * **Date**

    * **Created** - allows to filter the Items by it's created date.
    * **Modified** - allows to filter the Items by it's modified date.
    * **Published Up** - allows to filter the Items by it's published up date.
    * **Published Down** - allows to filter the Items by it's published down date.

  * **Order**

    * **Random** - allows to set a random order for the filtered items.
    * **Revers** - allows to reverse the final ordering.
    * **Priority** - allows to set if the Items priority should be considered for the ordering.
    * **Alphanumeric** - allows to choose if the ordering should be done with alphanumeric values. Enable if your order is failing, specially if there are numbers involved.
    * **Core** - allows to choose the core element by which will be made the order.

More options could be available for the Element specific filtering and ordering depending of the App/Type selected.

###Tip

Dates inputs supports special variables such as **[yesterday]**, **[today]** and **[tomorrow]** which are very useful for creating dynamic filtering.

Custom Layouts
==============

Creating custom layouts with ZOOitem Pro is very easy, just copy/paste the Default layout file and folder changing it's name to some custom name. After that you can start adapting the layout as you needed and even adapt it's params editing the params.php file. You can add your own CSS styles using the style.css example file (just be sure to uncomment the loading style line in the layout file) or just use your template CSS files.

Custom Elements
===============

In order to filter by custom elements data, those must have specified the ZL Filter group Category, Date, Input, Option or Rating. To do so:

1. Open the custom element XML file.
2. Localize the `<element/>` tag.
3. Add a zl_filter_group attribute with the appropiate category value.

Eg: `<element type="textpro" zl_filter_group="input">`

4. Save the file and done!

If you are using 3rd party element be sure to override it in the appropiate folder in order to preserve the change after future updates.