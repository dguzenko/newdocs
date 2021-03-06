ZOOlanders Component
====================

This documentation offers help and guidance for **ZOOlanders component**. More information about it can be found on the [official page](https://www.zoolanders.com/extensions/zoolanders).

**ZOOlanders component** 3.x versions are compatible with Joomla! 2.5.x/3.x and ZOO 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Requirement
------------

* **[Joomla](http://www.joomla.org/) 2.5.6** or higher
* **[ZOO](http://www.yootheme.com/zoo) 3.1** or higher

Installation
============

Through Joomla Manager
---------------------

1. Download  **ZOOlanders** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zoolanders).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the “Upload Package File” option to choose the previously downloaded package from your pc.
4. Click on the “Upload & Install” button.

Once the installation process have finished the **ZOOlanders component** should be installed and published. To be sure go to the *Joomla Administration / Extensions / Extension Manager / Manage* and check if it is present and enabled. ZOOlanders component should be present in the *Components* drop down menu in the Joomla Administration .  

**Note:** When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the ZOOlanders downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the “Install from Directory” option to set the directory of your uploaded package files.
5. Click on the “Install” button and Joomla will install it from the given directory.

Translation
-----------

**Note:** ZL Component relies on ZLFW for its translation. 

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zlframework.ini**

**Note:** The default **en-GB.plg_system_zlframework.ini** language file is located in the **administrator/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

ZOOlanders Constituents
=======================

### ZL Farmework 

**ZL Farmework** is a base for all ZOOlanders extensions and elements. 

### Extension Manager 

To manage your ZOOlanders extensions and elements go to the *Joomla Administration / Components / ZOOlanders*. Using  ZOOlanders Extension Manager you can:

* Subscribe/Install/Re-install/Uninstall extensions and elements
* Download installation packages
* Manage language packs
* Enable/Disable extensions and elements
* Check out the installed version

### Language Pack Manager

Click on *"Language packs"* button to open the language pack manager. Here you can track the status of language translation, download language packs and contribute to translations of ZOOlanders through [Transifex](https://www.transifex.com/projects/p/zoolanders/).  

Uninstallation
==============

Through Joomla Manager
----------------------

1. Go to the *Joomla Administration / Extensions / Extension Manager / Manage*.
2. Search the extension in list and tick the checkbox near its name.
3. Click on the "Uninstall" button on the top.
