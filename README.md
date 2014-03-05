IdeaBoard
==============
IdeaBoard is an experimental app that was designed to mimic the interactivity of a game-like interface with sounds and animations in a simple idea note-taking app.
You can run it locally and keep a board of your ideas.

The default soundtrack loop was generated from GarageBand and the sound effects are from:
* http://www.pacdv.com/sounds/interface_sounds-3.html
* http://www.freesfx.co.uk/sfx/roll?p=3 (note the license terms)

Screenshot of recent release:

<img style="border: 1px solid #999; padding: 2px" src="https://raw.github.com/chrislim/IdeaBoard/master/media/IdeaBoard_screenshot.png" width="500px"/>

#Installation

## Prerequisites

You need NPM and Bower to run IdeaBoard.
First install [NodeJS/NPM](http://nodejs.org/download/).  Once you have `npm` install bower by running `npm install -g bower`.

## Building from the repository 

Run the following:

```
git clone git@github.com:chrislim/IdeaBoard.git
cd IdeaBoard 
npm install
bower install
```

## Configuring and starting the server

The only thing you can configure at this time is the port you want to run IdeaBoard on.
You can do so by editing the file config/default.json

Now you can run the following to start the server:
```
npm start
```

Visit http://localhost:3000/ (or whichever port you chose) to interact with IdeaBoard!

Your ideas are persisted to disk so it is safe to shutdown the server and start it up another time.
[Markdown](https://github.com/coreyti/showdown) is supported in the idea description field.

