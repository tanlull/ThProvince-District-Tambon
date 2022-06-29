const axios = require("axios");

async function getData() {
  let response = await axios.get("http://localhost:3000/provinces", {
    headers: {
      authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJudCIsImlhdCI6MTY1NTcxNTc2NjE5OH0.jqWmHVocQmaXAoUFp4ieD8Ag8915l5RrXFVhnUoj-SM",
    },
  });

  await console.log(JSON.stringify(response.data.data));
}

getData();
