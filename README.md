# Pick a Drink - BrickHack 8

This project is available at [https://pickadrink-brickhack.netlify.app]

## Inspiration

I don't go to bars much, so when I do, I'm always indecisive in choosing what to drink. What if there was an application that made it fun for me to choose a drink? Instead of making it boring like, "Is it a casual or formal occasion?" or "Do you prefer salty or sour?", I thought having a theme can appeal to a specific audience. It also uses a common marketing strategy to draw an emotional connection from the product to the buyer.

## What it does

The user can take a questionnaire by choosing an option in a series of questions, where at the end it displays a CBrand product with a message.

## How we built it

I used the React framework to build the application. I used react router to switch between webpages, and a useReducer hook to store user choices. The matching is done by comparing the user choice vector with the pre-defined vectors of the products using the Euclidean distance formula.

## Challenges we ran into

I was going to try to find an API for the beverage data, but unfortunately the developer.cbrands.com website is currently down. So I just created my own json file with a small amount of data.

## Accomplishments that we're proud of

This was my very first react project that I built from start to finish! I've started learning Javascript just last month, so I thought I'd use the pressure of a hackathon to motivate me to create a presentable project, even if I know it's far from perfect.

## What we learned

I learned that I struggle most with styling. Since most of my coding experience comes from data structures and algorithms, the matching algorithm was simple to make. I've never done front-end for a project, and I learned that making CSS stylesheets comes with experience. I hope to use this experience to make more interactive web applications!

## What's next for Pick a Drink

First, the dataset needs to be a lot bigger. More beverages, more questions. I also wanted to improve the overall design of the website, hopefully with the help of experienced CSS developers.
