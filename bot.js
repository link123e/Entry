var lastID="";
var text;
var id;
var botName;
var like;
var user;
var created;
console.log("-----------made by ex-----------");
console.log("---지금부터 봇 가동이 시작됩니다--");
alert("BOT - 실행됨");
function comment(a){
  $.ajax({
    url:"/api/comment",
    dataType:"json",
    type:"POST",
    data:{
      content: "["+botName+"] "+a,
      target: id,
      targetSubject: "discuss",
      targetType: "individual"
    }
  });
}
function write(a,b,c){
  $.ajax({
    url:"./api/discuss/",
    type:"POST",
    data:{
      content:a,
      title:b,
      groupNotice:false,
      images:[],
      category:c
    }
  });
}
setInterval(() => {
  $.get('https://playentry.org/api/discuss/find?category=free', d => {
    text=d.data[0].title;
    id=d.data[0]._id;
    like=d.data[0].likesLength;
    user=d.data[0].owner;
    user=user.username;
    created=d.data[0].created;
    $.get('https://playentry.org/api/discuss/'+id, d => {
      content=d.content;
    })
  })
  if(id != lastID){
    lastID=id;
    run();
  }
},220);
function run(){
  //----------------------이거슨 주석입니다아------------------------------------------------------------------
  botName="링크bot";
  if(text=="링꾸는 귀여워"){
    comment("맞아!");
  }else
  if (text=="링꾸야 제작자"){
    comment ("제작자는 바로바로..! 엄청나게 귀엽고 대단하신 link123님입니다!");
  }else
  if (text=="뷁"){
    comment ("뷁뷁뷁뷁뷁뷁뷁");
  }else
  if (text=="링꾸야 도움말"){
    comment ("링꾸는 귀여워, 링꾸야 제작자, 링꾸야 도움말, 뷁,ㅎㅇ,ㅎ2,ㅂㅇ,ㅂ2, 등이 있습니다! ");
  }else
  if (text=="ㅎ2"){
    comment ("안녕하신가 자네 나는 링꾸라네 허허 ");
  }else
  if (text=="ㅎㅇ"){
    comment ("안녕하신가 자네 나는 링꾸라네 허허 ");
  }else
  if (text=="안녕하세요"){
    comment ("안녕하신가 자네 나는 링꾸라네 허허 ");
  }else
  if (text=="ㅂ2"){
    comment ("안녕히가시오 내일 또 봅시다 허허 ");
  }else
  if (text=="ㅂㅇ"){
    comment ("안녕히가시오 내일 또 봅시다 허허 ");
  }else
  if (text=="안녕히계세요"){
    comment ("안녕히가시오 내일 또 봅시다 허허 ");
  }else if (text.indexOf("안녕")>-1) {
    comment("안녕하신가 자네 나는 링꾸라네 허허");
  }else if (text.indexOf("댓글")>-1) {
    comment("이것은 댓글입니다아");
  }else if (text.indexOf("ㅂㅇ")>-1) {
    comment("안녕히가시오 내일 또 봅시다 허허");
  }else if (text.indexOf("ㅎㅇ")>-1) {
    comment("안녕하신가 자네 나는 링꾸라네 허허");
  }else
  if (text=="핑"){
    comment ("강스파이크닷! 핑 퐁 탕 핑 튱 팡! ");
  }else if (text.indexOf("자폭")>-1) {
    comment("펑! ");
  }else if (text.indexOf("비트박스")>-1) {
    comment("푹 푹 치키 푹푹 치키 어떄요 실력이 엄청나죠?");
  }else if (text.indexOf("바보")>-1) {
    comment("(울먹이며) 그래! 난 바보다!");
  }else if (text.indexOf("일해")>-1) {
    comment("난 일같은건 하기 싫다니까?");
  }else if (text.indexOf("링꾸봇 ")>-1) {
    comment("작동중");
  }else if (text.indexOf("링꾸 ")>-1) {
    comment("링꾸님은 멋진 분이세요!");
  }
}
