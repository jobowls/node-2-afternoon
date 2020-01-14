const express = require('express');
const mc = require("./controllers/messages_controller.js");

const app = express();

app.use(express.json());


app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put(`/api/messages/:id`, mc.update);
app.delete(`/api/messages/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});