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

// Twitterの画像保存先
Vizualizer_Configure::set("twitter_image_savepath", "/upload");

// リフォローを利用するかどうかのフラグ
Vizualizer_Configure::set("refollow_enabled", false);

// デフォルト設定を利用するカラム
Vizualizer_Configure::set("twitter_default_setting_keys", array(
    "japanese_flg", "unlock_user_flg", "unique_icon_flg", "non_bot_flg",
    "follow_ratio_1", "daily_follows_1", "daily_unfollows_1",
    "follower_limit_2", "follow_ratio_2", "daily_follows_2", "daily_unfollows_2",
    "follower_limit_3", "follow_ratio_3", "daily_follows_3", "daily_unfollows_3",
    "follower_limit_4", "follow_ratio_4", "daily_follows_4", "daily_unfollows_4",
    "follower_limit_5", "follow_ratio_5", "daily_follows_5", "daily_unfollows_5",
    "follower_limit_6", "follow_ratio_6", "daily_follows_6", "daily_unfollows_6",
    "follower_limit_7", "follow_ratio_7", "daily_follows_7", "daily_unfollows_7",
    "follower_limit_8", "follow_ratio_8", "daily_follows_8", "daily_unfollows_8",
    "follower_limit_9", "follow_ratio_9", "daily_follows_9", "daily_unfollows_9"
));
