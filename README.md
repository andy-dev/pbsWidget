
# PBS Widget



## Overview
PBS third party JavaScript widget   

## Publisher and Widget Folders
For testing and development, we will use these two folders. (See Below on how to configure two domains locally)

## Publisher 
The publisher acts as a client where we inject our JS and see how it renders. Feel free to add librares and changes to test for any side effects of the widget. In our index.html, we have a script tag with an IIFE that loads our widget with out blocking the client's page. 

### Widget
The widget folder contains all development for our third party JavaScript. In this folder we have all of our needed libraries for creating the widget such as webpack, handlebars etc.

## Development and Testing SetUp 

To have a testing and development enviroment we will use two domains (mac instructions). Macs come with an apache server that we will use for development.

For the following use vim, nano or a text editor of your choice

1 Find your host settings in /etc/hosts
2 Add the following to your settings

```
   127.0.0.1 publisher.dev
   127.0.0.1 widget.dev
```

3  Find etc/apache2/httpd.conf and add the following using vim nano or a text editor:
 
```
<VirtualHost *:80>
  ServerName publisher.dev
  DocumentRoot "/Users/username/project/publisher
</VirtualHost>
<VirtualHost *:80>
   ServerName widget.dev
   DocumentRoot "/Users/username/project/widget"
</VirtualHost>
```

4  In some cases you might have to do the following in etc/apache2/httpd.conf

```
<Directory "/Users/username/project/">
AllowOverride All
Options Indexes MultiViews FollowSymLinks
Require all granted
</Directory>

```

5  Navigate to /Library/WebServer/Documents
```
 $sudo apachectl start

```
6  You can now navigate to publisher.dev or widget.dev in your browser 


## Up and Running
To run this locally you will need node. 

Run:
```

 $ npm install

```

## IP 
There are many free services that can be used to check the clients IP. We are using JSONIP(unlimited) and FREEGEOIP(10,000 per hour) as a fallback. Some other providers include: geobytes.com, geoplugin.com, ip-api, ipify.org, ipinfo.io, ipinfodb.com that can be added as fallback if necesarry. 


## webpack.config
Webpack is a module loader that will help us build and minify our depedencies into one file, bundle.js
In this app, we set which loaders are needed for our application.
If you are not using the webpack server, to bundle the js, run the following command:
Run:
```
` $ webpack`
` $ webpack -w`
```
This command should create our bundle.js file inside the build folder. Using the -w flag will watch for your files on save and re-build.

## entry.js
This is our main file of the application, take consideration the IIFE patern to avoid leakage of variables. 

## Images
Images are loaded via the url-loader. The url loader can set a limit size of the file we want to load. See webpack.config to see setup

## Fonts
Same as images, we will use url loader for loading our fonts. Fonts live in the fonts folder. See webpack.config to see setup

## Minifcation and Production build
Once ready to distribute it, will do all transpiling and combining, optimize-minimize does uglify
Run:
```
`$ webpack -p --optimize-minimize`
```

## Handlebars Templating Helpers
Helpers are use to create more semantic markup. The file handleBarsHelpers.js has all functions created to parse data received from the webServer. 

## Handlebars Templating Partials
To avoid having big long hard to read files, we use partials to break up our templates. The templates are organize with the main template inside templates folder and then two additional folders, one representing the top level items (programming, watch videos, feeds, engage + promote) and a subMenu folder that represents the dropdown menus. Handlebars partials are registered inside handleBarsPartials.js. 

## How to Distribute the Widget
Once the bundle.js file is built and minified, the client should use the following code to add to the first line of the body element. This code is asynchronous non-blocking.

```
<script id="pbs-pill-widget">
	(function() {
		var script = document.createElement('script');
		script.async = true;
		script.src = 'POINT TO WERE bundle.js FILE IS HOSTED';
		var entry = document.getElementsByTagName('script')[0];
		    entry.parentNode.insertBefore(script, entry);
	})();
	</script>

```


## Congratulations
**Congratulations you are done!** 
