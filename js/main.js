// 設定文件準備完成後再執行, 避免錯誤發生
$(document).ready(function () {
    // 當視窗捲動時執行
    $(window).scroll(function () {

        $("*").each(function (index, element) {
            // element == this :表當下搜尋到的元素

            // var 變數名稱 = 資料;
            // 設定完成之後即可直接以"變數名稱"進行套用
            var offset = $(this).offset();  // 取得元素位移資料
            var top = offset.top;    //上方位移資料
            // 位移: 元素往上加多少距離(px)開始執行, 數字越大越早執行

            var windowTop = $(window).scrollTop();

            // 取得參數: 數字/時間/位移
            var number = $(this).attr("data-counter-number");
            var duration = $(this).attr("data-counter-duration");
            var offset = $(this).attr("data-counter-offset");

            // 判斷式 : 如果 發生(指定條件) 就(執行動作)...
            // if (條件) {執行動作}
            if (windowTop > top - offset) {
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
