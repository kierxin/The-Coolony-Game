# The-Coolony-Game
[Proposal] JavaScript Project (JSP) for App Academy by Kira Porter

## The Coolony Game: Overview
In this ant-themed, idle clicker-esque game, the player assigns tasks for ants to do. Tasks include gathering resources, excavating tunnels, creating new ants, and sleeping to restore energy (which depletes over time as ants do tasks).
Ants do tasks in cycles, adding to the player’s resource deposits at the end of each cycle. The player must assign a new task to each ant when its previous task has been completed, or it will sit idle. 

Visually speaking, players can view the available resource deposits on the game board (grid). Clicking on a resource deposit allows the player to view which ants are currently making use of that resource deposit. To view which ants are idle (not currently on any resource deposit), the player can click a button to view a list of their idle ants. By viewing the resource desposits or idle list, players can (re)assign a task for each ant to work on.

### Functionality & MVPs
In The Coolony Game, users will be able to:
- Designate resource-collection tasks for their ants to carry out
- Use gathered resources to upgrade resource deposits
- View a how-to page (modal, or section on the same page as game window)
- View how many resources have already been accumulated (fixed-position, toggleable overlay at top of game window)
 
In addition, this project might include:
- An option for the user to display their game stats in a simplified modal or page
- Achievements and/or 'special loot’ (which isn’t usable in the game in any way, but would essentially be a form of game achievement (acquired through random drop events during gameplay))

### Mockup
A mockup I assembled while trying out Figma (screenshot below):

[Link to Figma Project](https://www.figma.com/file/GwP3HkK7CZiAaqMuvK4iTA/Untitled?node-id=0%3A1 "View Prototype on Figma Website")

![Mockup Screenshot](https://cdn.discordapp.com/attachments/865227670039560212/875478177819025418/Coolony_Prototype.png "Screenshot of the Figma Mockup")

### Technologies, Libraries, APIs
This project will incorporate JavaScript unit testing (Jasmine), and CSS animations/parallax (in the 'how-to' section). The board may have a background graphic (SVG). Sass (SCSS) will be used for styling.

Ideally, I will also enable users to click and drag around the game board (JavaScript event listeners / HTML’s drag-and-drop API), and to drag and drop ants onto resource deposits.

### Implementation Timeline
- **`FRI 8/13`** Landing page, how-to, & game container (HTML div), override ‘onscroll’ event in game container, networking/social media links; Game (grid array)
- **`SAT 8/14`** Game (ant instances, resource deposits, resource deposit modals)
- **`SUN 8/15`** Game (task cycles / time-based accumulation of resources, toggleable collected resources overlay)
- **`MON 8/16`** Game (Ant energy/appetite decay, new ant creation, display idle ants list, display stats modal)
- **`TUE 8/17`** Game (drag-and-drop functionality to assign ants to tasks, stats modal)
- **`WED 8/18`** Better graphics, write ‘how-to’, CSS animations/parallax (custom scrollbar); Game (new tunnel excavation / resource deposit discovery)
- **`THU 8/19`** Deploy (GitHub Pages)

### Actual Implementation Timeline (Updating As I Go)
#### FRI 8/13
- ✔ Code HTML sections: landing page, how-to, & game container
- ✔ override ‘onscroll’ event in game container `sort of did this, then scrapped it`
- ✔ Code networking/social media links

#### SAT 8/14
- ✔ Code grid array `roadblock - spent several hours trying to figure out how to get my functions to return the results that I was logging to terminal but otherwise not receiving; the next morning I woke up and found the solution in 10 minutes: closure`

#### SUN 8/15
- ✔ Get grid array into DOM
- ✔ Code HTML/CSS for collected resources bar
- ✔ Draw game icons (resources, ants, stats, quickview)
- ✔ Code HTML/CSS for game icons
- ✔ Create Coolony title graphic & put it on landing page
- ✔ Draw clouds, put them onto landing page, add subtle animation

#### MON 8/16
- ✔ Complete board factory (including all tile-related functions)
- ✔ Put revised board into DOM

#### TUE 8/17
- ✔ Code player class
- ✔ Code ant class
- ✔ Code ants list: enables player to assign tasks

#### WED 8/18
- ✔ Fix / finish ants list modal
- ✔ Code ant energy/appetite decay
- ✔ Enable new tunnel excavation / tile discovery (including 'build mode')

#### THU 8/19
- ✔ Deploy (GitHub Pages)
- ✔ Create blinking text that shows the user how to start playing
- ✔ Write how-to

### Bonus Features (Future Goals)
1. ✔ Game tile graphics
1. Hover a tile to see a basic list of the ants on that tile (ID, progress)
1. Enable user to click the nursery to upgrade it or view larvae progress
1. Look to refactor/dry up any code that could use some cleaning (especially modals-related code)
1. Attempt to put little ant icons onto tiles
1. Add hover & click event (quick assign) to ant icons
1. Ant drag & drop
1. Animation of ants running between task sites (shortest-path algorithm)
1. Separate ‘quickview’ page that allows player to play a text-only version of the game, where they have a list of their available resources, resource deposits, ants, and tasks (later, this could be adapted to a mobile format)
1. Ability for user to log in & retrieve previous game data

## Summary
Now that the project is finished (although I intend to continue doing some work on it), I've written a summary about it (also copied to my GitHub profile):

> Built with vanilla JS, HTML, and SCSS, this is an ant-themed, idle-clicker-esque game that I built for the week-long JavaScript Project for App Academy. It's a front-end app where the user delegates tasks to the ants in the colony, gathering resources and discovering more tunnels, while ensuring that their ants don't starve. 

> The game board is a two-dimensional array of tile objects, which each have properties pertaining to visibility, ways in which the user can interact with the tile, and which ants are currently assigned to do a task at the tile. When the game begins, the user is given one of three 10x6 starter boards. A randomly created 10x14 board is appended to that, based on a predetermined number of each type of tile that should appear on the board. The array is then translated into the DOM (document object model) as a 1D array of 200 tiles. Each tile's apperance is manipulated based on its classList (CSS class). By doing certain game tasks, the user can trigger event listeners that add or remove a tile's classes.

> The game runs on a setInterval loop, which I currently have set to 500 milliseconds. After the board has been rendered onto the DOM and a player instance has been created (along with two ants), an update function is called at each interval, which in turn calls several functions for checking which ants have completed a task; updating corresponding resources based on time completion; re-displaying each ant's status and the player's resources; decaying the ants' energy; and decrementing the remaining time each ant must spend on its current task.

> The primary way the user interacts with the game (as it stands now) is through the Ants List icon to the right of the game window. Click events on the icon open up a modal, which lists the player's ants by ID, along with each ant's status. Clicking on a list item toggles the visibility of a dynamically-rendered HTML form that allows the user to assign the ant a new task if it is not already occupied. Since the project doesn't have a backend, the form isn't submitted anywhere. Instead, when the user selects a task from the dropdown options, an 'onchange' event is fired, which updates the player instance's properties to reflect which ant has most recently been clicked on in the list. When the user clicks the submit button, another event fires to parse value of the selected option and update the task and task duration properties of the player's most recently selected ant. 

> Another feature of the game is the ability for the player to dig more tunnels, discovering new tiles. This feature is broken into two parts: choosing a new excavation site and assigning an ant to dig at that site. The bulk of the logic happens in part one, where the player must choose a tile to establish their excavation site at and spend some of their accumulated resources. To choose a tile to excavate, the player clicks the 'build mode' icon to the right of the game window. An excavation class is added to each of the available tiles (clicking the icon again toggles the class back off). Available tiles include all tiles that are undiscovered which directly border an already discovered tile (currently, my code does not correctly identify these tiles). When the player clicks on one of the available tiles, a box pops up prompting confirmation, after which resources are deducted or else the window alerts that there are insufficient resources. 

> One of the biggest challenges in the project was updating the 2-D JavaScript array representation of the board (which the player never sees) alongside the corresponding 1-D DOM representation of the board (the one that the player does see). While it's possible to iterate through DOM objects' children (equivalent to an array's elements), it is not exactly the same as iterating through an array. Add that to the fact that each tile has two different indices (one for the JS and one for the DOM) and you end up with a lot of separate looping going on behind the scenes.

> Going forward, I'd like to allow users to click on a tile to view the ants currently doing a task on that tile and a form through which idle ants could be assigned to that tile. I'd also like to implement the ability for the player to add more ants (the nursery). And maybe I'll look to make an algorithm that finds the shortest path from an origin tile to a destination tile, so that an ant can appear to run between the tiles when a task has been assigned.