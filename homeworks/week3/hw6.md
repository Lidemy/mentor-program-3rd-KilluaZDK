## hw1：好多星星

### 把大問題拆成小問題

印出好多星星這題，一開始想有點複雜，但想到上週有幾個類似但比較基礎的練習題，先試著解出那幾題，會比較好思考這題的解題邏輯。

### 練習三：寫一個能夠印出 n 個 * 的函式

star(1) 預期輸出：
*
star(5) 預期輸出：
*
star(10) 預期輸出：
******

1. 先準備一張白紙（給一個空字串）
2. n 是 1 就寫下一顆星星。
3. n 是 2 就在後面再寫上一顆星星。
4. 因為一直重複在做同一件事情，所以可以使用迴圈來解題。

```js
function stars(n){
    let newStars = '';
    for(i = 1; i <= n; i += 1) {
        newStars += '*';
    }
    return newStars;
}
```

###  練習一：好多星星

stars(1) 預期輸出：
*

stars(3) 預期輸出：
*
**
***

stars(7) 預期輸出：
*
**
***
****
*****
******
*******

這題是上一題的進階版，一開始想到可以運用雙層迴圈的概念，讓上一題輸出的星星，逐行依序來增加。

```js
function repeatStars(n){
    let newStars = '';
    for(i = 1; i <= n; i += 1) {
        newStars += '*';
    }
}

function stars(n) {
    for (i = 1; i <= n; i += 1) {
        console.log(repeatStars(n));
    }
    return newStars;
 }
```

一開始是這樣寫，但印出來發現裡面寫的程式碼有問題，思考了一下 repeatStars(n) 傳進去的參數，好像不太對，於是改成：

```js
function repeatStars(n){
    let newStars = '';
    for(i = 1; i <= n; i += 1) {
        newStars += '*';
    }
    return newStars;
}

function stars(n) {
    for (i = 1; i <= n; i += 1) {
        console.log(repeatStars(i));
    }
 }
```

改完後，發現還是錯的，印出來會變成每行依序遞增兩顆星星。發現原來是如果沒有宣告 i 的話，預設會變成全域變數，所以兩個函式裡的 i 會是同一個變數，所以會互相干擾。因此改成：

```js 
function repeatStars(n){
    let newStars = '';
    for(let i = 1; i <= n; i += 1) {
        newStars += '*';
    }
    return newStars;
}

function stars(n) {
    for (let i = 1; i <= n; i += 1) {
        console.log(repeatStars(i));
    }
 }
```

###  hw1：好多星星（陣列版）

練習完前面兩題後，總算可以正式開始解 hw1 了。

1. 先給一個空陣列。
2. 讓上一題的好多星星，塞進陣列裡。

一開始是想，是不是要再給一個新的迴圈，於是得出：

```js
function repeatStars(n){
    let newStars = '';
    for(let i = 1; i <= n; i += 1) {
        newStars += '*';
    }
}

function stars(n) {
    for (let i = 1; i <= n; i += 1) {
        console.log(repeatStars(i));
    }
 }

function starArray(n) {
    let newArray = [];
    for(let i = 1; i <= n; i += 1) {
        newArray += newArray.push(newStars);
    }
    return newArray;
}
```
發現不太對，好像只要修改上一題第二個函式的邏輯就好。
於是得出：

```js
function repeatStars(n){
    let newStars = '';
    for(let i = 1; i <= n; i += 1) {
        newStars += '*';
    }
}

function stars(n) {
    let newArray = [];
    for (let i = 1; i <= n; i += 1) {
        console.log(repeatStars(i));
        newArray += newArray.push(newStars);
    }
    return newArray;
 }
```

還是怪怪的，newArray += newArray.push(newStars) 這句，前面的 newArray += 有點多此一舉，後面 push 裡放的值也怪怪的，於是改成：

```js
function repeatStars(n){
    let newStars = '';
    for(let i = 1; i <= n; i += 1) {
        newStars += '*';
    }
    return newStars;
}

function stars(n) {
    let newArray = [];
    for (let i = 1; i <= n; i += 1) {
        newArray.push(repeatStars(i));
    }
    return newArray
}
```
後來看了 Huli 的檢討，試著把它改成巢狀迴圈。

```js
function stars(n) {
    let newArray = [];
    for (let i = 1; i <= n; i += 1) {
        let newStars = '';
        for (let j = 1; j <= i; j += 1) {
            newStars += '*';
        }    
        newArray.push(newStars);
    } 
    return newArray;
}
```

## hw2：大小寫互換

### 解題邏輯

1. 先給一張白紙（空字串）。
2. 讓傳進來的自傳先轉成大寫。
3. 比較原本的字串和轉成大寫後的字串的每個字母是否相同。（ex. 比較 str[0] 和 upperStr[0] 是否相同）
4. 一樣的話：str[0] 是大寫，把 str[0].toLowerCase() 放進 newStr。
5. 不一樣的話：str[0] 是小寫，upperStr[0] 放進 newStr。

用「三元運算子」來寫，用 node 跑完後沒問題。

``` JS
function alphaSwap(str) {
  let newStr = '';
  let upperStr = str.toUpperCase();
  for (let i = 0; i < str.length; i += 1) {
    str[i] === upperStr[i] ? newStr += str[i].toLowerCase() : newStr += upperStr[i];
  }
  return newStr;
}
```
### 遇到問題

用 node 跑完後沒問題，但在跑 ESLint 時，卻出了錯。
錯誤碼：Expected an assignment or function call and instead saw an expression

### 解決問題

先搜尋了一下錯誤碼，發現應該是寫法出了錯。後來問了 Huli，了解三元運算子後面不建議接「運算」，包含「賦值」也算，後面最好是放一個值就好。所以以後在寫三元運算子的時候，要特別注意這個規則。


## hw3：判斷質數

### 解題邏輯

1. 如果傳進來的數字是 1，回傳 false。 
2. 如果傳進來的數字是 2，回傳 true。 
3. 質數的概念是只能被 1 和自己整除。檢查大於 1 小於自己的所有整數，是否可以整除自己。
4. 有的話，就回傳 false，沒有的話，回傳 true。

這題因為之前看過[ JS101 ]有解過這題，所以沒有什麼太大的問題。

## hw4：判斷迴文

### 解題邏輯

1. 先把字串反轉。
2. 比較本來的字串與反轉後的字串。
3. 如果一樣 return true ； 不一樣的話 return false。

這題依樣沒有什麼太大的問題。

## hw5：大數加法

### 解題重點

1. 運用直式加法
2. 取完字串後轉成數字：paresInt(str)
3. 兩個相加的數字位數不同時，要補 0。

### 解題邏輯

1. 取 a 和 b 的最後一個位數相加。
2. 將相加後的結果，取個位數放進答案裡。
3. 把十位數放進「待加數（）toAdd」裡。
4. 把「待加數」和 a 與 b 的倒數第二位數相加。
5. 將相加後的結果，取個位數放進答案裡。
6. 把十位數放進「待加數（）toAdd」裡。
......

一直重複做到：
1. a 沒數可加了。
2. b 沒數可加了。
3. 待加數沒數可加了。

### 遇到問題

* 如何取出 a 和 b 的個位數字？

因為 a 和 b 相加後的結果會是 0 <= a + b < 18，直式加法超過 10 後就要進位。因此如果 a + b 小於 10，則把答案放進 answer 裡，否則讓 a + b 的結果減掉 10，放進 answer 裡，並將「待加數」賦值為 1。
這時要注意的是，如果 a + b 小於 10，要將「待加數」賦值為 0，這是一開始沒有想到的地方。

* 當位數不一樣時，該如何相加？

這是這題最困難的地方，也是這題的解題重點。
當位數不一樣時，要在位數比較少的那一個數字前面「補 0」，補到和另一個數字位數一樣，是這題很重要的概念。
至於要在何時補 0，後來發現可以用「或」的條件來判斷。因為當數字取 index 時，如果 index 為負數時，會是 undefined，undefined 為 false。舉例來說:「 a[-1] || 0」，用「或」來判斷的話，它會 return 後面那個條件，也就是 0，如此一來就可以完成在前面補 0 的動作。