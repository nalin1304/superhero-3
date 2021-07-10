var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

image_width = 30;
image_height = 30;

var player_object= "";
var image_object= "";

function player_update()
{
	fabric.Image.fromURL("thanos.png",function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
key_pressed=e.keyCode ;
console.log(key_pressed);
if(e.shiftKey==true&&key_pressed=='83'){
    console.log("S&SHIFT ARE PRESSED TOGETHER") ;
    block_img_height=block_img_height+10;
    block_img_width=block_img_width+10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;
}
if(e.shiftKey==true&&key_pressed=='80'){
    console.log("P&SHIFT ARE PRESSED TOGETHER") ;
    block_img_height=block_img_height-10;
    block_img_width=block_img_width-10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;
}
if(key_pressed=='b'){
    player_object('ironman_body.png') ;
    console.log("b is pressed");
    
    }
    if(key_pressed=='76'){
        player_object('spiderman_leg.png');
        console.log("l is pressed");
    }
        if(key_pressed=='72'){
            player_object('thor_right_hand.png');
            console.log("h is pressed");
            
            }
            if(key_pressed=='69'){
                player_object('captain_america_left_hand.png');
                console.log("e is pressed");
                
                }
                if(key_pressed=='70'){
                    player_object('ironman_face.png');
                    console.log("f is pressed");
                    
                    }

                if(key_pressed=='37'){
                    left();
                    console.log("left is pressed") ;
                }
                if(key_pressed=='38'){
                    up();
                    console.log("up is pressed") ;
                }
                if(key_pressed=='39'){
                    right();
                    console.log("right is pressed") ;
                }
                if(key_pressed=='40'){
                    down();
                    console.log("down is pressed") ;
                }
               
        


}
