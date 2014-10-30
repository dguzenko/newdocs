ZOOaksubs
=========

This documentation offers help and guidance for ZOOlanders **ZOOaksubs** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zooaksubs).

**ZOOaksubs** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

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
3. Find the **ZOOaksubs** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOaksubs** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download **ZOOaksubs** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zooaksubs).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZOOaksubs** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note:** When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Configuration
=============

Before proceeding with the configuration steps checkout the optional [Level Syncing](#level-syncing) configuration.

Steps
-----

### Step 1. Set up the base access

Our recommendation is to set your base or most common restrictions at the Type level, in the Element Config, and override them in the Layout Positions assignments as needed.

Locate and edit the desired Type elements. Choose the Elements you would like to restrict the access and edit it's ZOOaksubs section by clicking on the Evaluate checkbox. From the available rules choose and set the ones you would like to apply. For more details please review the [Elements Access](#elements-access) section.

### Step 2. Tune up the access

Now that the base access is set we can override it completely or partially on each position. To do so go to the Positions Assignment view for the Layout you would like to work with and seek for the Element ZOOaksubs section. Click on the *Override* box and set the specific param for this particular position.

You can also set the access to the Elements without base access the same way you did in Step 1.

### Done!

Now your elements will be accessible only to the Users with the appropriate Akeeba Subscription.

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zooaksubs.ini**

**Note:** The **default en-GB.plg_system_zooaksubs.ini** language file is located in the **administrator/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

Elements Access
===============

In your ZOO elements configuration and assignment there is a section called ZOOaccess, it allows you to set who can access that specific element. The *Evaluate* checkbox must be marked in order to start evaluating them.

IMAGE HERE

* **Item Override** - allows to enable the access overriding on each Item.
* **Evaluate** - allows to choose if the access will be evaluated for this element. Must be selected in order to view the rest of the options.
* **Matching method** - allows to choose if a match should be accepted when ALL or ANY (one or more) of the assignments are matched.
* **Action** - allows to choose the action that should be applied to the element if there is a match. The Render action will render the element if the evaluation was positive, the Not render action will render the element if the evaluation was negative. 

If you are in the Positions Assignments and have set an evaluation in the Element config, the ZOOaccess section will display *Override* instead of *Evaluate*. By checking the *Yes* box you can override any or all existing restrictions that have been stated.

Access Rules
------------

ZOOaksubs has a preset rules for the access evaluation. By default the rules are ignored and the access will be no evaluated. In order to start the rule evaluation, it's state must be changed. Each rule has 3 states:

* **Selection** - the rule will be considered a match only when the following selections ARE met.
* **Exclude Selection** - the rule will be considered a match only when the following selections ARE NOT met.
* **Ignore** - the rule will not be evaluated.

### Levels rule

This rule evaluates if the User has an active and valid Akeeba Subscription for the specified Levels.

IMAGE HERE

* **Levels** - allows to choose the *Akeeba Subscription Level* for which the User should have a valid subscription. Multiple selection is possible.

  * There is a special Level called **Use this Item as Level**, only present if syncing this Type, which when selected will add to the evaluation Level list the current Item from which will be retrieved the related Level.

* **Mode** - allows to choose if the User should have access to all (AND) levels or any (OR) of them.
* **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

### Packages rule

This rule evaluates if the User has an active and valid Akeeba Subscription for the specified Level package. The Package is just a list of Level synced Items IDs which are chosen by Related Items element.

IMAGE HERE

* **Levels** - allows to choose Related Item Element that represents the Package.
* **Mode** - allows to choose if the User should be part of all (AND) groups or any (OR) of them.
* **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

Level Syncing
=============

This Doc will show you how to sync your ZOO *Items* with *Akeeba Subscription Levels*. It would be still possible to create and control the Levels trough Akeeba and is optional but we recommend it as you will be able to:

* Control within ZOO the Levels content and configuration.
* Display your Levels with ZOO render flexibility.
* Relate Items for package creation.

### Step 1. Type configuration

Please add the *Aksubs Level Sync* element to the Type you would like to sync with Levels. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types). Additionally you will need to create some fields that will provide the necessary Level information.

You should add the following necessary fields:

* **Price** - A text field that will store the Level price. The stored value should be formatted as 000.00. Recommended Element: Text Pro, will allow you to control the characters limit.
* **Duration** - A text field that will store the Level duration (days). Only integer value is allowed. Recommended Element: Text Pro, will allow you to control the characters input.
* **Image** - An image field that will store the Level Image. Even if the Level will not be displayed with Akeeba it is a necessary sync value. If you would like the images be recognized by Akeeba Level be sure to store them in images folder. Recommended Element: Image.

Optionally add the following ones:

* **Description** - A textarea field that will store the Level description. Recommended Element: *Textarea*.
* **Fixed expiration** - A date field that will store the Level fixed expiration date. The stored value should be formatted as *0000-00-00 00:00:00*. Recommended Element: *Date*.
* **Forever** - A boolean field that will store the Level forever statement value. The stored value should be boolean (0 or 1). Recommended Element: *Select* or *Radio*.
* **Sign-up fee** - A text field that will store the Level Sign-up fee. The stored value should be formatted as *000.00*. Recommended Element: *Text Pro*, will allow you to control the characters limit.
* **Order Text** - A textarea field that will store the text displayed when the User's subscription has been completed successfully. Recommended Element: *Textarea*.
* **Cancel Text** - A textarea field that will store the text displayed when the User's subscription has NOT been completed successfully. Recommended Element: *Textarea*.
* **Forbid renewals** - A boolean field that will store the Level Forbid renewals statement value. The stored value should be boolean (0 or 1). Recommended Element: *Select* or *Radio*.
* **Recurring** - A boolean field that will store the Level recurring statement value. The stored value should be boolean (0 or 1). Recommended Element: *Select* or *Radio*.
* **First expiration notification** - A text field that will store the Level First expiration notification (days). Only integer value is allowed. Recommended Element: *Text Pro*, will allow you to control the characters input.
* **Second expiration notification** - A text field that will store the Level Second expiration notification (days). Only integer value is allowed. Recommended Element: *Text Pro*, will allow you to control the characters input.

For more information on Level fields please review the [official Akeeba Subscription docs](https://www.akeebabackup.com/documentation/akeeba-subscriptions/subscription-levels.html).

### Step 2. ZOOaksubs Layout assignment

Please locate and open the ZOOaksubs Layout, we are going to assign the previously created Elements to it's Positions. The Plugins Layouts, as ZOOaksubs one, are independently shown in the last column. For more information please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

IMAGE HERE

Each position represents a Level data and it's rendered value will be passed to Akeeba Subscription. It's important to carefully populate the positions taking in consideration what kind of value or format expects each one of them.

**Note**: you can use the *Static Content* element to set static values that will be common to all Levels.

### Step 3. Creating the Level trough ZOO

It's all set, go and create a new Item. Populate the fields and be sure the *Aksubs Level Sync* value is set to *Yes*. If all went well you will see an successfully notification and a link to the synced Level. If otherwise the notification was negative, review the configuration and try again.

These are the common errors you could come along:

* Akeeba Subscription Level sync failed: layout not set or price is 0.
* Akeeba Subscription Level has NOT been synced: A subscription level must have a Length of at least 1 day.
* Akeeba Subscription Level has NOT been synced: A subscription level must have an Image.

All of them are complaining about missing or bad formatted sync data. Be sure the appropriate field exist (step 1), is assigned in the ZOOaksubs Layout (step 2) and is populated in the Item.

### Step 4. Display Level and checkout button

Usually you would display the Level (the synced Item) assigning the Elements to the Teaser and *Full* layouts positions but you will miss a Checkout button. There's where the *Aksubs Level Sync* is used again. Assign it to any position and choose it's *Default* layout. It will render a checkout button that will redirect to Akeeba Subscription checkout process for the specific synced Level.

For more information, check [Element Aksubs Level Sync section](#element-aksubs-level-sync).

Element Aksubs Level Sync
=========================

The *Aksubs Level Sync* is used for the ZOOaksubs Level sync feature. For more information checkout the related [section](#level-syncing).

Type configuration
------------------

### Basic Parameters

*Basic Parameters* define common element settings.

IMAGE HERE

* **Name** - Allows to set element's name, that will be used in layouts and item properties.
* **Description** - Allows to describe element shortly.
* **Access Level** - Allows to setup element accessibility. In order to make it totally accessible, set this parameter to *"Public"*.

### Specific Parameters

* **Default** - Allows to choose the default Element sync state.

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

Layouts
-------

There are two rendering layouts:

* **Default** - will render a checkout button for the current synced Level.
* **Level** - will render Level related information such as Duration or Price.

If your project need specific rendering feature you can override or create your own layout.

Upgrading to v3
===============

Due to the big changes made in ZOOcompare 3 the upgrade process is not possible, instead a clean installation must be performed uninstalling any previous version. The comparison settings will be lost during this process, be sure to back up your data before proceeding.
