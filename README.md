# S-TSiR
#Survive: The Struggle is Real

Clicker game made in an attempt to learn some JavaScript.

03/27/16

Multiple improvements to guide progression done. 
Talents are now color coded based on available Talent Points. 
Icon change for crafting/Burning. 
All innerHTML now have 0 decimal places. 
Added Steam to resource update function. 

ASAP Todo:
* ~~Stone building that increases lumberjack output.~~
 * Added Sawmill which increases all Lumberjack production by 10% for each. Requires Clay to build.
 * Sawmill is hidden until Lumberjacks are researched.
* Martial Prowess (MP) stat - determined by warriors.
* Ability to send Traders using food with different reward outcomes - more MP opens more routes.
* Class bonuses and more crafts to buy with RP.
 * Added Stone Block resource. Uses Stone and Clay, requires 3333 RP to research.
* ~~Adjust Storehouse cost scale.~~
 * Increased from 5% growth to 75% growth. Now a new storage building will need to be unlocked after a few purchases.
* New resource storage building.
* ~~Reduce Clay production from Mine button.~~
 * Dramatically reduced Clay production.
 * Also reduced Coal production from Mining by 50%.

02/10/16 - 0.0.9

Added alerts when new features are added. Crafting menu created, first craft implemented: 1000 RP to unlock logs. 50 wood to one log, ratio to be improved later. Miners now add clay at 1/5th the rate they gather stone. Added research tower building for stone, increase rate of RP gain.

02/04/16 - Major Revision Update 0.0.6

Dramatically decreased lines of code in a number of JS files by consolidating repeated code into a single function.
Resources are all updated from a single function which at present is called by a few buttons, will be transitioning away from this and just updating all resources every 250ms along with the worker updates.

Worker and action button sets have been contained in divs with hidden classes to allow the page to have a more structured layout. Before the individual buttons were hidden/revealed which left gaps in the page when hidden. Now that they are in divs they no longer appear to exist until revealed.

Also added the Miner and Warrior unlock buttons through research. Miners should work as expected while Warriors do nothing at the moment.

Next class to add is going to be carpenter to refine wood into logs and open the Cabin building for further worker production.


01/25/16 - 0.1.3

Workers added, many UI changes.

01/13/16 - 0.1.26

Added storage buildings to increase max food/water and other resources so population can continue to grow. Variables for these buildings are in place and buttons to unlock them set, but the javascript to enable them is not yet written. 
EDIT 4:30 MST: Function to buy granary and storehouses now added.

01/10/16 - 0.1.25

Save/Load seem to be working. Added tabs for production/population/upgrades. Made population work, adds bonus to exp and foraging.
Balance of costs still needs a ton of work. Ways to gain more resources are coming.

01/04/16 - 0.1.1
Complete rework from the ground up. More to come.

12/27/2015 - 0.0.15
Added talent points and gated first few techs behind talents.
