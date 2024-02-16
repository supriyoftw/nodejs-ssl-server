const express = require('express');
const app = express();
const hostname = '127.0.0.1'; // Your server ip address
const port = 3000;

const version = '1.0.0';

app.get('/', (req, res) => {
    // set response content    
        res.send(`<html>
                    <body>
                    ![MasterHead](https://ibagroupit.com/wp-content/uploads/2020/05/banner_1300-357_devops.png)



Hi ![](https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif)My name is Supriyo Bhakat

                        <h1 style="color:blue;text-align: center;margin-top: 100px;"> [Version ${version}]: This is AMAZING!!! Like & Subscribe!</h1>
                        <div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%)">
                            <img src="https://picsum.photos/400/400?random=1">
                        </div>
                    </body>
                   </html>`);
 
  console.log(`[Version ${version}]: New request => http://${hostname}:${port}`+req.url);

})

app.listen(port, () => {
    console.log(`[Version ${version}]: Server running at http://${hostname}:${port}/`);
})
