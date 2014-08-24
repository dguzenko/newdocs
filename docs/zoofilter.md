ZOOfilter
=========

This documentation offers help and guidance for ZOOlanders **ZOOfilter** Extension. More information about it can be find on the ZOOlanders site, https://www.zoolanders.com/extensions/zoofilter.

Use the left menu to go trough the diferent sections.

Requirements
============

Requirements and Compatibility
------------------------------

**ZOOfilter** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

ZOOfilter 3.x requires
----------------------

* **Joomla 2.5.6** or higher
* Previously installed:

  * **ZOO 3.1** or higher
  You may download it from [YOOtheme site](http://www.yootheme.com/zoo)
  * **ZL Framework 3.1** or higher
  You may download it from [ZOOlanders site](https://www.zoolanders.com/extensions/zl-framework)

### Quick Note

ZL Framework plugin must be enabled, you may check it in Joomla Administration / Extensions / Plugin Manager.

Through Joomla Manager
----------------------

1. Download **ZOOfilter** package from https://www.zoolanders.com/extensions/zoofilter.
2. Install the previously unpacked App/s. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/install-a-new-app).
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
5. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOfilter** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

**Note**: When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the **ZOOfilter** downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the **Joomla Extension Manager** (Joomla Administration / Extensions / Extension Manager / Install).
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Trough ZL Manager
-----------------

1. Be sure you have installed the **ZL Manager Extension**.
2. Open the Component (Components / ZOOlanders Manager).
3. Login clicking on the Options.
4. Find the **ZOOfilter** Extension in the list and click on the Install button.
5. Be patient while the Installation proceeds, the page will be refreshed once done.

For more information on using the Manager checkout it's Docs[]().

Once the installation process have finished the **ZOOfilter** plugin should be installed and published. To be sure go to Joomla Administration / Extensions / Plugin Manager and check if it is present and enabled.

Configuration
=============

Step 1. Set up the Search Form
------------------------------

Locate and open the ZOOfilter Search Default layout assignment view for the App and Type you would like to create the Form for. For detailed information please review the [ZOO Positions Assignments](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) and [Search Form](#search-form) docs.

Drag & Drop the elements you would like the Search Form to be composed by.

Step 2. Set up the Results layout
---------------------------------

Locate and open the ZOOfilter Results Default layout assignment view. Drag & Drop the elements you would like to render in the search result view.

Step 3. Set up the Module
-------------------------

Create a new ZOOfilter Module module and set it's title, position and publish state. Under the Basic Options tab, on the righ, choose the App and Type you have set up in the Step 1. Save and Close the module.

For more information on the module and it's options please review the [Module doc](module).

Done!

Go to the frontend and locate the Module, a ZOOfilter form should be rendered ready to perform a search.

Translation
===========

The default **en-GB.plg_system_zoofilter.ini** language file is located in the **administrator/language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoofilter.ini**

The translations are managed by [Transifex](Transifex) where you can download the available language files and submit your ones.

Search Form
===========

ZOOfilter Search form is displayed by the ZOOfilter Module and controlled by the ZOOfilter Plugin. Currently is limited to search trough one App and Type at the time.

The Form inputs are composed by the Elements in the ZOOfilter layouts.

Search layout
-------------

This layout is used to assign the elements that will be part of the Search form. Notice that the render layouts and params are specific for the form purpose. Only the serachable and Elements with a group are compatible with this laout. For more information please review the [Field]() doc.

Order layout
------------

This layout is used for the order form rendered in the search results view which would allow to reorder the results by this elements value. Notice that not all elements are compatible with this layout, only the ones that are orderable.

For each element you can set:

* **Alternative Label** - Allows to override the default element label displayed in the order form.
* **Value Type** - Allows to choose which type comparison should be used when ordering with this value.

Result layout
-------------

This layout is used to display the results view. You can place any Element here.

Fields
======

ZOOfilter Form fields are composed by the Elements for whom ZOOfilter will use specific group layouts. Those layouts are stored in the **modules/mod_zoofilter/tmpl/_elements** folder, where you can even store your custom layouts.

Groups
------

In order to apply the correct field layout to each Element ZOOfilter groups them into Category, Date, Input, Option, Rating and Tag. When an Element is assigned to a position of the Search Layout the Group specific layout will appear as options.

If you are using custom elements and those are searchable you would need to assign them the Group manually, to do so:

1. Open the custom element XML file.
2. Localize the `<element/>` tag.
3. Add a zfgroup attribute with the appropiate category value.

  Eg: `<element type="textpro" zfgroup="input">`

4. Save the file and done!

### Category group

For the Elements considered part of the Category group, 4 layouts are available:

* **Default** - Will render a Dropdown form field.
* **Checkbox** - Will render a Checkbox form field.
* **Radio** - Will render a Radio form field.
* **Ajax** - Will render a one level Dropdown form field which will load consecuent Dropdown subcategories when the parent is selected.

### Date group

For the Elements considered part of the Date group, next layouts are available:

* **Default** - Will render a date Input form field.
* **Range** - Will render two date Inputs form fields for range searches.

### Input group

For the Elements considered part of the Input group, next layouts are available:

* **Default** - Will render a text Input form field.
* **Range** - Will render two text Inputs form fields for range searches.

### Option group

For the Elements considered part of the Option group, next layouts are available:

* **Default** - Will render a Dropdown form field.
* **Checkbox** - Will render a Checkbox form field.
* **Radio** - Will render a Radio form field.

### Rating group

For the Elements considered part of the Rating group, next layouts are available:

* **Select** - Will render a Dropdown form field.
* **Checkbox** - Will render a Checkbox form field.
* **Radio** - Will render a Radio form field.
* **Range** - Will render two text Inputs form fields for range searches.

### Tag group

For the Elements considered part of the Tag group, next layouts are available:

* **Select** - Will render a Dropdown form field.
* **Checkbox** - Will render a Checkbox form field.
* **Radio** - Will render a Radio form field.

Module
======

Module Configuration
--------------------

The Module is used to display the Search Forms.

### Options

It is only posible to filter Items from the same Type/App at a time and you would need to choose it in the Module params. It is posible however to display several Modules with diferent configurations in the same page.

IMAGE HERE

* **Items** - allows to choose the ZOO App and Type which Items will be filtered.
* **Form method** - allows to choose the method that will be used by the Form to send the search data.

  * **GET** - Recommended.
  * **POST** - This methos does NOT support pagination between results.

* **Show Ordering** - allows to choose if the Ordering Form should be displayed in the results page. If enabled it will allow the users to reorder the filtered results.
* **Show search page title** - allows to choose if the Page Title should be displayed in the results page. If enabled it will allow the users to reorder the filtered results. See Search page title below.
* **Show Submit Button** - allows to choose if the Submit button should be displayed in the search form.
* **Show Clear Button** - allows to choose if the Clean button should be displayed in the search form. The button allows to clear the contents of any presently entered filtering criteria.
* **Search page title** - allows to set the Search page title. See previous Show search page title.
* **Columns** - allows to choose the amount of columns with which will be rendered the Items in the results view.
* **Items Per Page** - allows to choose the amount of Items per page that will be displayed in the results view.
* **Max number of results** - allows to set a maximun number of results to display. 1000 (default) will display up to 1000 results/entries in the filter results. Any items matching the filter criteria that are beyond 1000 will not be rendered. You can set this to any valid integer.
* **Page Layout** - allows to set the type of Page Layout for the results page:

  * **Search** - (default) will display the results using standard results display
  * **Json** - will return the JSON (code) result of the filtering operation. This option is ment for custom results layouts.

* **Ordering Layout** - allows to choose the Order Layout that will be used to render the order form.
* **Result Layout** - allows to choose the Result Layout that will be used to render Items in the results view.
* **Module Layout** - allows to choose the Search Layout that will be used to render the form.
* **Result Page Itemid** - allows to set a specific Itemid on the results page.
* **Module Class Suffix** - allows to set a module class suffix for specific module styling.





Usage case: Menu Item
=====================

There is a case when you would like to display a prefiltere list of ZOO items, without letting them actually refilter the list. ZOO doesn't come with that ability, and it might not be obvious, but with the ZOOfilter extension you CAN do that, and relatively easily.

Step 1. Configure ZOOfilter
---------------------------

Follow the [ZOOfilter Configuration](#configuration) doc to set up and display a list of Items filtered as desired. Then copy the URL of the result page.

Step 2. Create the Menu Item
----------------------------

1. Go to the Joomla Menu Manager (Joomla Administrator / Menus / Menu Manager) and choose to edit the Menu where you would like to add a new Menu Item.
2. Create a new menu item of the type External URL.
3. In the link address area, paste the URL that you copied in Step 1.
4. Save your new menu item.

Done!
-----

That's is. Your new menu item should display the filtered results, without needing to display the module.