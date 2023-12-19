const express = require('express');
const app = express();

app.get('/getOpacity', (req, res) => {
  const opacity = 0;
  res.json({ opacity });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
