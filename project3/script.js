let a = 0;
let b = 1;
let c = 1;
let d = 1;
let e = 1;
let f = 1;
let g= 1;
let h = 1;
let i = 1;
let j = 1;
let k = 1;
let m = 1;
let n = 1;

const index = [a];
const yes1 = [b];
const no1 = [c];
const yes2 = [d];
const no2 = [e];
const yes3 = [f];
const no3= [g];
const yes4 = [h];
const no4 = [i];
const yes5 = [j];
const no5 = [k];
const yes6 = [m];
const no6 = [n];

//INTRO
index[1] = "The most dangerous moment in any story is the beginning."
index[2]= "As the story opens, every ending is equally possible, every path unwalked, every question not only unanswered, but unasked."
index[3]= "The unread story is infinite possibility. Yet the ending is already written, and though you be clever, though you be brave, there is no outwitting it."
index[4]= "Are you brave enough to begin?"

function next(){
    document.getElementById("bg").classList.remove("bg");
    $("#text").fadeOut(1000);
    $("#footer").fadeOut(500);
    window.setTimeout(add, 1500);
    function add() {
        if (a < 4){
            a++;
            if (a == 4){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                document.getElementById("yes").hidden = false;
                document.getElementById("no").hidden = false;
            }
        }
        $("#text").fadeIn(1500);
        document.getElementById("text").innerHTML = index[a];
    }
}
function previous(){
    if (a > 1){
        a--;
        document.getElementById("yes").hidden = true;
        document.getElementById("no").hidden = true;
    }
    document.getElementById("text").innerHTML = index[a];
}

//FIRST CHOICE
yes1[1] = "You find yourself standing in a beautiful garden. It teems with all the birds of the air, and all of the creatures of the Earth, and every good thing that grows."
yes1[2] = "As you explore, you feel an incredible sense of peace and rightness, as if the garden had been created just for you."
yes1[3] = "This is the place you belong. Still, you are restless and lonely. You begin to explore your surroundings."
yes1[4] = "At the western edge of the garden, there is a gate."
yes1[5] = "Do you walk through?"

function next1(){
    $("#yes1").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (b < 5){
            b++;
            if (b == 5){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                document.getElementById("yes").hidden = false;
                document.getElementById("no").hidden = false;
            }
        }
        $("#yes1").fadeIn(1500);
        document.getElementById("yes1").innerHTML = yes1[b];
    }
}
function previous1(){
    if (b > 1){
        b--;
        document.getElementById("yes").hidden = true;
        document.getElementById("no").hidden = true;
        document.getElementById("yes1").innerHTML = yes1[b];
    }
}

no1[1] = "So you chose to remain safe. Close the tab and return to whatever you were doing before. No one will think any less of you."

//SECOND CHOICE
yes2[1] = "Gates, like links, are meant to be opened, and you would never be truly content if you did not know what lay on the other side."
yes2[2] = "You pass through the gate and enter into a dark forest. You hesitate for a moment, look back, but the forest stretches behind you as if the garden had never been."

//Make another choice here (yes7 & no7)

yes2[3] = "You continue on."
yes2[4] = "Shadows deepen. An owl calls. Something cries out at a distance and is silenced. You grow chilled, and your feet develop a talent for finding uneven spots of ground, tree roots, and rocks."
yes2[5] = "After the third time you fall, you lean against the very tree whose roots last tangled your feet."
yes2[6] = "The bark prickles and rubs against your back, but it is a welcome distraction from your bruised knees and skinned palms. Your bones are weary and your muscles ache."
yes2[7] = "You crave sleep. A brief rest to fortify yourself for your journey."
yes2[8] = "Do you close your eyes?"

function next3(){
    $("#yes2").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (d < 8){
            d++;
            if (d == 8){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                document.getElementById("yes").hidden = false;
                document.getElementById("no").hidden = false;
            }
        }
        $("#yes2").fadeIn(1500);
        document.getElementById("yes2").innerHTML = yes2[d];
    }
}
function previous3(){
    if (d > 1){
        d--;
        document.getElementById("yes").hidden = true;
        document.getElementById("no").hidden = true;
    }
    document.getElementById("yes2").innerHTML = yes2[d];
}

no2[1] = "You wish to see more of the garden before you leave its bounds." 
no2[2] = "Soon, you are glad you have chosen as you did, for you find the perfect companion for all your days and nights."
no2[3] = "You come to believe you have found a new Eden, as well. It seems impossible for a place so perfect to be other than Paradise."
no2[4] = "When they are born, you name your children Kane and Abel."
no2[5] = "This will prove to be a mistake."

function next4(){
    $("#no2").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (e < 5){
            e++;
            if (e == 5){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                window.setTimeout(end, 2000);
                function end(){
                    document.getElementById("wrong").hidden = false;
                }
            } 
        }
        $("#no2").fadeIn(1500);
        document.getElementById("no2").innerHTML = no2[e];
    } 
}
function previous4(){
    if (e > 1){
        e--;
        document.getElementById("wrong").hidden = true;
    }
    document.getElementById("no2").innerHTML = no2[e];
}

//THIRD CHOICE
yes3[1] = "You close your eyes, and drift into sleep."
yes3[2] = "When you awaken, you are in your own bed. The previous events were a dream, which has already begun to fade."
yes3[3] = "You spend the rest of your life trying to return to the winding path in the dark forest."
yes3[4] = "You never will."

function next5(){
    $("#yes3").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (f < 4){
            f++;
            if (f == 4){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                window.setTimeout(end, 2000);
                function end(){
                    document.getElementById("wrong").hidden = false;
                }
            }
        }
        $("#yes3").fadeIn(1500);
        document.getElementById("yes3").innerHTML = yes3[f];
    }
}
function previous5(){
    if (f > 1){
        f--;
        document.getElementById("wrong").hidden = true;
        document.getElementById("yes3").innerHTML = yes3[f];
    }
}

no3[1] = "You scrub your hands across your eyes and push yourself back to your feet."
no3[2] = "The path takes you on a short, downhill curve, and winds around to the door of an inn." 
no3[3] = "The Quill and Ink, reads the sign over the door. You smile, and enter."
no3[4] = "Inside, there is warmth, the hearty scent of food, and a group of people singing songs both off-key and bawdy."
no3[5] = "You slide seamlessly into the small community, and feel refreshed after you have shared a meal and stood a round of drinks."
no3[6] = "Eventually, you notice the singing has died down, replaced by a rapt silence. There is a knot of people wound tight around the fire, telling stories."
no3[7] = "At first, you simply listen, but then you are asked to tell a tale of your own. It is the tale, not the coin, that will pay your shelter for the night."
no3[8] = "Do you tell a story?"

function next6(){
    $("#no3").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (g < 8){
            g++;
            if (g == 8){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                document.getElementById("no3").hidden = false;
            }
        }
        $("#no3").fadeIn(1500);
        document.getElementById("no3").innerHTML = no3[g];
    }
}
function previous6(){
    if (g > 1){
        g--;
        document.getElementById("no3").hidden = true;
    }
    document.getElementById("no3").innerHTML = no3[g];
}

//CHOICE 4
yes4[1] = "You are warm and happy, and just drunk enough to think that telling a story is something you can do."
yes4[2] = "When you finish, only the crackling of the fire breaks the silence." 
yes4[3] = "You watch as, next to you, a single tear trickles down a perfect cheek." 
yes4[4] = "You feel yourself growing weaker and weaker with age."
yes4[5] = "You come to realize that this was the last story you will ever tell."

function next7(){
    $("#yes4").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (h < 5){
            h++;
            if (h == 5){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                window.setTimeout(end, 2000);
                function end(){
                    document.getElementById("wrong").hidden = false;
                }
            }
        }
        $("#yes4").fadeIn(1500);
        document.getElementById("yes4").innerHTML = yes4[h];
    }
}
function previous7(){
    if (h > 1){
        h--;
        document.getElementById("wrong").hidden = true;
    }
    document.getElementById("yes4").innerHTML = yes4[h];
}

no4[1] = "The only story you know is your own, you say, and you must continue on to know how it ends."
no4[2]= "You make your excuses, and stand one more round before you leave to ensure there will be no hurt feelings, and, more importantly, no knives in the back as you walk through the door."
no4[3] = "The air is crisp, and you are refreshed. The moon limns the trees in silver, and makes clear your path." 
no4[4] = "You hear music, so beautiful that at first you wonder if you are dreaming. The pound of the drums speeds the pulse of your heart and the skirl of the strings pulls you through the night."
no4[5] = "By the time you reach the standing stones, you are very nearly dancing down the path." 
no4[6] = "Inside the ring of stones, the dancers spin and leap, a bright chaos of form and shape, carried along by an exultation of song."
no4[7] = "You want, as you cannot remember wanting anything, to cross into the stone circle and join the dance."
no4[8] = "Do you?"

function next8(){
    $("#no4").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (i < 8){
            i++;
            if (i == 8){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                document.getElementById("yes").hidden = false;
                document.getElementById("no").hidden = false;
            }
        }
        $("#no4").fadeIn(1500);
        document.getElementById("no4").innerHTML = no4[i];
    }
}
function previous8(){
    if (i > 1){
        d--;
        document.getElementById("yes").hidden = true;
        document.getElementById("no").hidden = true;
    }
    document.getElementById("no4").innerHTML = no4[i];
}

//CHOICE 5
yes5[1] = "As you step through the ring, every hair on your body stands as if electrified." 
yes5[2] = "Your feet begin to move in a complex pattern you were never taught, but now know in your blood."
yes5[3] = "You do not wish to ever stop dancing."
yes5[4] = "It is unlikely you ever will."

function next9(){
    $("#yes5").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (j < 4){
            j++;
            if (j == 4){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                window.setTimeout(end, 2000);
                function end(){
                    document.getElementById("wrong").hidden = false;
                }
            }
        }
        $("#yes5").fadeIn(1500);
        document.getElementById("yes5").innerHTML = yes5[j];
    }
}
function previous9(){
    if (j > 1){
        j--;
        document.getElementById("wrong").hidden = true;
    }
    document.getElementById("yes5").innerHTML = yes5[5];
}

no5[1] = "You linger, just for a while, held by the unaccustomed beauty of the music." 
no5[2] = "You watch the faces of the dancers, and wonder if it is joy that holds their mouths wide, burns their eyes bright. You cannot tell."
no5[3] = "You decide you would rather choose your own steps, and so you turn away." 
no5[4] = "At first, your feet seem heavy, not quite your own, but as you continue to walk, your steps become easier."
no5[5] = "You believe that you are lucky, that you have continued to escape fates you would rather not own, and so you do not concern yourself with the rain that has begun to fall."
no5[6] = "But the soft trickle becomes a pelting, and you duck into a crevice in the hillside. The interior of the hill opens up before you like a dark cathedral." 
no5[7] = "A staircase, worn into the rock by millennia of pilgrim feet, rings the edge of the space and spirals downward."
no5[8] = "You walk down the stairs, and as you do, memories unweave inside your head. The best and worst moments of your life play out, with a clarity they did not have when you first experienced them."
no5[9] = "But there is something else. Perhaps. A second set of footsteps on the stairs. A whisper, a bare rustle in the dark. Easy enough to dismiss, to pretend that you do not feel the weight of a presence in the darkness behind you."
no5[10] = "The spiral of the staircase becomes tighter, inexorable. The following tread impossible to ignore." 
no5[11] = "The steps come a half-beat after yours, a shadow’s echo."
no5[12] = "You pause, hoping whoever—and, oh, how you hope it is a whoever, here in the dark under the hill—will continue on past you, but the steps pause as well."
no5[13] = "Surely, you think, if it had meant to hurt you, surely it would already have done that. Knowing would be better than imagining an expanding catalogue of horrors."
no5[14] = "Do you turn to look back?"

function next10(){
    $("#no5").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (k < 14){
            k++;
            if (k == 14){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                document.getElementById("yes").hidden = false;
                document.getElementById("no").hidden = false;
            }
        }
        $("#no5").fadeIn(1500);
        document.getElementById("no5").innerHTML = no5[k];
    }
}
function previous10(){
    if (k > 1){
        k--;
        document.getElementById("yes").hidden = true;
        document.getElementById("no").hidden = true;
    }
    document.getElementById("no5").innerHTML = no5[k];
}

//CHOICE 6
yes6[1] = "You’ve been trying to change your ending, haven’t you? Of course I know. I know everything that happens in all of the stories I hold."
yes6[2] = "Did you think I wouldn’t notice that you’re cheating?"
yes6[3] = "Do you not understand that stories have rules?"
yes6[4] = "I may have allowed you to do so but you should know that in life, actions have consequences. One cannot simply change the outcome of a path they have chosen because they did not like the results."
yes6[5] = "You feel a pulling, and then are buffeted by a whirlwind." 
yes6[6] = "This is where your story ends. No do-overs. No second chances. I hope you are satisfied with your result as all our stories end the same."

function next11(){
    $("#yes6").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (m < 6){
            m++;
            if (m == 6){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                window.setTimeout(end, 2000);
                function end(){
                    document.getElementById("end").hidden = false;
                }
            }
        }
        $("#yes6").fadeIn(1500);
        document.getElementById("yes6").innerHTML = yes6[m];
    }
}
function previous11(){
    if (m > 1){
        m--;
        document.getElementById("end").hidden = true;
    }
    document.getElementById("yes6").innerHTML = yes6[m];
}

no6[1] = "You continue walking, three steps more. Then a hand slips into yours, and the story ends as all stories must: with the snip of a thread and the crossing of a river. You pay the ferryman with coins plucked from your own eyelids."
no6[2] = "You pass beyond the realm of the page."

function next12(){
    $("#no6").fadeOut(1000);
    window.setTimeout(add, 1500);
    function add(){
        if (n < 2){
            n++;
            if (n == 2){
                document.getElementById("next").hidden = true;
                document.getElementById("prev").hidden = true;
                window.setTimeout(end, 2000);
                function end(){
                    document.getElementById("end").hidden = false;
                }
            }
        }
        $("#no6").fadeIn(1500);
        document.getElementById("no6").innerHTML = no6[n];
    }
}
function previous12(){
    if (n > 1){
        n--;
        document.getElementById("end").hidden = true;
    }
    document.getElementById("no6").innerHTML = no6[m];
}