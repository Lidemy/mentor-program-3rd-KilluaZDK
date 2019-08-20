<?php
  require_once('./conn.php');

  if (isset($_POST['nickname']) && isset($_POST['content']) && !empty($_POST['nickname']) && !empty($_POST['content'])) {
    $nickname = $_POST['nickname'];
    $content = $_POST['content'];
    $sql = "INSERT INTO killuaZDK_hw2_comments(nickname, content) VALUES ('$nickname', '$content')";

    if ($conn->query($sql) === TRUE) {
      header("location:comment.php");
    } else {
      echo 'error: ' . $sql . '<br>' . $conn->error;
    }
  }
?>

<html> 
  <head> 
    <meta charset='utf8' />
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' href='./css/reset.css'>
    <link rel='stylesheet' href='./css/comment.css'>
    <title>KilluaZDK_week9_hw2</title>
  </head>
  <body>
    <nav class='nav'>
      <div class='nav__title'>CHAT</div>
      <div class='nav__bar'>
        <div class='nav__bar-menu'>Create Your ID</div>
        <div class='nav__bar-menu login'>Log in</div>
      </div>
    </nav>
    <main class='main'>
      <div class='bg__pattern'>CHAT</div>
      <div class='main__title'>CHAT</div>
      <div class='main__waring'>
        <div class='main__warning-text'>本站為練習用網站，</div>
        <div class='main__warning-text'>因教學用途刻意忽略資安的實作，</div>
        <div class='main__warning-text'>註冊時請勿使用任何真實的帳號或密碼</div>
      </div>
      <div class='board'>
        <div class='board__input'>
          <div class='board__input-title'>我要留言</div>
          <form action='comment.php' method='post'>
            <input class='board__id' type="text" name='nickname' placeholder="請輸入暱稱..." />
            <div class='board__input-area'>
              <textarea id='input-area' name="content" rows="5" placeholder="Write a response..."></textarea>
            </div>
            <input class='board__input-submit' type='submit' value='留言' />          
          </form>
        </div>
        <div class='board__view'></div>
      </div>
      <div class='message'>
        <div class='message__title'>最新留言</div>
<?php
  $sql_message = "SELECT * FROM killuaZDK_hw2_comments ORDER BY time DESC LIMIT 50";
  $result_message = $conn->query($sql_message);
  
  if ($result_message->num_rows > 0) {
    while ($row = $result_message->fetch_assoc()) {
?>
      <div class='message__content'>
        <div class='message__user'>
          <div class='message__user-name'><?php echo $row['nickname']; ?></div>
          <div class='message__user-date'><?php echo $row['time']; ?></div>
        </div>
        <div class='message__text'><?php echo $row['content']; ?></div>
        <div class='circle'></div>
      </div>
<?php
    }
  }
?> 
    </main>
    <footer class='footer'>
      <p>© KilluaZDK 2019 </p>
    </footer>
  </body>
</html>