ZOOtrack
========

This documentation offers help and guidance for ZOOlanders **ZOOtrack** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zootrack).

**ZOOtrack** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

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
3. Find the **ZOOtrack** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOtrack** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Trough Joomla Manager
----------------------

1. Download **ZOOtrack** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zootrack).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOtrack** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOtrack** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Configuration
=============

The ZOOtrack configuration is very simple. Go to the **Joomla Plugin Manager** (*Joomla Administrator / Extensions / Plugin Manager*), locate the ZOOtrack plugin, edit it and set the following options:

* **Track Items** - If enabled ZOOtrack will track the Users Items views.
* **Track Categories** - If enabled ZOOtrack will track the Users Categories views.

Further integrations
--------------------

ZOOtrack is ment to be used by other Extensions, such us ZOOitem Pro, which thanks to ZOOtrack will be able to render the *Current Item* or *Latest Viewed* items. To do so install, [set up](http://joolanders.github.io/newdocs/?zooitempro#configuration) a ZOOitem Pro (3.1v or superior) module instance and choose one of the available ZOOtrack layouts.

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zootrack.ini**

### Trough the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

**Note:** The default **en-GB.plg_system_zootrack.ini** language file is located in the **administrator/language/en-GB** folder.
