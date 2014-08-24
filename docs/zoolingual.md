ZOOlingual
==========

This documentation offers help and guidance for ZOOlanders **ZOOlingual** Extension. More information about it can be find on the ZOOlanders site, https://www.zoolanders.com/extensions/zoolingual.

Use the left menu to go trough the diferent sections.

Requirements
============

Requirements and Compatibility
==============================

**ZOOlingual** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

ZOOlingual 3.x requires
-----------------------

* **Joomla 2.5.6** or higher
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

1. Download **ZOOlingual** package from https://www.zoolanders.com/extensions/zoolingual.
2. Install the previously unpacked App/s. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/install-a-new-app).
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
5. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOlingual** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOlingual** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Trough ZL Manager

1. Be sure you have installed the **ZL Manager Extension**.
2. Open the Component (Components / ZOOlanders Manager).
3. Login clicking on the Options.
4. Find the **ZOOlingual** Extension in the list and click on the Install button.
5. Be patient while the Installation proceeds, the page will be refreshed once done.

For more information on using the Manager checkout it's Docs.

Once the installation process have finished the ZOOlingual plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

Configuration
=============

All of your elements in ZOO should have now a new section in the configuration called ZOOlingual. It allows you to set on which language will be display that specific element but if none is selected, will be displayed in all.

The language evaluation can be set on each element Configuration or Assignment. Our recommendation is to set your base or most common restrictions at the Type level, in the element Configuration, and override them in the Layout Positions assignments as needed.

If you do so, in the Layout Positions assignment the ZOOlingual configuration will show a Overide Options chechbox. By enabling it you can then override the settings that have been placed on this element.

Step 1. Set up the Type
-----------------------

Locate the Type you would like to integrate ZOOlingual with and Edit it's elements. For more information please review the ZOO [official docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

For each Element that you would like to translate create a new instance of it and assign a language using the ZOOlingual section. You should also set any element language specific configuration.

IMAGE HERE

### Quick note

For number based elements, such as Price, this step should be skipped as the language could be assigned in the Layout Positions as explained in Step 2. Being able to set only in the positions the language specific configurations, such as label or currency format, the value would be inputed once for all languages but displayed with particual diferences for each of them.

Step 2. Position assignment
---------------------------

Locate and open the ZOO template layout where you would like to show your translated element content. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

Drag & Drop once the elements you have associated a language in the Step 1. You would be assigning in the same position all elements of the same translated content but ZOOlingual will make sure is rendered only the element associated to the current frontend language.

For elements without language association but which should be adjusted for each language, as mentioned in the last Quick Note, Drag & Drop one instance for each language setting the specific language and configuration.

Step 3. Content translation
---------------------------

Now that the elements are set we can start translating the content. Please proceede by creating or editing an existing Item. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/create-and-manage-items).

Populate and translate the elements set in Step 1 as you would usually do.

Note: The Item name, slug and meta data can be translated in the right Content Tab.

IMAGE HERE

Proceede the same way for the Category and Frontpage content translation.

Step 4. Language switcher
-------------------------

ZOOlingual does not use it's own language switcher. Instead you can use the Joomla! inbuild one or from any 3rd party Extension. For more info on setting a multi-lingual site with Joomla! check this doc.

### Done!

Your content is translated and ready to be displayed!

Translation
===========

The default **en-GB.plg_system_zoolingual.ini** language file is located in the **administrator/language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoolingual.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.