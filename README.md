# friend-finder-node-app
Survey app build in Node and using Express for server and routing

Web application built using node.js that uses express for server and routing. Users fill out an information sheet with questions. Upon submit the information is sent to the node api layer and the closest match is sent back. Currently data is just stored on a server side javascript object.
 
## Instructions to run locally 

1) Clone repository 

```
git clone https://github.com/jeremiahscanlon/friend-finder-node-app.git
```

2) Navigate to newly installed folder and download npm packages

```
cd *path*/friend-finder-node-app/
npm install
```

3) Navigate to *http://localhost:8070/* to ensure server to view the landing page.

4) Click the button on the landing page or go directly to *http://localhost:8070/survey* to fill out the survey.

5) Upon submit you will be greated by a modal showing the name and image link of the "friend" that showed the smallest difference in the overall value of the questions you chose.

## Notes

- The Port is set to the default for the environment or if one is not setup it will choose 8070.

- There are three "friends" in the object at the start.

- Res-starting the server will reset any entries added via the survey.

- The app only consists of 2 html pages ... /survey and everything else with loads to the welcome page with a link to the survey.


## Questions

For questions, contact Jeremiah Scanlon (jeremiah.j.scanlon@gmail.com)
