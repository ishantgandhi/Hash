const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/lc/:username', async (req, res) => {
    const username = req.params.username;

    const query = `
    query {
      matchedUser(username: "${username}") {
        username
        profile {
          ranking
          userAvatar
          realName
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

    try {
        const response = await axios.post('https://leetcode.com/graphql', { query });

        if (!response.data.data || !response.data.data.matchedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userProfile = response.data.data.matchedUser.profile;
        const userAvatar = userProfile.userAvatar;
        const userRanking = userProfile.ranking;
        const realName = userProfile.realName;
        const solvedProblems = response.data.data.matchedUser.submitStats.acSubmissionNum;


        const easy = solvedProblems.find(d => d.difficulty === 'Easy').count;
        const medium = solvedProblems.find(d => d.difficulty === 'Medium').count;
        const hard = solvedProblems.find(d => d.difficulty === 'Hard').count;

        const result = {
            userName: realName,
            profilePic: userAvatar,
            rank: userRanking,
            solved: {
                easy: easy,
                medium: medium,
                hard: hard
            }
        };

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching data from LeetCode:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching LeetCode data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
