// 設定文件準備完成後再執行, 避免錯誤發生
$(document).ready(function () {

    // 當視窗捲動時執行
    $(window).scroll(function () {

        // 快捷鍵: jqeachelement
        // $("*"):選取所有元素, 執行涵式
        $("*").each(function (index, element) {
            // element == this :表當下搜尋到的元素

            // var 變數名稱 = 資料;
            // 設定完成之後即可直接以"變數名稱"進行套用
            var offset = $(this).offset();  // 取得元素位移資料
            var top = offset.top;    //上方位移資料
            var left = offset.left;  //左方位移資料


            // console.log("元素的上方:"+top);
            var windowTop = $(window).scrollTop();

            // console.log("視窗的高度:"+windowTop);


            // 快捷鍵: jquattr + tab
            // 取得參數: 數字/時間/位移
            var number = $(this).attr("data-counter-number");
            var duration = $(this).attr("data-counter-duration");
            var offset = $(this).attr("data-counter-offset");

            // 用 console.log 測試參數是否有被正常抓取(測試沒問題則可註解掉):
            // console.log("數字:" + number);
            // console.log("時間:" + duration);
            // console.log("位移:" + offset);


            // 判斷式 : 如果 發生(指定條件) 就(執行動作)...
            // if (條件) {執行動作}
            if (windowTop > top - offset) {
                // 用 console.log 測試判斷式是否有被正常抓取(測試沒問題則可註解掉):
                // console.log("開始執行動作");

                // $("選取").動畫({參數}, {選項})
                $(this).animate({
                    num: number       //計數器結束的數字
                },
                    {
                        duration: parseInt(duration),              //執行時間 (因為參數抓到的是文字, 但duration需要"數字", 所以用parseInt()將文字轉換為"整數")
                        step: (now) => {                           //步驟
                            $(this).text(Math.floor(now));      //抓取文字(步驟) Math.floor: 去小數點
                        }
                    });
            }
        });
    });
});
