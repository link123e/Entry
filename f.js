fetch("https://playentry.org/graphql", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-client-type": "Client"
  },
  "referrer": "https://playentry.org/profile/5bf7beff060417f133ede710?sort=created",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"query\":\"\\n    mutation FOLLOW(\\n        \\n    $user: String\\n\\n    ) {\\n        follow(\\n            \\n    user: $user\\n\\n        ) {\\n            \\n    id\\n    \\n    id\\n    user {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n        }\\n        status {\\n            following\\n            follower\\n        }\\n        isFollow\\n        projects {\\n            id\\n            thumb\\n            name\\n        }\\n    }\\n\\n    \\n    id\\n    follow {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n        }\\n        status {\\n            following\\n            follower\\n        }\\n        isFollow\\n        projects {\\n            id\\n            thumb\\n            name\\n        }\\n    }\\n\\n\\n        }\\n    }\\n\",\"variables\":{\"user\":\"5bf7beff060417f133ede710\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
