const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
  try {
    const r = await axios.put('https://api.chatengine.io/users/',
      {
        username: username,
        secret: username,
        first_name: username
      },
      { headers: { "private-key": "a23bb6aa-929b-488b-b1b9-ea6a0953d705" } });
  
    if (r.status && r.data) {
      return res.status(r.status).json(r.data);
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  
});

app.listen(3001);