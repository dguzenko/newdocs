Related Categories Pro
======================

This documentation offers help and guidance for ZOOlanders **Related Categories Pro** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/related-categories-pro).

**Related Categories Pro** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Requirements
------------

* **[Joomla](http://www.joomla.org) 2.5.6** or higher
* **[ZOO](http://www.yootheme.com/zoo) 3.1** or higher
* **[ZOOlanders component](https://www.zoolanders.com/extensions/zoolanders) 3.1** or higher

Installation
=============

Through ZL Manager
------------------

1. Go to *Joomla Administration / Components / ZOOlanders*.
1. Set your zoolanders.com site login credentials trough the Options button.
1. Find **Related Categories Pro** in the Extension list and click on the Install button.
1. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZL Elements plugin** should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download the package from [ZOOlanders site](https://www.zoolanders.com/extensions/related-categories-pro).
1. Go to *Joomla Administration / Extensions / Extension Manager / Install*.
1. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
1. Click on the "Upload & Install" button.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note:** When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

#### Quick Note

**Related Categories Pro** element is installed under the same plugin, *ZL Elements*, as any other ZL Element for performance reasons. If you want to check it's installation, visit the ZOO configuration and edit any Type from any App. If **Related Categories Pro** shows up on the right section under *ZOOlanders* Group, then you're good to go!

Configuration
=============

First steps
-----------

### Set up the Type

Add the *Related Categories Pro* element to the desired Type and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types). For details about the element config options review the [Type Config section](#params-in-detail-type-config).

### Position assignment

Assign the *Related Categories Pro* element to the desired layout positions and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions). For details about the element assignment options review the [Assignment section](#params-in-detail-position-assignment).

Upgrading to Pro version
------------------------

If you have a site with a standard ZOO element, it would would be a lot of work to manually transfer the data to the Pro version. The good news is that you can switch in a few steps without loosing any data!

Follow the next steps and be sure you have [installed](#installation) the *Related Categories Pro* element.

**Note:** please backup before proceeding. ZOOlanders will not take any responsibility of lost data.

1. Locate the *media / zoo / applications / [YOURAPP] / types / [YOURTYPE].config* file and open it for editing with any plain text editor.
2. Search for the param that relates to the specific element you are upgrading.
3. Locate the *type* entry for the element (it should be at the bottom of the specific element's section).
4. Change the *type* from `relatedcategories` to `relatedcategoriespro`.
5. Save the changes and return to your ZOO admin area.
6. Edit that same Type elements.
7. Locate and open the element that you are switching from. That element that was a *Related Categories* element before should now be *Related Categories Pro* element.
8. Open the Element options and [configure](#configuration) it as needed.
9. Save the Type. Your entries should now be updated to use the *Related Categories Pro* element.

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoo_zlelements_relatedcategoriespro.ini**

**Note:** The default **en-GB.plg_system_zoo_zlelements_relatedcategoriespro.ini** language file is located in the **administrator/language/en-GB** folder.

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

### Specific Parameters

IMAGE HERE

* **Multiselect** - Allows to choose if the category selection should be limited to one or multiple categories.
* **Relate to Item** - Allows to choose if the Selected Categories should be actually related to the Item. This feature is limited to the Categories that are part of the same App the Item is.

### Items Parameters

IMAGE HERE

* **App** - Allows to choose the App which Categories will be displayed as options.
* **Root Category** - Allows to choose the Root Category which childs will be displayed as options.

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
* **Sub Layout** - If available, allows to specify additional sublayout.

For more information about the Layouts please review the [Layouts section](#params-in-detail-layouts).

### Filter Parameters

*Filter Parameters* allow to limit element instances and to set offset for output.

IMAGE HERE

* **Offset** - Allows move the start point of rendering (e.g. 2, will make rendering start from instance 3).
* **Limit** - Allows to limit the number of instance to output.

[type filter, TODO]

### Separator Parameters

*Separator Parameters* allows to configure separation constructions, that will be used to separate the element instances on rendering.

IMAGE HERE

* **By** - allows to separate the element instances by the chosen separator.

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
-------

Listed are the inbuild layouts of Related Categories Pro element but if those don't meet your project requirements you can [create your own](#customizations-layouts) ones.

#### Default

Displays the related categories as a list.


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

The *Related Categories Pro* layouts are located in **plugins / system / zoo_zlelements / zoo_zlelements / elements / relatedcategoriespro / tmpl / render folder**. If the layout supports sublayouts is those that you should work on, instead go to the **... / render / [MAIN LAYOUT] / _sublayouts** folder.

### Step 2. Create your layout

Copy one of the existing layouts in the path from the Step 1 and change it name to a custom one. Be sure to keep the underscore `_` at the beginning of the file if it's a sublayout.

### Step 3. Place your layout

Your layout is ready but should be stored in a safe place, as we mentioned in the beginning. You can place your custom layout in:

* **media / zoo / custom_elements / relatedcategoriespro / tmpl / render**

  This path will make the layout available for all the Apps.

* **media / zoo / applications / [APP NAME] / elements / relatedcategoriespro / tmpl / render**

  This path will make the layout available only for the App being placed in.

When dealing with sublayout, remember it should be placed into **... / render / [MAIN LAYOUT] / _sublayouts** instead.

**Note**: if the **custom_elements** folder does not exist, just create it.

### Done!

Now that your layout is placed it can be selected when setting the Element view on the Positions assignment. Do so and start editing it until it suits your project needs.
