## 什麼是 DOM？

`DOM` 是瀏覽器提供的一個橋樑，讓 `Javascript` 可以選取 `HTML` 中的任何元素。`DOM` 將 `HTML` 看作是一個樹狀結構的物件，讓我們方便存取樹中的節點 (node) 來改變其結構、樣式 (CSS) 或內容。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

### 事件傳遞機制的順序

`Capturing Phase` → `Target Phase` → `Bubbling Phase`

### 捕獲

當使用者觸發 `DOM` 事件後，瀏覽器會從「根節點」開始，「由外到內」進行事件傳播，逐步向內傳遞。
因此當你點擊了子元素，如果父元素透過事件捕獲方式註冊了對應事件的話，會先觸動，會先觸發父元素綁定的事件。

### 冒泡

與事件捕獲相反，當使用者觸發 `DOM` 事件後，事件冒泡會「由內到外」進行事件傳播，直到根節點為止。

## 什麼是 event delegation，為什麼我們需要它？

Event Delegation (事件委派) 是一種利用 `Event Bubbling` 的機制，來減少監聽器數目的方法。
* `Event Bubbling`的特性：透過冒泡機制，如果在父節點上新增監聽事件後，去點取子節點也能夠事件傳遞成功，就算是後面才新增的子節點也同樣有效果。
* `e.target` 的特性：只要我們觸發哪一個元素就會得到哪一個元素的資料。

### 為什麼我們需要它？

* 當有過多重複的監聽器時
當子節點過多的時，不需要每個子節點都去新增監聽事件，這樣不僅佔記憶體空間而且很費時。只需要新增一個父節點的監聽事件，就能讓所有子節點觸發事件。方便把子節點們的事件統一處理。
ex. 如果有 100 個按鈕，就有 100 個重複的 click 事件。

* 方便地動態新增或修改元素
在新增或修改元素時，不需因元素的改動而修改事件綁定。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

### event.preventDefault()

阻止在瀏覽器上預設要發生的事件。

ex. 做一個簡單的密碼重複驗證
取得使用者輸入的「密碼」和「再輸入一次密碼」的值，並用 `preventDefault()`，當兩個密碼輸入不一致時，會跳出錯誤，阻止你送出表單這個動作。

### event.stopPropagation()

阻止事件傳遞行為。
`event.preventDefault()` 是阻止物件的預設行為，而 `event.stopPropagation()` 則是阻止捕獲冒泡的傳遞。
將 `event.stopPropagation()` 加在哪裡，事件的傳遞就斷在那裡，不會繼續往下傳遞。

ex.
```javascript
const a = document.querySelector('form');
a.addEventListener('submit', (event) => {
	event.stopPropagation();
});
```

因為事件只會傳遞到 form 的那一層，阻止後續的事件繼續傳遞，因此當按下的 <input type="submit"> 時，就不會有作用。