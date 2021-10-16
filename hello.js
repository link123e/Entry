fetch("https://playentry.org/graphql", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://playentry.org/project/61505d30b82f55502aa00bb4",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"query\":\"mutation LIKE($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {\\n  like(\\n    target: $target\\n    targetSubject: $targetSubject\\n    targetType: $targetType\\n    groupId: $groupId\\n  ) {\\n    target\\n    targetSubject\\n    targetType\\n    __typename\\n  }\\n}\\n\",\"operationName\":\"LIKE\",\"variables\":{\"target\":\"61505d30b82f55502aa00bb4\",\"targetSubject\":\"project\",\"targetType\":\"individual\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
