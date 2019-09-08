	$(document).ready(function() {

	    $.get("https://api.jsonbin.io/b/5d75699a2d1fb96463cbbd42/4", function(data) {
	       var obj=JSON.stringify(data);
	       var newobj=JSON.parse(obj);
	        //console.log(newobj);
	        for(i=0;i<newobj.data.length;i++){
	        	let data=newobj.data;
	        	//console.log(data[i].profile_name);
	        	let post_image=data[i].post_image;
	        	let profile_name=data[i].profile_name;
	        	let profile_picture=data[i].profile_picture;
	        	let views=data[i].views;
	        	console.log(post_image + profile_name + profile_picture + views  )
	        	$(".outer-block").append('<div class="card"><div class="header"><div class="pro-img"><img src="'+profile_picture+'" /><span class="pro-name">'+profile_name+'</span>'+
 				'</div><div class="more-option">...</div></div>'+'<div class="main-container"><img src="'+post_image+'"/></div><div class="footer"><div class="glyphicon">'+
                '<i class="glyphicon glyphicon-heart-empty"></i>'+
                '<i class="glyphicon glyphicon-comment"></i><br />'+
                '<span class="views">'+views+'</span><br />'+
                '<span class="pro-name">'+profile_name+'</span>'+
            '</div>'+
            '<div class="bookmark">'+
                '<i class="glyphicon glyphicon-bookmark"></i>'+
            '</div>'+
        '</div></div>')
	        }
	    });
	});
