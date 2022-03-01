# First and Foremost:<br>
Attempt to deploy this repository using heroku, following the steps for the CLI outlined on the heroku deploy tab. To connect this to your DB instance on heroku change the application.properties in src > main > resources to align with your new db username/password/url

Once you have done that, implement ThymeLeaf.<br>
**Step 1.** Add dependency for thymeleaf to pom.xml <br>
**Step 2.** Create static and templates folder in src > main > resources <br>
**Step 3.** Move all HTML files to templates folder, and all JS/CSS to static folder <br>
**Step 4.** Create a WebController in src > main > java > controller <br>
**Step 5.** Add routes for all of your HTML pages following this format: <br>
<br> 
@RequestMapping(value = "/index") <br>
public String index() { <br>
return "index";<br>
}<br>
<br>
**Step 6.** Update your paths in your HTML files:<br>
    1 Nav links would point to route instead of html file ex: /about instead of about.html<br>
    2 css/js links should directly reference the file, no longer reference a path<br>
<br>
## You've now set up Thymeleaf!<br>
<br>
### Still having problems? Try changing your HTML tags to this : <html xmlns:th="http://www.w3.org/1999/xhtml"><br>
<br>
<br>
Now try to deploy your own project!!! Add the system.properties in the root of this repo to the root of yours and give it a try!!! Don't forget to set up your new DB using clearDB
