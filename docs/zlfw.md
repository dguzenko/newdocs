ZL Framework
============

This documentation offers help and guidance for ZOOlanders **ZL Framework** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zl-framework).

**ZL Framework** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

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
3. Find the **Date Pro** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZL Elements plugin** should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Trough Joomla Manager
----------------------

1. Download **ZL Framework** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zl-framework).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZL Framework** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note:** When you are facing an error during installation, it is highly recommended to try to Install from directory:

1.Unpack all files from the **ZL Framework** downloaded package to a directory on your pc.
2.Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3.Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4.Use the "Install from Directory" option to set the directory of your uploaded package files.
5.Click on the "Install" button and Joomla will install it from the given directory.

Translation
===========

The default **en-GB.plg_system_zlframework.ini** language file is located in the **administrator/language/en-GB folder** and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zlframework.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.
