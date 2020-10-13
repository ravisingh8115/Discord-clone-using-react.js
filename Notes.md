1. Setup project
   1. Create react redux app using npx create-react-app discord-clone --template redux
   2. Remove unnecessary files
   3. Install material-ui using yarn add @material-ui/core
   4. Install material-ui icons using yarn add @material-ui/icons
   5. Create Sidebar.js file in components folder
   6. Create Sidebar.css file in styles folder
   7. Link Sidebar component to App.js file
2. Sidebar
   1. Create sidebar_top div in sidebar component
   2. Add h3 tag and Include `Expand More` icon from material-ui
   3. Style sidebar div
      1. Add display to flex, flex-direction to flex, flex to 0.25 (It will take 25% width of viewport width)
      2. Also add height and background-color
   4. Style sidebar_top
      1. Add display to flex, include justify-content and align-items
      2. Include padding, background-color, color and border-bottom
   5. Adding div sidebar\_\_channels >> sidebar\_\_channelsHeader >> sidebar\_\_header
   6. Include `Expand More` icon from material-ui and h4 tag
   7. Include material-ui AddIcon
   8. Style sidebar channels and add cursor pointer to sidebar\_\_addChannel. On hover change color to white
   9. Style channelsHeader div
   10. Create sidebar\_\_channelsList div
