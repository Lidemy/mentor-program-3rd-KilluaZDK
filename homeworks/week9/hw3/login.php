<?php
  if (isset($_COOKIE["user_id"])) {
    header("location:comment.php");
  }

  require_once('./conn.php');

  // 判斷變數是否存在
  if (isset($_POST['account']) && isset($_POST['password']) && !empty($_POST['account']) && !empty($_POST['password'])) {
    $account = $_POST['account'];
    $password = $_POST['password'];

    // 驗證會員帳號密碼
    $sql = "SELECT * FROM killuaZDK_users WHERE account = '$account'";
    $result = $conn->query($sql);

    // 判斷是否有這個帳號
    if ($result->num_rows <= 0) {
      echo '帳號錯誤！';
      return;
    }
    
    $row = $result->fetch_assoc();

    // 驗證密碼是否正確
    if ($password !== $row['password']) {
      echo '密碼錯誤！';
      return;
    }

    $user_id = $row['user_id'];
    $nickname = $row['nickname'];
    setcookie("user_id", $user_id, time()+3600*24);
    setcookie("nickname", $nickname, time()+3600*24);

    header("location:comment.php");
  }

  $conn->close();
?>

<html> 
  <head> 
    <meta charset='utf8' />
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' href='./css/reset.css'>
    <link rel='stylesheet' href='./css/user.css'>
    <title>KilluaZDK_login</title>
  </head>
  <body>
    <main class='main'>
      <div class='bg__pattern'>CHAT</div>
      <div class='user'>
        <div class='user__title'>會員登入</div>
        <div class='main__waring'>
          <div class='main__warning-text'>本站為練習用網站，</div>
          <div class='main__warning-text'>因教學用途刻意忽略資安的實作，</div>
          <div class='main__warning-text'>註冊時請勿使用任何真實的帳號或密碼</div>
        </div>
        <form action='login.php' method='post'>
          <div class='user__information'>
            <div class='user__information-wrapper'>
              <div class='user__information-title'>帳號</div>
              <input id='account' type='text' name='account' placeholder="請輸入帳號..." />
            </div>
            <div class='user__information-wrapper'>
              <div class='user__information-title'>密碼</div>
              <input id='password' type='password' name='password' placeholder="請輸入密碼..." />
            </div>
            <input class='user__information-submit' type='submit' value='登入' />
            <div class='circle'></div>
          </div>
        <form>
      </div>
    </main>
    <footer class='footer'>
      <p>© KilluaZDK 2019 </p>
    </footer>
  </body>
</html>