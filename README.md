
# Intro Section with Dropdown Nav

One of the *FrontendMentor.io* challenges. The goal was to make a fully responsive landing page with menu features. The mobile version had a different menu design.


## Demo

[Insert gif or link to demo](https://user-images.githubusercontent.com/107425698/175360488-2cda76e7-5302-4fbf-8b30-f051cb2cd432.mp4)


## Features

- Dropdown menu (both desktop and mobile but with seperate designs)
- Hover button actions ( color change etc)
- Fully responsive



## Lessons Learned

I took the *mobile first* approach to have less work to do. It allows for easier manipulation when adjusting for other devices.

I used only scalable units such as *rem*, *em* etc. I realized that using *px* is unproductive when trying to create a responsive layout. 
I used *grids*, *flexboxes* as much as I could. It taught me that it gives the best results with the least code and takes care of the responsivness. 
The code is cleaner and easier to maintain or change. It's best to use general features.

What I need to work on is writing better classes/tags/names/ids. It gets too confusing.
I also had trouble adjusting mobile menu to desktop. Positioning got out of hand. So I wrote (unfortunately, but hey, it works :v) three of the same sections, but styled for different resolutions with using *display:none* to hide the ones that are not needed.
I have to figure out how to make it easier to position with only one section. But it'll come with practice and knowledge.

I also wanted to make transition animations using JavaScript but because of the said positioning of items I was unsuccessful. It worked but it wasn't pretty. So i just made them appear  and disappear with *addEventListener.click* function. 


## Acknowledgements

 - [Awesome Challenge Templates](https://www.frontendmentor.io/)
 



