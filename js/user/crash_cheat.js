<!--title文字趣味变化-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         //$('[rel="icon"]').attr('href', "/images/favicon-16x16-next.png");
         document.title = 'Σ(っ°Д°;)っ 别走呀|' + OriginTitle;
         clearTimeout(titleTime);
     }
     else {
         //$('[rel="icon"]').attr('href', "/images/favicon-16x16-next.png");
         document.title = '٩(๛ ˘ ³˘)۶ 哼|' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
