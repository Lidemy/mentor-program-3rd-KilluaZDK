## 資料庫名稱：comments

### hw2 Table 名稱：killuaZDK_comments

| 欄位名稱 | 欄位型態 | 說明 |
|---------|---------|------|
| id      | integer | 留言 id (auto_incredement)(Primary) |
| nickname| varchar(64) |  暱稱  |
| content | text | 留言內容  |
| time    | timestamp | 留言時間戳記 (預設值：CURRENT_TIMESTAMP)  |

## 導入會員系統之後

### hw3 Table 名稱：killuaZDK_hw3_comments

| 欄位名稱 | 欄位型態 | 說明 |
|---------|---------|------|
| com_id  | integer | 留言 id (auto_incredement)(Primary) |
| user_id | integer | 會員 id |
| content | text    | 留言內容  |
| time    | timestamp | 留言時間戳記 (預設值：CURRENT_TIMESTAMP)  |

### hw3 Table 名稱：killuaZDK_hw3_users

| 欄位名稱 | 欄位型態 | 說明 |
|---------|---------|------|
| user_id | integer | 會員 id (auto_incredement)(Primary) |
| nickname| varchar(64) |  暱稱  |
| account | varchar(16) |  帳號  |
| password| varchar(16) |  密碼  |
