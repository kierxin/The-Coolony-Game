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
This project will incorporate JavaScript unit testing, HTML’s drag-and-drop API, and CSS animations/parallax (in the 'how-to' section). The board may have a background graphic (SVG). Sass (SCSS) will be used for styling.

Ideally, I will also enable users to click and drag around the game board (JavaScript event listeners).

### Implementation Timeline
- **`FRI 8/13`** Landing page, how-to, & game container (HTML div), override ‘onscroll’ event in game container, networking/social media links; Game (grid array)
- **`SAT 8/14`** Game (ant instances, resource deposits, resource deposit modals)
- **`SUN 8/15`** Game (task cycles / time-based accumulation of resources, toggleable collected resources overlay)
- **`MON 8/16`** Game (Ant energy/appetite decay, new ant creation, display idle ants list, display stats modal)
- **`TUE 8/17`** Game (drag-and-drop functionality to assign ants to tasks, stats modal)
- **`WED 8/18`** Better graphics, write ‘how-to’, CSS animations/parallax; Game (new tunnel excavation / resource deposit discovery)
- **`THU 8/19`** Deploy (GitHub Pages)

### Actual Implementation Timeline (Updated As I Go)
- **`FRI 8/13`** Landing page, how-to, & game container (HTML div), override ‘onscroll’ event in game container, networking/social media links; 
- **`SAT 8/14`** Game (grid array, ant instances, resource deposits)
- **`SUN 8/15`** Game (resource deposit modal, task cycles / time-based accumulation of resources)
- **`MON 8/16`** Game (toggleable collected resources overlay, stats modal, display idle ants list)
- **`TUE 8/17`** Game (Ant energy/appetite decay, new ant creation, new tunnel excavation / resource deposit discovery)
- **`WED 8/18`** Better graphics, write ‘how-to’, CSS animations/parallax, drag-and-drop functionality to assign ants to tasks
- **`THU 8/19`** Deploy (GitHub Pages)

### Bonus Features (Future Goals)
1. Nice game graphics
1. Ability for user to zoom in/out on game board (CSS scale transformation)
1. Separate ‘quickview’ page that allows player to play a text-only version of the game, where they have a list of their available resources, resource deposits, ants, and tasks (later, this could be adapted to a mobile format)
1. Ability for user to log in & retrieve previous game data
