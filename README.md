# Dead in the Water
* An example on using React + Vite to pull CDA data *

# Setup - Brand New
1. Navigate to the [home page](https://github.com/krowvin/dead-in-the-water), Click the _green_ Code button at the top right. In the dropdown select "Download Zip"
2. Choose a path to save your zip to
3. Navigate to your zip file
4. Right click and select Extract All
5. Select a directory to extract to 
6. Navigate into the folders you extracted until you see the src, index.html, and other files
7. Open a new session in VSCode (File > New Window)
8. Hover over the 3 bar and/or select File > Open Folder
8.5 Select Trust! (we know who wrote this!)
9. Select the path containing your src and public
10. You should now see this  

![image](https://user-images.githubusercontent.com/23619282/233383474-c08c607b-23e3-433e-a825-c5e87bc25de2.png)  
11. Hover on the 3 bars and/or select Terminal > New Terminal 
![image](https://user-images.githubusercontent.com/23619282/233383724-5b1e89c3-8c55-4315-bba5-659f7ec00553.png)
12. Make sure you have nodejs installed.  
  A. In the command prompt type `node -v`, you should a version number print  (Ctrl + C twice if you accidentally enter the prompt `>`)
 NOTE: (If you see something about not found Nodejs is either not in your user/system path or it is not installed)  
13. In the terminal you opened inside your root project directory enter this command: `npm create vite@latest`
  Do this for the following prompts:  
  A. Type `y` press `enter`  
  B. Give it a project name, for example: `<DISTICT> Water App`, press enter  _(You can just start typing it)_  
  C. Press enter on package name, unless you want to change this  
  D. Press the down arrow key and hover over React, Press enter  
  E. Navigate down to JavaScript, press enter  
  F. Install [React Feather Matcher](https://www.npmjs.com/package/feather-route-matcher) with `npm i feather-route-matcher`  
14. Run your app in dev mode with `npm run dev`, you should now see a link to open your app on your _local_ web browser! Ctrl + click to open it.  

## Deployment  
1. Run `npm run build`  
2. Copy the contents of `dist` to your server of choice!   
