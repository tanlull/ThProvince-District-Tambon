import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3000/provinces",
  headers: {
    "Content-type": "application/json",
    "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJudCIsImlhdCI6MTY1NTcxNTc2NjE5OH0.jqWmHVocQmaXAoUFp4ieD8Ag8915l5RrXFVhnUoj-SM"
  }
});