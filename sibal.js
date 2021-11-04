fetch("https://playentry.org/graphql", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-client-type": "Client"
  },
  "referrer": "https://playentry.org/profile/5bf7beff060417f133ede710/project?sort=created",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"query\":\"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n\",\"variables\":{\"description\":\"나는 빡빡이다\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
