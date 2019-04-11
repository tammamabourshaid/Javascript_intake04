const express = require('express'),
  webServer = express(),
  port = 3000;

webServer.use(express.static('/home/adib/i4-frontend-specialisation/js-13/basic'));

webServer.listen(port, () => console.log(`Webserver running on http://localhost:${port}`));