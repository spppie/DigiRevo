<?php
    session_start();
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

    // color not fully implemented
    $_SESSION['color'] = 'BLUE';
    switch($_SESSION['color']) {
        case 'BLUE':
            $color = '#0077ff';
            break;
        case 'RED':
            $color = '#c50000';
            break;
        case 'GREEN':
            $color = '#00c220';
            break;
        default:
            $color = '#0077ff';
    }
?>
<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="UTF-8">
        <title>Portfolio S Visser</title>
        <meta name="description" content="php base">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <style>
            :root {
                --maincolor: <?=$color?>;
                --secondcolor: black;
            }
        </style>
        <link rel="stylesheet" href="css/stylesheet.css">
        <script src="js/script.js" defer></script>
        <script src="https://kit.fontawesome.com/9f77a6e6f4.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div id="container">
            <main>
                <p id="nav-header"><a href="portfolio.php" id="nav-header">PORTFOLIO_</a></p>
                <nav id="main-nav">
                    <section class="nav-section"><a href="portfolio.php?page=HOME">HOME</a></section>
                    <section class="nav-section"><a href="portfolio.php?page=REA">REA WORK</a></section>
                    <section class="nav-section"><a href="portfolio.php?page=PERSONAL">PERSONAL</a></section>
                    <section class="nav-section"><a href="https://github.com/spppie" target="_blank" class="a-ext">GITHUB<i class="fa-solid fa-square-arrow-up-right fa-xs"></i></i></a></section>
                </nav>
                <section id="main-section">
                    <?php include 'views/'.$include.'.php'?>
                </section>
            </main>
        </div>
    </body>
</html>