<?php
    session_start();

    $color_check = array('#0077ff','#00c220','#c50000');
    $mode_check = array('black', '#d3d3d3');

    if (!isset($_SESSION['color'])) {
        $_SESSION['color'] = $color_check[0];
    }
    if (!isset($_SESSION['mode'])) {
        $_SESSION['mode'] = $mode_check[0];
    }

    if (count($_POST) !== 0) {
        if (in_array($_POST['color-selection'], $color_check)) {
            if ($_SESSION['color'] != $_POST['color-selection']) {
                $_SESSION['color'] = $_POST['color-selection'];
            }
        }
        if (in_array($_POST['mode-selection'], $mode_check)) {
            if ($_SESSION['mode'] != $_POST['mode-selection']) {
                $_SESSION['mode'] = $_POST['mode-selection'];
            }
        }
    }

    $color = $_SESSION['color'];
    $mode = $_SESSION['mode'];
    
    $hostUri = "$_SERVER[REQUEST_URI]";
    $pattern = '/index.php.*/';
    $manip = preg_match($pattern, $hostUri, $matches);
    
    if (!isset($_GET['page'])) {   
        $_GET['page'] = 'HOME';
    }
    switch($_GET['page']) {
        case 'HOME':
            $include = 'HOME';
            break;
        case 'REA':
            $include = 'REA';
            break;
        case 'PERSONAL':
            $include = 'PERSONAL';
            break;
        default:
            $include = 'invalid';
    }
?>
<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="UTF-8">
        <title>Portfolio S Visser</title>
        <meta name="description" content="php base">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" href="css/stylesheet.css">
        <style>
            :root {
                --maincolor: <?=$color?>;
                --secondcolor: <?=$mode?>;
            }
        </style>
        <script src="js/script.js" defer></script>
        <script src="https://kit.fontawesome.com/9f77a6e6f4.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div id="container">
            <main>
                <div id="top-bar">
                    <p id="nav-header"><a href="index.php" id="nav-header">PORTFOLIO_</a></p>
                    <form action="<?=$matches[0]?>" method="post">
                        <label for="color-select">Colour:</label>
                        <select name="color-selection" id="color-select">
                            <option id="blue-select" value="#0077ff" <?php if ($color == '#0077ff') echo "selected";?>>Blue</option>
                            <option id="green-select" value="#00c220" <?php if ($color == '#00c220') echo "selected";?>>Green</option>
                            <option id="red-select" value="#c50000" <?php if ($color == '#c50000') echo "selected";?>>Red</option>
                        </select>
                        <label for="mode-select">mode:</label>
                        <select name="mode-selection" id="mode-select">
                            <option id="dark-mode" value="black" <?php if ($mode == 'black') echo "selected";?>>dark</option>
                            <option id="light-mode" value="#d3d3d3" <?php if ($mode == '#d3d3d3') echo "selected";?>>light</option>
                        </select>
                        <input type="submit" value="submit">
                    </form>
                </div>
                <nav id="main-nav">
                    <section class="nav-section"><a href="index.php?page=HOME">HOME</a></section>
                    <section class="nav-section"><a href="index.php?page=REA">REA WORK</a></section>
                    <section class="nav-section"><a href="index.php?page=PERSONAL">PERSONAL</a></section>
                    <section class="nav-section"><a href="https://github.com/spppie" target="_blank" class="a-ext">GITHUB<i class="fa-solid fa-square-arrow-up-right fa-xs"></i></i></a></section>
                </nav>
                <section id="main-section">
                    <?php include 'views/'.$include.'.php'?>
                </section>
            </main>
        </div>
    </body>
</html>