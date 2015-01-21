ZOOlingual
==========

This documentation offers help and guidance for ZOOlanders **ZOOlingual** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zoolingual).

**ZOOlingual** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

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
3. Find the **ZOOlingual** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOlingual plugin** should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download **ZOOlingual** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zoolingual).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
5. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOlingual** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOlingual** downloaded package to a directory on your pc.
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

All of your elements in ZOO should have now a new section in the configuration called *ZOOlingual*. It allows you to set on which language will be display that specific element but if none is selected, will be displayed in all.

The language evaluation can be set on each element Configuration or Assignment. Our recommendation is to set your base or most common restrictions at the Type level, in the element Configuration, and override them in the Layout Positions assignments as needed.

If you do so, in the Layout Positions assignment the ZOOlingual configuration will show a *Override Options* checkbox. By enabling it you can then override the settings that have been placed on this element.

Steps
-----

### Step 1. Set up the Type

Locate the Type you would like to integrate ZOOlingual with and Edit it's elements. For more information please review the [ZOO official docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

For each Element that you would like to translate create a new instance of it and assign a language using the *ZOOlingual* section. You should also set any element language specific configuration.

IMAGE HERE

#### Quick note

For number based elements, such as Price, this step should be skipped as the language could be assigned in the Layout Positions as explained in Step 2. Being able to set only in the positions the language specific configurations, such as label or currency format, the value would be inputted once for all languages but displayed with particular differences for each of them.

### Step 2. Position assignment

Locate and open the ZOO template layout where you would like to show your translated element content. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

Drag & Drop once the elements you have associated a language in the Step 1. You would be assigning in the same position all elements of the same translated content but *ZOOlingual* will make sure is rendered only the element associated to the current frontend language.

For elements without language association but which should be adjusted for each language, as mentioned in the last Quick Note, Drag & Drop one instance for each language setting the specific language and configuration.

### Step 3. Content translation

Now that the elements are set we can start translating the content. Please proceed by creating or editing an existing Item. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/create-and-manage-items).

Populate and translate the elements set in Step 1 as you would usually do.

**Note:** The Item name, slug and meta data can be translated in the right Content Tab.

IMAGE HERE

proceed the same way for the Category and Frontpage content translation.

### Step 4. Language switcher

ZOOlingual does not use it's own language switcher. Instead you can use the Joomla! inbuild one or from any 3rd party Extension. For more info on setting a multi-lingual site with Joomla! check [this doc](http://help.joomla.org/files/EN-GB_multilang_tutorial.pdf).

### Done!

Your content is translated and ready to be displayed!

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoolingual.ini**
**Note:** The default **en-GB.plg_system_zoolingual.ini** language file is located in the **administrator/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.
