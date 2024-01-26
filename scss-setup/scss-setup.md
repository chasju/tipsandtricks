# HOW TO SETUP SCSS FOR BEGINNERS

- Open your terminal in the folder you would like sass to be installed in. (You will need node.js installed on your computer to run the following commands)
- First you should create a package.json file and go through the steps prompted.<br>
  The steps are not crucial and you can edit them when package.json is created.<br>
  This will also create a folder with your node_modules.<br>
  These files should be included in .gitignore if you are planning on pushing this to a remote repository.

```
npm init
```

- Install SASS

```
npm i --save-dev sass
```

- Your package.json will now have a devDependencies section with SASS listed which means you have scss installed in your project.
- It will look something like this:

```json
{
  "name": "scss-setup",
  "version": "1.0.0",
  "description": "How to set up sass",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "live-server": "^1.2.2",
    "sass": "^1.70.0"
  }
}
```

- Create an index.html in the root folder of your project. If your project folder is called scss-setup, this will be the root of your folder.<br>
  Add boiler plate markup for your html file. (In vscode you can type ! and then click enter for the boiler plate to be added. _Emmet love_)
- Create a folder called 'src', a folder inside 'src' called 'scss' and a file inside 'scss' called style.scss
- Open style.scss and add a style to it:

```
body {
    background-color: red;
}
```

- In your package.json add the following to the scripts section:

```
"build": "sass src/scss:dist/css"
```

- Now run the build command:

```
npm run build
```

- This will have SASS scan src/scss for .scss files and if any are found sass will create (or look for) the dist/css folders in the project, compile the styles, create files for the styles and put them in the css folder. Did you see that happening?
- Now, connect your stylesheet to index.html

```
<link href="./dist/css/style.css" rel="stylesheet" />

```

- The file you connect to index.html should not be a .scss file but the compiles css file. Learn from my mistakes;)

There you go. You can now add scss styles to your .scss file and when you run the build command<br>
the files will be compiled and inserted into dist/css/ which will then be read by index.html.<br>
Because SASS is mostly used for big projects, there are folder structures that should be taken into consideration so I suggest looking into that:)

## Good luck!
