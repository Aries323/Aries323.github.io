var posts=["2024/04/11/Qsolution/","2023/12/19/准费米能级与大注入效应/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };