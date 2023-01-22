const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/users', (req, res) => {
    let users = [];
  
  users.push({id: "693357228413026356", name: "Liliya#001"});
  users.push({id: "659398259168509978", name: "Beast-chan#0001"});
  users.push({id: "550567010690531338", name: "LeFish#9045"});

  res.json({data: users});
});

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});
