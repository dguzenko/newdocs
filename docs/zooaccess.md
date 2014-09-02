ZOOaccess
=========

This documentation offers help and guidance for ZOOlanders **ZOOaccess** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zooaccess).

**ZOOaccess** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Requirements
------------
* **[Joomla](http://www.joomla.org) 2.5.6** or higher
* **[ZOO](http://www.yootheme.com/zoo) 3.1** or higher
* **[ZOOlanders component](https://www.zoolanders.com/extensions/zoolanders) 3.1** or higher

Installation
============

Trough ZOOlanders Manager
-----------------

1. Go to *Joomla Administration / Components / ZOOlanders*.
2. Set your zoolanders.com site login credentials trough the Options button.
3. Find the **ZOOaccess** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZL Elements plugin** should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Trough Joomla Manager
----------------------

1. Download **ZOOaccess** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zooaccess).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
3. Use the "Upload Package File" option to choose the previously downloaded package from your pc.
4. Click on the "Upload & Install" button.

Once the installation process have finished the **ZL Elements** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note:** When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

#### Quick Note

**ZOOaccess** element is installed under the same plugin, *ZL Elements*, as any other ZL Element for performance reasons. If you want to check it's installation, visit the ZOO configuration and edit any Type from any App. If **ZOOaccess** shows up on the right section under *ZOOlanders* Group, then you're good to go!


Configuration
=============

Our recommendation is to set your base or most common restrictions at the Type level, in the Element Config, and override them in the Layout Positions assignments as needed.

Steps
-----

### Step 1. Set up the base access

Locate and edit the desired Type elements. Choose the Elements you would like to restrict the access and edit it's ZOOaccess section by clicking on the Evaluate checkbox. From the available rules choose and set the ones you would like to apply. For more details please review the [Elements Access](#elements-access) and [Rules](#rules) sections.

### Step 2. Tune up the access

Now that the base access is set we can override it completly or partially on each position. To do so go to the Positions Assignment view for the Layout you would like to work with and seek for the Element ZOOaccess section. Click on the *Override* box and set the specific param for this particular position.

You can also set the access to the Elements without base acces the same way you did in Step 1.


Translation
-----------

The default **en-GB.plg_system_zooaccess.ini** language file is located in the **administrator/language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zooaccess.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.

Elements Access
===============

In your ZOO elements configuration and assignement there is a section called ZOOaccess, it allows you to set who can access that specific element. The *Evalute* checkbox must be marked in order to start evaluating them.

IMAGE HERE

* **Evaluate** - allows to choose if the access will be evaluated for this element. Must be selected in order to view the rest of the options.
* **Apply on Edit View** - allows to choose if the selected rules should be applied also in the Edit view.
* **Matching method** - allows to choose if a match should be accepted when ALL or ANY (one or more) of the assignments are matched.
* **Action** - allows to choose the action that should be applied to the element if there is a match. The *Render* action will render the element if the evalution was positive, the *Not render* action will render the element if the evalution was negative.

If you are in the Positions Assignments and have set an evaluation in the Element config, the ZOOaccess section will display *Override* instead of *Evaluate*.

IMAGE HERE

By checking the *Yes* box you can override any or all existing restrictions that have been stated.

Rules
=====

ZOOaccess has a list of rules for the access evaluation. By default the rules are ignored and the access will be no evaluated. In order to start the rule evaluation, it's state must be changed. Each rule has 3 states:

* **Selection** - The rule will be considered a match only when the following selections ARE met.
* **Exclude Selection** - The rule will be considered a match only when the following selections ARE NOT met.
* **Ignore** - The rule will not be evaluated.

User Access rule
----------------

This rule evaluates if the User has the appropiate Joomla Viewing Access Level.

IMAGE HERE

* **Levels** - allows to choose the User Access level which will be evaluated. Multiple selection is possible.
* **Mode** - allows to choose if the User should have access to all (AND) levels or any (OR) of them.
* **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

User Group rule
---------------

This rule evaluates if the User is part of the selected Joomla User Groups.

IMAGE HERE

* **Levels** - allows to choose the User Group which will be evaluated. Multiple selection is possible.
* **Mode** - allows to choose if the User should be parto of all (AND) groups or any (OR) of them.
* **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

Date rule
---------

This rule evaluates if current date/time matches the specified range. Take in consideration that is used the date/time of your server, not of the visitors system.

IMAGE HERE

* **Start** - allows to choose the start date/time.
* **End** - allows to choose the start date/time.

Searchbot rule
--------------

This rule evaluates the searchbot being used, if it's the case.

IMAGE HERE

* **Bots** - allows to set the Bots list using | as a separator.

Element value rule
------------------

This rule evaluates the specified Element value. It will check the Element value being stored in the DB, not the one being displayed.

IMAGE HERE

* **Element** - allows to choose the element which value will be evaluated.
* **Value** - allows to set the element value to be evaluated.

Content Plugin rule
-------------------

This rule uses the Joomla Content plugins to make an evaluation. It should be used when there is no specific rule but there is an apropiate Content Plugin.

IMAGE HERE

* **Expression** - allows to write one or several Content Plugin Expressions with a dummy content. If the Expression returns the dummy content the rule will be considered positive. If more than one Expression ANY logic will be used by default. Eg. {lang es}DUMMY{/lang}

Item Author rule
----------------

This rule evaluates if the User is the Item Author or if it has modified it.

IMAGE HERE

* **User** - allows to choose the type of evaluation that will be performed.

ZOOcart Items rule
------------------

This rule evaluates if the User has purchased the specified ZOOcart Items.

IMAGE HERE

* **Include current** - allows to include the current Item to the selection. The Item where the Element is being rendered will be used as part of the selection.
* **Items** - allows to create the list of Items for the evaluation.
* **Mode** - allows to choose if the User should have purchased all (AND) Items or any (OR) of them.
* **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).
