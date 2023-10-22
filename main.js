var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromurl('BirthdayImage.jpg'), function(Img) {
        block_image_object.scaletoWidth(700);
        block_image_object.scaletoHeigth(510);
        block_image_object.set({
            top:0,
            left:0
        });
        Canvas.add(block_image_object);
    }
	
    
}

function playSound(){
    x.play();
	
}
