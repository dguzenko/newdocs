ZOOcart
=======

This documentation offers help and guidance for ZOOlanders **ZOOcart** Extension. More information about it can be find on the [official page](https://www.zoolanders.com/extensions/zoocart).

**ZOOcart** 3.x versions are compatible with Joomla! 2.5.x/3.x, ZOO 3.x and ZLFW 3.x. All previous versions, if available, are ONLY for Joomla 1.5 and are considered deprecated.

Requirements
============

* **[Joomla](http://www.joomla.org) 2.5.6** or higher
* **[ZOO](http://www.yootheme.com/zoo) 3.1** or higher
* **[ZOOlanders component](https://www.zoolanders.com/extensions/zoolanders) 3.1** or higher

Installation
============

Trough ZOOlanders Manager
-------------------------

1. Go to *Joomla Administration / Components / ZOOlanders*.
2. Set your zoolanders.com site login credentials trough the Options button.
3. Find the **ZOOcart** Extension in the list and click on the Install button.
4. Be patient while the Installation proceeds, status notification will arise.

Once the installation process have finished the **ZOOcart** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

Trough Joomla Manager
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

User Guide: ZOOcart Basic Setup
-------------------------------

### Step 1.  Setup the Type

1. Go to the *Joomla Administration / Components / ZOO/ gearwheel tab* (on the right side of the tab bar). Click on the app for which you want to setup a specific type *(e.g. app "Product Catalog" and type "Product")*.
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

1. Go to the *Joomla Administration / Components / ZOO/ gearwheel tab* and click on the chosen app *(e.g. app "Product Catalog")*.
2. Click on the chosen template layout in the specific type line *(e.g. Default: full)*. 
3. Assign the elements to positions. 
For more information about layouts setup, please review the [ZOO official docs](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

#### Done! 

Your ZOOcart basic setup is ready! 

Translation
-----------

The default **en-GB.plg_system_zoocart.ini** language file is located in the **administrator/language/en-GB** folder and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_system_zoocart.ini**

The translations are managed by [Transifex](https://www.transifex.com/projects/p/zoolanders/) where you can download the available language files and submit your ones.

### Payment plugins

The ZOOcart payment plugins language files are located in the **administrator/language/en-GB** folder with the and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_zoocart_payment_PLUGINNAME.ini**

### Shipping plugins

The ZOOcart shipping plugins language files are located in the **administrator/language/en-GB** folder with the and the translation should be placed into the language related folder replacing the **en-GB** part.

Eg: **administrator/language/YOUR-LANG/YOUR-LANG.plg_zoocart_shipping_PLUGINNAME.ini**

Settings
========

Go to the *Joomla Administration / Components / ZOOlanders /  ZOOcart tab / Settings* to configure ZOOcart for this application.

General
-------

* **Default Country** - Allows to set default country (Uses in shipping and billing plugins).
* **Show terms and conditions** - If set to “Yes”, the Terms Agreement checkbox will be displayed on the checkut page.
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
* **Type** - Chose rate type. It could be based on ordered items or entire order.
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


Discounts
---------

* **Allow discounts** – If set to “Yes” discounting will be applied for orders, if discount coupon is provided .You can manage your discounting on the page *ZOOcart tab / Discounts*. 
* **Apply discount before tax** - If set to “Yes” discounting will be applied for the tax free price, otherwise it will be applied after tax calculations .


Quantities
----------

* **Check Quantities?** - If set to “Yes” product quantity value will be checked for non-zero before adding this product to cart.
* **Update Quantities?** - Use in combination with “Update Quantities Order State” param. If set to “Yes” appropriate products quantities value will be modified (decreased) when order state will be reached the state, that specified in “Update Quantities Order State” param on the Orders settings page.


Orders
------

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

On the *“Address Types”* page you can configure addresses comonents (Such as Country, Street, e.t.c.), that will be used for billing and shipping. And configure appropriate Billing and Shipping addresses layouts.

IMAGE HERE

To setup address parameters click the Address name and set all necessary address constituents. 
Important! Set corresponding "Billing information" parameter for each element.

IMAGE HERE

To configure Address layout *(e.g. Billing Form, Billing, Shipping Form, Shipping)* click appropriate layout’s name in the Layouts collumn on the *“Address Types”* page. Address layout can be configured like any other ZOO layout. Setup appropriate layout positions and save changes.

Taxes
-----

* **Default Tax Class** - You can choose Tax Class, that will be used as default for products without explicit tax class assigned (You can manage Tax classes on the *“Tax Classes”* page).
* **Shipping Tax Class** – You can specify separate tax class for shipping (different from product tax class). Also you can set option -default- and Default tax class will be applied to shipping fee, or set -none- if you don't need taxes to be calculated for shipping at all.
* **Show price and fees with tax** -  If set to “Yes” the product price will be recounted displayed with tax.
* **Validate VAT using VIES?** - If set to “Yes” and VAT (Value Added Tax) is populated, VAT will be validated using EU VIES service. (http://ec.europa.eu/taxation_customs/vies/faq.html).
* **Stop if VAT is not VIES?** - If set to “Yes” and VAT validation enabled, checkout will be not proceeded if VAT (Value Added Tax) is not valid.

### Tax Classes Page

Different Tax Classes could be aplied to different products or groups of products. You can manage them on the *“Tax Classes”* page.

IMAGE HERE

To create or edit the new Tax Class you just need to specify it’s Name on the appropriate form.

IMAGE HERE

### Tax Rules Page

You can manage Taxes on the *“Tax Rules”* page.

IMAGE HERE

To create new Tax Rule, you need to specify the following fields for it:

IMAGE HERE

* **Country** - Use to specify the country for which this Tax Rule should be applied.
* **State** - Use to set state, inside the chosen country (Usualy it’s set like two letter code e.g. AA, BB e.t.c).
* **City** - Allows to specify the city.
* **ZIP Code** - ZIP code or Postal code of the appropriate location.
* **Tax Rate** - Tax rate (in percents), that will be applied to related products prices.
* **Tax Class** - Choose the related Tax Class. You can manage Tax Classes on the “Tax Classes” page.
* **Status** - Enable/disable this tax rule.
* **VIES** - Set to “Yes” if there are registered VAT for the specified region.

Emails
------
### Email Tamplate Page

You can manage email notifications on the Email Tamplate page.


* **Type** – type of the email (new order, order state changed, etc.).
* **Language** – allows to specify language for which this email template will be applied.

Choose Email Type and Language and click *"Proceed"* button to configure the email tamplate further.

* **User Groups** –  email will be sent to chosen target group.
* **Subject** – Email subject.
* **CC** – Carbon Copy. Send a copy of each email received to another address. 
Separate multiple addresses with commas.
* **BCC** – Blind Carbon Copy. It is used if you are sending them a Copy and you don't wish the other recipients to see that you sent it to this contact. 
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

Elements
========

Price Pro Element
-----------------

For Price Pro element except Basic params *( e.g. Name, Description, Access Level, e.t.c )*, you can set the following Specific params:

IMAGE HERE

* **Default** - Set defeault (minimal) price value in chosen currency.
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
-------------------

For **ZOOcart** element you can set only one specific param:

IMAGE HERE

**Enable By Default** - If this option is set, "Add to cart" button will be available by default.

### Layout

To setup **ZOOcart** element's layout except the basic options you can specify the following ones:

IMAGE HERE

* **Main Layout** - Option allows to choose layout for price output among available ones.
* **Label** - To set the label for Add To Cart button if it's needed.
* **Action after Add** - This parameter allows to specify which action will be executed after user click the "Add to Cart" button. You can choose one of the following options:
  * **Redirect To Cart** - If chosen after "Add to Cart" button click user will be redirected to the cart page.
  * **Reload the Page** - If chosen after "Add to Cart" button click page will be reloaded (use if it's necessary to refresh some data on the page).
  * **Do not Redirect** - No action will be executed after adding item to the cart.

* **Menu Item Id** - Set menu item id if you want to snap the cart to some specific menu item.
* **Update the cart module?** - If set to "Yes", ZOOcart module state will be updated (if it is present on the current page).
* **Avoid ReAdd** - Set this option to Yes to disallow repeatedly adding items to the cart by clicking the button time after time.
* **Label for already in the cart** - To specify the text on the "Add to Cart" button when the appropriate item is already in the cart.

Variations Element 
------------------

**ZOOcart Variations Element** is used for products that have variation parametes, such as color, size, etc. 

### Configuration

#### Step 1. Add and Configure the **Variations** Element for Your Product Type

1. Go to the *Joomla Administration / Components / ZOO/ gearwheel tab* and click on the chosen app *(e.g. app "Product Catalog")*.
2. Click *Edit Elements* near the type name. Add *"Variations"* element from the ZOOcart block of the Element Library. 
3. Set **Name** and **Description** (if you need it) for the element and *save* these settings.
4. Open the element again (Press Edit element). **Specific** settings will be available. 
  * **Elements** setting allows you to specify element(s) of different variations of products *(e.g. for different  colors of product we can have different images)*.
  * ** Attributes** settings allows to specify parameters of product that could vary *(e.g. wear differs usually by colors and sizes)*. Set **Name**, **Value** and **Options** for the attribute. Please, note that all values for attributes and options should be set to avoid problems with synchronization.

#### Step 2. Set Variations for Your Product

1.  Go to the *Joomla Administration / Components / ZOO / Shop*. Create or open some product.
2.  Add and configure all necessary variations for the product in the *Variation* block.
 
  * **Attributes** - select variation parameters from the dropdown menu.
  * **Price** - set price for this variation of product.
  * **Quantity** - specify amount of products with given attributes.
  * **Elements** - specify the element(s) seleced in the Step 1 for this variation of product.  


#### Step 3. Set the **Variations** Element Position in the Layout 

1. Go to the *Joomla Administration / Components / ZOO/ gearwheel tab* and click on the chosen app *(e.g. app "Product Catalog")*.
2. Click on the chosen template layout in the specific type line *(e.g. Default: full)*.  
3. Assign the element to necessary position. 
For more information about layouts setup, please review the [ZOO official docs](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

#### Done! 

**Variations** element configuration is ready. Variation options should be available in your ZOOcart.
