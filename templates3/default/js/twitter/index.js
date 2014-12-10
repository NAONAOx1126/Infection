$(function() {
    $('.description').editable('<!--{base}-->/account/description.html', {
        type : "textarea",
        rows : 4,
        indicator : 'Saving...',
        tooltip   : 'Click to edit...',
        submit  : '登録する'
    });
    $(".retweet_group_id, .retweet_delay, .retweet_duration, .follow_unit_interval, .unfollow_unit_interval, .refollow_timeout, .daily_follows, .daily_unfollows").change(function(){
        var $this = $(this);
        $.ajax({
            "type": "POST",
            "url": "<!--{base}-->/twitter/SettingText.json",
            "data": {
                "target": $this.attr("data-column"),
                "value": $this.val()
            },
            "dataType": "jsonp",
            "success": function(data){
				reload(data.account_id);
            }
        });
    });
    $(".group_id").change(function(){
        var $this = $(this);
        $.ajax({
            "type": "POST",
            "url": "<!--{base}-->/twitter/AccountGroup.json",
            "data": {
                "target": $this.attr("data-column"),
                "index": $this.attr("data-index"),
                "value": $this.val()
            },
            "dataType": "jsonp",
            "success": function(data){
				reload(data.account_id);
            }
        });
    });
    $(".operator_id").change(function(){
        var $this = $(this);
        $.ajax({
            "type": "POST",
            "url": "<!--{base}-->/twitter/AccountOperator.json",
            "data": {
                "target": $this.attr("data-column"),
                "index": $this.attr("data-index"),
                "value": $this.val()
            },
            "dataType": "jsonp",
            "success": function(data){
				reload(data.account_id);
            }
        });
    });
    $(".follow_status, .retweet_status").click(function(){
		$this = $(this);
    	if(confirm("変更してもよろしいですか？")){
            $.ajax({
            	"type": "POST",
            	"url": "<!--{base}-->/twitter/AccountStatus.json",
            	"data": {
            		"target": $this.attr("id"),
            	},
            	"dataType": "jsonp",
            	"success": function(data){
            		if(data.error !== void 0){
            			alert(data.error);
            		}else if(data.account_id > 0){
                		reload(data.account_id);
            		}
            	}
            });
    	}
    });

   	reload = function(account_id){
   		if(account_id > 0){
   	        $.ajax({
   	        	"type": "POST",
   	        	"url": "<!--{base}-->/twitter/Account.json",
   	        	"data": {
   	        		"account_id": account_id
   	        	},
   	        	"dataType": "jsonp",
   	        	"success": function(data){
   	        	    if(data.setting.use_follow_setting == 0){
         	   	          $.ajax({
             	               "type": "POST",
             	               "url": "<!--{base}-->/twitter/SettingText.json",
             	               "data": {
             	                   "target": "use_follow_setting_" + data.account_id,
             	                   "value": 1
             	               },
             	               "dataType": "jsonp",
             	           });
     	        	    }
   	        	    if(data.setting.follower_limit_2 > 0){
       	   	          $.ajax({
           	               "type": "POST",
           	               "url": "<!--{base}-->/twitter/SettingText.json",
           	               "data": {
           	                   "target": "follower_limit_2_" + data.account_id,
           	                   "value": 0
           	               },
           	               "dataType": "jsonp",
           	           });
   	        	    }
   	        	    if(data.setting.follower_limit_3 > 0){
     	   	          $.ajax({
         	               "type": "POST",
         	               "url": "<!--{base}-->/twitter/SettingText.json",
         	               "data": {
         	                   "target": "follower_limit_3_" + data.account_id,
         	                   "value": 0
         	               },
         	               "dataType": "jsonp",
         	           });
 	        	    }
   	        	    if(data.setting.follower_limit_4 > 0){
       	   	          $.ajax({
           	               "type": "POST",
           	               "url": "<!--{base}-->/twitter/SettingText.json",
           	               "data": {
           	                   "target": "follower_limit_4_" + data.account_id,
           	                   "value": 0
           	               },
           	               "dataType": "jsonp",
           	           });
   	        	    }
   	        	    if(data.setting.follower_limit_5 > 0){
       	   	          $.ajax({
           	               "type": "POST",
           	               "url": "<!--{base}-->/twitter/SettingText.json",
           	               "data": {
           	                   "target": "follower_limit_5_" + data.account_id,
           	                   "value": 0
           	               },
           	               "dataType": "jsonp",
           	           });
   	        	    }
   	        	    if(data.setting.follower_limit_6 > 0){
       	   	          $.ajax({
           	               "type": "POST",
           	               "url": "<!--{base}-->/twitter/SettingText.json",
           	               "data": {
           	                   "target": "follower_limit_6_" + data.account_id,
           	                   "value": 0
           	               },
           	               "dataType": "jsonp",
           	           });
   	        	    }
   	        	    if(data.setting.follower_limit_7 > 0){
       	   	          $.ajax({
           	               "type": "POST",
           	               "url": "<!--{base}-->/twitter/SettingText.json",
           	               "data": {
           	                   "target": "follower_limit_7_" + data.account_id,
           	                   "value": 0
           	               },
           	               "dataType": "jsonp",
           	           });
   	        	    }
   	        	    if(data.setting.follower_limit_8 > 0){
       	   	          $.ajax({
           	               "type": "POST",
           	               "url": "<!--{base}-->/twitter/SettingText.json",
           	               "data": {
           	                   "target": "follower_limit_8_" + data.account_id,
           	                   "value": 0
           	               },
           	               "dataType": "jsonp",
           	           });
   	        	    }
   	        	    if(data.setting.follower_limit_9 > 0){
       	   	          $.ajax({
           	               "type": "POST",
           	               "url": "<!--{base}-->/twitter/SettingText.json",
           	               "data": {
           	                   "target": "follower_limit_9_" + data.account_id,
           	                   "value": 0
           	               },
           	               "dataType": "jsonp",
           	           });
   	        	    }
   	        	    $("#acc" + data.account_id + " .tweet_count").text(data.status_count);
   	        		$("#acc" + data.account_id + " .friend_count").text(data.friend_count);
   	        		$("#acc" + data.account_id + " .follower_count").text(data.follower_count);
   	        		var $status = $("<span />").addClass("label");
   	        		if(data.status.follow_status == "1"){
   	        			$status.addClass("label-inverse").text("フォロー待機中");
   	        		}else if(data.status.follow_status == "2"){
   	        		    if(data.isUnfollowable){
   	        		        $status.addClass("label-important").text("アンフォロー中");
   	        		    }else{
      	        		    $status.addClass("label-success").text("フォロー実行中");
      	        		}
   	        		}else if(data.status.follow_status == "3"){
   	        			$status.addClass("label-info").text("フォロー終了");
   	        		}else if(data.status.follow_status == "4"){
   	        			$status.addClass("label-info").text("フォロー対象無し");
   	        		}else if(data.status.follow_status == "5"){
   	        			$status.addClass("label-warning").text("フォローリトライ");
   	        		}else if(data.status.follow_status == "6"){
   	        			$status.addClass("label-important").text("フォロースキップ");
   	        		}else{
   	        			$status.text("フォロー停止中");
   	        		}
   	        		$("#acc" + data.account_id + " .follow_status").html($status[0]);
   	        		var $status = $("<span />").addClass("label");
   	        		if(data.status.retweet_status == "1"){
   	        			$status.addClass("label-success").text("強化アカウントON");
   	        		}else{
   	        			$status.addClass("label-info").text("強化アカウントOFF");
   	        		}
   	        		$("#acc" + data.account_id + " .retweet_status").html($status[0]);
   	        		$("#acc" + data.account_id + " .follow_unit_interval").val(data.setting.follow_unit_interval);
   	        		$("#acc" + data.account_id + " .unfollow_unit_interval").val(data.setting.unfollow_unit_interval);
   	        		$("#acc" + data.account_id + " .daily_follows").val(data.setting.daily_follows_1);
   	        		$("#acc" + data.account_id + " .daily_unfollows").val(data.setting.daily_unfollows_1);
   	        		$("#acc" + data.account_id + " .refollow_timeout").val(data.setting.refollow_timeout);
   	        		$("#acc" + data.account_id + " .retweet_group_id").val(data.setting.retweet_group_id);
   	        		$("#acc" + data.account_id + " .retweet_delay").val(data.setting.retweet_delay);
   	        		$("#acc" + data.account_id + " .retweet_duration").val(data.setting.retweet_duration);
   	        		for(var index in data.groups){
   	   	        		$("#acc" + data.account_id + " .group_id[data-index='" + index + "']").val(data.groups[index]);
   	        		}
   	        		for(var index in data.operators){
   	   	        		$("#acc" + data.account_id + " .operator_id[data-index='" + index + "']").val(data.operators[index]);
   	        		}
   	        	}
   	        });
   		}
    }
});
