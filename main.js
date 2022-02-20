//https://teachablemachine.withgoogle.com/models/Md4pokhYk/model.json

Webcam.set({
    width:350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
        console.log("!Clicked snap!");
        classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Md4pokhYk/model.json',modelLoaded)
    });

function modelLoaded()
{
    console.log("model loaded")
}

}

function identify_snapshot(){
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("family-member").innerHTML = results[0].label;
        document.getElementById("Accuracy-of-member").innerHTML  = results[0].confidence.toFixed(3);
    }


}

