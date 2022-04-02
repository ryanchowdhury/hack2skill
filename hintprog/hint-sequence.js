
function starthint(){
localStorage.clear();

var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [
  {
    'click #ryan':'Click this button To new',
  },
  {
  	'next .navbar-brand' : 'Welcome to Hack2Skill! Let me guide you through its features.',
  	'nextButton' : {className: "myNext", text: "Sure"},
  	'skipButton' : {className: "mySkip", text: "Nope!"}
  },
  {
  	'key #mySearchButton' : "Insert your search request and press 'Enter'",
  	'keyCode' : 13
  },
  {
  	'click .btn' : 'This button allows you to switch between the search results'
  },
  {
  	'next #home' : 'Check the list of all the features available',
  	'shape': 'circle'
  },
  {
  	'next #features' : 'Your feedback will be appreciated',
  	'shape': 'circle',
  	'radius': 70,
  	'showSkip' : false,
  	'nextButton' : {className: "myNext", text: "Got it!"}
  }


];


enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
}