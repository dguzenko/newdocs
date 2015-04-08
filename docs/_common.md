Common
======

Common issues
=============

**Issue:** Elements are not saved on the page, when their amount exceed a limit. It's not accepting so many input variables (inputs, selects, radios, and other form fields).

**Solution:** You must increase the PHP max_input_vars limit in your server to a higher number. For example, max_input_vars = 5000.

There is a PHP 5.3.9 patch (suhosin patch) that can make the same effect and has a similar solution. You could try it also, suhosin.post.max_vars = 5000, suhosin.request.max_vars = 5000.

After applied check if Joomla is accepting the change in Joomla!->Site->System Information PHP Informaton tab. Search for the max_input_vars values, it should reflect the new one.
