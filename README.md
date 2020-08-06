# Robin Westerback Full Stack Web Developer
User Centric Frontend Development Milestone Project @ Code Institute

This project will function as my portfolio website to show potential clients/employers. It provides information about me and what I can offer. 
The website showcases 4 projects, provides social links (GitHub and LinkedIn), my resumé and contact information. You can find the website [here](https://robinwesterback.github.io/User-Centric-Frontend-Development-Milestone-Project/).

## UX
The website is designed to be user friendly, simple and clean with the purpose to present all information in a visually appealing manner on all devices.
It is made for potential clients/employers who are looking for talent like me. They want to know  who I am, what I can offer, what I have done and how to contact me.
To provide that information this website is a simple and straightforward one-pager with 4 major sections - Home, About, Projects and Contact.
The footer at the end of the page contains links for social links and a resume. 

### User Stories
The user stories are showing pictures from the mockups and not the actual project. 
You can access the actual project [here](https://robinwesterback.github.io/User-Centric-Frontend-Development-Milestone-Project/) to try the user stories yourself.
As a potential client/employer, I want to know who you are and what you can offer to get an idea if you have what I seek. 


![alt text](mockups/home.png "Home Section") ![alt text](mockups/about.png "About Section")

Then I want to know what you have done in the past to back that up and qualify that I should contact you.


![alt text](mockups/projects-page1.png "Projects Section 1") ![alt text](mockups/projects-page2.png "Projects Section 2")

I want to be able to contact you and send a request to get in touch. I want to be able to find social links, a resume and navigate easily on the website in case I want to go back to another section. 


![alt text](mockups/contact.png "Contact Section") ![alt text](mockups/menu.png "Full Screen Overlay Menu")

### Strategy
The goal with the website is to provide quick and accessable information while still being visaully appealing. 
The foundation of the website should be good with room for improvement for future updates/releases.

### Scope
I want to give give the users the information they are looking for when searching for talent. 
At this stage the user can access all information they need while there is still improvements to be made. 
Further on you can improve the website and the access to information by e.g. implementing modals in the projects section.

### Structure
The website has a natural structure with the "home-section" giving a message, in this case the message is that you want someone that can solve problems. 
The next section is the "about-section", describing what problems I can solve while giving a hint of what they can expect. 
From there you dive deeper and get to the "projects-section" showing of some projects I have worked on (placeholders at the moment, modals in the future).
Last but not least, you get to the "contact-section" where you can access social-links, a resume and contact-info.

### Skeleton
In this [link](https://github.com/robinwesterback/User-Centric-Frontend-Development-Milestone-Project/tree/master/wireframes) you can find the wireframes for each section that serves as the skeleton for the project.

### Surface
The "black n grey" design is clean and works well to make images/videos and CTAs pop a bit. The "styling" spans give a nice touch rather than having borders. I'm also a big fan of the font-families used.

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