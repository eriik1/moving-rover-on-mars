canvas = document.getElementById("myCanvas")
ctx = canvas.getContext('2d')
nasaimagesarray=["nasa_1.jpg","nasa_6.jpeg","nasa_3.jpg","nasa_5.jpeg"]
randomnumber=Math.floor(Math.random()*4)
console.log(randomnumber)

rover_width = 100
rover_height = 90
background_image = nasaimagesarray[randomnumber]
roverimage = "rover.png"
rover_x = 10
rover_y = 10

function add() {
    background_imgtag = new Image()
    background_imgtag.onload = uplodebackground
    background_imgtag.src = background_image
    rover_imgtag = new Image()
    rover_imgtag.onlode = uploderover
    rover_imgtag.src = roverimage

}

function uplodebackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height)
}

function uploderover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height)
}
window.addEventListener("keydown", mykeydown)

function mykeydown(e) {
    keypressed = e.keyCode
    console.log(keypressed)
    if (keypressed == '38') {
        up()
        console.log("up")

    }
    if (keypressed == '40') {
        down()
        console.log("down")

    }
    if (keypressed == '37') {
        left()
        console.log("left")

    }
    if (keypressed == '39') {
        right()
        console.log("right")

    }


}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10
        console.log("when up arrow is pressed,x="+rover_x+"y="+rover_y)
        uplodebackground()
        uploderover()
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10
        console.log("when down arrow is pressed,x="+rover_x+"y="+rover_y)
        uplodebackground()
        uploderover()
    }
}
function left(){
    if(rover_x>0){
        rover_x=rover_x-10
        console.log("when left arrow is pressed,x="+rover_x+"y="+rover_y)
        uplodebackground()
        uploderover()
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10
        console.log("when right arrow is pressed,x="+rover_x+"y="+rover_y)
        uplodebackground()
        uploderover()
    }
}