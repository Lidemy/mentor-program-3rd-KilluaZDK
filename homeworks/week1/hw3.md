# 教你朋友 CLI

## 什麼是 Command-line interface ？

簡單來說就是操控電腦的其中一種方法。操控電腦的方法有兩種，其中一種比較常見的叫做 GUI（Graphical user interface），叫做「圖形使用者界面」。例如你在電腦桌面上點擊圖示就可以輕易地開啟檔案或刪除檔案，透過使用者介面來操控電腦，使用方式很直覺，不必記一堆指令。

另一種叫做 CLI（Command-line interface），讓使用者透過在視窗內輸入指令，來跟電腦進行互動。而輸入的那個視窗windows 中稱為命令提示字元(cmd)；在 Linux 中則稱為終端機(terminal)。至於輸入的那些指令則稱為command line。

## 打開命令行界面

Ｗindows：按下 Windows 鍵 + X，會跳出一個選單，選擇中間的「命令提示字元」即可啟動。
Mac：點擊右上角的「放大鏡」，並搜尋「terminal」，找到後就能點擊啟動它。

開啟後，會看到一個黑色(白色)的視窗，視窗內會看到一個「 ＄ 」的符號，把指令打在 ＄ 後，即可執行指令。 

## 常用指令

### pwd：目前路徑
可以讓我們知道我們現在身處在哪裡，輸入指令後，按 Enter 即可被執行。
```
$ pwd
/Users/killua/Desktop
```

### ls：列出所有檔案和路徑
可列出有哪些東西在這個資料夾下。
```
$ ls
Desktop
Downloads
Music
```

搭配 -al 的參數，可以列出檔案的詳細資料
```
$ ls -al
total 48
drwx------@  7 killua  staff   224  4 19 11:11 .
drwxr-xr-x+ 17 killua  staff   544  4 19 09:36 ..
-rw-r--r--@  1 killua  staff  6148  4 19 09:36 .DS_Store
-rw-r--r--   1 killua  staff     0  4  4 21:22 .localized
-rw-r--r--@  1 killua  staff  5009  4  7 19:53 Codewars.md
-rw-r--r--@  1 killua  staff  3448  4  7 19:53 Scratch.md
-rw-r--r--@  1 killua  staff   714  4 19 10:54 cli.md
```

### cd：改變現在的路徑
cd 後面打上你想要去的地方，就可以移動到那裡。
```
$ cd Desktop
```
檢查看看路徑是否變更了。
```
$ pwd
/Users/killua/Desktop
```
cd .. 將會讓你回到上一層的資料夾。
```
$ cd ..
```

### mkdir：創建資料夾
mkdir 後方加上欲新增資料夾的名稱，即可建立一個新資料夾。
```
$ mkdir ray
```

### touch：建立檔案與更改檔案時間
touch 後發打上檔名。
```
$ touch norman.txt
```
如果 norman.txt 這個檔案本來不存在，touch 指令會建立一個名為 norman.txt 的空白檔案；如果本來就已經存在，則只會改變這個檔案的最後修改時間，不會變更原本這個檔案的內容。

### rm 與 rmdir：刪除檔案與刪除資料夾
在 rm 後面加上欲刪除的檔案名稱。
```
$ rm norman.txt
```
在 rmdir 後面加上欲刪除的資料夾名稱。
```
$ rmdir ray
```
或是 在 rm 後面加上 -r ，也可刪除資料夾。
```
$ rm -r ray
```

### mv：移動檔案或改名
把檔案 norman.txt 搬到 ray裡。
```
$ mv norman.txt ray
```

把檔案 norman.txt 搬回到上一層。
```
$ mv norman.txt ..
```

把檔案 norman.txt 更名成 emma.txt
```
$ mv norman.txt emma.txt
```

### cp：複製檔案或資料夾
把檔案 norman.txt 複製一份成 emma.txt。
```
$ cp norman.txt emma.txt
```

把資料夾 ray 複製一份成 neverland。
```
$ cp -r ray neverland
```

### cat：印出檔案內容
將文字檔案內容印在 terminal 上。
```
cat norman.txt
```

### grep：尋找特定字串
在 norman.txt 裡抓出有 a 的字。
```
$ grep a norman.txt
```

### wget：下載檔案
在 wget 後面加上網址，即可下載。
```
$ wget https://meet.eslite.com/assets/img/header-logo.png
 ```

### curl：取得網頁內容
在 curl 後面加上網址，可取得網頁內容。
```
$ curl https://meet.eslite.com/tw/tc/gallery/movieschedule/201803020001
```

### redirection：重新導向
指令中的 > 是 terminal 中的特殊符號，稱為重導向 (redirect)，
欲將 norman.txt 印出來的內容，保存到 emma.txt。
```
$ cat norman.txt > emma.txt
```
但這樣會將 emma.txt 裡原有的內容給全部覆蓋掉。
若不想將 emma.txt 裡的內容給覆蓋掉，則將「 > 」改成「 >> 」。
```
$ cat norman.txt >> emma.txt
```

### pipe：指令組合技
Pipe 一個指令的輸出，可以是另一個指令的輸入。
例如：
```
cat norman.txt | grep a
```

## Vim 文字編輯器
將欲編輯的檔案前面加上 vim 即可進入文字編輯器裡。
```
$ vim norman.txt
```
輸入「 i 」：可進行文字編輯。
輸入「 esc 」：可離開編輯模式。
輸入「 :w 」：存檔。
輸入「 :q 」：離開。
輸入「 :wq 」：存檔後離開。

## 教 H0w 哥的實作練習
用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。

### 作法一
首先，先建立一個叫做 wifi 的資料夾。 cd 到 wifi 這個資料夾裡，用 touch 在裡面建立一個叫 afu.js 的檔案。
```
$ mkdir wifi
$ cd wifi
$ touch afu.js
```

### 作法二
首先，先建立一個叫做 wifi 的資料夾，用 touch 建立一個叫 afu.js 的檔案。用 mv 將 afu.js 移動至 wifi 裡面。
```
$ mkdir wifi
$ touch afu.js
$ mv afu.js wifi
```

