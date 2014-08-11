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
            "dbtype" => "mysql", "host" => "192.168.122.96",
            "user" => "twitter", "password" => "twitter",
            "database" => "twitter", "query" => "SET NAMES utf8"
        ),
        "write" => array(
            "dbtype" => "mysql", "host" => "192.168.122.96",
            "user" => "twitter", "password" => "twitter",
            "database" => "twitter", "query" => "SET NAMES utf8"
        )
    )
));

// 機能名
Vizualizer_Configure::set("f_login", "ログイン");

// Twitterの画像保存先
Vizualizer_Configure::set("twitter_image_savepath", "/upload");

// リフォローを利用するかどうかのフラグ
Vizualizer_Configure::set("refollow_enabled", false);

// デフォルト設定を利用するカラム
Vizualizer_Configure::set("twitter_default_setting_keys", array(
));