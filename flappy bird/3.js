		$(document).ready(function() {
			var i=0;
			var t=1;
			var time=null;
			var time2=null;
			var num_cls=0;
			$(".text-2 p a").click(function(event){
				if(event.target==this){
					$(".bac-img").attr("src","img/2.png");
					$(".explain").show();
				    $(".text-1").hide();
				    $(".text-2").hide();
				    $(".bird").show();
				    time=setInterval(function(){
                        if(i>2)
                        {
                    	    i=0;
                        }
					    $(".bird-img").attr("src","img/bird1_"+i+".png");
					    i=i+1;
				    },100);
				    var img_up_1=document.createElement('img');
				    var img_up_2=document.createElement('img');				    
				    var random_num_1=parseInt(Math.random()*(75-1)+1);	
				    var random_num_2=parseInt(Math.random()*(75-1)+1);	
				    var img_down_1=document.createElement('img');
				    var img_down_2=document.createElement('img');			    
				    	img_up_1.src=img_up_2.src='img/pipe_down.png';
				    	img_down_1.src=img_down_2.src='img/pipe_up.png';
				        $('.first_up').append(img_up_1);
				        $('.first_up').css({
				        	marginTop: random_num_1+'px',				      
				        });
				        $('.second_up').append(img_up_2);
				        $('.second_up').css({
				        	marginTop: random_num_2+'px',				      
				        });				        			    
				        $('.first_down').append(img_down_1);
				        $('.first_down').css({
				        	marginTop: random_num_1+'px',				      
				        });
				        $('.second_down').append(img_down_2);	
				        $('.second_down').css({
				        	marginTop: random_num_2+'px',				      
				        });				        
				    $(".bac-img,.explain,.bird,.first_up,.first_down,.second_up,.second_down").click(function(event) {
				    	clearInterval(time2);
				    	$('.first_up,.first_down,.second_up,.second_down').show();
				    	$(".explain").hide();
				    	$(".bird").stop(true);
					    $(".bird").animate({
						    top:'-=40px'
					    },200);
					    $(".bird").animate({	
					    	top:'185px'
					    },800,function(){
					    	var a=0;
					    	var b=0;
					    	var c=0;
					    	clearInterval(time);
					    	clearInterval(time2);
					    	$(".bac-img,.explain,.bird,.first_up,.first_down,.second_up,.second_down").unbind();
					    	if(num_cls>=10)
					    	{
					    		num_cls=num_cls+'';
					    		a=num_cls[0];
					    		b=num_cls[1];
					    		c=num_cls[0];
					    	}
					    	else
					    	{
					    		c=0;
					    		b=num_cls;
					    	}
					    	var font_1=document.createElement('img');
					    	var font_2=document.createElement('img');
					    	var font_3=document.createElement('img');
					    	font_1.src='img/font_0'+a+'.png';
					    	font_2.src='img/font_0'+b+'.png';
					    	font_3.src='img/medals_'+c+'.png';
					    	$('.font_one').append(font_1);
					    	$('.font_two').append(font_2);
					    	$('.over_img').append(font_3);
					    	$(".font_one,.font_two,.over_img,.gameover,.score,.again").show();
					    	$('.again').click(function(event) {
					    		location.reload();
					    	});
					    });
					    function move(){
					    	var first_up=$('.first_up').get(0);
					    	var first_down=$('.first_down').get(0);
					    	var second_up=$('.second_up').get(0);
					    	var second_down=$('.second_down').get(0);					    	
					    	if(first_up.offsetLeft<=-52){
					    		var random_num_1=parseInt(Math.random()*(75-1)+1);
					    		first_up.style.marginTop=random_num_1+'px';
					    		first_down.style.marginTop=random_num_1+'px';
					    		first_up.style.left=370+'px';
					    		first_down.style.left=370+'px';
					    		num_cls+=1;    	
					    	}
					    	else if(second_up.offsetLeft<=-52){
					    		var random_num_2=parseInt(Math.random()*(75-1)+1);
					    		second_up.style.marginTop=random_num_2+'px';
					    		second_down.style.marginTop=random_num_2+'px';
					    		second_up.style.left=370+'px';
					    		second_down.style.left=370+'px';
					    		num_cls+=1; 
					    	}
					    	else {
					    	    first_up.style.left=first_up.offsetLeft-1+'px';
					    	    first_down.style.left=first_down.offsetLeft-1+'px';
					    	    second_up.style.left=second_up.offsetLeft-1+'px';
					    	    second_down.style.left=second_down.offsetLeft-1+'px';
					    	};
					    	if(first_up.offsetLeft<=56&&first_up.offsetLeft>=-20)
					    	{
					    		var bird=$(".bird").get(0);	
					    		if(125-48+14+parseInt(first_down.style.marginTop)<parseInt(bird.style.top)){
                                    clearInterval(time);
                                    clearInterval(time2); 
                                    $(".bac-img,.explain,.bird,.first_up,.first_down,.second_up,.second_down").unbind();                             
					    		}
					    		else if(30-14+parseInt(first_up.style.marginTop)>parseInt(bird.style.top)){
					    		    clearInterval(time);
                                    clearInterval(time2);
                                    $(".bac-img,.explain,.bird,.first_up,.first_down,.second_up,.second_down").unbind();
					    		}                         
					    	}
					    	if(second_up.offsetLeft<=56&&second_up.offsetLeft>=-20)
					    	{
					    		var bird=$(".bird").get(0);
					    		if(125-48+14+parseInt(second_down.style.marginTop)<parseInt(bird.style.top)){
                                    clearInterval(time);
                                    clearInterval(time2);
                                    $(".bac-img,.explain,.bird,.first_up,.first_down,.second_up,.second_down").unbind()	;
					    		}
					    		else if(30-14+parseInt(second_up.style.marginTop)>parseInt(bird.style.top)){
					    		    clearInterval(time);
                                    clearInterval(time2);
                                    $(".bac-img,.explain,.bird,.first_up,.first_down,.second_up,.second_down").unbind(); 
					    		}     
					    	}
					    }
					    time2=setInterval(move,10)	
					    move();			
			        });	

			    }
			});
		});