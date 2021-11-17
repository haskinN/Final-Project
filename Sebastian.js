window.addEventListener("load", Main)
function Main()
{
let canvas1 = document.getElementById("canvas1");
    tshirt.addEventListener("click", function()
    {
        location.href="SebastianTShirts.html"
    });
    hoodies.addEventListener("click", function()
    {
        location.href="SebastianHoodies.html"
    });
    accessories.addEventListener("click", function()
    {
        location.href="SebastianAccessories.html"
    });
}
function shirtMain()
{
    home1.addEventListener("click", function()
    {
        location.href="SebastianMerch.html"
    });
}
function hoodieMain()
{
    home2.addEventListener("click", function()
    {
        location.href="SebastianMerch.html"
    });
}
function accessoryMain()
{
    home3.addEventListener("click", function()
    {
        location.href="SebastianMerch.html"
    });
}
function canvasMain()
{
canvas1.addEventListener("click", function()
{
let i = document.getElementById("map");
canvas1.drawImage(i,0,0,400,400);
});
}