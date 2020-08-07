# Megapixel Groups ROI Calculator
Interactive Frontend Development Milestone Project @ Code Institute

This project is an investment calculator for calculating ROI (Return on Investment). 
It allows you to add businesses and campaigns, define your desired KPIs (Key Performance Indicators) and reap the results. 
It has a button the user can click to clear/reset the inputs that has been made. 
The website provides a contact form, social links (LinkedIn, Facebook, YouTube, Vimeo and Instagram), contact information and a link to Megapixels marketing services.
You can find the website [here](https://robinwesterback.github.io/deploy-react-app/).

## UX
The website is designed to represent Megapixel, following their brand and graphic guidelines.
It is designed to be user friendly, simple and clean with the purpose to present all information in a visually appealing manner on all devices.
It is made for marketers/investors who wants a quick and easy way to calculate the ROI of their investments as well as getting related metrics valuable to interested parties. 
They want a hasslefree experience using the tool. If problem should arise it should be easy to get in touch with the owner of the site.
To provide that information this website is a simple and straightforward single-page-application with 5 major sections - Home, Business, Campaign, ROI and Support.
The support section provides a contact form, social links (LinkedIn, Facebook, YouTube, Vimeo and Instagram), contact information and a link to Megapixels marketing services.

### User Stories
The user stories are showing pictures from an earlier stage of the project and not the deployed version. 
You can access the actual project [here](https://robinwesterback.github.io/deploy-react-app/) to try the user stories yourself.

As a user, I want to click on a navigation link, so that I can get navigated towards the desired link location. 


![alt text](mockups/home.png "Click navigation link") ![alt text](mockups/about.png "Navigation link location")

As a user, I want to add a business, so that I can fill in my KPIs.

![alt text](mockups/contact.png "Add Business") ![alt text](mockups/menu.png "Business KPIs")

As a user, I want to know why I can't add multiple businesses, so that I can adress the issue. 

![alt text](mockups/projects-page1.png "Input error message") ![alt text](mockups/projects-page2.png "Add multiple businesses")

As a user, I want to know to clear the business section, so that I can work from a clean business sheet. 

![alt text](mockups/projects-page1.png "Clear business section") ![alt text](mockups/projects-page2.png "Clean business sheet")

As a user, I want to add a campaign, so that I can fill in my KPIs.

![alt text](mockups/contact.png "Add Campaign") ![alt text](mockups/menu.png "Campaign KPIs")

As a user, I want to know why I can't add multiple campaigns, so that I can adress the issue. 

![alt text](mockups/projects-page1.png "Input error message") ![alt text](mockups/projects-page2.png "Add multiple campaigns")

As a user, I want to know to clear the campaign section, so that I can work from a clean campaign sheet. 

![alt text](mockups/projects-page1.png "Clear campaign section") ![alt text](mockups/projects-page2.png "Clean campaign sheet")

As a user, I want to know to fill in my KPIs, so that I can get the results. 

![alt text](mockups/projects-page1.png "KPIs") ![alt text](mockups/projects-page2.png "Results")

As a user, I want to be able to contact the support, to get help answering the question I have.

![alt text](mockups/projects-page1.png "Send email") ![alt text](mockups/projects-page2.png "Email sent")

As a user, I want to get information about the owner of the site, so that I can contact the owner if I want to.

![alt text](mockups/projects-page1.png "Footer")

### Strategy
The goal with the website is to provide quick and easy access to the functions, tools and information it provides.
The design should fit the purpose and follow Megapixels brand and graphic guidelines. 
The foundation of the website should be good with room for improvement for future updates/releases.

### Scope
The users should be able to use a fully functioning application for calculating ROI including support if needed.
At this stage the user will experience a running application with the possibility to contact the owner with feedback for future releases.
Future releases may introduce:
 A wider range of KPIs and results
 The possibility to compare results to eachother
 Provide more information and resources about ROI and KPIs

### Structure
The website has a natural structure with the "home-section" giving a message, in this case welcoming the user to the website and describes how to use it. 
The next section is the "business-section", where you can add a businesses, define your KPIs and reap the results. 
The next section is the "campaign-section", where you can add a campaign, define your KPIs and reap the results.
At the end of the website is the "support-section" with a contact form and a footer where you can access social-links, contact-info and a link to Megapixels marketing services.

### Skeleton
In this [link](https://github.com/robinwesterback/User-Centric-Frontend-Development-Milestone-Project/tree/master/wireframes) you can find the wireframes for each section that serves as the skeleton for the project.

### Surface
In this [link](https://github.com/robinwesterback/User-Centric-Frontend-Development-Milestone-Project/tree/master/wireframes) you can find Megapixels website whos brand and graphic guidelines I have followed.
The white background works well with the logo, buttons and font colors. The design is clean and the orange color presents the information in a pleasant way.

## Features
The website contains several features with a few left to be implemented.

### Existing Features

#### Full screen Overlay Navigation from w3schools on mobile and iPad
I used the information from [w3schools](https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp "How To JS Fullscreen Overlay") to create a full screen overlay navigation with a blur. 
I use the background-filter: blur element which doesn’t get validated by the jigsaw CSS validator. 
I have made the background opacity 0.9 to make the background less visible on devices that don’t support the blur-filter. 
The color of the logo also changes when you open/close the overlay navigation.

#### Styling span while hovering over the header menu on desktop
I’ve added a styling span while hovering over the header menu on desktop so the border bottom wouldn’t have full width.

#### Contact form with background image from w3schools
I used the information from [w3schools](https://www.w3schools.com/howto/howto_css_form_on_image.asp "How To CSS Form on Image") to create a form with a background image. 
I still have to implement form validation.

#### Links
I provide several links on the website for navigation and resources (social links and resume) in the header and footer.

### Features Left to Implement

#### Project Modals
I want to add modals for each project with a project title, description with links and an image/video.

#### Separate pages
When my portfolio with projects is big enough I want to create separate about- and projects pages to fill the website with more relevant content.

#### 404 error
I want to customize the 404 error webpage

#### Livechat
I might want to add a live-chat or integrate one from Pipedrive to provide additional ways of communicating with me.

#### Form validation
I need to add a database to record emails and form validation for the form to function properly.

#### Smooth scrolling
I want to add smooth scrolling and arrows to scroll to the next section for a better user experience.

#### Feature showcasing skills
I’m thinking of adding a feature showcasing my skills. For example an icon of HTML or CSS that drops down some interesting information about the skill/me when clicking on it.
It’s a nice and interactive way to provide the information the user is interested in.

#### Your thoughts
Are there any features that you would like me to implement to improve the website? Please get in touch and share your thoughts.

## Technologies Used
I used HTML, CSS and Javascript in this project. I tried to stay away from frameworks like bootstrap and JQuery for page speed optimization.

### HTML
This project uses semantic [HTML](https://html.com/) to improve SEO and user friendliness. The HTML is separated using comments.

### CSS
The project uses responsive design to improve the user experience and availability on all devices. The [CSS](https://www.w3.org/Style/CSS/Overview.en.html) is separated using comments. 
I have a [reset stylesheet](https://cssreset.com/scripts/eric-meyer-reset-css/) to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on. 

### JS
I used [JavaScript](https://www.javascript.com/) to get my full overlay feature to work. I’m looking forward to implement more JavaScript in future releases of the project.

## Testing
I have tested the website and looked for flaws in the design and errors in the functionality on several browsers on desktop, laptop and iPhone 7.
I have also tested the user stories to see if the website fills its purpose towards the user. 
The expected outcome is that the design is responsive and functional on all browsers/devices. 
Functions like links, overlay menu and contact form should work properly e.g "target=”_blank"" where appropriate. Below are my findings and comments.

### Functionality

| Description   | Expected outcome | Pass | Comments |
| ------------- |:----------------:| ----:| --------:|
| Click anywhere in the home-section | Links should work | Yes | - |
| Click anywhere in the about-section | Links should work | Yes | - |
| Click anywhere in the projects-section | Links should work | Yes | - |
| Click anywhere in the contact-section | Links should work, input- and text fields should require text/e-mail. | Yes | Form validation isn't implemented, clicking the "send" button should direct you to 404. |

### User Stories

| Description   | Expected outcome | Pass | Comments |
| ------------- |:----------------:| ----:| --------:|
| Find information about me and what I offer | Go to the about-section and read | Yes | - |
| Find previous work | Go to the projects-section and click the project | Yes | The projects are temporary and will be updated in the future as I get projects to showcase |
| Find contact info | Go to the contact-section and find e-mail or use form | Yes | Form validation doesn't function but will be implemented in the future |
| Find social links and resume | Click the social links in the footer | Yes | - |
| Navigate the website easily | Click the navigation links to get directed to the desired section | Yes | - |


### Different Browsers and devices

#### Desktop

| Description   | Expected outcome | Pass | Comments |
| ------------- |:----------------:| ----:| --------:|
| Internet Explorer | The website works appropriately | No | The header has a transparent background |
| Google Chrome | The website works appropriately | Yes | - |
| Mozilla Firefox | The website works appropriately | No | "background-filter: blur" doesn't work |
| Safari | The website works appropriately | Yes | - |

#### Mobile

| Description   | Expected outcome | Pass | Comments |
| ------------- |:----------------:| ----:| --------:|
| Google Chrome | The website works appropriately | No | "background-filter: blur" doesn't work |
| Safari | The website works appropriately | No | "background-filter: blur" doesn't work |

### Responsiveness

I have tested the responsiveness of the website [here](http://ami.responsivedesign.is/#) and it is responsive.

![alt text](assets/images/responsive.jpg "Responsiveness")

### Code validation

#### CSS
I validated my CSS with the [Jigsaw W3C Validation Service](https://jigsaw.w3.org/css-validator/). I got one error regarding the "backdrop-filter: blur" element in the ".overlay" class.
I found this [information](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) regarding the issue. It is an element in development and thereof not compatible with all browsers to this date.
I put the opacity to 0.9 for the users using non-compatible browsers to not get affected by the element not working.

#### HTML
I validated my HTML with the [W3C Markup Validation Service](https://validator.w3.org/) with no errors or warnings to show.

### Defensive design
When users try to send the form without filling in the input- and text fields warning messages pop-up in the required fields.

### Conclusion
After testing the deployed website my overall conclusion is that the website is working as intended. 
The minor flaws that exist don’t ruin the user experience but should be corrected in the future.

## Deployment

1. Use this [link](https://github.com/robinwesterback/User-Centric-Frontend-Development-Milestone-Project) to get to the projects repository.

2. Click "Clone or Download".

3. Click the "copy" icon.

4. Open Git Bash in your local IDE.

5. Change your current working directory to where you want the cloned directory to be made.

6. Type "git clone" and then paste the URL you copied earlier.

7. When you press enter your local clone will be ready.

## Credits

### Content
All content on the website was written by me.

The Privacy Policy was generated by [Termsfeed](https://www.termsfeed.com/).

### Media
The photos used for this project were delivered by [Megapixel Group](https://www.megapixel.group/) and [Unsplash](https://unsplash.com/).

### Acknowledgements
The Full Screen Overlay Menu was modified using tips from [w3schools](https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp).

The Contact Form with a background image was modified using tips from [w3schools](https://www.w3schools.com/howto/howto_css_form_on_image.asp).

Eric Meyers Reset can be found [here](https://cssreset.com/scripts/eric-meyer-reset-css/).