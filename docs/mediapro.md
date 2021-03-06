Media Pro
=========

This documentation offers help and guidance for ZOOlanders **Media Pro** Extension. More information about it can be find on the [official page](http://www.zoolanders.com/extensions/media-pro).

**Media Pro** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

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
3. Find **Media Pro** in the Extension list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZL Elements plugin** should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download the package from [ZOOlanders site](https://www.zoolanders.com/extensions/media-pro).
2. Go to *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note:** When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

#### Quick Note

**Media Pro** element is installed under the same plugin, *ZL Elements*, as any other ZL Element for performance reasons. If you want to check it's installation, visit the ZOO configuration and edit any Type from any App. If **Media Pro** shows up on the right section under *ZOOlanders* Group, then you're good to go!

Configuration
=============

First steps
-----------

### Set up the Type

Add the *Media Pro* element to the desired Type and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types). For details about the element config options review the [Type Config section](#params-in-detail-type-config).

### Position assignment

Assign the *Media Pro* element to the desired layout positions and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions). For details about the element assignment options review the [Assignment section](#params-in-detail-position-assignment).

Upgrading to Pro version
------------------------

If you have a site with a standard ZOO element, it would would be a lot of work to manually transfer the data to the Pro version. The good news is that you can switch in a few steps without loosing any data!

Follow the next steps and be sure you have [installed](#installation) the *Media Pro* element.

**Note**: please backup before proceeding. ZOOlanders will not take any responsibility of lost data.

1. Locate the *media / zoo / applications / [YOURAPP] / types / [YOURTYPE].config* file and open it for editing with any plain text editor.
2. Search for the param that relates to the specific element you are upgrading.
3. Locate the *type* entry for the element (it should be at the bottom of the specific element's section).
4. Change the *type* from `media` to `mediapro`.
5. Save the changes and return to your ZOO admin area.
6. Edit that same Type elements.
7. Locate and open the element that you are switching from. That element that was a Media element before should now be *Media Pro* element.
8. Open the Element options and [configure](#configuration) it as needed.
9. Save the Type. Your entries should now be updated to use the *Media Pro* element.

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoo_zlelements_mediapro.ini**

**Note:** The default **en-GB.plg_system_zoo_zlelements_mediapro.ini** language file is located in the **administrator/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

Params in detail
================

Type Config
-----------

### Basic Parameters

*Basic Parameters* define common element settings.

IMAGE HERE

* **Name** - Allows to set element's name, that will be used in layouts and item properties.
* **Description** - Allows to describe element shortly.
* **Access Level** - Allows to setup element accessibility. In order to make it totally accessible, set this parameter to *"Public"*.
* **Repeatable** - Allows to set *"Yes"* if he wants to use a few of such elements per one application item.
* **Instance Limit** - Allows to limit the number of element instances *(usually used in combination with the Repeatable param).* 

### Edit Layout Parameters

*Edit Layout Parameters* define element edit layout settings.

IMAGE HERE

* **Main Layout** - Allows the user to set main layout.
* **Sub Layout** - Allows the user to set additional sub layout.

### Specific Parameters

* **Player** Allows to choose the Player which will be displayed and used to play de Media. Each Player has it's own features, choose wisely.

### Files Parameters

*Files Parameters* allow you to configure what types of files can be used and how they are used and accessed.

IMAGE HERE

* **Mode**.

  You have three selections here: Files, Folders, Both.

  * **Files**: You can select **just** files from your disk (and upload them), one by one.
  * **Folders**: You can select **just** folders (but you can still upload files into the folders), one by one. The system will fetch the files contained in that folder automatically.
  * **Both**: You can select **both** files and folders (and still upload files). The system will merge the files from the folders and the files you selected in a single list.


* **Default Source**.

  Default file for download. If no source is specified in the Item, the *specified default will be used on rendering.*
  Can be a full path to a *Folder or File*.
  If you input **[authorname]** in the path, it will be replaced with the item's author name.

* **Legal Extensions**.

  This allows you to limit the extensions of files to those, indicated here. The default (bmp|gif|jgp|jpeg|png) will only allow files with these extensions to be uploaded. You can add, remove or replace this list if needed. Separate multiple file extensions with a 'pipe' `|` character (no spaces).

* **File Directory Path**.

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

Position Assignment
-------------------

### Basic Parameters

*Basic Parameters* define common element settings.

IMAGE HERE

* **Show Label** - Allows to choose if the element label should be rendered or not.
* **Alternative Label** - Allows to customize the default label (the element's name set in the Type) for this specific position.

### Layout Parameters

*Layout Parameters* shows the available layouts for the element.

* **Main Layout** - Allows to specify main layout.

**Playlist Layout** has the following settings:

  * **Autoplay** - Enable in order the track to start playing as soon as it's loaded.
  * **Loop** - Enable in order the track/list to start over again when ended.
  * **Width** - Specify the Video width. Notice that the Player Skin will not adapt to this size automatically.

You can specify such parameters of the **screen**:

  * **Display** - Set to "No" to avoid the screen from displaying in situations where only Audio is required without any poster.
  * **Height** - Set the Video size. (Available when "Display" param is set to "Yes") Notice that the Player Skin will not adapt to this size automatically.
  * **Skin** - Allow to specify the Player Skin. You can set your own in the 'mediapro/assets/plugins/[plugin]/skins' folder.

**Note:** Using JPlayer, there are two main skins that are integrated with the Default layout. But in case you want to use any other skin, a complete new custom layout is required.

  * **Preview image** - Set a general Image for all media. It will be overided by the image selected on Edit view on each media. You have three selections here: None, From Element (require to specify the element), From File (require URL). 

**Playlist Mode** - Enable to display the track list in the Playlist Mode. Check the [demo](http://demo.zoolanders.com/index.php/en/elements/media-pro) to see the example of the playlist. 

### Separator Parameters

For more information about the Layouts please review the [Layouts section](#params-in-detail-layouts).

*Separator Parameters* allows to configure separation constructions, that will be used to separate the element instances on rendering.

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
  * **Unordered List** - wraps each instance with `<li>` tag and wrap the result with `<ul>` tag.
  * **Ordered List** - wraps each instance with `<li>` tag and wrap the result with `<ol>` tag.
  * **Wrap Item** -  wraps the instances with `<article class="item">`Simple Text`</article>`.
  * **UIkit Block** -  wraps the instances with `<div class="uk-margin">`Simple Text`</div>`.
  * **UIkit Article** - wraps the instances with `<article class="uk-article">`Simple Text`</article>`.
  * **UIkit List** - wraps the instances with `<ul class="uk-list"><li>`Simple Text`</li></ul>`.
  * **UIkit List Line** - wraps the instances with `<ul class="uk-list uk-list-line"><li>`Simple Text`</li></ul>`.
  * **Custom** - allows to set your own separator.
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
-------

Listed are the inbuild layouts of Media Pro element but if those don't meet your project requirements you can [create your own](#customizations-layouts) ones.

#### Default

Displays the respective player.

Customizations
==============

Layouts
-------

Although we try to provide many layouts with different options you've possibly run into a situation where you need to render the element in some specific way. With just a little PHP, HTML, or CSS coding knowledge you can easily make it render just like you want it to, by creating your own layout for an element.

Although you could just directly change and override the code of an existing layout, that will create confusions in the future as the default element behaviour would change without any indication.

What we suggest is to create your own layout (you can copy/paste an existing one) and store the resultant file in one of the ZOO overridable Elements folder. That way the file will be easily localizable and risk free on updates.

### Before starting

As much as we try to make our docs complete, with a system as versatile as ZOO and some of the integrations included in our elements (like WidgetKit and qTip) even our documentation might not make a potential rendering manner obvious. Feel free to ask us in our support center.

### Step 1. Locate the layouts path

The *Media Pro* layouts are located in **plugins / system / zoo_zlelements / zoo_zlelements / elements / mediapro / tmpl / render** folder. If the layout supports sublayouts is those that you should work on, instead go to **the ... / render / [MAIN LAYOUT] / _sublayouts** folder.

### Step 2. Create your layout

Copy one of the existing layouts in the path from the Step 1 and change it name to a custom one. Be sure to keep the underscore `_` at the beginning of the file if it's a sublayout.

### Step 3. Place your layout

Your layout is ready but should be stored in a safe place, as we mentioned in the beginning. You can place your custom layout in:

* **media / zoo / custom_elements / mediapro / tmpl / render**

  This path will make the layout available for all the Apps.

* **media / zoo / applications / [APP NAME] / elements / mediapro / tmpl / render**

  This path will make the layout available only for the App being placed in.


When dealing with sublayout, remember it should be placed into **... / render / [MAIN LAYOUT] / _sublayouts** instead.

**Note**: if the **custom_elements** folder does not exist, just create it.

### Done!

Now that your layout is placed it can be selected when setting the Element view on the Positions assignment. Do so and start editing it until it suits your project needs.

Uninstallation
==============

*Important Note:* Uninstallation through Joomla would remove ALL elements at once as they share the same plugin. Removing of only one element must be done manually. 

Through ZL Manager
------------------

1. Go to *Joomla Administration / Components / ZOOlanders*.
2. Find the element in the list and click on the *Uninstall* button.
3. Confirm the uninstallation procedure, status notification will arise.

Through Joomla Manager
----------------------

1. Go to the *Joomla Administration / Extensions / Extension Manager / Manage*.
2. Search the element in list and tick the checkbox near its name.
3. Click on the *Uninstall* button on the top.

Manually
--------

To uninstall the element you should manually delete the relevant folder from *%Joomla root% / plugins / system / zoo_zlelements / zoo_zlelements / elements*.
