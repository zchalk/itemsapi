First and Foremost:
Attempt to deploy this repository using heroku, following the steps for the CLI outlined on the heroku deploy tab. To connect this to your DB instance on heroku change the application.properties in src > main > resources to align with your new db username/password/url

Once you have done that, implement ThymeLeaf.
Step 1. Add dependency for thymeleaf to pom.xml 
Step 2. Create static and templates folder in src > main > resources
Step 3. Move all HTML files to templates folder, and all JS/CSS to static folder
Step 4. Create a WebController in src > main > java > controller
Step 5. Add routes for all of your HTML pages following this format:

@RequestMapping(value = "/index")
public String index() {
return "index";
}

Step 6. Update your paths in your HTML files:
    1 Nav links would point to route instead of html file ex: /about instead of about.html
    2 css/js links should directly reference the file, no longer reference a path

You've now set up Thymeleaf!

Still having problems? Try changing your HTML tags to this : <html xmlns:th="http://www.w3.org/1999/xhtml">


Now try to deploy your own project!!! Add the system.properties in the root of this repo to the root of yours and give it a try!!! Don't forget to set up your new DB using clearDB