## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

VARCHAR 和 TEXT 的相同處：可變的最大長度 65535 字元，會自動去掉結尾空格。

### VARCHAR

* 要設定最大長度。
* 可以全部設為索引。
* 字節不能全用來存取數據，需有 1-2 個字節用來存取佔用長度。

### TEXT

* 無法設定最大長度。
* 只能設定特定長度為索引。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？

Cookie 是某些網站為了辨別用戶身分而儲存在用戶端（Client Side）上的資料。上面通常會儲存使用者的個人資訊（ex. 帳號、e-mail...)。瀏覽器會儲存 Cookie 並在下次發送 Request 的時候，將 Cookie 的資訊帶給伺服器。


使用 HTTP Request 的 Header 區塊來帶資料。

例如：

Request Header： Cookie: user_id=value

Response Header： Set-Cookie: user_id=value; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

* 密碼的安全性：如果資料庫被駭，使用者的帳號密碼也會被洩漏出去。密碼應先用「雜湊函式」儲力之後，再進行儲存。
* 用 Cookie 儲存登入狀態：Cookie 是存在 client 端的資料，透過偽造即可非法登入後台。所以應該使用 Session 將資料儲存在 server 端，相對來說這樣的方式比較安全。
