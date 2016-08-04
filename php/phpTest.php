<html>
  <head>
    <title>php text</title>
  </head>
  <body>
    <table>
    <?php
    echo '<p>Hello world</p>';
    //echo $_SERVER;
    echo $_SERVER['HTTP_USER_AGENT'];

    $r=0;
    while($r <= 15) {
      echo "<tr>";
        $g=0; while($g <= 15) {
          echo "<tr>";
            $b=0; while($b <= 15) {
              $background = dechex($r) . dechex($r) . dechex($g) .dechex($g). dechex($b). dechex($b);
              echo "<td bgcolor=\"#$background\">#$background</td>";
              $b = $b+3;
            }
            $g = $g+3;
        }
        $r = $r+3;
    }
    ?>
    </table>
  </body>
</html>
