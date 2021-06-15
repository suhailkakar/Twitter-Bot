const Twit = require("twit");
const twit = new Twit(require("./config.js"));
const mediaArtsSearch = { q: "#javascript", count: 100, result_type: "recent" };
const retweetLatest = () => {
  twit.get("search/tweets", mediaArtsSearch, (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const retweetId = data.statuses[0].id_str;
      twit.post("statuses/retweet/" + retweetId, {}, (error, response) => {
        if (response) {
          console.log("Success! Kakar's bot has retweeted something.");
        }
        if (error) {
          console.log(error.message);
        }
      });
    }
  });
};

retweetLatest();
setInterval(retweetLatest, 1000 * 60 * 30);
