var quotes = [];

// quote generator here, you want to 
// create a simple function that prompts
// upon clicking 1 of 9 crew buttons
// and have the function return a randomly
// selected string from an array, appropriately
// returning a quote that matches the character clicked.

// variables that store all quotes in arrays
var mal = ["Give us some cover fire. We\'re going duck huntin\'.",
    "We\'ve done the impossible, and that makes us mighty.",
    "We\'re not gonna die. We can\'t die, Bendis. And you know why? Because we are so very pretty. We are just too pretty for God to let us die. Huh? Look at that chiseled jaw, huh?", "I don't believe there's a power in the 'verse can stop Kaylee from bein' cheerful.", "I'd like to be the king of all Londinum and wear a shiny hat. Just get us some passengers.", "You're lying. You're well aware we landed two hours before we planned to with all the goods you sent us after intact, ready to roll. So your decision to get tetchy, say we're late, means you're lookin' to put us up on the defensive right up front. Which means something's gone wrong. It didn't go wrong on our end. So why don't we start again with you tellin' us what's up.", "Maybe I'm not a fancy gentleman like you, with your very fine hat, but I do business.", "We'd be dead. Can't get paid if you're dead.", 
    "Jayne, your mouth is talkin'. You might wanna look to that.",
    "It's been a long time since Patience shot me, and that was due to a perfectly legitimate conflict of interest.",
    "If anyone gets nosy, you know, just..shoot 'em.",
    "That's what governments are for--get in a man's way.",
    "Jayne, you will keep a civil tongue in that mouth, or I will sew it shut. Is there an understanding between us?",
    "You rich kids. You think your lives are the only thing that matters.",
    "Yeah, that's a tale a woe. Very stirring. In the meantime, you've heaped a world of trouble on me and mine.",
    "Gettin' awful crowded in my sky.",
    "You notice anything particular about our luck these past few days? Any pattern? You depend on luck--you end up on the drift, no fuel, no prospects...that ain't us. Not ever.",
    "One of these could feed a family for a month. Longer, if they don't like their kids too well.",
    "You don't know me, son, so let me explain this to you once. If I ever kill you, you'll be awake, you'll be facing me, and you'll be armed.",
    "And I'm thinking you weren't burdened with an overabundance of schooling.",
    "Well, they tell ya, never hit a man with a closed fist, but it is, on occasion, hilarious.",
    "You're welcome on my boat. God ain't.",
    "A man comes up against that kind of will, the only way to deal with it, I suspect, is to become it.",
    "See how I'm not punching him? I think I've grown.",
    "But she was naked and all...articulate.",
    “It\'s my estimation that every man ever got a statue made of him was one kind of a son of a bitch or another",
    "Try not to talk. Talking uses up air.",
    "Everyone dies alone.",
    "You all gonna be here when I wake up? Good. That's good.",
    "The next time you decide to stab me in the back, have the guts to do it in my face.",
    "You wanna meet the real me now?",
	"Can’t miss a place you’ve never been.",
"Half of writing history is hiding the truth.",
	"You got a day's work to do and two hours to do it.",
	"They'll swing back to the belief that they can make people better. And I do not hold to that."]

var zoe = ["Now we have a boat full of citizens right on top of our stolen cargo. That's a fun mix.", 
    "Kill a fed? Can you think of a stupider thing to do?",
    "If they take the ship, they'll rape us to death, eat our flesh and sew our skins into their clothing. And if we're very, very lucky, they'll do it in that order.",
    "Nice place for an ambush.",
    "Sir, I'd like you to take the helm, please. I need this man to tear all my clothes off.",
    "Sir, I think you have a problem with your brain being missing.",
    "You paid money for this, sir? On purpose?",
    "You're losing the high ground here, sweetcakes.",
	"You and I would make a beautiful baby. And I wanna meet that child one day. Period.",
	"Do you know what the definition of a 'hero' is? Somebody who gets other people killed. You can look it up later."]

var jayne = ["Let's moon them.", 
    "As long as we got the goods, I call this a win.",
	"Captain, can you stop her from bein' cheerful, please?",
	"The only fluid I see here is the puddle of piss refusing to pay us our wage.",
	"Can't get paid if you crawl away like a bitty, little bug neither.",
	"I got a share of this job. Ten percent of nothing is--let me do the math here. Nothin' and then nothin'--",
	"Aren't you an officer of the law? Well, don't they teach you how to withstand interrogation? You can't even tell a damn lie.",
	"Hey, them ain't 'kosherized' rules.",
	"Time for some thrilling heroics.",
	"How's about you shut that crazy mouth! Is that a fun game?",
	"You know what the chain of command is? It's a chain I beat you with till you understand who's in command here.",
	"What’d y’all order a dead guy for?",
	"My John Wayne about to pop off and fly around the room. There’s so much tasty here.",
	"Let’s shift this conversation into a ‘not Jayne’s fault’ direction.", 
	"Well, I don’t like the idea of someone hearing what I’m thinking.", 
	"Yeah, and if wishes were horses, we’d all be eating steaks.",
	"What you plan and what takes place ain't ever exactly been similar.", 
	"I've been to the edge. Just look like more space."]

var wash = ["Captain, we're humped.",
   "Make your mother sigh. Engaging the crybaby.",
   "Sweetie, we're crooks. If everything were right, we'd be in jail.",
   "Don't forget to call him sir. He likes that.",
   "Can we maybe vote on the whole murdering people issue?",
   "You're a very 'up' person.",
   "I was gonna watch. It was very exciting.",
   "Perhaps she likes shuttles. Some people juggle geese!",
   "It's all sweet, stealing from the rich, selling to the poor...",
   "There's plenty of obeying going on beneath my nose.",
   "No! That was the torture talking. Remember the torture?",
   "Do not fear me. Ours is a peaceful race, and we must live in peaceful harmony.",
   "This kind of flying really wakes up a guy.",
   "Were I unwed, I’d take you in a manly fashion.",
   "Come on, Kaylee. We all know I’m the funny one.",
  "Can I mop your brow? I’m at the ready with a brow mop!",
  "I am a leaf on the wind. Watch how I soar."]

  var kaylee = ["No, it's shiny. I like to meet new people. They've all got stories.",
  "You don't seem to be looking at destinations. What you care about is the ships, and mine's the nicest.",
  "Oh, she'll fool ya. You ever sail in a firefly?",
  "Machines got workings, and they talk to me.",
  "You were being mean, is what. And if that’s what you think of this life, then you can’t think much of them that choose it, can you?",
  "He makes everybody cry. He's a monster.",
  "the whole point of swearing is that it ain’t appropriate!",
  "Bye now. Have good sex.",
  "Now this would be a perfect time for a swear word.",
  "No power in the 'verse can stop me!",
  "Look, they got boy whores. Isn’t that thoughtful?",
  "Nobody can shoot like that that’s a person.",
  "Isn’t there anything about this place you’re glad of?",
  "sometimes people have feelings. I'm referring here to people."]

  var inara = ["It's all right—I mostly keep to myself. When I'm not whoring.", 
  "So, would you like to lecture me on the wickedness of my ways?",
  "You're lost in the woods. We all are. Even the captain. The only difference is he likes it that way.",
  "Then when I'm behind on the rent, you can come in unasked.",
  "Or maybe you're exactly where you ought to be.",
  "a companion chooses her clients.",
  "But physical appearance doesn't matter so terribly. You look for compatibility of spirit. There's an energy about a person that's difficult to hide.",
 "You have a strange sense of nobility, captain. You'll lay a man out for implying I'm a whore, but you keep calling me one to my face.",
 "One of the virtues of not being puritanical about sex is not feeling embarrassed afterwards. You should look into it."]

 var book = ["I never married. I'm not a grandpa.", 
	"Been out of the world for a spell--like to walk it a while. Maybe bring the word to them as need it told.",
	"A man can live on packaged food from here till Judgment Day if he's got enough rosemary.",
	"I brought you some supper. But if you'd prefer a lecture, I have a few very catchy ones prepped. Sin and hellfire. One has lepers.",
	"Please, we are very close to true stupidity here.",
	"Is this what life is..out here?",
	"I've watched the captain shoot a man I swore to protect. And I'm not even sure if he was wrong.",
	"How we treat our dead is part of what makes us different than those did the slaughtering.",
	"If you take sexual advantage of her, you're going to burn in a very special level of hell, a level they reserve for child molesters and people who talk at the theater.",
	"These people need assistance. The benefit wouldn’t be for you.",
	"when I talk about belief, why do you always assume I'm talking about God?"]

	var simon = ["I am very smart...Gifted is the term. So when I tell you that my little sister makes me look like an idiot child, I want you to understand my full meaning. River was more than gifted. She was a gift.",
	"I'm trying to put this as delicately as I can. How do I know you won't kill me in my sleep?",
	"Are you always this sentimental?",
	"Life didn’t bring us there. Those men did.",
	"You’re like a trained ape. Without the training.",
	"Enemies? You? No! How can it be?",
	"I gotta go check on my assassin.",
	"She loves this ship. I think it’s been home to her more than anyplace."]

	var river = ["This isn't home?",
	"They won't stop. They'll never stop.",
	"Two by two. Hands of blue.",
	"Sad little king of a sad little hill.",
	"Call me if anyone interesting shows up.",
	"Stupid son of a bitch dressed me up like a gorram doll!">,
	"He looks better in red.",
	"They took Christmas away.",
	"Is it time to go to sleep again?",
	"I can kill you with my brain.",
	"My food is problematic.",
	"You are such a boob.",
	"It's just an object. It doesn't mean what you think.",
	"We meddle. People don't like to be meddled with. We tell them what to do, what to think. Don't run, don't walk. We're in their homes and in their heads and we haven't the right. We're meddlesome."]
	var quoteGen = function(){
	
};
