package com.tripco.t00.server;


import spark.Request;
import spark.Response;
import spark.Spark;

import java.net.InetAddress;
import java.net.UnknownHostException;

import static spark.Spark.*;


/** A simple micro-server for the web.  Just what we need, nothing more.
 *
 */
class MicroServer {

  private int    port;
  private String name;
  private String path = "/public/";

  /** Creates a micro-server to load static files and provide REST APIs.
   *
   * @param port Which port to start the server on
   * @param name Name of the server
   */
  MicroServer(int port, String name) {
    this.port = port;
    this.name = name;

    port(port);

    // serve the static files: index.html and bundle.js
    Spark.staticFileLocation(this.path);
    get("/", (req, res) -> {res.redirect("index.html"); return null;});

    System.out.println("\n\nServer running on port: " + this.port + "\n\n");
  }
}