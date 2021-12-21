function clac (d,m,y,dd,mm,yy) {
   var timeNow = document.querySelector('.now');
   timeNow.onchange =  
      dayNow = timeNow.value.slice(-2);
      var d = parseInt(dayNow);

   var timeNow2 = document.querySelector('.now');
   timeNow2.onchange = 
      monthNow = timeNow.value.slice(-5, -3);
      var m = parseInt(monthNow);

   var timeNow3 = document.querySelector('.now');
   timeNow3.onchange =  
      yearNow = timeNow.value.split('-')[0];
      var y = parseInt(yearNow);

   // Ngày hiện tại

   var timeNeed = document.querySelector('.need');
   timeNeed.onchange =
      dayNeed = timeNeed.value.slice(-2);
      var dd = parseInt(dayNeed);

   var timeNeed2 = document.querySelector('.need');
   timeNeed2.onchange =
      monthNeed = timeNeed2.value.slice(-5, -3);
      var mm = parseInt(monthNeed);

   var timeNeed3 = document.querySelector('.need');
   timeNeed3.onchange =
      yearNeed = timeNeed3.value.split('-')[0];
      var yy = parseInt(yearNeed);

   // Ngày cần tính

   function nan (d, dd) {
      var boxElement = document.getElementById('error-box')
      if (Number.isNaN(d)) {
         boxElement.outerHTML = '<input type="checkbox" name="" hidden id="error-box" checked class="open-error-box">';
      }else if (Number.isNaN(dd)) {
         boxElement.outerHTML = '<input type="checkbox" name="" hidden id="error-box" checked class="open-error-box">';
      }
   }

   nan(d, dd);

   if(yy > y || (yy == y && mm > m) || (yy == y && mm == m && dd > d)) {
      for(var cnt = 1;; cnt++) {
         var x = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
         if(y % 4 == 0) {
            x[2] = 29;
         }
         d++;
         if(d > x[m]) {
            d = 1;
            m++;
            if(m > 12) {
               m = 1;
               y++;
            }
         }
         if(d == dd && m == mm && y == yy) {
            break;
         }
      }
      var result = document.querySelector('.result-text');
      result.innerHTML = '<p class="result">Còn ' + cnt + ' ngày nữa là tới ngày cần tính<p>';
   }else if(yy == y && mm == m && dd == d) {
      var result = document.querySelector('.result-text');
      result.innerHTML = '<p class="result">Ngày cần tính là hôm nay<p>';
   }else if(yy < y || (yy == y && mm < m) || (yy == y && mm == m && dd < d)) {
      for(var cnt = 1;; cnt++) {
         var x = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
         if(y % 4 == 0) {
            x[2] = 29;
         }
         d--;
         if(d < 1) {
            m--;
            d = x[m];
            if(m < 1) {
               m = 13;
               y--;
               cnt--;
            }
         }
         if(d == dd && m == mm && y == yy) {
            break;
         }
      }
      var result = document.querySelector('.result-text');
      result.innerHTML = '<p class="result">Đã qua ' + cnt + ' ngày kể từ ngày cần tính<p>';
   }
}