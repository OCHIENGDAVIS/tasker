const express = require('express');

router = express.Router();

router.get('/', (req, res) => {
  res.send(`

  <div style="width: 70%; margin: auto; height: 100vh; padding: 20px; ">
    <h3 style="text-align: center;">Welcome to the Task schedular api</h3>
    <h4 style="text-align: center;">See the available routes </h4>
    <div style="width: 70%; margin: auto;">
      <ul>
        <li>
          <trong>POST /personnel/register</strong> <br />
          <div style="margin-left: 50px;">
            <span>Payload</span>
            <p>
                  {"email": "",
                  "firstname": "",
                  "lastname": "",
                  "password":"",
                  "phone": ""
                  }
            </p>
          </div>
        </li>
        <li>
          <trong>POST /personnel/login</strong> <br />
          <div style="margin-left: 50px;">
            <span>Payload</span>
            <p>
                  "password":"",
                  "phone": ""
                  }
            </p>
          </div>
        </li>
        <li>
          <trong>POST /tasks/create</strong> <br />
          <div style="margin-left: 50px;">
            <span>Payload</span>
             <p>
                  {"email": "",
                  "firstname": "",
                  "lastname": "",
                  "password":"",
                  "phone": ""
                  }
            </p>
            <p>Headers (Authorization:  "Bearer TOKEN")</p>
           
          </div>
        </li>
         <li>
          <trong>GET /tasks/assigned</strong> <br />
          <div style="margin-left: 50px;">
    
            <p>Headers (Authorization: "Bearer TOKEN" )</p>
            <p>QUERY PARAMS: (page, limit)</p>
            
          </div>
        </li>
      
        
      
      </ul>

    </div>
      
  </div>
  
  
  `);
});

module.exports = router;
