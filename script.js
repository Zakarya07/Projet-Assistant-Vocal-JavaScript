const btn = document.querySelector('.talk');
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const greetings = [`Je vais bien merci`,
 'Je suis trés gentil',
  'Merci de demander, et vous', 
  'Allez lache moi', 'Gaulmon de banlieu'];

const weather = [`Pour aujourd'hui le soleil sera au rendez-vous`,
 'Il pleut, il pleut bergère rentrez les moutons,rentrez les moutons, non sérieusement, prévoyez un parapluie ',
'Il neige', 'il pleut', 'il fait soleil', 'la température actuel est de 20° celsius', 'la température actuel est de 33° celsius',
'la température actuel est de 6° celsius'];

const lightSpeed = [`La vitesse de la lumière dans le vide, communément notée c pour «célérité» est une constante physique
 universelle et un invariant relativiste, importante dans de nombreux domaines de la physique. Sa valeur exacte est 299 792 458 m/s
  (environ 3 × 108 m/s ou 300 000 km/s). Selon la relativité restreinte, la vitesse
 de la lumière dans le vide est la vitesse maximale que peuvent atteindre toutes formes de matière ou d'information dans l'univers. 
 La lumière est l'élément le plus rapide de l'univers, pour aller de la terre à la lune il faudrait à peine 1.2 seconde pour
  la lumière pour y parvenir`];

  const testingProject = ['vous avez dit test pour voir si je fonctionner correctement.. , ne vous inquiétez pas je marche trés bien grâce à vous !']

  


const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log(`Voice is Activated , you can speak to microphone`);

}

recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);

}


//  add the listener to the  button


btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();


    if(message.includes('comment vas-tu')||message.includes('tu vas bien') ){
       const answerForGreetings= greetings[Math.floor(Math.random()*greetings.length)];
       speech.text= answerForGreetings;
    
    }
    else if (message.includes(`quel temps`) ||message.includes('quel sera la météo')|| message.includes('quelle sera la météo'))
{
    const answerForWeather = weather[Math.floor(Math.random()*weather.length)];
    speech.text= answerForWeather;
}


else if (message.includes('Quel est')||message.includes('quelle est')|| message.includes('quel est')|| message.includes(`Qu'est ce que`)){
    const answerForLightSpeed = lightSpeed[Math.floor(Math.random()*lightSpeed.length)];
    speech.text =answerForLightSpeed;

}



else if (message.includes('test')){
    const answerForTest = testingProject[Math.floor(Math.random()*testingProject.length)];
    speech.text =answerForTest;

}



else{
    speech.text = `Désolé, je ne comprends pas`;

}




    speech.volume = 1;
    speech.rate = 1.8;
    speech.pitch=2;

    window.speechSynthesis.speak(speech);

}


