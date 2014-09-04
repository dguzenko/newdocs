ZOOcompare
==========

This documentation offers help and guidance for ZOOlanders **ZOOcompare** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zoocompare).

**ZOOcompare** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

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
3. Find the **ZOOcompare** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOcompare** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

Trough Joomla Manager
----------------------

1. Download **ZOOcompare** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zoocompare).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOcompare** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the ZOOcompare downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Configuration
=============

Steps
-----

### Step 1. Set up the Type

Please add the Compare element to the Type you would like to compare. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

### Step 2. Compare element assignment

The Compare element is used to display a button which will add the Item to the comparison list and usually you would set it in the App Teaser layout.

Assign the element to the desired layout positions and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

### Step 3. Set up the Chart

The compare chart is very flexible and allows you to not just set up the Data to be compare but Headers, Groups, Tools and more.

Locate and open the ZOOcompare Chart / Compare layout assignment view for the App and Type you have set up in the Step 1. For detailed information please review the [ZOO Positions Assignments](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) and [Chart](#chart) section.

Drag & Drop the elements you would like to be bart of the comparison chart.

### Step 4. Set up the App instance

In the App Instance Configuration search for the ZOOcompare Tab and choose the Layout and the Max Items the user can compare, leave empty if there should be no limit.

### Step 5. Set up the Module. Optional.

Additionaly you could set up the ZOOcompare Module in order to list the user selected Items for comparison. Checkout it's [section](#module) for more details about it.

### Done!

The users can now select and compare the items!

Translation
-----------

The default **en-GB.plg_system_zoocompare.ini** language file is located in the **administrator/language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoocompare.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.


Chart
=====

The ZOOcompare Chart is the comparison table used to display the Items selected by the User. It's responsive and Bootstrap based.

Chart Layout
------------

The *ZOOcompare Chart / Compare* layout is used to assign the elements that will be part of the Chart and can be found in the ZOO Extensions Layouts. It has two positions, *Rows* and *Toolbar*.

IMAGE HERE

* **Rows**

  In this position you can place any Element which data you would like to be displayed in the comparison Chart. Each Element has it's own Rendering options, be sure to set it up as needed. It could happen that the Element has no data, in that case an alternative text could be displayed using the "If no value, render instead* field under the ZOOcompare Section.

  Additionally you can place the *Compare* Element in this position to render special rows such as *Main Header* and *Header* or even add custom ones. Checkout the [Element section](#compare-element) for more details.

* **Toolbar**

  In this position you can place only the *Compare* Element which will allow you to choose Toolbar buttons such as *Download CSV, Restore Chart* and *Restore Hidden*. Those are rendered in the Bottom of the Chart when using the Default Layout.

  Checkout the [Element section](#compare-element) for more details.


Module
======

The Module is used to display and manage the *Items Comparison* List.

Options
-------

It is only posible to compare Items from the same Type/App at a time and you would need to choose it in the Module params. It is posible however to display several Modules with diferent configurations in the same page.

IMAGE HERE

* App

  * **App** - allows to choose the App Instance to be used within this module.
  * **Type** - allows to choose the Type to be used within this module.

* **Layout**

  * **Main Layout** - allows to choose the module display Layout.
  * **Item row Layout** - allows to choose the Layout to be used for the Item row rendering.
  * **Style** - allows to choose the Layout style, Vertical or Horizontal.

* General

  * **Result Page ItemId** - allows to choose the Joomla Menu Item to be attached to the compare link.
  * **Module Class Suffix** - allows to set a module class suffix for specific module styling.

Compare Element
===============

The *Compare* Element is used by ZOOcompare for several compare features. Is necesary to be part of the Type being compared.

Element Layouts
---------------

The element will show diferent rendering layouts depending of the position and layout where it is dropped:

### Standard ZOO layouts

When placed into any standart ZOO Layout position it will offer an *Add to Compare / Remove from Compare* button display.

### ZOOcompare Chart Layout

When placed into the *ZOOcompare Chart Compare* layout it will adapt to offer diferenty displays depending of the position:

* **Row position**

  Will offer row related displays, such as table Main Header and Headers.

IMAGE HERE

  * **Main Header**

   Will render a Header with the appropiate Item name on each column.

   * **Link to item** - allows to choose if the Item name should be linkable to the Item full view.
   * **Remove button** - allows to choose if beside the Item name it should be displayed a button which will remove the Item from the table.

  * **Header**

   Will render a Header which can Hide/Show it's childs.

   * **Title** - the Header title.
   * **Fold feature** - allows to choose the Fold (child hiding feature) state. Offers to start with the childs hiden, unhiden or don't allow this feature at all.

* **Toolbar position**

  Will offer a Toolbar related displays, such as Download CSV, Restore Chart and Restore Hidden buttons.

  * **Download CSV** - allows to download a CSV of the currently displayed Chart data.
  * **Restore Chart** - allows to restore the Chart to it's initial state, if some Items was removed for example.
  * **Restore Hidden** - allows to restore the hidden rows.

Upgrading to v3
===============

Due to the big changes made in ZOOcompare 3 the upgrade process is not possible, instead a clean installation must be performed uninstalling any previous version. The comparison settings will be lost during this process, be sure to back up your data before proceeding.
