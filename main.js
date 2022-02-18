function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio :true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/f62-nFfdK/model.json",modelReady);


}
function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear: "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        
        img1=document.getElementById("cat1");
        img2=document.getElementById("bird1");
        img3=document.getElementById("wolf1");

        if(results[0].label=="Cat")
        {
    
            img1.src="cat.gif";
            img2.src="cat.gif";
            img3.src="cat.gif";
        }
        else if(results[0].label=="Wolf")
        {
        
            img1.src="wolfGIF.gif";
            img2.src="wolfGIF.gif";
            img3.src="wolfGIF.gif";
        }
        else if(results[0].label=="Bird")
        {

            img1.src="birdGIF.gif";
            img2.src="birdGIF.gif";
            img3.src="birdGIF.gif";
        }
        else
        {
        
            img1.src="cat.gif";
            img2.src="wolfGif.gif";
            img3.src="birdGif.gif";
        }

    }
}