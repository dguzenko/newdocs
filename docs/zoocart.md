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

Trough ZL Manager
-----------------

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

`ZOOcart requires ZOOlanders component to be installed (It is provided within ZOOcart package).`

Once the installation process have finished the **ZOOcart** plugin should be installed and published. To be sure go to *Joomla Administration / Extensions / Plugin Manager* and check if it is present and enabled.

**Note:** When you are facing an error during installation, it is highly recommended to try to Install from directory:

1. Unpack all files from the downloaded package to a directory on your pc.
2. Using FTP, upload this directory to the /tmp directory of your Joomla installation on your webserver.
3. Go to the *Joomla Administration / Extensions / Extension Manager / Install*.
4. Use the "Install from Directory" option to set the directory of your uploaded package files.
5. Click on the "Install" button and Joomla will install it from the given directory.

Configuration
=============

Steps
-----

### Step 1. Setup the Type

You need to add ZOOcart elements: **“PricePro”** , **“Quantity”** and **“AddToCart”** to the item type, that will be used as a product type (e.g. Product, Article, e.t.c) of the chosen application. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types)

#### Quick note

Note, that for proper work ZOOcart requires ALL of these elements ( **"PricePro"** , **“Quantity”** and **“AddToCart”**) to be added to chosen type.

### Step 2. Setup ZOOcart

To configure **ZOOcart** for ZOO applications switch to the component (Components / ZOOlanders) in your Joomla Admin Panel and click the "ZOOcart" tab.

IMAGE HERE

And setup all the necessary params. Follow the **Configuration Wizard** messages - it will help you to complete the configuration. For more details please review the [Settings section](#settings) .

IMAGE HERE

### Step 3. Setup the elements

Now that your items are Products you can display the price/quantity information and the Checkout button. To do so, assign the Price Pro, Quantity & AddToCart elements to a position using it's default layouts. For more information about layouts setup, please review the [ZOO official docs](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

### Done!

You ZOOcart basic setup is ready!

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

Switch to **ZOOcart Config** tab to configure ZOOcart for this application.

### General settings

General settings tab contains general ZOOcart parameters.

IMAGE HERE

* **Show price With Tax** - If set to “Yes” the product price will be recounted displayed with tax.
* **Default Tax Class** - You can choose Tax Class, that will be used as default for products without explicit tax class assigned (You can manage Tax classes on the “Tax Classes” tab).
* **Tax Address** - Type af address that will be used for tax calculations. You can choose billing or shipping value.
* **Load Bootstrap** - If set to “Yes” twitter bootstrap CSS and JavaScripts will be loaded.
* **Validate VAT using VIES?** - If set to “Yes” and VAT (Value Added Tax) is populated, VAT will be validated using EU VIES service. (http://ec.europa.eu/taxation_customs/vies/faq.html).
* **Stop if VAT is not VIES?** - If set to “Yes” and VAT validation enabled, checkout will be not proceeded if VAT (Value Added Tax) is not valid.
* **Show terms and conditions** - If set to “Yes”, the Terms Agreement checkbox will be displayed on the checkut page.
* **Terms and condition Url** - Allows to specify the “Terms and Conditions” page URL.
* **Enabled Shipping Rates** - If set to “Yes” shipping information will be required and processed during checkout process. Please note, that Enabled Shipping Rates requires ZOOcart shipping plugin(s) to be installed and enabled.
* **Check Quantities?** - If set to “Yes” product quantity value will be checked for non-zero before adding this product to cart.
* **Update Quantities?** - Use in combination with “Update Quantities Order State” param. If set to “Yes” appropriate products quantities value will be modified (decreased) when order state will be reached the state, that specified in “Update Quantities Order State” param.
* **Require Address** - If set to “Yes” Billing and Shipping addresses information will be required during checkout.
* **Update Quantities Order State** - Use in combination with “Update Quantities” param. If “Update Quantities” is set to “Yes” appropriate products quantities value will be modified (decreased) when order state will be reached the state, that specified in “Update Quantities Order State” param.
* **Default Country** - Allows to set default country (Uses in shipping and billing plugins).
* **Default Currency** - Allows to chose default currency for product prices. You can manage currencies on the “Currencies” page.
* **New Orders State** - Allows to specify state, that will be applied to the newly created order.
* **Payment Received State** - Allows to specify state, that will be applied to the order when appropriate payment is received.
* **Payment Pending State** - Allows to specify state, for payment pending orders.
* **Payment Failed State** - Allows to specify state, for failed orders.
* **Canceled State** - Allows to specify state, for canceled orders.
* **Finished State** - Allows to specify state, for processed and finished orders.
* **Checkout page opened** - If set to “Yes”, checkout page will be opened by default.

### Tax Rules

You can manage Taxes on the “Tax Rules” tab.

IMAGE HERE

To create new Tax Rule, you need t specify the following fields for it:

IMAGE HERE

* **Country** - Use to specify the country for which this Tax Rule should be applied.
* **State** - Use to set state, inside the chosen country (Usualy it’s set like two letter code e.g. AA, BB e.t.c).
* **City** - Allows to specify the city.
* **ZIP** - ZIP code or Postal code of the appropriate location.
* **Tax Rate** - Tax rate (in percents), that will be applied to related products prices.
* **Ordering** - Integer value, that allows to specify the rule’s order in the list.
* **Published** - Rule’s publication state.
* **VIES Registered** - Set to “Yes” if there are registered VAT for the specified region.
* **Tax Class** - Choose the related Tax Class. You can manage Tax Classes on the “Tax Classes” page.

### Tax Classes

Different Tax Classes could be aplied to different products or groups of products.
You can manage them on the “Tax Classes” page.

IMAGE HERE

To create or edit the new Tax Class you just need to specify it’s **Name** on the appropriate form:

IMAGE HERE

### Address Types

On the “Address Types” page you can configure addresses comonents (Such as Country, Street, e.t.c.), that will be used for billing and shipping. And configure appropriate Billing and Shipping addresses layouts.

IMAGE HERE

To setup address parameters click the Address type name and set all necessary address constituents. After setup finished, save all changes.

IMAGE HERE

To configure Address layout (e.g. Billing Form, Billing, Shipping Form, Shipping) click appropriate layout’s name in the Layout Extensions collumn on the “Address Types” page.
Address layout can be configured like any other ZOO layout. Setup appropriate layout positions and save changes.

### Currencies

You can manage currencies on the “Currencies” page.

IMAGE HERE

To create/edit currency you need to set the following fields:

IMAGE HERE

* **Name** - Currency name.
* **Code** - International currency 3-letter code (e.g. EUR, USD, e.t.c)
* **Symbol Left** - Allows to specify the symbol, that will be displayed at the left side from the price.
* **Symbol Right** - Allows to specify the symbol, that will be displayed at the left side from the price.
* **Number of Decimals** - Integer number value that specifies the number of signs after decimal separator for price.
* **Number of Decimals to Show** - Integer number value that specifies the number of signs after decimal separator for price that will be displayed.
* **Decimal Separator** - Determines the symbol, that will be used as decimal separator for price values.
* **Thousand Separator** - Determines the symbol, that will be used as decimal separator for price values.
* **Conversion Rate (USD)** - Allows to set conversation rate of the currency, relative to USD.

### Order States

On the “Order States” page you can manage Order statuses. After install you can see some preinstalled recommended ones, like (Pending, Payment Received, e.t.c.).
You also can create your own states

IMAGE HERE

To describe order state, you should setup the following fields:

IMAGE HERE

* **Name** - New state name.
* **Description** - State description.

### Shipping Rates

If the option “Enable Shipping Rates” (on the General settings tab) is set to “Yes”, you should provide some shipping rates. You can manage them on the “Shipping Rates” page.

IMAGE HERE

To describe the new shipping rate or update an existing you should specify the following params for it:

IMAGE HERE

* **Name** - To setup Shipping rate name, that will be displayed.
* **Type** - Chose rate type. It could be based on ordered items or entire order.
* **Price** - To setup shipping price
* **Price From** - Left price margin
* **Price To** - Right price margin
* **Quantity From** - Left quantity margin
* **Quantity To** - Right Quantity margin
* **Countries** - Countries, that shipping rate could be applied to.
* **States** - Use to specify states, related to chosen countries.
* **Cities** - Use to specify cities, related to chosen countries.
* **Zips** - Comma-separated Zip codes or postal codes
* **User Groups** - Chose groups of users that could use this shipping rate.

Elements
========

Price Pro element
-----------------

For Price Pro element except Basic params *( e.g. Name, Description, Access Level, e.t.c )*, you can set the following Specific params:

IMAGE HERE

* **Default** - Set defeault (minimal) price value in chosen currency.
* **Default Tax Class** - You can chose default tax class from the list of Tax Classes, that were provided on "Tax Classes" page
* **Currency** - Choose currency from the list of provided currencies (You can manage your currencies on the "Currencies" page).

### Layout

There is only one specific parameter for *Price Pro* element - *Main Layout*. It allows to choose layout for price output among available ones.

IMAGE HERE

Quantity element
----------------

*Quantity* element is quite easy to configure. You just need to specify the **Default** quantity value.

IMAGE HERE

### Layout

There is also only one specific parameter for *Quantity* element - *Main Layout*. It allows to choose layout for quantity value output among available ones.

IMAGE HERE

Add to Cart element
-------------------

For **Add to Cart** element you can set only one specific param:

IMAGE HERE

**Enable By Default** - If this option is set, "Add to cart" button will be available by default.

### Layout

To setup **Add To Cart** element's layout except the basic options you can specify the following ones:

IMAGE HERE

* **Main Layout** - Option allows to choose layout for price output among available ones.
* **Label** - To set the label for Add To Cart button if it's needed
* **Action after Add** - This parameter allows to specify which action will be executed after user click the "Add to Cart" button. You can choose one of the following options:
  * **Redirect To Cart** - If chosen after "Add to Cart" button click user will be redirected to the cart page.
  * **Reload the Page** - If chosen after "Add to Cart" button click page will be reloaded (use if it's necessary to refresh some data on the page).
  * **Do not Redirect** - No action will be executed after adding item to the cart.

* **Menu Item Id** - Set menu item id if you want to snap the cart to some specific menu item.
* **Update the cart module?** - If set to "Yes", ZOOcart module state will be updated (if it is present on the current page).
* **Avoid ReAdd** - Set this option to Yes to disallow repeatedly adding items to the cart by clicking the button time after time.
* **Label for already in the cart** - To specify the text on the "Add to Cart" button when the appropriate item is already in the cart.
