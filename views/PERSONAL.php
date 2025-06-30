<?php
    if (!isset($_GET['sub-page'])) {   
        $_GET['sub-page'] = 'HOME';
    }
    switch($_GET['sub-page']) {
        case 'HOME':
            $sub_include = 'HOME';
            break;
        case 'MARATHON':
            $sub_include = 'MARATHON';
            break;
        case 'PORTFOLIO':
            $sub_include = 'PORTFOLIO';
            break;
        default:
            $sub_include = 'invalid';

    }
    
?>
<nav id="sub-nav">
    <section class="nav-section"><a href="index.php?page=PERSONAL&sub-page=MARATHON">MARATHON</a></section>
    <section class="nav-section"><a href="index.php?page=PERSONAL&sub-page=PORTFOLIO">PORTFOLIO</a></section>
</nav>

<?php include 'views/PERSONAL-sub/PERSONAL-'.$sub_include.'.php'?>