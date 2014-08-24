ZOOtrack
========

This documentation offers help and guidance for ZOOlanders **ZOOtrack** Extension. More information about it can be find on the ZOOlanders site, https://www.zoolanders.com/extensions/zootrack.

Use the left menu to go trough the diferent sections.

Requirements and Compatibility
------------------------------

**ZOOtrack** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

### **ZOOtrack 3.x requires**

* **Joomla 2.5.9** or higher
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

1. Download **ZOOtrack** package from https://www.zoolanders.com/extensions/zootrack.
2. Install the previously unpacked App/s. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/install-a-new-app).
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
5. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOtrack** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOtrack** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Trough ZL Manager
-----------------

2. Be sure you have installed the **ZL Manager Extension**.
3. Open the Component (Components / ZOOlanders Manager).
4. Login clicking on the Options.
5. Find the **ZOOtrack** Extension in the list and click on the Install button.
6. Be patient while the Installation proceeds, the page will be refreshed once done.

For more information on using the Manager checkout it's Docs.

Once the installation process have finished the **ZOOtrack** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

Configuration
=============

The ZOOtrack configuration is very simple. Go to the Joomla Plugin Manager (Joomla Administrator / Extensions / Plugin Manager), locate the ZOOtrack plugin, edit it and set the following options:

* **Track Items** - If enabled ZOOtrack will track the Users Items views.
* **Track Categories** - If enabled ZOOtrack will track the Users Categories views.

Further integrations
--------------------

ZOOtrack is ment to be used by other Extensions, such us ZOOitem Pro, which thanks to ZOOtrack will be able to render the Current Item or Latest Viewed items. To do so install, set up a ZOOitem Pro (3.1v or superior) module instance and choose one of the available ZOOtrack layouts.

Translation
===========

The default **en-GB.plg_system_zootrack.ini** language file is located in the **administrator/language/en-GB folder** and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zootrack.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.