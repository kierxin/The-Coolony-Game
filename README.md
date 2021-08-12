# The-Coolony-Game
[Proposal] JavaScript Project (JSP) for App Academy by Kira Porter

## The Coolony Game: Background
In this ant-themed, idle clicker-esque game, the player assigns tasks for ants to do. Tasks include gathering resources, excavating tunnels, creating new ants, and sleeping to restore energy (which depletes over time as ants do tasks).
Ants do tasks in cycles, adding to the player’s resource deposits at the end of each cycle. The player must assign a new task to each ant when its previous task has been completed, or it will sit idle. 

Visually, players can view the available resource deposits on the game board (grid). Clicking on a resource deposit allows the player to view which ants are currently making use of that resource deposit. To view which ants are idle (not currently on any resource deposit), the player can click a button to view a list of their idle ants. By viewing the resource desposits or idle list, players can (re)assign a task for each ant to work on.

### Functionality & MVPs
In The Coolony Game, users will be able to:
- Designate resource-collection tasks for their ants to carry out
- Use gathered resources to upgrade resource deposits
- View a how-to page (modal, or section on the same page as game window)
- View how many resources have already been accumulated (modal or fixed-position overlay at top of game window)
 
In addition, this project will include:
- An option for the user to display their game stats in a simplified modal or page
- Achievements and/or collect special ‘loot’ (which isn’t usable in the game in any way, but would essentially be a form of game achievement

### Wireframes / Prototypes / Design
A partial prototype I assembled while trying out Figma (screenshot below):

[Link to Figma Project](https://www.figma.com/file/GwP3HkK7CZiAaqMuvK4iTA/Untitled?node-id=0%3A1 "View Prototype on Figma Website")

![Prototype Screenshot](https://cdn.discordapp.com/attachments/865227670039560212/875478177819025418/Coolony_Prototype.png "Screenshot of the Figma Prototype")

### Technologies, Libraries, APIs
This project will incorporate JavaScript unit testing, HTML’s drag-and-drop API, and CSS animations/parallax (in the 'how-to' section).

### Implementation Timeline
- Friday 8/13: Game (create grid board, ant instances, resource deposits, collected resources)
- Saturday 8/14: Game (Task cycles / time-based accumulation of resources, new ant creation)
- Sunday 8/15: Game (Ant energy/appetite decay, display idle ants list, display stats modal)
- Monday 8/16: Game (drag-and-drop functionality to assign ants to tasks, new tunnel excavation / resource deposit discovery)
- Tuesday 8/17: Code the welcome section / how-to / and game container (minus the game itself), override ‘onscroll’ event when inside game container (HTML div)
- Wednesday 8/18: Better graphics, write ‘how-to’, add networking/social media links, CSS animations/parallax
- Thursday 8/19: Deploy (GitHub Pages)

### Bonus Features (Future Goals)
- Nice game graphics
- Separate ‘quickview’ page that allows player to play a text-only version of the game, where they have a list of their available resources, resource deposits, ants, and tasks (later, this could be adapted to a mobile format)
- Ability for user to log in & retrieve previous game data (post-App Academy goal)
