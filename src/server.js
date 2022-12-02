const app = require("./app");
const db = require("../src/utils/database");
require("dotenv").config();
const PORT = process.env.PORT;

// authentication
db.authenticate()
  .then(() => {
    console.log("sequelize authentication successful");
  })
  .catch((err) => console.log(`sequelize Authentication error: ${err}`));

// to apply the changes in our models/ tables use: { force:true }
// changes the tables without delete data --> { alter:true }
db.sync({ alter: true })
  .then(() => {
    console.log("creating tables that did not exist");
  })
  .catch((err) => console.log(`Syncronia error: ${err}`));

app.listen(PORT, () => {
  console.log(`express server is running on port ${PORT}`);
});
