const express = require('express'),
  webServer = express(),
  port = 3000;

webServer.use(express.static('./'));

webServer.listen(port, () => console.log(`Webserver running on http://localhost:${port}`));