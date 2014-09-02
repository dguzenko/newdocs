ZOOorder
========

This documentation offers help and guidance for ZOOlanders **ZOOorder** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zooorder).

**ZOOorder** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Requirements
------------

* **[Joomla](http://www.joomla.org) 2.5.6** or higher
* **[ZOO](http://www.yootheme.com/zoo) 3.1** or higher
* **[ZOOlanders component](https://www.zoolanders.com/extensions/zoolanders) 3.1** or higher

Installation
============

Trough ZOOlanders Manager
-------------------------

1. Go to *Joomla Administration / Components / ZOOlanders*.
2. Set your zoolanders.com site login credentials trough the Options button.
3. Find the **ZOOorder** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOorder** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Trough Joomla Manager
----------------------

1. Download **ZOOorder** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zooorder).
2. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOorder** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOorder** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Configuration
=============

Steps
-----

### Step 1. Set up the Order Form

Locate and open the *ZOOorder* Default layout assignment view for the App and Type you would like to create the Form for. For detailed information please review the [ZOO Positions Assignments](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) and [ZOOorder Layouts section](#layouts).

Drag & Drop the elements you would like the Order Form to be composed by.

### Step 2. Set up the Module

Create a new *ZOOorder Module* module and set it's title, position and publish state. Under the *Basic Options* tab, on the righ, choose the App and Type you have set up in the Step 1. Save and Close the module.

**Quick note**: the module should be displayed withing a ZOO App view, it will not work as standalone.

IMAGE HERE

For more information on the module and it's options please review the [Module section](#module).

### Done!

Go to the frontend and locate the Module, a ZOOorder form should be rendered ready to perform the ordering.

Translation
-----------

The default **en-GB.plg_system_zooorder.ini** language file is located in the **administrator/language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zooorder.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.

Layouts
=======

There are ZOOorder layouts accesible within ZOO App Layouts. These layouts are used to assign the elements that will be part of the Order form.

Module
======

The Module is used to display the Order Forms.

Options
-------

It is only posible to order Items from the same Type/App at a time and you would need to choose it in the Module params.

IMAGE HERE

* **Type** - Allows to select the ZOO App/Type to which this ordering module will apply.
* **Layout** - Allows to choose the Layout to use for this module. Choose the one that you populated.
* **Module Class Suffix** - Allows to set a module class suffix for specific module styling.

Usage case: Menu Item
=====================

There is a case when you would like to display a list of ZOO items in a certain order, without letting them actually reorder the list.

ZOO doesn't come with that ability, and it might not be obvious, but with the ZOOorder extension you CAN do that, and relatively easily.

Steps
-----

### Step 1. Configure ZOOorder

Follow the [ZOOorder Configuration](#configuration) to set up and display a list of Items ordered as desired. Then copy the URL of the result page.

### Step 2. Create the Menu Item

1. Go to the **Joomla Menu Manager** (*Joomla Administrator / Menus / Menu Manager*) and choose to edit the Menu where you would like to add a new Menu Item.
2. Create a new menu item of the type *External URL*.
3. In the link address area, paste the URL that you copied in Step 1.
4. Save your new menu item.

### Done!

That's is. Your new menu item should display the ordered results, without needing to display the module.
