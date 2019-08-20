<?php
  require_once('./conn.php');

  if (isset($_POST['content']) && !empty($_POST['content'])) {
    $content = $_POST['content'];
    $user_id = $_COOKIE['user_id'];
    $sql = "INSERT INTO killuaZDK_comments(content, user_id) VALUES ('$content', '$user_id')";

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
    <title>KilluaZDK_comment</title>
  </head>
  <body>
    <nav class='nav'>
      <a class='nav__title' href='./comment.php'>CHAT</a>
      <div class='nav__bar'>
<?php if (isset($_COOKIE["user_id"])) { ?>
        <!-- 登入狀態的按鈕 -->
        <div class='nav__bar-menu'><?php echo $_COOKIE['nickname']; ?></div>
        <a class='nav__bar-menu log__button' href ='./logout.php'>Log out</a>
<?php } else { ?>        
        <!-- 登出狀態的按鈕 -->
        <a class='nav__bar-menu' href='./register.php'>Create Your ID</a>
        <a class='nav__bar-menu log__button' href ='./login.php'>Log in</a>
<?php } ?>
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

<?php if (isset($_COOKIE["user_id"])) { ?>
      <div class='board'>
        <div class='board__input'>
          <div class='board__input-title'><?php echo $_COOKIE['nickname']; ?></div>
          <form action='comment.php' method='post'>
            <div class='board__input-area'>
              <textarea id='input-area' name="content" rows="5" placeholder="Write a response..."></textarea>
            </div>
            <input class='board__input-submit' type='submit' value='留言' />          
          </form>
        </div>
      </div>
<?php } ?>

      <div class='message'>
        <div class='message__title'>最新留言</div>
<?php
  $sql_message = "SELECT * FROM killuaZDK_comments INNER JOIN killuaZDK_users ON killuaZDK_comments.user_id=killuaZDK_users.user_id ORDER BY time DESC LIMIT 50";
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