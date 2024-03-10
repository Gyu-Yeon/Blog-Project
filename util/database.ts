// import { MongoClient } from "mongodb";

// const url =
//   "mongodb+srv://idsopy:098poipoi@johnny.xlkxw5i.mongodb.net/?retryWrites=true&w=majority";
// const options = { useNewUrlParser: true };
// let connectDB;

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongo) {
//     global._mongo = new MongoClient(url, options).connect();
//   }
//   connectDB = global._mongo;
// } else {
//   connectDB = new MongoClient(url, options).connect();
// }
// export { connectDB };

import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://idsopy:098poipoi@johnny.xlkxw5i.mongodb.net/?retryWrites=true&w=majority";
const options: any = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // 개발 중 재실행을 막음
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
