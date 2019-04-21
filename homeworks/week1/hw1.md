# 交作業流程

## 寫作業

1. 開一個新的 branch：git branch week1 。
2. 切換到 branch：git checkout week1 。
3. 保存版本：當寫作業每寫到一個段落時，記得 git commit -am 來一邊保存版本。

## 上傳作業

1. 完成作業後，把 branch push 至 github：git push origin week1。
2. 上傳完成後，會在 github 上看到新的分支，並點擊「 Compare & pull request 」。
3. 輸入標題後，若有心得或問題也可以打在上面，完成後按下「 Create pull request 」，並複製網址。
4. 到「 homeworks-3rd 」，並建立一個「 New issue 」。
6. 輸入標題，若是第一週的作業，則打上 [Week1]，內容裡貼上 PR 的網址，下方一樣可以打問題或心得，完成後按下「 Submit new issue 」。

## Huli 改完作業

1. Huli 改完作業，會將 issue close，並將遠端上的分支 merge 到 master，代表作業沒問題囉。
2. 本地切換至 branch master：git checkout master
3. 將遠端 merge 完的 master 拉回 local：git pull origin master
4. 最後將 branch hw1 分支刪除：git branch -d week1。本週的作業就完成了！

