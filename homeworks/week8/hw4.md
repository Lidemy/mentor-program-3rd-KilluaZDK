## 什麼是 Ajax？

`AJAX` 為 `Asynchronous JavaScript and XML`，是一種可讓網頁非同步處理資料的技術。無需重新載入整個網頁，就能夠更新部分資料。
可用於建立快速動態網頁，通過後台與伺服器進行少量資料交換，使網頁可非同步更新。相較起以往不使用 Ajax 的網頁，如需更新內容，必須重載整個頁面。

## 用 Ajax 與我們用表單送出資料的差別在哪？

在用表單送出資料時，讓伺服器收到資料後，會回傳一個 `response` 回來給瀏覽器，瀏覽器會 `render` 這個 `response`，因此會有像重整介面一樣的效果。
而 `Ajax` 可透過 `javascript` 來和 `server` 做「非同步的資料交換」，讓 server 端用 `javascript` 處理完資料，如此一來可再不換頁的情況下，處理 `response`。

## JSONP 是什麼？

`JSONP` 為 `JSON with Padding`，是 `JSON` 的一種使用模式，可以讓網頁從別的網域要資料，達成跨來源請求。
利用在 HTML 裡的 `<script>` 標籤裡放資料，透過指定好的 function 把資料給帶回去，用這種方式來存取跨來源的資料。

## 要如何存取跨網域的 API？

1. 用 `JSONP` 的方式。
2. 用 `CORS`，全名為 `Cross-Origin Resource Sharing`，跨來源資源共享。是一種使用 HTTP 標籤，來開啟跨來源 HTTP 的請求。Server 端要在自己 Response 的 Header 裡加上 `Access-Control-Allow-Origin`，並且在裡面設定哪些來源允許存取。當瀏覽器收到 Response 後，會先檢查 `Access-Control-Allow-Origin` 裡面的設定，來決定要不要阻擋 Response。如果裡面有包含現在這個發起 Request 的 Origin 的話，就會允許通過，讓程式順利接收到 Response。

兩種方式都可以用來存取跨來源的資料。但 JSONP 的缺點是要帶過去的參數只能用 GET 的方式附在網址上面，沒辦法使用 POST，所以這兩種方式應優先考慮 CORS。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為第四周時是使用 Node.js 發送 Request，沒有受到瀏覽器「同源政策」的影響。所以當我們不是透過瀏覽器來發送 Request 時，就不會遇到這個問題。
