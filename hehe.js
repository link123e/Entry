
function hehe(){
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
  "referrer": "https://playentry.org/community/entrystory/list?sort=created&term=all",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"query\":\"\\n    mutation CREATE_ENTRYSTORY(\\n        \\n    $content: String\\n    $text: String\\n    $image: String\\n    $sticker: String\\n    $cursor: String\\n\\n    ) {\\n        createEntryStory(\\n            \\n    content: $content\\n    text: $text\\n    image: $image\\n    sticker: $sticker\\n    cursor: $cursor\\n\\n        ) {\\n            warning\\n            discuss{\\n                \\n    id\\n    title\\n    content\\n    seContent\\n    created\\n    commentsLength\\n    likesLength\\n    visit\\n    category\\n    prefix\\n    groupNotice\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    images {\\n        filename\\n        imageUrl\\n    }\\n    progress\\n    thumbnail\\n    reply\\n    bestComment {\\n        \\n    id\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    content\\n    created\\n    removed\\n    blamed\\n    commentsLength\\n    likesLength\\n    isLike\\n    hide\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n\\n    }\\n    blamed\\n\\n            }\\n        }\\n    }\\n\",\"variables\":{\"content\":\"이게 무슨소리야! 내가 고자라니.. 말도 안된다 고호호홓 ㅠㅠㅠㅠㅠ\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
};

hehe()
hehe()
hehe()
hehe()
hehe()
hehe()
