const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(cors());

app.get('/getOpacity', (req, res) => {
  const opacity = 1;
  res.json({ opacity });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
