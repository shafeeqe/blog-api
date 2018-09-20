const config = {
  port: 8000,
  client: {
    mongodb: {
      dbName: "blog",
      url: "mongodb://localhost:27017"
    }
  },
  jwt: {
    secret: "OyIVLY646ItqsPGH1S1k7fiY4l4vVBDF",
    options: {
      algorithm: "HS256",
      expiresIn: "2m"
    }
  }
};

module.exports = config;
