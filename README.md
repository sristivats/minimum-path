
# Minimal-Path-Finder

A web application that finds the most efficient path between two points using Dijkstra's algorithm. Designed with a clean React frontend and a Flask backend

## Features

-  Enter source and destination nodes

-  Calculates and displays the shortest path and total cost

-  Built on Dijkstra’s shortest path algorithm

-  Dual map views: satellite and outline modes

-  Fully deployed, with both frontend and backend integrated

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

 https://minimum-path.vercel.app


## Used By

This project is used by the following:

- Students of IIT Guwahati


## FAQ

#### How will obtain my shortest path from source to destination?

Every possible source and destination is mapped with a number ranging from (1 to 64). Path in the application will display the nodes in order to reach the destination. 
