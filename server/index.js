const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const port = 4000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({
  extended: true
}))

// head api requests //

app.get('/api/games/:id/photo', (req, res) => {
  let id = req.params.id
  axios.get(`http://localhost:3000/api/games/${id}/photo`).then((response) => {
    res.status(200).send(response.data)
  })
    .catch((error) => {
      console.log("error:", error)
      res.status(500).send(error)
    })
})

app.get('/api/games/:id/game', (req, res) => {
  let id = req.params.id
  axios.get(`http://localhost:3000/api/games/${id}/game`).then((response) => {
    res.status(200).send(response.data)
  })
    .catch((error) => {
      console.log("error:", error)
      res.status(500).send(error)
    })
})


// get all reviews sorted in desc order //

app.get('/api/games/:id/reviews', (req, res) => {
  let id = req.params.id
  axios.get(`http://localhost:3000/api/games/${id}/reviews`).then((response) => {
    res.status(200).send(response.data)
  })
    .catch((error) => {
      console.log("error:", error)
      res.status(500).send(error)
    })
})

//only get reviews from last 30 days //

app.get('/api/games/:id/recentReviews', (req, res) => {
  let id = req.params.id;
  axios.get(`http://localhost:3000/api/games/${id}/recentReviews`).then((response) => {
    res.status(200).send(response.data)
  })
    .catch((error) => {
      console.log("error:", error)
      res.status(500).send(error)
    })
})


app.get('/api/games/:id/userTags', (req, res) => {
  let id = req.params.id
  axios.get(`http://localhost:3000/api/games/${id}/userTags`).then((response) => {
    res.status(200).send(response.data)
  })
    .catch((error) => {
      console.log("error:", error)
      res.status(500).send(error)
    })
});



// Reviews API
app.get('/api/games/:id/reviews/:page', (req, res) => {
  axios.get(`http://localhost:3002/api/games/${req.params.id}/reviews/${req.params.page}`, { params: req.query })
    .then((response) => res.send(response.data))
    .catch((err) => res.status(500).send(err));
}
);


app.get('/api/games/:id/filterCounts', (req, res) => {
  axios.get(`http://localhost:3002/api/games/${req.params.id}/filterCounts`)
    .then((response) => res.send(response.data))
    .catch((err) => res.status(500).send(err));
});

app.get('/api/games/:id/summary', (req, res) => {
  axios.get(`http://localhost:3002/api/games/${req.params.id}/summary`, { params: req.query })
    .then((response) => res.send(response.data))
    .catch((err) => res.status(500).send(err));
});

app.get('/api/games/:id/summary/filterOnly', (req, res) => {
  axios.get(`http://localhost:3002/api/games/${req.params.id}/summary/filterOnly`, { params: req.query })
    .then((response) => res.send(response.data))
    .catch((err) => res.status(500).send(err));
});





app.listen(port, () => {
  console.log(`listening on port ${port}`)
});