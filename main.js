function startClassification()
{
   navigator.mediaDevices.getUserMedia({audio:true});
   Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0RNgaLTp3/model.json', modelLoaded) 
}

function modelLoaded()
{
   console.log("modelLoaded");
   Classifier.classify(gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
      console.log(error);
   }
 else
 { console.log(result);
   ramdom_number_r=Math.floor(Math.random()*255) +1;
   ramdom_number_g=Math.floor(Math.random()*255) +1;
   ramdom_number_b=Math.floor(Math.random()*255) +1;

document.getElementById("result_label").innerHTML=result[0].label;
document.getElementById("result_confidence").innerHTML=(result[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";
document.getElementById("result_confidence").style.color="rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";

img=document.getElementById("cat-meow");
img1=document.getElementById("dog-barking");
img2=document.getElementById("lion-roaring");
img3=document.getElementById("tiger-growling");

if(result[0].label=="meowing")
{
  img.src="cat-meow.gif";
  img1.src="dog.png";
  img2.src="lion.png"; 
  img3.src="tiger.png";
}

else if(result[0].label=="barking")
{
  img.src="cat.png";
  img1.src="dog-barking.gif";
  img2.src="lion.png"; 
  img3.src="tiger.png";
}

else if(result[0].label=="roaring")
{
  img.src="cat.png";
  img1.src="dog.png";
  img2.src="lion-roaring.gif"; 
  img3.src="tiger.png";
}

else if(result[0].label=="growling")
{
  img.src="cat.png";
  img1.src="dog.png";
  img2.src="lion.png"; 
  img3.src="tiger-growling.gif";
}

else
{
   img.src="cat.png";
   img1.src="dog.png";
   img2.src="lion.png"; 
   img3.src="tiger.png";
 }
}}




