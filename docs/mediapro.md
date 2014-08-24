Media Pro
=========

This documentation offers help and guidance for ZOOlanders **Media Pro** Extension. More information about it can be find on the ZOOlanders site, https://www.zoolanders.com/extensions/media-pro.

Use the left menu to go trough the diferent sections.

Requirements
============

**Media Pro** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Media Pro 3.x requires
----------------------

* Joomla 2.5.6 or higher
* Previously installed:

  * **ZOO 3.1** or higher

    You may download it from YOOtheme site

  * **ZL Framework 3.1** or higher

    You may download it from ZOOlanders site

  * Quick Note

ZL Framework plugin must be enabled, you may check it in Joomla Administration / Extensions / Plugin Manager.

Installation
============

Through Joomla Manager
----------------------

1. Download **Media Pro** package from https://www.zoolanders.com/extensions/media-pro.
2. Install the previously unpacked App/s. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/install-a-new-app).
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
5. Click on the "Upload & Install" button.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **Media Pro** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

### Quick Note

**Media Pro** element is installed under the same plugin, ZL Elements, as any other ZL Element for performance reasons. If you want to check it's installation, visit the ZOO configuration and edit any Type from any App. If **Media Pro** shows up on the right section under ZOOlanders Group, then you're good to go!

Trough ZL Manager
-----------------

1. Be sure you have installed the **ZL Manager Extension**.
2. Open the Component (Components / ZOOlanders Manager).
3. Login clicking on the Options.
4. Find the **Media Pro** Extension in the list and click on the Install button.
5. Be patient while the Installation proceeds, the page will be refreshed once done.

For more information on using the Manager checkout it's Docs.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

Configuration
=============

Step 1. Set up the Type
-----------------------

Add the Media Pro element to the desired Type and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types). For details about the element config options review the [Type Config doc](#typeconfig).

Step 2. Position assignment
---------------------------

Assign the Media Pro element to the desired layout positions and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions). For details about the element assignment options review the [Assignment doc](#assignment).

Done!
-----

Go and edit your content. Be sure to review the other docs for further details and configurations.

Translation
===========

The default **en-GB.plg_system_zoo_zlelements_mediapro.ini** language file is located in the **administrator/language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoo_zlelements_mediapro.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.

Switching to Media Pro
======================

Switching from ZOO Media to ZL Media Pro
----------------------------------------

If you have a site with a standard ZOO element, it would would be a lot of work to manually transfer the data to the Pro version. The good news is that you can switch in a few steps without loosing any data!

Follow the next steps and be sure you have [installed](#installation) the Media Pro element.

**Note**: please backup before proceeding. ZOOlanders will not take any responsability of lost data.

1. Locate the media / zoo / applications / [YOURAPP] / types / [YOURTYPE].config file and open it for editing with any plain text editor.
2. Search for the param that relates to the specific element you are upgrading.
3. Locate the type entry for the element (it should be at the bottom of the specific element's section).
4. Change the type from `media` to `mediapro`.
5. Save the changes and return to your ZOO admin area.
6. Edit that same Type elements.
7. Locate and open the element that you are switching from. That element that was a Media element before should now be Media Pro element.
8. Open the Element options and [configure](#configuration) it as needed.
9. Save the Type. Your entries should now be updated to use the Media Pro element.

Type Config
===========

Type Configuration
------------------

### Basic Parameters

Basic Parameters define common element settings.

IMAGE HERE

* **Name** - Allows to set element's name, that will be used in layouts and item properties.
* **Description** - Allows to describe element shortly.
* **Access Level** - Allows to setup element accessibility. In order to make it totally accessible, set this parameter to "Public".
* **Repeatable** - Allows to set "Yes" if he wants to use a few of such elements per one application item.
* **Instance Limit** - Allows to limit the number of element instances (usually used in combination with the Repeatable param).* **

### Edit Layout Parameters

Edit Layout Parameters define element edit layout settings.

IMAGE HERE

* **Main Layout** - Allows the user to set main layout.
* **Sub Layout** - Allows the user to set additional sub layout.

### Files Parameters

Files Parameters allow you to configure what types of files can be used and how they are used and accessed.

IMAGE HERE

* Mode.

  You have three selections here: Files, Folders, Both.

  * **Files**: You can select **just** files from your disk (and upload them), one by one.
  * **Folders**: You can select **just** folders (but you can still upload files into the folders), one by one. The system will fetch the files contained in that folder automatically.
  * **Both**: You can select **both** files and folders (and still upload files). The system will merge the files from the folders and the files you selected in a single list.

### **Default** Source.

Default file for download. If no source is specified in the Item, the specified default will be used on rendering. Can be a full path to a Folder or File.
If you input **[authorname]** in the path, it will be replaced with the item's author name.

### **Legal Extensions**.

This allows you to limit the extensions of files to those, indicated here. The default (bmp|gif|jgp|jpeg|png) will only allow files with these extensions to be uploaded. You can add, remove or replace this list if needed. Separate multiple file extensions with a 'pipe' `|` character (no spaces).

### **File Directory Path**.

Relative path to file directory. Defaults to the standard 'images' folder of Joomla or Media Manager Files Folder Path value if left blank, started with variable or Joomla prohibited folder and no External Integration set.

The following variables can be used to create dynamic paths:

  * **[userid]** - Will be replaced with the User ID.
  * **[username]** - Will be replaced with the User username.
  * **[usergroup]** - Will be replaced with the User group name.
  * **[usergroupid]** - Will be replaced with the User group id.
  * **[authorid]** - Will be replaced with the current Item Author ID.
  * **[authorname]** - Will be replaced with the current Item Author username.
  * **[authorgroup]** - Will be replaced with the current Item Author group name.
  * **[authorgroupid]** - Will be replaced with the current Item Author group id.
  * **[zooapp]** - Will be replaced with current Item App group (e.g. blog).
  * **[zooprimarycat]** - Will be replaced with current Item Primary Category (e.g. tipography).
  * **[zooprimarycatid]** - Will be replaced with current Item Primary Category ID (e.g. 4).
  * **[zooitemalias]** - Will be replaced with current Item alias.
  * **[zooitemid]** - Will be replaced with current Item ID (e.g. 4).
  * **[zooitemtype]** - Will be replaced with current Item Type (e.g. article).
  * **[year]** - Will be replaced with current year (e.g. 2010).
  * **[month]** - Will be replaced with current month number (e.g. 06).
  * **[day]** - Will be replaced with the day number (e.g. 10).

* **Max Upload Size** - Maximum dimensions for uploaded files, in KB. Default value is 1024Kb (1Mb).

* **Amazon S3 Integration** - Allows the user to attach files stored in the Amazon S3 bucket. Amazon S3 (Simple Storage Service) is an online file storage web service offered by Amazon Web Services. Amazon S3 provides storage through web services interfaces. You can read more about it [here](http://aws.amazon.com/es/s3/).

  * **S3 Bucket** - Amazon S3 Bucket name. You can read more about it [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html).
  * **AWS AccessKey** - AWS access key. You can read more about it [here](http://docs.aws.amazon.com/fws/1.1/GettingStartedGuide/index.html?AWSCredentials.html).
  * **AWS SecretKey** - AWS secret key. You can read more about it [here](http://docs.aws.amazon.com/fws/1.1/GettingStartedGuide/index.html?AWSCredentials.html).

### Specific Parameters

* **Player** Allows to choose the Player which will be displayed and used to play de Media. Each Player has it's own features, choose wisely.

Assignment
==========

Position Assignment
-------------------

### Basic Parameters

Basic Parameters define common element settings.

IMAGE HERE

* **Show Label** - Allows to choose if the element label should be rendered or not.
* **Alternative Label** - Allows to customoze the default label (the element's name set in the Type) for this specific position.

### Layout Parameters

Layout Parameters shows the available layouts for the element.

* **Main Layout** - Allows to specify main layout.
* **Sub Layout** - If available, allows to specify additional sublayout.

For more information about the Layouts please review the [Layouts doc](#layouts).

### Filter Parameters

Filter Parameters allow to limit element instances and to set offset for output.

IMAGE HERE

* **Offset** - Allows move the start point of rendering (e.g. 2, will make rendering start from instance 3).
* **Limit** - Allows to limit the number of instance to output.

Separator Parameters
--------------------

Separator Parameters allows to configure separation constructions, that will be used to separate the element instances on rendering.

IMAGE HERE

* *By* - allows to separate the element instances by the chosen separator.

  * **None** - will provide no separator between the instances.
  * **Space** - (default) just inserts a space between the instances.
  * **Span** - wraps the instances with a `<span>` tag.
  * **Paragraph** - wraps the instances with a `<p>` tag.
  * **Div** - wraps the instances with a `<div>` tag.
  * **Comma** - inserts a comma between the instances.
  * **Hyphen** - inserts a hyphen `-` between the instances.
  * **Pipe** - inserts a pipe `|` between the instances.
  * **Break** - inserts a 'Break' `<br>` tag between the instances.
  * **List Item** - wraps the instances with a `<li>` tag, however, it does NOT include any `<ol>` or `<ul>` wrapper.
  * **Unordered List** - wraps each instance with `<li>` tag and wrapp the result with `<ul>` tag.
  * **Ordered List** - wraps each instance with `<li>` tag and wrapp the result with `<ol>` tag.
  * **Custom** - allows to set your own separator

* **Custom By** - only shown if By is set as Custom allows to specify a custom separator.
* **Class** - allows to add custom class to the result if the separator wraps the content.
* **Fix HTML** - if enabled after the separator was applied this feature will...

  * Delete closed Tags without their opening Tag.
  * Fix open Tag without close, closing them automatically.
  * Check bad nesting and fix them.
  * Fix bad quotes in attributes.
  * Merge different styles attributes in the same Tag
  * Remove HTML comments.
  * Remove empty Tags and more bad Tags.

...to the final value. Use carefully and disable if any issue shows up with the rendered result.

Layouts
=======

Listed are the inbuild layouts of Media Pro element but if those don't meet your project requirements you can create your own ones.

Default
-------

Displays the respective player.

Custom layouts
==============

Although we try to provide many layouts with different options you've possibly run into a situation where you need to render the element in some specific way. With just a little PHP, HTML, or CSS coding knowledge you can easily make it render just like you want it to, by creating your own layout for an element.

Although you could just directly change and override the code of an existing layout, that will create confusions in the future as the default element behaviour would change without any indication.

What we suggest is to create your own layout (you can copy/paste an existing one) and store the resultant file in one of the ZOO overrable Elements folder. That way the file will be easily localizable and risk free on updates.

Before starting
---------------

As much as we try to make our docs complete, with a system as versitle as ZOO and some of the integrations included in our elements (like WidgetKit and qTip) even our documentation might not make a potential rendering manner obvious. Feel free to ask us in our support center.

Step 1. Locate the layouts path
-------------------------------

The Media Pro layouts are located in **plugins / system / zoo_zlelements / zoo_zlelements / elements / mediapro / tmpl / render** folder. If the layout supports sublayouts is those that you should work on, instead go to **the ... / render / [MAIN LAYOUT] / _sublayouts** folder.

Step 2. Create your layout
--------------------------

Copy one of the existing layouts in the path from the Step 1 and change it name to a custom one. Be sure to keep the underscore `_` at the begining of the file if it's a sublayout.

Step 3. Place your layout

Your layout is ready but should be stored in a safe place, as we mentioned in the begining. You can place your custom layout in:

* **media / zoo / custom_elements / mediapro / tmpl / render**

  This path will make the layout available for all the Apps.

* **media / zoo / applications / [APP NAME] / elements / mediapro / tmpl / render**

  This path will make the layout available only for the App being placed in.


When dealing with sublayout, remember it should be placed into **... / render / [MAIN LAYOUT] / _sublayouts** instead.

**Note**: if the **custom_elements** folder does not exist, just create it.

**Done!**

Now that your layout is placed it can be selected when setting the Element view on the Positions assignment. Do so and start editing it until it suits your project needs.