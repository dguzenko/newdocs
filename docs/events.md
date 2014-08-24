Events
======

This documentation offers help and guidance for ZOOlanders **Events** Extension. More information about it can be find on the ZOOlanders site, https://www.zoolanders.com/extensions/events.

Use the left menu to go trough the diferent sections.

Requirements
============

Requirements and Compatibility
------------------------------

**Events** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

### Events 3.x requires

* **Joomla 2.5** or higher
* Previously installed:

  * **ZOO 3.0** or higher

    You may download it from YOOtheme site

  * **ZL Framework 3.0** or higher

    You may download it from ZOOlanders site

### Quick Note

ZL Framework plugin must be enabled, you may check it in Joomla Administration / Extensions / Plugin Manager.

Installation
============

Through Joomla Manager

1. Download **Events** package from https://www.zoolanders.com/extensions/events.
2. Unpack the package and find the ZOO Apps installers.
3. Go to the **ZOO App Manager** (Joomla Administration / Components / ZOO / Gearwheel).
4. Install the previously unpacked App/s. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/install-a-new-app).
5. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
6. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
7. Click on the "Upload & Install" button.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **Events** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

### Quick Note

**Events** elements are installed under the same plugin, ZL Elements, as any other ZL Element for performance reasons. If you want to check it's installation, visit the ZOO configuration and edit any Type from any App. If **Related Items Pro & Image Pro & Texts & Date Pro & Google Maps Pro** shows up on the right section under ZOOlanders Group, then you're good to go!

Trough ZL Manager
-----------------

1. Be sure you have installed the **ZL Manager Extension**.
2. Open the Component (Components / ZOOlanders Manager).
3. Login clicking on the Options.
4. Find the **Events** Extension in the list and click on the Install button.
5. Be patient while the Installation proceeds, the page will be refreshed once done.

For more information on using the Manager checkout it's Docs.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

Configuration
=============

Step 1. Set the App instance
----------------------------

Create a new Events App Instance. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/create-a-new-app-instance).

You can adjust now or leave for later the general calendar and template options. Please review the [App Doc](#app).

Step 2. Set up the view
-----------------------

The App is ready and you can proceede displaying it in the Frontend. Follow the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/how-to-create-a-joomla-menu-link) to set up the Events App Frontpage view.

Step 3. Set up the Module
-------------------------

Create and assign to a position a ZOO Events module setting up the App we have created in the Step 1 and the Menu Item created in the Step 2.

For more information on the module please review it [Doc](#module).

Done!
-----

You can start populating your Events!

Translation
===========

The default **en-GB.com_zoo.ini** language file is located in the **media/zoo/applications/events/language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **media/zoo/applications/events/language/YOUR-LANG/YOUR-LANG.com_zoo.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.

App
===

Events App
----------

### App configuration

IMAGE HERE

* **Unpublish Past Events** - allows to set if the past events should be automatically unpublished by the system.
* **Items per page** - allows to set the numbers of Items to be shown on each page.
* **Item order** - allows to set the initial Item ordering.
* **Alpha index** - allows to choose if the alpha index should contain categories, items or both.
* **First Day of the Week** - allows to choose if the first day of the week is Sunday or Monday.

Template configuration
----------------------

IMAGE HERE

* **Day Template** - allows to choose the Item Layout to display when only one event exists for the chosen day in the Events module.
* **Date Format** - allows to choose the date format to display in Day view.
* **Custom Date Format** - allows to set and override the Date Format with a custom format.
* **Day Show Title** - allows to Show/Hide the search title when only one event exists for the chosen day in the Events module.

Types
-----

The Events App comes preset with two Types, Event and Venue.

###Event

The Event type includes the following elements:

* **Venue** - (Related Items Pro) - allows to have bi-directional relation with the associated Venue entry.
* **Description** - (Textarea Pro) - allows to set an description.
* **Event picture** - (Image Pro) - allows to set an image.
* **Event date** - (Date Pro) - allows to set the event date.

### Venue

The Venue type includes the following elements:

* **Related Events** - (Related Items Pro) - allows to have bi-directional relation with the associated Event entry.
* **Venue Address** - (Google Maps Pro) - allows to set the address and display it on a map.
* **Description** - (Textarea Pro) - allows to set an description.
* **Venue picture** - (Image Pro) - allows to set an image.

Module
======

The ZOO Events module is used to display an Calendar view of the events.

### Options

It is only posible to show events from the same Type/App at a time and you would need to choose it in the Module params.

IMAGE HERE

* **Application** - allows to choose the Events Application instance whose Events you want to display.
* **Events App Menu Item** - allows to select the Events Menu Item you created for the Events Application you selected above.
* **Module Class Suffix** - allows to set a module class suffix for specific module styling.