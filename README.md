# startup
Repository for CS 260 start up application.

The application is a social media recipe website!

**AWS IP Address**: http://3.142.133.174/

**AWS DNS**: guerosite.click

SSH command: ssh -i [key file] ubuntu@3.142.133.174

# Recipe Website

***Elevator Pitch***

Imagine a social media page that was useful, productive, and dealt with everybody's favorite pasttime... **eating**!

Guero Recipes is the perfect social media platform to find, save, and share remarkable recipes. Sort by categories to find they style you desire, and clickly find recipes that catch your eye. When you find one that appeals to you -- and we are sure you will -- like it to save to your favorite recipes that stay every time you log in! Comment to share your thoughts with others, and share the link to a friend or loved one. With Guero Recipes, you are sure to liven up your palatte!

**Images** -> [StartUp Mock [CS 260].pdf](https://github.com/mkm02/startup/files/10524303/StartUp.Mock.CS.260.pdf)

***Key Features***

- Text and image links to recipes
- Drop down navigation bar buttons
- Sort by recipe category
- Login capabilities
- Save favorites to profile
- Public comment sections
- Copy sharable link to clipboard

## Notes

Pushing and pulling in the development environment is incredibly important to do **frequently**. It will also require coordination and communication with others to fix merge issues in the workplace.

NS type of domain record contains information of authoritative name servers that permit me to put records in this DNS server 

While working on the html for Simon, I got more experience using proper syntax to create a table. I also learned than in a form there is an action that can be used. This is a clean way to navigate to a new page without a visible hyperlink. I also began to understand a little bit more about how svg can create more complex images.

In HTML, it is extremely important to structure the website in a clean and organized way. Block elements are what gives the main structure and flow of content, while inline elements work inside of that flow without disrupting it and draw attention.

With HTML and CSS, using containers such as divs are incredibly important to structure as well as style different parts of the webpage, but similar things can be styled the same way without having to duplicate code.

CSS frameworks such as Bootstrap are convenient ways to add styling elements that have already been created.

CSS flex is incredibly useful to make a reactive webpage, and media queries allow for some conditional styles to make sure everything is still visually appealing and functional.

DOM manipulation is an important way to make a reactive web application. Search for something through querySelector and appendChild to add new html elements. You can also delete those elements later.

Be careful about using **.innerHTML** for security purposes.

Make sure to put the link to your .js file at the bottom of the body if it uses anything generated previously in the html.

Async/await and promises are very useful to make sure things happen in the order you need (or happen at all) in a javascript class or function.

It is possible to access variables from one file into another through localStorage.setItem and localStorage.getItem. This allows for a javascript file to be affected by or to work together (sort of) with another javascript file through the browser.

**DON'T FORGET TO DEBUG THROUGH THE BROWSER**

### Web Services

- npm init -y and npm install * to prepare node package manager and install necessary packages
- express defines HTTP endpoints and routes
- middleware allows for functionality in a webservice
- use fetch to request from other web services
- daemons allow for persistant web services, even upon closing a terminal

### Database Services
- install mongodb and require it in a .js file to use it
- set up a mongo client and connect using a url with credentials saved as environment variables
- make sure to unset global variables and export them again if necessary
- databases allow for data to stay persistent, even upon shutdown/restart of a service
- mongodb is a JSON object oriented database
