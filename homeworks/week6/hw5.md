## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

### <bgsound />
此標籤可插入背景音樂。
可加入 mp3、mid、wav、ra...等音效檔的名稱，src 為音樂檔路徑，loop 可控制音樂重複次數，若要一直重複播放，可使用infinite。

ex.
```html
<bgsound src="img/music.mp3" loop="5" />
```
### <textarea>
此標籤可以用來建立一個多行的文字輸入欄位，相較於 <input type="text"> 的單行輸入欄位，textarea 可以允許使用者輸入多行的文字，且具有 scrollbar 功能。
可透過 rows 與 cols 來設定欄位的高度與寬度，如果要有互動作用，則必須搭配 Form 表單功能。

ex.
```html
<textarea cols="50" rows="5">
　輸入你想要寫的內容...
</textarea>
```

### <select>
此標籤可製作一個下拉式選單，通常會在 `form` 中使用，可以自己設定選項。
最常見的例如：選擇年齡、居住地、購買款式...等。
`select` 裡的 `name` 是下拉式選單的名稱，包在 `<option>` 標籤裡的是會顯示在頁面上，讓使用者選的選項。
而每個 `option` 裡都有一個 `value`，這是讓程式讀的，不會顯示在頁面上。

ex.
```html
<form>
  <select name="YourFavorite">
  　<option value="Conan">柯南</option>
  　<option value="Hunter">獵人</option>
  　<option value="Neverland">約定的夢幻島</option>
    <option value="Kaguya">輝夜姬</option>
  　<option value="AttackOnTitan">進擊的巨人</option>
  </select>
</form>
```

## 請問什麼是盒模型（box modal）

盒模型就像是每個元素都被裝在一個盒子裡面。`Content` 為主要的內容物；`Padding` 為內容物與盒子之間的距離；`Border` 為盒子的厚度；`Margin` 為這個盒子與另一個盒子之間的距離。

### box-sizing
藉由設定 `box-sizing` 來控制元素設定寬高的方式，也就是設定盒子的大小的方式。預設值是 `content-box`。

* `box-sizing: content-box`：在設定 `border` 和 `padding` 時，盒模型的高度和寬度都會被改變。
   ex.如果元素原本為 weight:100px, height:200px，若要調整 `padding` 和 `border` 時，盒模型會超過原本設定（ weight:100px, height:200px ）的大小。

* `box-sizing: border-box`：在設定 `border` 和 `padding`時，不論如何調整，盒模型的高度和寬度都不會被改變。（較常使用）
   ex.同樣的情形，在 `border-box` 的狀態下，若要調整 `padding` 和 `border` 時，不論怎麼調整，盒模型都會是原本設定（ weight:100px, height:200px ）的大小。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

藉由操作 `display` 屬性，可以自由的選擇元素的顯示類型，每一種 HTML 元素都有預設的 `display` 值。
大部分的預設值是以下兩種：

`display: block`，「區塊元素」；`display: inline`，為「行內元素」。

### inline
為「行內元素」，代表元素：`span`、`a`。
元素會連著前面的元素，並排在同一行（不換行）。假設超過那一行的寬度，還是會自動跳到下一行。
不能調整區塊相關屬性的設定（如寬度與高度）。但調整 `margin` 時，只有左右可以調整。調整 `padding` 時，會增加元素的總高寬，但元素內容本身不會動。

### block
為「區塊元素」，代表元素：`div`、`h1`、`p`。
元素呈現一個區塊，佔滿一整列，不可和其他元素並排，可對此區塊做區塊屬性設定。

### inline-block
代表元素：`input`、`select`、`button`。
綜合上述兩者的優點，對外像 `inline` 一樣可並排；對內向 `block` 可調各種屬性。（和 `block` 的差別只差在 `inline-block` 可並排）

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

### static

### static
`position: static`，為所有元素的 `position` 的預設值。元素根據瀏覽器的預設值，自動排版在頁面中。

### relative
`position: relative`，為元素的「相對定位」。
藉由 `top`、`right`、`bottom`、`left` 去設定元素相對於「原本位置」（static 狀態下的位置）要偏移多少。
移動時不會影響到其它元素所在的位置，會保留「原本位置」的空間，其它元素不會補上來。

### fixed
`position: fixed`，根據 `viewort` 來定位元素的位置。且在上下滾動視窗時，也會固定在視窗的同一個位置不會變化。
和 relative 一樣可以藉由 `top`、`right`、`bottom`、`left` 去設定元素在瀏覽器視窗的位置。
例如：設定 `top: 0;left: 0`;，元素就會固定在瀏覽器視窗左上角的位置。當設定這個屬性時，元素原本的空間（static 狀態下的位置）就會消失，排在它下面的元素會補上來。它所在的位置不影響其他元素的空間與配置。

### absolute
`position: absolute`，為元素的「絕對定位」。
相對其上層元素的位置，藉由 `top`、`right`、`bottom`、`left` 做相對位置的移動。
`absolute` 與 `fixed` 的行為很像，不一樣的地方在於 `absolute` 元素的定位是在他所處上層容器的相對位置。
這個上層元素需要是一個「非 static 」的元素，例如：`relative`、`fixed` ...等。如果向上找到最後，在它上層沒有「可被定位」的元素，那這個元素的定位，就會是相對於該網頁所有內容（ `body` 元素）最左上角的絕對位置，看起來就像網頁的絕對位置一樣。
所以當你的畫面在捲動時，該元素還是會隨著頁面捲動。並且像 `fixed` 一樣，元素原本在的空間會消失，排在它下面的元素會遞補上來。它所在的位置不影響其他元素的空間與配置。