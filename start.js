require("dotenv").config({ path: "./variables.env" });
const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_NAME}-hqerp.mongodb.net/${process.env.DB_NAME}?retryWrites=true`

mongoose.connect('mongodb://localhost/pitercio', {useNewUrlParser: true}).then(() => {
  console.log('connection established')
}).catch((error) => {
  console.log(error)
})

const app = require("./app");
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
