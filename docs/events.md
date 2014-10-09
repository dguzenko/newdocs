Events
======

This documentation offers help and guidance for ZOOlanders **Events** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/events).

**Events** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

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
4. Find the **Events** Extension in the list and click on the Install button.
5. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download **Events** package from [ZOOlanders site](https://www.zoolanders.com/extensions/events).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **Events** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

#### Quick Note

**Events** elements are installed under the same plugin, *ZL Elements*, as any other ZL Element for performance reasons. If you want to check it's installation, visit the ZOO configuration and edit any Type from any App. If **Related Items Pro & Image Pro & Texts & Date Pro & Google Maps Pro** shows up on the right section under *ZOOlanders* Group, then you're good to go!

Configuration
=============

Steps
-----

### Step 1. Set up the Type

Create a new *Events App* Instance. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/create-a-new-app-instance).

You can adjust now or leave for later the general calendar and template options. Please review the [App section](#app).

### Step 2. Set up the view

The App is ready and you can proceed displaying it in the Frontend. Follow the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/how-to-create-a-joomla-menu-link) to set up the *Events App* Frontpage view.

### Step 3. Set up the Module

Create and assign to a position a *ZOO Events* module setting up the App we have created in the Step 1 and the Menu Item created in the Step 2.

For more information on the module please review it [section](#module).

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **media/zoo/applications/events/language/YOUR-LANG/YOUR-LANG.com_zoo.ini**

**Note:** The default **en-GB.com_zoo.ini** language file is located in the **media/zoo/applications/events/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

App
===

### App configuration

IMAGE HERE

* **Unpublish Past Events** - allows to set if the past events should be automatically unpublished by the system.
* **Items per page** - allows to set the numbers of Items to be shown on each page.
* **Item order** - allows to set the initial Item ordering.
* **Alpha index** - allows to choose if the alpha index should contain categories, items or both.
* **First Day of the Week** - allows to choose if the first day of the week is Sunday or Monday.

### Template configuration

IMAGE HERE

* **Day Template** - allows to choose the Item Layout to display when only one event exists for the chosen day in the Events module.
* **Date Format** - allows to choose the date format to display in Day view.
* **Custom Date Format** - allows to set and override the Date Format with a custom format.
* **Day Show Title** - allows to Show/Hide the search title when only one event exists for the chosen day in the Events module.

### Types

The Events App comes preset with two Types, Event and Venue.

* **Event**

  The Event type includes the following elements:
  
  * **Venue** - (Related Items Pro) - allows to have bi-directional relation with the associated Venue entry.
  * **Description** - (Textarea Pro) - allows to set an description.
  * **Event picture** - (Image Pro) - allows to set an image.
  * **Event date** - (Date Pro) - allows to set the event date.

* **Venue**

  The Venue type includes the following elements:

  * **Related Events** - (Related Items Pro) - allows to have bi-directional relation with the associated Event entry.
  * **Venue Address** - (Google Maps Pro) - allows to set the address and display it on a map.
  * **Description** - (Textarea Pro) - allows to set an description.
  * **Venue picture** - (Image Pro) - allows to set an image.

Module
======

The *ZOO Events module* is used to display an Calendar view of the events.

### Options

It is only possible to show events from the same Type/App at a time and you would need to choose it in the Module params.

IMAGE HERE

* **Application** - allows to choose the Events Application instance whose Events you want to display.
* **Events App Menu Item** - allows to select the Events Menu Item you created for the Events Application you selected above.
* **Module Class Suffix** - allows to set a module class suffix for specific module styling.
