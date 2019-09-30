# Vicory: A React Data Visualization Library

### Frances Cohen and Sami Burack
### September 31, 2019
### Hack-a-thing-2
### CS 98 Fall 2019

## What We did
For our hack-a-thing-2 we experimented with Victory to try out some data visualization. We found a large dataset on Women in STEM fields and thought it would be cool to visualize some of this data. Specifically, we made several pie charts that indicate the percentage of women in each subcategory of a major category that can be selected from a dropdown as well as several individual pie charts showing the male/female breakdowns for each of these subcategories individually. We also have a pie chart showing the male vs. female breakdowns overall for whichever major category is selected. We then have a bar chart, which also depends on the major category selected from a drop down, which shows the male vs. female breakdown for each individual category (the bars indicate the number of people in those categories, with colors indicating how many are male and how many are female).

## What We Learned
We learned a lot about the Victory framework and the different tools out there for visualizing data. It's clear that Victory is a very powerful tool and our program is just a start. 

## What didn't work
One challenge we struggled with a lot was reading directly from the CSV file with the data in it. We ended up using a workaround and converting the data into JSON format, but ideally we would have hoped to figure this out. Additionally, for our bar chart, we were not able to get the correct labels on the x-axis. We ideally wanted to have each bar labeled with the appropriate category, but we did not find a way to do this, other than if we were to hard code an array of strings and pass it into the parameter tickValues.

## Relation to Potential Project
We are both unsure yet of what we are going to want to work on for our project, but the ideas we have thrown around have primarily related to knowledge/challenges/culture surrounding women and other minorities in STEM fields and topics on sustainability. We thought data visualization would be a cool way to explore something that could be relevant for either of those broad points of focus, both of which require education/spread of knowledge on world problems. 

## Sources
* Victory docs: https://formidable.com/open-source/victory/docs/

