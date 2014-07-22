<?php
// サイトコード
Vizualizer_Configure::set("timezone", "Asia/Tokyo");

// サイトコード
Vizualizer_Configure::set("site_code", "infection");

// サイト名
Vizualizer_Configure::set("site_name", "ツイッターツール");

// サイトメールアドレス
Vizualizer_Configure::set("site_email", "info@sweetberry.jp");

// アクセスドメイン
Vizualizer_Configure::set("site_domain", $_SERVER["SERVER_NAME"]);

// サイトホームディレクトリ
Vizualizer_Configure::set("site_home", realpath(dirname(__FILE__) . DIRECTORY_SEPARATOR . "..") . DIRECTORY_SEPARATOR . "templates2");

// データベースの接続設定
Vizualizer_Configure::set("database", array(
    "default" => array(
        "read" => array(
            "dbtype" => "mysql", "host" => "127.0.0.1",
            "user" => "viz_twitter", "password" => "viz_twitter",
            "database" => "viz_twitter", "query" => "SET NAMES utf8"
        ),
        "write" => array(
            "dbtype" => "mysql", "host" => "127.0.0.1",
            "user" => "viz_twitter", "password" => "viz_twitter",
            "database" => "viz_twitter", "query" => "SET NAMES utf8"
        )
    )
));

// 機能名
Vizualizer_Configure::set("f_login", "ログイン");
Vizualizer_Configure::set("f_company", "自社管理");
Vizualizer_Configure::set("f_staff", "自社担当者管理");
Vizualizer_Configure::set("f_split", "分配比率管理");
Vizualizer_Configure::set("f_customer", "顧客法人管理");
Vizualizer_Configure::set("f_contact", "顧客管理");
Vizualizer_Configure::set("f_bill", "請求案件管理");
Vizualizer_Configure::set("f_payment", "入金管理");
Vizualizer_Configure::set("f_seo", "SEO系案件管理");

// 画面名
Vizualizer_Configure::set("s_index", "一覧画面");
Vizualizer_Configure::set("s_edit", "詳細／入力画面");
Vizualizer_Configure::set("s_confirm", "登録内容確認画面");
Vizualizer_Configure::set("s_complete", "登録完了画面");

// Twitterの画像保存先
Vizualizer_Configure::set("twitter_image_savepath", "/upload");

