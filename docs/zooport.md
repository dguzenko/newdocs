ZOOport
=======

This documentation offers help and guidance for ZOOlanders **ZOOport** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zooport).

**ZOOport** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Requirements
==========

* **[Joomla](http://www.joomla.org) 2.5.6** or higher
* **[ZOO](http://www.yootheme.com/zoo) 3.1** or higher
* **[ZOOlanders component](https://www.zoolanders.com/extensions/zoolanders) 3.1** or higher

Installation
============

Through ZOOlanders Manager
--------------------------

1. Go to *Joomla Administration / Components / ZOOlanders*.
2. Set your zoolanders.com site login credentials trough the Options button.
3. Find the **ZOOcart** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOport** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download **ZOOport** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zooport).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
* Use the "Upload Package File" option to choose the previously downloaded package from your pc.
* Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOport** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note:** When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Translation
===========

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zooport.ini**

**Note:** The default **en-GB.plg_system_zooport.ini** language file is located in the **administrator/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

Export/Import
=============

Application instance could be exported/imported in two formats: JSON and CSV.
To export / import your ZOO content go to the *Joomla Administration / Component / ZOO / App / Config / Import/Export*. 

Export 
------

### Export in JSON

Click on *"JSON"* button to start exporting in this format. Progress bars help to track the progress of exporting items, categories and rebuild instances.
When export is completed,  you can get the file by using the *"Download"* button. 

***JSON exports:*** all types 

### Export in CSV 

Click on *"CSV"* button to start exporting in this format. Progress bar helps to track the progress of exporting instances. When export is completed,  you can get the file by using the *"Download"* button. 

***CSV exports:*** Id, Name, Alias, Author Alias, Created Date, Category (format Imported|||imported which means category_name|||category_alias), Tag (separate column for each tag). 
*Element types:* Price Pro, Quantity, Text, Textarea, Link,  Email, Date, Select, Radio,  Checkbox, Country, Gallery,  Image,  Download,  Google Maps,  Google Maps Pro, Date Pro, Link Pro,  Textarea Pro, Text Pro, Download Pro, Image Pro, Media Pro, Media.

Import
------

### Import from JSON

1. In the *Import from JSON* block use the "Search" option to choose the file from your pc and click on "Upload" button.
2. Pick the check boxes to import the frontpage and categories (if you need it). Choose a type and match the data with the elements. When you ready, click the "Import" button to start. 
3. Be patient while ZOO port imports your application content.  Progress bars help to track the progress.

***JSON imports:*** all types 

### Import from CSV

1. In the *Import from JSON* block use the "Search" option to choose the file from your pc and click on "Upload" button.
**Note:** If files were exported as an archive, unarchive them first and then import each file separately.
2. Set up the file details and click “Next”.
3. Choose a type and match the data with the elements. When you ready, click the "Import" button to start.
4. Be patient while ZOO port imports your application content.  Progress bars help to track the progress.

***CSV  imports:*** Name, Alias, Author Alias, Created Date, Category, Tag. 
*Element types:* Text, Textarea, Link, Email, Date, Country, Select, Radio, Checkbox, Gallery,  Image, Download, Google Maps, Google Maps Pro, Date Pro, Link Pro, Textarea Pro, Text Pro, Download Pro, Image Pro, Media Pro, Price Pro, Quantity.
