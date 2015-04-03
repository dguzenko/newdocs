ZOOcart
=======

This documentation offers help and guidance for ZOOlanders **ZOOcart** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zoocart).

**ZOOcart** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Requirements
============

* **[Joomla](http://www.joomla.org) 2.5.6** or higher
* **[ZOO](http://www.yootheme.com/zoo) 3.2.3** or higher
* **[ZOOlanders component](https://www.zoolanders.com/extensions/zoolanders) 3.2** or higher

Installation
============

Through ZL Manager
------------------

1. Go to *Joomla Administration / Components / ZOOlanders*.
2. Set your zoolanders.com site login credentials trough the Options button.
3. Find the **ZOOcart** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOcart** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Through Joomla Manager
----------------------

1. Download **ZOOcart** package from [ZOOlanders site](https://www.zoolanders.com/extensions/zoocart).
2. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
* Use the "Upload Package File" option to choose the previously downloaded package from your pc.
* Click on the "Upload & Install" button.

*ZOOcart requires ZOOlanders component to be installed (It is provided within ZOOcart package).*

Once the installation process have finished the **ZOOcart** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note:** When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Configuration
=============

First Steps
-----------

### Step 1.  Setup the Type

1. Go to the *Joomla Administration / Components / ZOO / gearwheel tab* (on the right side of the tab bar). Click on the app for which you want to setup a specific type *(e.g. app "Product Catalog" and type "Product")*.
2. Click *Edit Elements* near the type name. Add required elements *“PricePro”, “Quantity”* and *“ZOOcart”* from the ZOOcart block of the Element Library. Other elements are optional. 
3. Configure each of the chosen elements. If you are not familiar with this process please review the [Elements section](#elements).
For more information review the [official ZOO docs](http://yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

**Result:** Product type and its elements configurations are ready.  

### Step 2. Setup ZOOcart

**Tip:**
Follow the *Configuration Wizard* messages - it will help you to complete the configuration step-by-step. 

1. Go to the *Joomla Administration / Components / ZOOlanders /  ZOOcart tab / Settings* to configure **ZOOcart**.
2. Create a new [tax class](#settings-taxes-tax-classes-page) and set its name. 
3. Create and configure [currencies](#settings-currencies).
4. Configure the [address constituents and layouts](#settings-addresses-address-types-page). Select and configure the elements from the Element Library.
5. Create and configure [shipping rates](#settings-shipping-rates-page).

**Note:** 
For some types of products (intangible assets) shipping is not required. You can set *“Enable Shipping Rates”* and *“Require Address”* options to *"No"* and ZOOcart will not require to specify a shipping rate and an address during checkout process.

For more details about ZOOcart settings please review [this section](#settings).

**Result:** Basic extension settings are ready.

### Step 3. Setup the Items

1. Go to the *Joomla Administration / Components / ZOO/ App tab*. Choose the same app as in the Step 1 *(e.g. app "Product Catalog")*.
2. Click the button *“New”* to create a new item and select the item type the same as in the Step 1. *(e.g. type "Product")*.
3. Setup the *Details* of the item.

Add and configure all necessary items. 

**Result:** Your products were added to the ZOO cart.   

### Step 4. Setup the Layout

1. Go to the *Joomla Administration / Components / ZOO / gearwheel tab* and click on the chosen app *(e.g. app "Product Catalog")*.
2. Setup *template* layouts *(e.g. Default: Full and Teaser)*. Click on the layout in the specific type line and assign the elements to positions. 
   * **Full** layout is used in the item view. Assign the elements to the full layout, to show them on the detail page of an item.
   * **Teaser** layout is used in the category view. Assign the elements to the teaser layout, to show them on the frontpage.
3. Setup *extension* layouts *ZOOcart: Cart and Order*. Click on the layout in the specific type line and assign the elements to positions.
   * **Cart** layout is used for checkout page view. Assign the elements to the cart layout, to show them on the checkout page.
   * **Order** layout is used for order page view. Assign the elements to the order layout, to show them on the order page. 

**Tip:** To assign the elements to the layout positions, click on the element name and Drag & Drop it to its new position.

*E.g.:* 

* Assign *ZOOcart element* to the position where you want to show the *Add To Cart* button.
* Assign *Price Pro element* to the position where you want to show the *Price*. 
* Assign *Quantity element* to the position where you want to show the *Quantity* of products (if you need it).

For more information about layouts setup, please review the [ZOO official docs](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

### Done! 

Your ZOOcart basic setup is ready! 

Variations
----------

### Step 1. Setup the Element

1. Go to the *Joomla Administration / Components / ZOO / gearwheel tab* and click on the chosen app *(e.g. app "Product Catalog")*.
2. Click *Edit Elements* near the type name. Add *"Variations"* element from the ZOOcart block of the Element Library.
    **Note:** You can add only one element *"Variations"*, otherwise the system conflict can appear. But you can add as many attributes and options as you need in the specific settings of the element. 
3. Set **Name** and **Description** (if you need it) for the element and *save* these settings.
4. Open the element again (Press Edit element). **Specific** settings will be available. 
  * **Elements** setting allows you to specify element(s) for different variations of products *(e.g. for different  variations of the product we can have different description)*. Please note, that this function doesn't support the elements with JS handler, such as Image and Media. 
  * **Attributes** settings allows to specify parameters of product that could vary *(e.g. wear differs usually by colors and sizes)*. Set **Name**, **Value** and **Options** for the attribute. Please, note that all values for attributes and options should be set to avoid problems with synchronization.

*E.g.:* Type "T-shirt" has the first attribute "Color" with options "blue", "red" and "green" and the second attribute "Size" with options "S", "M" and "L".  

### Step 2. Fill in the Variations

Now that the Variations Element is set, we can edit our Products and the necessary variations.

1. Go to the *Joomla Administration / Components / ZOO* and create or edit some Product.
2. Search for the Variations Elements we have set in the Step 1.
3. Choose the Attributes of the first Variation.
4. Set the price, in the Price Tab, for the Variation.
5. Set the quantity, in the Quantity Tab, for the Variation.
6. Optionally, override the Elements value for this Variation in the Elements Tab. 

Each Element instance represents a Product variation, repeat the steps 3 to 6 to set them all or just the ones you need.

### Step 3. Setup the Layouts 

1. Go to the *Joomla Administration / Components / ZOO/ gearwheel tab* and click on the chosen app *(e.g. app "Product Catalog")*.
2. Setup *template* layouts *(e.g. Default: Full and Teaser)*. Click on the layout in the specific type line and assign the elements to positions. 
   * **Full** layout is used in the item view. Assign the elements to the full layout, to show them on the detail page of an item.
   * **Teaser** layout is used in the category view. Assign the elements to the teaser layout, to show them on the frontpage.
3. Setup *extension* layouts *ZOOcart: Cart and Order*. Click on the layout in the specific type line and assign the elements to positions.
   * **Cart** layout is used for checkout page view. Assign the elements to the cart layout, to show them on the checkout page.
   * **Order** layout is used for order page view. Assign the elements to the order layout, to show them on the order page. 

**Tip:** To assign the elements to the layout positions, click on the element name and Drag & Drop it to its new position.

*E.g.:* Click on the layout(s) where you want to display the *Variations* of your product and assign *Variations element* to the required position. 

**Note:** Variations element should be correctly synchronized with Price Pro, Quantity and ZOOcart elements, so when you choose a variation from the drop-down menu, price, quantity and cart information will be changed according to the choosen variation. To achive this each of the elements (Price Pro, ZOOcart, Quantity, Variations, etc) should be wrapped with container with .element class *(E.g. < div class="element... " >...< /div >)*.  Please ensure that Variations and other elements are assigned to positions, that are rendered with appropriate params *(E.g.: $this->renderPosition('content' , array( 'style'=>'block' ))*.  

For more information about layouts setup, please review the [ZOO official docs](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

### Done! 

**Variations** are ready, a dropdown with the possible Products Attributes should be visible in your Product view.

Digital Products
----------------

If you deal with the intangible products, you can set up the digital type of items in combination with **ZOOaccess**. 

The example of a digital product could be e-books. The following guide will be provided with the example how to set up an e-book online shop that will help you to make setting to your digital products. 

**Tip:** Before start make sure your ZOOaccess plugin is installed and enabled.

### Step 1. Setup the Type

1. Go to the *Joomla Administration / Components / ZOO/ gearwheel* (on the right side of the tab bar). Click on the app for which you want to setup a specific type.
2. Create a new type for your digital products. Click *Edit Elements* near the type name *(e.g. E-books)*. Make sure all the required elements (PricePro, Quantity and ZOOcart) are present and configured. For more information please review the [Elements section](#elements) and the [official ZOO docs](http://yootheme.com/zoo/documentation/advanced/extend-pre-build-types). 
3. Click the *Edit* button (pencil) on the *ZOOcart* element and choose the Item Type *“Digital”* in the Specific settings panel.
4. Add the element you want to integrate the ZOOaccess with. *(E.g. When a user buys an e-book and his order gets Payment received status, then the download option appears, so the user can download the file and enjoy his book.  In our example we will use Download element.)*
5. Click the *Edit* button (pencil) on this element *(E.g. Download element)* and configure the basic params.
6. Click *Edit access evaluation params* in the *ZOOaccess* panel to set up integration of the element with the ZOOaccess plugin. Pick *Yes* in the *Evaluate* checkbox to open the access rules settings. For more information please review the [ZOOaccess doc, Element Access section](http://joolanders.github.io/newdocs/?zooaccess#elements-access).
7. Set up the [*ZOOcart Items* rule](http://joolanders.github.io/newdocs/?zooaccess#rules-zoocart-items-rule).

**Note:** Configuring ZOOaccess rules you can follow one of scenarios: positive or negative evaluation. The *Render* action would render the element if the evaluation was positive, the *Not render* action would render the element if the evaluation was negative. The element will be rendered when the order has the status *Payment received* or *Completed*.

### Step 2. Disable shipping option (if required).

For digital products you probably will not need to deliver anything to customers, so the shipping is not required. 

You can disable shipping option and ZOOcart will not require to specify a shipping rate and an address during checkout process.

1. Go to the *Joomla Administration / Components / ZOOlanders / ZOOcart tab / Settings*.
2. In the *Shipping* settings set “Enable Shipping Rates”  option to "No".
3. In the *Addresses* settings set “Require Address”  option to "No".

### Step 3. Setup the Items

1. Go to the *Joomla Administration / Components / ZOO/ App tab*. 
2. Click the button “New” to create a new item and select the item type that you have configured in the Step 1. *(E.g. E-books Type)*
3. Setup the *Details* of the item. Specify the essence (element that you have integrated with ZOOaccess) that will be accessible after evaluation. *(E.g. As we work with Download element, we will go to the Download panel and upload the file with our e-book)* 
 
Add and configure all necessary items.

### Step 4. Setup the Layout

1. Go to the *Joomla Administration / Components / ZOO / gearwheel tab* and click on the chosen app.
2. Setup *template* layouts *(e.g. Default: Full and Teaser)*. Click on the layout in the specific type line and assign the elements to positions. 
   * **Full** layout is used in the item view. Assign the elements to the full layout, to show them on the detail page of an item.
   * **Teaser** layout is used in the category view. Assign the elements to the teaser layout, to show them on the frontpage.
3. Setup *extension* layouts *ZOOcart: Cart and Order*. Click on the layout in the specific type line and assign the elements to positions.
   * **Cart** layout is used for checkout page view. Assign the elements to the cart layout, to show them on the checkout page.
   * **Order** layout is used for order page view. Assign the elements to the order layout, to show them on the order page. 

**Tip:** To assign the elements to the layout positions, click on the element name and Drag & Drop it to its new position.

*E.g.:* Click on the layout(s) where you want to display the element integrated with ZOOaccess plugin (E.g. Download element) and assign the element to the required position. 

For more information about layouts setup, please review the [ZOO official docs](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

### Done! 

Your ZOOcart digital products setup is ready! 

Subscriptions
-------------

In ZOOcart you can set up subscriptions with duration parameter in combination with **ZOOaccess**. 

The following guide will be provided with the example how to set up a subscription for one month that allow users to watch media files. It will help you to set up your subscription. 

**Tip:** Before start make sure your ZOOaccess plugin is installed and enabled.

### Step 1. Setup the Type

1. Go to the *Joomla Administration / Components / ZOO / gearwheel tab* (on the right side of the tab bar). Click on the app for which you want to setup a specific type.
2. Create a new type for your subscriptions. Click *Edit Elements* near the type name *(e.g. Subscriptions)*. Make sure all the required elements (PricePro, Quantity and ZOOcart) are present and configured. **Note:** Often you don't need quantity parameter for subscriptions, nevertheless, please add all required elements, as ZOOcart relies on them. For more information please review the [Elements section](#elements) and the [official ZOO docs](http://yootheme.com/zoo/documentation/advanced/extend-pre-build-types).
3. Click the *Edit* button (pencil) on the *ZOOcart* element and choose the Item Type *“Subscription”* in the Specific settings panel.
4. Add the element you want to integrate the ZOOaccess with. *(E.g. When a user subscribes and his request gets Payment received status, then the media file appears on the page, so the user can watch the video.  In our example we will use Media element.)*
5. Click the *Edit* button (pencil) on this element *(E.g. Media element)* and configure the basic params.
6. Click *Edit access evaluation params* in the *ZOOaccess* panel to set up integration of the element with the ZOOaccess plugin. Pick *Yes* in the *Evaluate* checkbox to open the access rules settings. For more information please review the [ZOOaccess doc, Element Access section](http://joolanders.github.io/newdocs/?zooaccess#elements-access).
7. Set up the [*ZOOcart Subscription* rule](http://joolanders.github.io/newdocs/?zooaccess#rules-zoocart-items-rule). **Note:** Configuring ZOOaccess rules you can follow one of scenarios: positive or negative evaluation. The *Render* action would render the element if the evaluation was positive, the *Not render* action would render the element if the evaluation was negative. The element will be rendered when the order has the status *Payment received* or *Completed*.
8. Add the element that will specify the duration of your subscription. *(E.g. When a user subscribes and his request gets Payment received status, then the media file appears on the page for the period of 30 days, so the user can watch the video during this period.  In our example we will use Text element to specify the duration. It is also possible to use Select or Radio elements. If you subscription has various durations, you can use Variations element.)* 

Read more about setting *various durations for subscriptions* in the ["How to..." section](#how-to-how-to-setup-various-duartions-for-subscriptions). 

### Step 2.  Set up ZOOmapping

Go to the *Joomla Administration / Components / ZOO / gearwheel tab* and click on the chosen app. Click on the *ZOOcart mapping: Subscription* in the Extension Layouts section in the specific type line and assign the corresponding element *(E.g. Text element)* to position *Duration*. 

### Step 3. Disable shipping option (if required)

For subscriptions you probably will not need to deliver anything to customers, so the shipping is not required. 

You can disable shipping option and ZOOcart will not require to specify a shipping rate and an address during checkout process.

1. Go to the *Joomla Administration / Components / ZOOlanders / ZOOcart tab / Settings*.
2. In the *Shipping* settings set “Enable Shipping Rates”  option to "No".
3. In the *Addresses* settings set “Require Address”  option to "No".

### Step 4. Setup the Items

1. Go to the *Joomla Administration / Components / ZOO / App tab*. 
2. Click the button “New” to create a new item and select the item type that you have configured in the Step 1. *(E.g. Subscription type)*
3. Setup the *Details* of the item, including following settings:
    * Specify the essence (element that you have integrated with ZOOaccess) that will be accessible after evaluation. *(E.g. As we work with Media element, we will go to the Media panel and upload the file with our video)*
    * Specify the duration of the subscription **in days (integral number)**. *(E.g. We use Text element to specify the duration, so we will go to the corresponding panel and set how many days our video will be accessible on the page. We will set 30)*
 
Add and configure all necessary items.

### Step 5. Setup the Layout

1. Go to the *Joomla Administration / Components / ZOO / gearwheel tab* and click on the chosen app.
2. Setup *template* layouts *(e.g. Default: Full and Teaser)*. Click on the layout in the specific type line and assign the elements to positions. 
   * **Full** layout is used in the item view. Assign the elements to the full layout, to show them on the detail page of an item.
   * **Teaser** layout is used in the category view. Assign the elements to the teaser layout, to show them on the frontpage.
3. Setup *extension* layouts *ZOOcart: Cart and Order*. Click on the layout in the specific type line and assign the elements to positions.
   * **Cart** layout is used for checkout page view. Assign the elements to the cart layout, to show them on the checkout page.
   * **Order** layout is used for order page view. Assign the elements to the order layout, to show them on the order page. 

**Tip 1:** To assign the elements to the layout positions, click on the element name and Drag & Drop it to its new position.

*E.g.:* Click on the layout(s) where you want to display the element integrated with ZOOaccess plugin (Media element) and assign the element to the position where you want to display the video. Assign *ZOOcart element* to the position where you want to show the *Subscribe* button.

**Tip 2:** Alternative labels can help to make the layouts clearer for the customers.

*E.g.:* Click *Edit*(pencil) on the element corresponding to duration, pick “Yes” for *Show Label* and specify the *Alternative Label:* “30 days subscription”.

**Tip 3:** Set up the ZOOcart layout so it corresponds to Subscription Type.

*E.g.:*

* Change the default “Add to Cart” label to “Subscribe”.
* You probably will not need re add option for subscriptions, so set “Yes” for “Avoid Re Add”.
* You can hide “Subscribe” button once the user have the subscription. Use ZOOaccess *Exclude Selection* for *ZOOcart Subscription* evaluation rule.

For more information about layouts setup, please review the [ZOO official docs](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

### Done! 

Your ZOOcart subscribtion setup is ready! 

Check out the Subscription FAQ [here](#faq-subscription). 

Translation
-----------

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can get the latest versions and participate as translator.

You can install the translations:

### Manually

Download the files from Transifex and place them into **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoocart.ini**

**Note:** The default **en-GB.plg_system_zoocart.ini** language file is located in the **administrator/language/en-GB** folder.

### Through the ZL Component

Go to the *Joomla Administration / Components / ZOOlanders* and click on the *"Language packs"* button to manage the available translations for all Extensions. Or use the *Language Flag* button on each Extension row to manage them individually.

**Payment plugins**

The ZOOcart payment plugins language files are located in the **administrator/language/en-GB** folder with the and the translation should be placed into the language related folder replacing the **en-GB** part.

E.g.: **administrator/language/YOUR-LANG/YOUR-LANG.plg_zoocart_payment_PLUGINNAME.ini**

**Shipping plugins**

The ZOOcart shipping plugins language files are located in the **administrator/language/en-GB** folder with the and the translation should be placed into the language related folder replacing the **en-GB** part.

E.g.: **administrator/language/YOUR-LANG/YOUR-LANG.plg_zoocart_shipping_PLUGINNAME.ini**

Settings
========

Go to the *Joomla Administration / Components / ZOOlanders /  ZOOcart tab / Settings* to configure ZOOcart for this application.

General
-------

* **Default Country** - Allows to set default country (Uses in shipping and billing plugins).
* **Show terms and conditions** - If set to “Yes”, the Terms Agreement checkbox will be displayed on the checkout page.
* **Terms and condition URL** - Allows to specify the “Terms and Conditions” page URL.

Currencies
----------

* **Default Currency** - Allows to chose default currency for product prices. You can manage currencies on the *“Currencies”* page.

### Currencies Page

To create/edit currency you need to set the following fields:

IMAGE HERE

* **Name** - Currency name.
* **Code** - International currency 3-letter code (e.g. EUR, USD, e.t.c).
* **Symbol** - Allows to specify the symbol, that will be displayed with the price.
* **Format** - Allows to specify in what format the price with the currency symbol will be displayed (X-currency symbol, 0-digit). 
* **Number of Decimals** - Integer number value that specifies the number of signs after decimal separator for price.
* **Number of Decimals to Show** - Integer number value that specifies the number of signs after decimal separator for price that will be displayed.
* **Decimal Separator** - Determines the symbol, that will be used as decimal separator for price values.
* **Thousand Separator** - Determines the symbol, that will be used as thousand separator for price values.
* **Conversion Rate (USD)** - Allows to set conversation rate of the currency, relative to USD.
* **Status** - Enable/disable this currency.

Shipping
--------

* **Enabled Shipping Rates** - If set to “Yes” shipping information will be required and processed during checkout process. Please note, that Enabled Shipping Rates requires ZOOcart shipping plugin(s) to be installed and enabled.
* **Assign shipping automatically** – When only one shipping rate is available to choose on the checkout page, it will be applied automatically, if this option is set to “Yes”.
* **Filter considering with taxes** - If set to “Yes” filter will consider shipping rates with item taxes. 
Recommended to use in combination with Show prices with tax option. 

### Rates Page

If the option *“Enable Shipping Rates”* (on the Shipping tab) is set to “Yes”, you should provide some shipping rates. You can manage them on the *“Rates”* page.

IMAGE HERE

To describe the new shipping rate or update an existing you should specify the following params for it:

IMAGE HERE

* **Name** - To setup Shipping rate name, that will be displayed.
* **Price** - To setup shipping price.
* **Type** - Choose rate type. It could be based on ordered items or entire order.
* **Price From** - Left price margin.
* **Price To** - Right price margin.
* **Quantity From** - Left quantity margin.
* **Quantity To** - Right quantity margin.
* **Weight From** - Left weight margin.
* **Weight To** - Right weight margin.
* **Countries** - Countries, that shipping rate could be applied to. 
* **States** - Use to specify states, related to chosen countries.
* **Cities** - Use to specify cities, related to chosen countries.
* **ZIP Codes** - Comma-separated Zip codes or postal codes.
* **User Groups** - Chose groups of users that could use this shipping rate.
* **Status** - Enable/disable this shipping rate.

**Note:** *Countries*, *States*, *Cities*, *ZIP Codes* and *User Groups* will limit shipping rate availability. Chosen params will restrict the access to this shipping rate. If you don't need to set any or some of restrictions you can leave this params without changes. *(E.g. I would like to set up that this shipping rate will be accessable only for registered customers from USA, but no matter what state, city and ZIP code. I will choose Country - "United States" and User Groups - "Registered", but leave all other params without changes)* 

Discounts
---------

* **Allow discounts** – If set to “Yes” discounting will be applied for orders, if discount coupon is provided. You can manage your discounting on the page *ZOOcart tab / Discounts*. 
* **Apply discount before tax** - If set to “Yes” discounting will be applied for the tax free price, otherwise it will be applied after tax calculations .

Go to the *Joomla Administration / Components / ZOO landers / ZOO cart tab / Discounts* to manage discounting.

Press *"New"* button to create a discount and set up the following parameters:

* **Name** - Set up the discount coupon identifier.
* **Coupon code** - Set up the discount coupon code. This coupon code will be requested to get the discount. 
* **Discount type** - Define the type of the discount. It could be fixed amount or percent from total sum.
* **Discount** - Specify the value of the discount in monetary terms for the fixed type and in percents for percentage type.
* **Status** - Enable/disable this discount.
* **Valid from** - Specify the start date for publication of this coupon.
* **Valid to** - Specify the finish date for publication of this coupon.
* **User Groups** - Define user groups that can use the coupon. Picked groups will have an ability to use the discount, remaining groups will not. If any group is picked, all user groups will have an ability to use the discount by default.
* **Hits per user** - Specify the limit number of coupone usages. Leave empty or set 0 for unlimited usage.


Quantities
----------

* **Check Quantities?** - If set to “Yes” product quantity value will be checked for non-zero before adding this product to cart.
* **Update Quantities?** - Use in combination with “Update Quantities Order State” param. If set to “Yes” appropriate products quantities value will be modified (decreased) when order state will be reached the state, that specified in “Update Quantities Order State” param on the Orders settings page.


Orders
------

* **Minimal Order Amount** - Allows to specify minimal cart total in monetary units, that allowed to be processed. If you don't want to limit order amount, leave this param empty or enter O.  
* **Update Quantities Order State** - Use in combination with “Update Quantities” param (on the Quantities settings page). If “Update Quantities” is set to “Yes” appropriate products quantities value will be modified (decreased) when order state will be reached the order state specified in this param. 
* **New Orders State** - Allows to specify state, that will be applied to the newly created order.
* **Payment Received State** -  Allows to specify state, that will be applied to the order when appropriate payment is received.
* **Payment Pending State** - Allows to specify state, for payment pending orders.
* **Payment Failed State** - Allows to specify state, for failed orders.
* **Canceled State** - Allows to specify state, for canceled orders.
* **Finished State** - Allows to specify state, for processed and finished orders.

### Order States Page

On the *“Order States”* page you can manage Order statuses. After install you can see some preinstalled recommended ones, like (Pending, Payment Received, e.t.c.). You also can create your own states.

IMAGE HERE

To describe order state, you should setup the following fields:

IMAGE HERE

* **Name** - New state name.
* **Description** - State description.


Addresses
---------
 
* **Require Address** - If set to “Yes” Billing and Shipping addresses information will be required during checkout.
* **Tax Address** - Type of address that will be used for tax calculations. You can choose billing or shipping value.

### Address Types Page

On the *“Address Types”* page you can configure addresses components (Such as Country, Street, e.t.c.), that will be used for billing and shipping. And configure appropriate Billing and Shipping addresses layouts.

IMAGE HERE

To setup address parameters click the Address name and set all necessary address constituents. 
Important! Set corresponding "Billing information" parameter for each element.

IMAGE HERE

To configure Address layout *(e.g. Billing Form, Billing, Shipping Form, Shipping)* click appropriate layout’s name in the Layouts column on the *“Address Types”* page. Address layout can be configured like any other ZOO layout. Setup appropriate layout positions and save changes.

Taxes
-----

* **Default Tax Class** - You can choose Tax Class, that will be used as default for products without explicit tax class assigned (You can manage Tax classes on the *“Tax Classes”* page).
* **Shipping Tax Class** – You can specify separate tax class for shipping (different from product tax class). Also you can set option -default- and Default tax class will be applied to shipping fee, or set -none- if you don't need taxes to be calculated for shipping at all.
* **Show price and fees with tax** -  If set to “Yes” the product price will be recounted displayed with tax.
* **Validate VAT using VIES?** - If set to “Yes” and VAT (Value Added Tax) is populated, VAT will be validated using [EU VIES service](http://ec.europa.eu/taxation_customs/vies/faq.html).
* **Stop if VAT is not VIES?** - If set to “Yes” and VAT validation enabled, checkout will be not proceeded if VAT (Value Added Tax) is not valid.

### Tax Classes Page

Different Tax Classes could be applied to different products or groups of products. You can manage them on the *“Tax Classes”* page.

IMAGE HERE

To create or edit the new Tax Class you just need to specify it’s Name on the appropriate form.

IMAGE HERE

### Tax Rules Page

You can manage Taxes on the *“Tax Rules”* page.

IMAGE HERE

To create new Tax Rule, you need to specify the following fields for it:

IMAGE HERE

* **Country** - Use to specify the country for which this Tax Rule should be applied.
* **State** - Use to set state, inside the chosen country (Usually it’s set like two letter code e.g. AA, BB e.t.c).
* **City** - Allows to specify the city.
* **ZIP Code** - ZIP code or Postal code of the appropriate location.
* **Tax Rate** - Tax rate (in percents), that will be applied to related products prices.
* **Tax Class** - Choose the related Tax Class. You can manage Tax Classes on the “Tax Classes” page.
* **Status** - Enable/disable this tax rule.
* **VIES** - Set to “Yes” if there are registered VAT for the specified region.

Emails
------
### Email Template Page

You can manage email notifications on the Email Template page.


* **Type** – type of the email (new order, order state changed, etc.).
* **Language** – allows to specify language for which this email template will be applied.

Choose Email Type and Language and click *"Proceed"* button to configure the email Template further.

* **User Groups** –  email will be sent to chosen target group.
* **Subject** – Email subject.
* **CC** – Carbon Copy. Send a copy of each email received to another address. 
Separate multiple addresses with commas.
* **BCC** – Blind Carbon Copy. It is used if you are sending them a Copy and you don't wish the other recipients to see that you sent it to this contact. 

**Note**: Please take into account that CC and BCC work only with SMTP(Win32) mailing mode.

* **Template** –  Write your email body template here.

You can use the following placeholders to setup emails Subject and Body templates:

* `{sitename}` - To be replaced with Your site name.
* `{siteurl}` - To be replaced with Your site URL. 
* `{user}` - To be replaced with user full name. 
* `{username}` - To be replaced with user login .
* `{order_number}` - To be replaced with order number.
* `{order_link}` - To be replaced with order link. 
* `{order_state}` - To be replaced with current order state. 
* `{order_summary}` - To be replaced with ordered items list and order summary. 

**Status** – publication status.

**Notification emails** are sent to users from Super Users group if thier *"Receive System Emails"* option is set to *"Yes"*. You can check it in the User account details in the User Manager. 

Orders
======

You can manage your orders on the *"Orders"* page. 

Go to the *Joomla Administration / Components / ZOO landers / ZOO cart tab / Orders* to see the orders list. 
There are the list of existent orders (if they are) with their characteristics: *Order Id, User, Billing, Shipping, Net Total, Total, Order State, Payment Method, Created On, Last Updated*. 

On the *"Orders"* page you can:
* Filter orders by State and Creation Date;
* Sort orders by all characteristics;
* Create new orders;
* Edit orders;
* Delete orders.

Click on *Order Id* of a certain order or check the box near and click the *Edit* button on the top to review the order page.
There you can see the detailed information about the order, ordered items with price, payment and shipping fees, taxes and total sum, payments information and order history. Also in the block *"Actions"* you can manually change the order state and send notification to the user. 

ZOOcart does not generate invoices, but you can use the print version of the order page for this purpose (if it is suitable for you). Please use the *"Print"* button on the top to review and print. 

Payment plugins
===============

There are the following **payment plugins** in the ZOOcart package:

* PayPal
* PayPal Pro 
* Stripe
* 2CheckOut
* Pagonline (Unicredit)
* Borgun (Iceland)
* Offline

Once the ZOOcart package installed you would need to enable the desired payment plugin and then set on the plugin options the keys (or another required credentials) from your payment plugin account.

During the Checkout ZOOcart will allow to choose which payment method to use.

Note that it is also possible to add the custom payment plugins.  

ZOOcart module
==============

ZOOcart has module that is available in two views: *Default* and *Minicart*. It displays the information about the amount of items in the Cart and thier total Price. Please see the module settings for Default and Minicart Layouts below.

In the **Default ZOOcart Module** you can choose the options:

* Show Items - If set to "Yes", the products added into the cart are displayed.
* Show Cart Link - If set to "Yes", the "Go to Crat" link is displayed.
* Show Addresses Link - If set to "Yes", the "My Addresses" link is displayed (when logged in).
* Show Orders Link - If set to "Yes",  the "My Orders" link is displayed (when logged in).

In the **Minicart Module** you can choose the options:

* Show Cart Link - If set to "Yes", the "Go to Crat" link is displayed.
* Show Legal Notice - If set to "Yes", the notice about taxes and fees is displayes. 

Elements
========

Price Pro Element
-----------------

For Price Pro element except Basic params *( e.g. Name, Description, Access Level, e.t.c )*, you can set the following Specific params:

IMAGE HERE

* **Default** - Set default (minimal) price value in chosen currency.
* **Default Tax Class** - You can chose default tax class from the list of Tax Classes, that were provided on "Tax Classes" page.
* **Currency** - Choose currency from the list of provided currencies (You can manage your currencies on the "Currencies" page).

### Layout

There is only one specific parameter for *Price Pro* element - *Main Layout*. It allows to choose layout for price output among available ones.

IMAGE HERE

Quantity Element
----------------

*Quantity* element is quite easy to configure. You just need to specify the **Default** quantity value.

IMAGE HERE

### Layout

There is also only one specific parameter for *Quantity* element - *Main Layout*. It allows to choose layout for quantity value output among available ones.

IMAGE HERE

ZOOcart Element
---------------

For **ZOOcart** element you can set only one specific param:

IMAGE HERE

**Enable By Default** - If this option is set, "Add to cart" button will be available by default.

### Layout

To setup **ZOOcart** element's layout except the basic options you can specify the following ones:

IMAGE HERE

* **Main Layout** - Option allows to choose layout for price output among available ones.
* **Default Label** - To set the label for "Add To Cart" button if it's needed.
* **In the cart label** - To set the label for "Already in the cart" button if it's needed. 
* **Action after Add** - This parameter allows to specify which action will be executed after user click the "Add to Cart" button. You can choose one of the following options:
  * **None** - No action will be executed after adding item to the cart.
  * **Redirect To Cart** - If chosen after "Add to Cart" button click user will be redirected to the cart page.

* **Show quantity inputs** -  Set this option to Yes to display the quantity input field near "Add To Cart" button.
* **Avoid ReAdd** - Set this option to Yes to disallow repeatedly adding items to the cart by clicking the button time after time.


Variations Element 
------------------

**ZOOcart Variations Element** is used for products that have variation parametes, such as color, size, etc. 

Variations have such **specific** parameters: 

* **Elements** - You can connect variable elements with the product type. Please note, that necessary elements should be added. *(e.g. For different  colors of product we can have different images. Choose Product > Image option to have an ability to add images for different variations of the product while setting variations)*.
* **Attributes** - this settings allow to specify different parameters of product and their options *(e.g. Attribute: Size; Options: S, M, L)*.

### Edit Layout

* **Attributes** - select variation parameters from the dropdown menu.
* **Price** - set price for each variation of product.
* **Quantity** - specify amount of products with given attributes.
* **Elements** - specify the element(s) selected in the Step 1 of [configuration guide](#configuration-variations) for this variation of product.

### Render Layout

There is also only one specific parameter for *Variations* element - *Main Layout*. It allows to choose layout for quantity value output among available ones.

Measures Pro  Element 
---------------------

**ZOOcart Measures Pro Element** is used to setup the product weight or dimensions. 

Measures Pro element has such **Specific** parameters: 

* **Default** - if required, specify the default Text when the item is created.
* **Unit** - specify the measuring units. 

### Layout

Except Basic params, you can set the following params:

*Layout Parameters* shows the available layouts for the element.

* **Main Layout** - allows to choose layout for element among available ones.
* **Sub Layout** - allows to choose Sub Layout that will be used by the Main Layout.

*Filter Parameters* allow to limit element instances and to set offset for output.

* **Offset** - Allows move the start point of rendering (e.g. 2, will make rendering start from instance 3).
* **Limit** - Allows to limit the number of instance to output.

*Separator Parameters* allows to configure separation constructions, that will be used to separate the element instances on rendering.

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

  * Delete closed Tags without their opening Tag
  * Fix open Tag without close, closing them automatically
  * Check bad nesting and fix them
  * Fix bad quotes in attributes
  * Merge different styles attributes in the same Tag
  * Remove HTML comments
  * Remove empty Tags and more bad Tags

...to the final value.


How to...
=========

How to Override Layouts 
-----------------------

In order to customize the view of your ZOOcart you can override the layouts templates. Don't change the standard ZOOcart .php files, so you can turn back to standard ones, if you want.

To override a ZOOcart standard layout template you should place a customized .php template file with an appropriate name to the following folders in your template:

* **Site (frontend) views:** place your customized .php template file in the folder with the following path: *templates / < your template > / html / plg_system_zoocart / < view name > / < layout.php >*.
* **Administrator (backend) views:** place your customized .php template file in the folder with the following path: *administrator / templates / < your template > / html / plg_system_zoocart / < view name > / < layout.php >*.
* **Partials (cross-system sublayouts):** 
  * **Site partials:** place your customized .php template file in the folder with the following path: *templates / < your template > / html / plg_system_zoocart / partials / < layout.php >*.
  * **Administrator partials:** place your customized .php template file in the folder with the following path: *administrator / templates / < your template > / html / plg_system_zoocart / partials / < layout.php >*.

**E.g.:** We would like to change the view of the Print Order layout in the Administration. To do this we need to override the layout template *print.php*. The overriden layout will have the path: *administrator / templates/ < your template > / html / plg_system_zoocart / orders / print.php*.

**Important:** Name of your custom .php file should be the same as standard one. You can see names of standard layouts templates here: *plugins / system / zoocart / zoocart / views*. 

In order to override the **ZOOcart elements layouts** please follow the next guide:

**Step 1. Locate the layouts path**

The ZOOcart elements layouts are located in **plugins / system /zoocart/zoocart/elements/**. If the layout supports sublayouts is those that you should work on, instead go to the **... / render / < main layout > / _sublayouts** folder.

**Step 2. Create your layout**

Copy one of the existing layouts in the path from the Step 1 and change it name to a custom one. Be sure to keep the underscore `_` at the beginning of the file if it's a sublayout.

**Step 3. Place your layout**

Your layout is ready but should be stored in a safe place, as we mentioned in the beginning. You can place your custom layout in:

* **media / zoo / custom_elements / < element name > / tmpl / render**

  This path will make the layout available for all the Apps.

* **media / zoo / applications / < app name > / elements / < element name > / tmpl / render**

  This path will make the layout available only for the App being placed in.

When dealing with sublayout, remember it should be placed into **... / render / < main layout > / _sublayouts** instead.

**Note**: if the **custom_elements** folder does not exist, just create it.

**Done!**

Now that your layout is placed it can be selected when setting the Element view on the Positions assignment. Do so and start editing it until it suits your project needs.

How to Restrict Product Access
------------------------------

Configure ZOOcart in combination with ZOOaccess, if you need to show or hide some elements based on certain rules.
ZOOaccess will evaluate the order based on given rules and the element will be rendered/not rendered when the order has the status *Payment received* or *Completed*. 

### Guide

**Tip:** Make sure your ZOOaccess plugin is installed and enabled.

1. Go to the *Joomla Administration / Components / ZOO / gearwheel tab / App*. Add the element you want to integrate ZOOaccess with. 
5. Click the *Edit* button (pencil) on this element and configure the basic params.
6. Click *Edit access evaluation params* in the *ZOOaccess* panel to set up integration of the element with the ZOOaccess plugin. Pick *Yes* in the *Evaluate* checkbox to open the access rules settings:
  * **Evaluate** - allows to choose if the access will be evaluated for this element. Must be selected in order to view the rest of the options.
  * **Apply on Edit View** - allows to choose if the selected rules should be applied also in the Edit view.
  * **Matching method** - allows to choose if a match should be accepted when ALL or ANY (one or more) of the assignments are matched.
  * **Action** - allows to choose the action that should be applied to the element if there is a match. The *Render* action would render the element if the evaluation was positive, the *Not render* action would render the element if the evaluation was negative.
7. Set up the rules. By default the rules are ignored and the access will be no evaluated. In order to start the rule evaluation, it’s state must be changed. Each rule has 3 states:
  * **Selection** - The rule will be considered a match only when the following selections ARE met.
  * **Exclude Selection** - The rule will be considered a match only when the following selections ARE NOT met.
  * **Ignore** - The rule will not be evaluated.
Find detailed information about all rules [here](http://joolanders.github.io/newdocs/?zooaccess#rules-zoocart-items-rule).

If you are in the Positions Assignments you can set up evaluation in the element config ZOOaccess section to override the layout. 

### Examples of Use Cases

* Show/hide specific information after product purchase.
* Show/hide content if subscription enabled.
* Show coupon code if a user boughts specific items. 
* Hide "Subscribe" button if a user already has a subscription.
* Give access to digital product when payment received.

How to Setup Various Durations for Subscriptions
------------------------------------------------

In order to setup multiple terms of duration for your Subscriptions you should add **Variation element** as additional duration element to your type. Please follow the next guide:

1. Setup required elements:
  * **Duration** - simple *Text* element without specific settings;
  * **Duration Variation element** - *Variation* element with the following specific settings: select Duration [Text] element as a tied element to variations in the *Elements* param and specify all allowed terms of Subscription in the *Attributes*.
  * Set type to *"Subscription"* in the ZOOcart(AddToCart) element settings.
2. Setup Subscription mapping: Go to ZOOcart mapping / Subscription layout and assign Duration[Text] element to appropriate Duration position.
3. Create an item based on your subscription type and setup all needed term variations with appropriate numeric values (in days) in the Duration Variation section, Elements tab.

Now if user orders this item and completes checkout appropriate inactive subscription will be created in the Backend (ZOOcart / Subscriptions). 

**Important note:** Subscription created right after checkout is inactive and contains no terms Valid From/To. This Subscription will be automatically activated when appropriate order status becames *Payment Received* or *Completed* and Valid From/To dates will be set according to chosen subscription Duration.

How to Setup Product Weights 
----------------------------

If your Shipping rates contain limitations by weight, you should setup weights for your products using **Measures Pro** element, that is included into ZOOcart package. 

1. Add the **Measures Pro** element to the product type and set required weight-assumed measuring units for it (e.g.: lb, g, kg) in the *Unit* field in the Specific settings of the element.
2. Specify weight values of product in the Item settings.
3. If needed, assign the **Measures Pro** element to required position in the Layout to show the product weight on your page. 

Now ZOOcart will automaticaly evaluate appropriate element's value as weight and calculate total order weight relying on that element's values. If your Shipping rates contain limitations by weight, they will be filtered automatically depending on total cart weight or item weight (defined by Item-based Shipping rate or Order-based option).

How to Add ZOOcart Menu Item 
----------------------------

It is possible to add the menu items that will allow buyers to view and manage thier Cart, Orders, Addresses and Subscriptions. To do this please follow this guide:

1. Go to the Joomla Administaration / Menus / < your menu > / Add New Menu Item  and click the "New" button.
2. Specify the Menu Titel.
3. On Details tab select the Menu Item Type "zooladers" / "Extension View". New tab will apper.
4. Go to the new tab "COM _ MENUS _ PARAMS _ FIELDSET _ LABEL" and choose the view:

    * ZOOcart Cart - opens the Checkout page.
    * ZOOcart Orders - opens Orders list with Order detail information. 
    * ZOOcart Addresses - opens the Addresses page where buyers can manage thire Billing and Shipping addresses.
    * ZOOcart Subscriptions - opens Subscriptions list with Subscription detail information. 

FAQ
===

Subscriptions
-------------

* Can user renew subscriptions before it is expired? - Technically it is possible, but really - ZOOcart subs interface doesn't allow user to renew subscription before expiration date, as "Renew" button appears only after subs is expired.

* Can user be triggered to renew thier subscription by e-mail? - No, but technically - if to place a direct renewal link to email - it is possible.

* Can user cancel subscriptions? - No. Only admin can do that. User just can ask admin to interrupt the subscription.

Uninstallation
==============

Through ZL Manager
------------------

1. Go to *Joomla Administration / Components / ZOOlanders*.
2. Find the extension in the list and click on the *Uninstall* button.
3. Confirm the uninstallation procedure, status notification will arise.

Through Joomla Manager
----------------------

1. Go to the *Joomla Administration / Extensions / Extension Manager / Manage*.
2. Search the extension in list and tick the checkbox near its name.
3. Click on the "Uninstall" button on the top.
