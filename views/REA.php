<?php
    if (!isset($_GET['sub-page'])) {   
        $_GET['sub-page'] = 'HOME';
    }
    switch($_GET['sub-page']) {
        case 'HOME':
            $sub_include = 'HOME';
            break;
        case 'HTML':
            $sub_include = 'HTML';
            break;
        case 'CSS':
            $sub_include = 'CSS';
            break;
        case 'SEO':
            $sub_include = 'SEO';
            break;
        case 'JavaScript':
            $sub_include = 'JavaScript';
            break;
        case 'PHP':
            $sub_include = 'PHP';
            break;
        default:
            $sub_include = 'invalid';

    }
    
?>
<nav id="sub-nav">
    <section class="nav-section"><a href="portfolio.php?page=REA&sub-page=HTML">HTML</a></section>
    <section class="nav-section"><a href="portfolio.php?page=REA&sub-page=CSS">CSS</a></section>
    <section class="nav-section"><a href="portfolio.php?page=REA&sub-page=SEO">SEO</a></section>
    <section class="nav-section"><a href="portfolio.php?page=REA&sub-page=JavaScript">JavaScript</a></section>
    <section class="nav-section"><a href="portfolio.php?page=REA&sub-page=PHP">PHP</a></section>
</nav>

<?php include 'views/REA-sub/REA-'.$sub_include.'.php'?>