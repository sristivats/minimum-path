
# Minimal-Cost-Path-Finder

A web application that finds the most efficient path between two points using Dijkstra's algorithm. Designed with a clean React frontend and a Flask backend

## Features

-  Input source and destination nodes
-  Displays shortest path and total distance
-  Built using Dijkstra’s algorithm
-  Visual twin maps (satellite and outline)
-  Fully deployed frontend and backend

## API Reference

#### Get shortest distance between node A and node B 

```http
  GET /shortd/<int:A>/<int:B>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `source` | `integer` | **Required**|
| `destination` | `integer` |     **Required**      |




## Tech Stack

**Client:** React

**Server:** Flask, Python

## Rendered Website

 


## Used By

This project is used by the following:

- Students of IIT Guwahati


## FAQ

#### How will obtain my shortest path from source to destination?

Every possible source and destination is mapped with a number ranging from (1 to 64). Path in the application will display the nodes in order to reach the destination. 
