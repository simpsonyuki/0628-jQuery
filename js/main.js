// 設定文件準備完成後再執行, 避免錯誤發生
$(document).ready(function () {

    // 當視窗捲動時執行
    $(window).scroll(function () {

        // var 變數名稱 = 程式內容;
        // 設定完成之後即可直接以"變數名稱"進行套用
        var offset = $("#num1").offset();  // 取得元素位移資料
        var top = offset.top;    //上方位移資料
        var left = offset.left;  //左方位移資料

        // console.log("元素的上方:"+top);

        var windowTop = $(window).scrollTop();

        // console.log("視窗的高度:"+windowTop);

        // 判斷式
        // if (條件) {執行動作}
        if (windowTop > top) {
            // console.log("開始執行動作");

            $("#num1").animate({
                num: 99       //計數器結束的數字
            },
                {
                    duration: 2000,       //執行時間
                    step: (now) => {       //步驟
                        $("#num1").text(Math.floor(now));      //抓取文字(步驟) Math.floor: 去小數點
                    }
            });
}
    });


});
