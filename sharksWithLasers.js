// Title: Final Closed Values II
// Description: This is Level 2, Challenge 15
// Code solution by: Paola Garcia Cardenas

//Creating Array Lists

var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];

//Function that takes 2 parameters, the list of sharks with 
//its corresponding list of targets

function makeTargetAssigner(sharks, targets) {
  return function (shark){
    for (var i = 0; i<sharks.length; i++){
      if (shark == sharks[i]) {
      	alert("Hey, " + shark + "!\n"
							+ "There've been " + targets[i] +
							" sightings in our area!\nTime to take care of business!" 
				);
      }
    }
  }
}

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");
