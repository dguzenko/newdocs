ZOOtools
========

This documentation offers help and guidance for ZOOlanders **ZOOtools** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zootools).

**ZOOtools** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

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
3. Find the **ZOOtools** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOtools plugin** should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Trough Joomla Manager
----------------------

1. Download **ZOOtools** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zootools).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOtools** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOtools** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Configuration
=============

ZOOtools is a set of tools that enhance ZOO and in this step guide will assume you wont to use them all!

Steps
-----

### Step 1. Set up the Separator element

Please add the *Separator* element to the Type you would like to work with. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

Place as many separators as you need and review the [Separator section](#separator-element) for more information on it's features.

### Step 2. Set up the Static Content element

*Static Content* element is a core element and does not need to be included in the Type. Just locate and edit any Layout where you would wish to render the content. For detailed information please review the [ZOO Positions Assignments](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

The element is placed beside the other ZOO Core elements, Drag & Drop it in any position, populate the **Text** field and save. The content you have populated will be rendered for all Items in that position. For more information on all the render features please review the [Static Content section](#static-content-element) for more information on it's features.

### Done!

Please review agin this doc whenever a new feature is released.


Translation
-----------

The default **en-GB.plg_system_zootools.ini** language file is located in the **administrator/language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zootools.ini**

The translations are managed by [Transifex](Transifex) where you can download the available language files and submit your ones.

Separator Element
=================

The Separator Element will allow you to separate your Admin Elements into sections for better organization and management. It has a folding feature that will make it much easier to reach and edit any element. It's the perfect solution to long entry forms.

**Note**: the element will be displayed only in the Item backend Edit form. It is not compatible with submission nor any other frontend view.

Adding the Element to your Edit form
------------------------------------

To add the *Separator* to your Edit form just add it to your Type as you would with any other element, it is grouped under *ZOOlanders Extensions*. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

The Separator element will group all of the elements from where it is positioned until the next Separator element, or the last element on the form, whichever comes first. If you wish to have some elements not be included in a Separator, be sure to place those before the first Separator element in your list of elements.

IMAGE HERE

Layouts
-------

There are two Layouts, *Section* and *Subsection*, each of them with it's own features.

### Section

Provides you with a foldable (colapsable) section where the following elements will be wrapped. It has several options:

* *Title* - Allows to set the title of the section.
* *Fold feature* - Allows to set the fold feature.

  * **Disabled** - This state turns off the folding functionality of the section so the entire contents of the section are always visible.
  * **Start unfolded** - This state turns on the folding, however, the contents of this section are initially displayed.Clicking on the section head in a form will fold the section.
  * **Start folded** - This state turns on the folding, however, the contents of this section are initially hiden.Clicking on the section head in a form will unfold the section.

### Subsection

Inserts a visible dividing line with the title of the separator appearing along the right side. It has one setting:

* **Title** - Allows to set the title of the section.

IMAGE HERE

Static Content element
======================

The Static Content element will allow you to render not just static text but Item Layout, Links, and other content directly on the layout Positions rendering the content for all Items. It's possibilities are endless!

**Note**: the element is a core element, you don't have to add it into your Type.

Assigning the Element
---------------------

To assign the element to any postion, just Drag & Drop as you would to with any other Core Element. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

IMAGE HERE

**Note**: the element is not compatible with submission views.

Layouts
-------

There are two Layouts, *Default* and *qTip*, each of them with it's own features.

**Default** - Offers several content rendering features:

### Text/Plugin

Allows to display static text.

* **Text** - The text that will be displayed.
* **Plugins** - If enabled the standard Joomla Content Plugins will be evaluated on the text entered above.

### Link

Displays diferent kind of links, *Item, Category* or *Custom*.

* **Common link options**
  * **Text** - Allows to set the link text.
  * **Title** - Allows to set the link title.
  * **New window** - Allows to choose if the link should be opened in a new browser window.
  * **Rel** - Allows to set the link rel attribute.

* **Type: Item**
  Allows to display a link to ZOO items.

  * **Item Source**
   * **Current** - Will display a link to the current item being rendered.
   * **Specified** - Will display a link to a specific ZOO item.

  * **Item ID** - Displayed if the Item Source is set to Specific allows to set the Item ID which will be linked.
  * **Layout** - Allows to select a layout that will be used to display the item when the user clicks on the link.

* **Type: Category**

  Allows to display a link to ZOO categories.

  * **Category ID** - Allows to set the Category ID which will be linked.

 * **Type: Custom**

  Allows to display a custom link.

  * **URL** - Allows to set the link URL which will be used.

### Item

Renders a specific ZOO item.

* **Item Layout** - Allows to select a layout that will be used to render the item.
* **Item Source**
  * **Current** - Will use the current item as the rendering source.
  * **Specified** - Will allow to specify the item.
* **Item ID** - Displayed if the Item Source is set to Specific allows to set the Item ID which will be used.

### Module

Displays a specific module.

* **Module** - Allows to select a the Module you would like to display.

### Iframe

Displays a standard Iframe.

* **Render: Item**

 Allows to render a specific ZOO Item in the Iframe.

  * **Item Layout** - Allows to select a layout that will be used to render the item.
  * **Item Source**
   * **Current** - Will use the current item as the rendering source.
   * **Specified** - Will allow to specify the item.
  * **Item ID** - Displayed if the Item Source is set to Specific allows to set the Item ID which will be used.

* **Render: Custom URL**

 Allows to set a custom URL for the Iframe.

  * **URL** - Allows to set the URL.
