import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 9991;
// using single port for http and ws

/*		object.method(arguments) */
/*  app object is called with listen method, listen method is taking two input port and call back function, arrow function is passed as callback function */
/* types of callback function */

/*
() => {}        // no parameters
(x) => {}       // one parameter
(x, y) => {}    // two parameters
*/

const server = app.listen(port, () => {
  console.log("server is running...");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("data from client %s: ", data);
  });
});
