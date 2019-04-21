# 跟你朋友介紹 Git

## 什麼是 Git ?
Git 是一種「版本控制系統」，對於整理過去的歷史資料，會比較方便。簡單來說在做一個專案時，可能會編輯、新增、修改許多資料，隨著，隨著時間的變化，可能會有好幾種版本（例如：版本一 → 版本二 → 版本三）。當你用 Git 來管理專案時，想要回去找過去某個版本時，可以輕易地回到那時候的狀態。解決以前使用「複製貼上」來管理檔案的不便，並且可以直接用肉眼來判斷每個「版本」的不同及用途。在團隊共同協作專案時，也比較好管理。

## 如何安裝 Git ？
可直接到 Git 官網，參考官方的安裝教學。

## 如何設定 Git ？

### git config：使用者設定
首先，必須要設定使用者的 Email 信箱以及使用者名稱，把名字和信箱改成自己的。並打開你的終端機視窗，輸入下面這兩行指令：
```
$ git config --global user.name "your name"
$ git config --global user.email "youremail"
```

### git init：初始化
使用者設定完成後，在欲管理的專案資料夾內，輸入「 git init 」指令來進行初始化，讓 Git 開始對這個專案進行版本控制。
```
$ git init
```

## 如何使用 Git ？
在 Git 裡，可以分成「工作區（Working Directory）」、「暫存區（Staging Area）」以及「儲存區（Repository）」三個區塊，透過不同的指令，可以將檔案移往不同的區域。想要將專案建立各個不同的版本，首先必須要將「工作區」的檔案移往「暫存區」，才能將「暫存區」的檔案移往「儲存區」建立版本。

### git status：檢查狀態
首先，第一件事情就是要檢查專案裡各個檔案的狀態，輸入「 git status 」指令，可以查詢現在這個專案資料夾內的「狀態」。
```
$ git status
```
資料夾內狀態分為兩種，一種為被 Git 管理的檔案，也就是待在「暫存區」的檔案，另一種為「 Untracked files 」不被 Git 管理的檔案，也就是待在「工作區」的檔案。
以下圖為例：
「 joke1.txt 」為在「暫存區」被 Git 管理的檔案，「 joke2.txt 」和「 joke3.txt 」為在「工作區」不被 Git 管理的檔案。
```
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   joke1.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	joke2.txt
	joke3.txt
```

### git add：把檔案交給 Git 管
剛開始，專案資料夾裡的所有檔案都會在「工作區」裡，將資料夾內想加入版本控制的檔案，輸入「 git add 」並在後面加上檔案名稱，將檔案移往「暫存區」。
```
$ git add joke1.txt
```
若要將資料夾內檔案一次全都加入，則輸入「 git add .. 」
```
$ git add ..
```
若想將檔案從「暫存區」移回「工作區」，則輸入「 git rm --cached」後面加上檔案名稱，則可將檔案移回「工作區」。

### git commit：建立版本
檔案在「暫存區」裡後，就可以將檔案再移往「儲存區」建立「版本」。
輸入「 git commit -m "打上想要為這個版本取的名稱"」，即可建立版本。
```
$ git commit -m "first"
```
若剛修改了幾個檔案，想要將這些修改過的檔案加入「暫存區」，並一致「儲存區」建立一個新版本，有個快速的做法。
輸入「 git commit -am "打上想要為這個版本取的名稱"」，即可快速建立一個新的版本。
```
$ git commit -am "second"
```

### git commit --amend：更改版本名稱
若想要更改版本的名稱，輸入「 git commit --amend 」，即可進入修改模式，按「 i 」開始進行修改，修改完後按「 esc 」退出模式，最後輸入「 :wq 」存擋後退出。
```
$ git commit --amend
```

### git reset HEAD^：回到上一個版本
假如想刪除這個版本回到上一個版本的狀態，輸入「 git reset HEAD^ 」。
HEAD 後面的 ^ 符號，表示「前一次」的意思。所以「 e12d8ef^ 」是指在「 e12d8ef 」這個 版本的「前一次」，如果是 「 e12d8ef^^ 」則是前兩次，以此類推。不過如果是前六次，通常不會寫「 e12d8ef^^^^^^」，而會寫成「 e12d8ef~6 」。

若後面加上參數「 --soft 」，在這個模式下，工作目錄跟暫存區的檔案都不會被丟掉，因此 Commit 拆出來的檔案會直接放在暫存區。
若後面加上參數「 --hard 」，在這個模式下，不管是工作目錄以及暫存區的檔案都會丟掉。
若後面加上參數「 --mixed 」，在這個模式下，會把暫存區的檔案丟掉，就是 Commit 拆出來的檔案會留在工作目錄，但不會留在暫存區。


### git log：觀看歷史紀錄
輸入「 git log 」這個指令，可以觀看各個版本的歷史紀錄。
```
$ git log
commit fd1a6f41619eef6f27287959da3b6b6225428481                     ← 這個版本的編號
Author: Killua <unhunsowhat_nini@hotmail.com>                       ← 製作這個版本的作者
Date:   Sat Apr 20 22:02:14 2019 +0800                              ← 製作這個版本的日期時間

    first                                                           ← 這個版本的名稱
```
另外，輸入「 git log --oneline 」可以觀看比較簡短的歷史紀錄。
```
$ git log --oneline
a9cf3e7 (HEAD -> master) second
fd1a6f4 first
```

### git checkout：切換版本
若想切換到之前的某一個版本，輸入「 git checkout 」後面加上那個版本的版本編號，即可切換至該版本。
```
$ git checkout fd1a6f41619eef6f27287959da3b6b6225428481
```
若想切回至原本最新狀態的版本，輸入「 git checkout master 」，即可切換回最新的版本。
```
$ git checkout master
```

### .gitignore：要忽略的檔案
用 touch 先建立一個 「 .gitignore 」的檔案，再用 vim 開啟它，在裡面打上想要忽略的檔案的檔名並儲存，這個檔案將會被 Git 忽略，不會被加進版本控制裡。
```
$ touch .gitignore
$ vim .gitignore
```

## branch：Git 的影分身之術

### 為什麼要使用 branch ？
所謂的 branch 就是分支，有點像「影分身」的概念。當你要執行任務時，可以做出一個分身（分支）去幫你執行任務。如果任務不小心失敗了，頂多就是砍掉那個分身，再重新建立一個新的分身去執行任務就好，本尊並不會受到影響。

在開發專案的過程中，如果與多位夥伴一起協作同一個專案，這時就可以利用「分支」。有人負責修改 Bug ，有人負責研發新功能，這些都可以開不同分支來進行作業，等每個部分都測試完沒問題後，再把它合併到原來的本尊裡。

### git branch -v ：看看現在有哪些分支
輸入「 git branch -v 」可印出目前在這個專案有哪些分支。Git 會幫你預設一個名為 master 的分支，前面的星號 * 表示現在正在這個分支上。
```
$ git branch -v
* master a9cf3e7 second
```

### git branch：增加一個新分支
若要增加一個新分支，則輸入「 git branch 」在後面加上想要的分支成稱(例如：new )。
```
$ git branch new
```
### git branch -m：分支改名
若想要將分支改名，輸入「$ git branch -m 」後面加上「想改名的分支名稱」（new），空格後再加上「想修改的新名稱」（new1)。
```
$ git branch -m new new1
```

### git branch -d：刪除分支
若想要刪除分支，輸入「 git branch -d 」後面加上「想刪除的分支名稱」。
```
$ git branch -d new
```
但是如果要刪的分支還沒被完全合併，這時 Git 會不讓你刪掉這個分支。這時就要使用 「 git branch -Ｄ 」來強制刪除分支。
```
$ git branch -D new
```

### git checkout：切換分支
若想要切換分支，輸入「 git checkout 」後面加上「想切換的分支名稱」。
```
$ git checkout new
```
另外，如果想要將「遠端的 branch 」給載下來，也可以使用 git checkout 」指令，後面加上「遠端的分支名稱」，即可把遠端的 branch 給抓下來給抓下來顯示在 local 端。

### git merge：合併分支
假設現在有兩個分支，一個是本尊「 master 」，另一個是分身「 new 」，現在分身任務執行完畢，要把它合併回本尊了，這時後要先切換回「 master 」這個分支。
接下來輸入「 git merge 」後面加上分身的名稱「 new 」，這時後在分身「 new 」裡新增或修改後的檔案，因為和 「 master 」合併完成，所以現在在「 master 」分支也有一份了。
```
$ git checkout master
$ git merge new
```

### 當合併發生衝突
假設我在「 master 」修改了「 joke1.txt 」這個檔案，然後在「 new 」這個分支也修改了「 joke1.txt 」這個檔案，當我們用「 git merge 」將這兩個分支合併時，就會發生衝突。如下：
```
$ git merge new
Auto-merging joke1.txt
CONFLICT (content): Merge conflict in joke1.txt
Automatic merge failed; fix conflicts and then commit the result.

```

這時， Git 發現是「 joke1.txt 」這個檔案有問題，所以我們要打開「 joke1.txt 」來檢查裡面的內容。
```
<<<<<<< HEAD
這是一個笑話唷，哈哈哈。
=======
這是另一個笑話唷，喔喔喔。
>>>>>>> new
```
打開後發現，「<<<<<<< HEAD」和「=======」包起來的內容是「 master 」修改的部分，而「=======」和「>>>>>>> new」包起來的內容是「 new 」修改的部分。
所以這時只要將正確的部分留下來，其他部分刪除後，在「 master 」再新增一個新的版本後，就可以成功將「 new 」合併進「 master 」裡了。
```
$ git commit -am "fourth"
$ git merge new
Already up to date.

```

### 後記

菜哥，都說了這麼多了，應該學會 Git 了吧，還不趕快去拿個笑話冠軍給我瞧瞧！

