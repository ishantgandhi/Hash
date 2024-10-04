const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const DSA = require("./models/ds.model");
const Time = require("./models/dstime.model");
app.use(express.json());
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  });

app.get("/lc/:username", async (req, res) => {
  const username = req.params.username;

  const query = `
    query {
      matchedUser(username: "${username}") {
        username
        profile {
          ranking
          realName
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
       activeDailyCodingChallengeQuestion {
        link
        question {
          title
        }
      }
    }
  `;

  try {
    const response = await axios.post("https://leetcode.com/graphql", {
      query,
    });

    if (!response.data.data || !response.data.data.matchedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const dailyLink =
      response.data.data.activeDailyCodingChallengeQuestion.link;
    const dailyTitle =
      response.data.data.activeDailyCodingChallengeQuestion.question.title;
    const userProfile = response.data.data.matchedUser.profile;
    const userAvatar = userProfile.userAvatar;
    const userRanking = userProfile.ranking;
    const realName = userProfile.realName;
    const solvedProblems =
      response.data.data.matchedUser.submitStats.acSubmissionNum;

    const easy = solvedProblems.find((d) => d.difficulty === "Easy").count;
    const medium = solvedProblems.find((d) => d.difficulty === "Medium").count;
    const hard = solvedProblems.find((d) => d.difficulty === "Hard").count;

    const result = {
      challenge: dailyTitle,
      challengeLink: dailyLink,
      userName: realName,
      
      rank: userRanking,
      solved: {
        easy: easy,
        medium: medium,
        hard: hard,
      },
    };

    res.status(200).json(result);
  } catch (error) {
    console.error(
      "Error fetching data from LeetCode:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Error fetching LeetCode data" });
  }
});

app.post("/dsa", async (req, res) => {
  const newStructure = new DSA(req.body);
  try {
    await newStructure.save();
    res.status(201).json(newStructure);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/dsa/:name", async (req, res) => {
  try {
    const item = await DSA.findOne({ dsaName: req.params.name });
    if (!item) {
      return res.status(404).json({ message: "Data structure not found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/time", async (req, res) => {
  const newComplexity = new Time(req.body);
  try {
    await newComplexity.save();
    res.status(201).json(newComplexity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/time/:name", async (req, res) => {
  try {
    const item = await Time.findOne({ dsaName: req.params.name });
    if (!item) {
      return res.status(404).json({ message: "Data structure not found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
