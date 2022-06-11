$("body select").msDropDown({visibleRows:10,roundedCorner:false});
$(document).ready(function() {
$(".synergy-main").change(function() {
   	var text = "Not Applicable / Duplicate Items";
	$('.synergy-image img').attr("src", "images/jifs/nah.png");
	
   	$(".synergy-color").removeClass("red");
	$(".synergy-color").removeClass("orange");
	$(".synergy-color").removeClass("green");
   if($("#combo1").val()=="fetus"){if($("#combo2").val()=="brimstone"){text="Brimstone overrides Dr. Fetus. The player turns black but the Top hat and Monocle from Dr. Fetus still remain.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/test.jpg")}if($("#combo2").val()=="chocolate"){text="Cancels the Chocolate Milk affect. There is only a graphical glitch which makes Isaac look like he is spitting bombs out his mouth.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/fetuschoc.gif")}if($("#combo2").val()=="cold"){text="Graphical changes only. Isaac's head and the bombs from Dr. Fetus turn green but the explosion does not cause any poison affect on enemies.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/fetuscold.jpg")}if($("#combo2").val()=="epic"){text="Epic Fetus overrides Dr. Fetus.";$(".synergy-color").addClass("orange")}if($("#combo2").val()=="triple"){text="Greatly decreases the fire rate of bombs down to one bomb about every 4 seconds. Additionally, the damage of each bomb does not increase.";$(".synergy-color").addClass("red");$(".synergy-image img").attr("src","images/jifs/fetustriple.gif")}if($("#combo2").val()=="ipecac"){text="Greatly decreases the fire rate of bombs down to one bomb about every 4 seconds. Additionally, the damage of each bomb does not increase and Dr. Fetus bombs do not get a poison effect.";$(".synergy-color").addClass("red");$(".synergy-image img").attr("src","images/jifs/fetustriple.gif")}if($("#combo2").val()=="quad"){text="Greatly decreases the fire rate of bombs down to one bomb about every 4 seconds. Additionally, the damage of each bomb does not increase.";$(".synergy-color").addClass("red");$(".synergy-image img").attr("src","images/jifs/fetustriple.gif")}if($("#combo2").val()=="contacts"){text="Turns Dr. Fetus bombs red but does not give them the freeze effect from Mom's Contacts.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/fetuscontacts.gif")}if($("#combo2").val()=="knife"){text="Mom's Knife overrides Dr. Fetus. Top hat and Monocle from Dr. Fetus still remain.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/fetusknife.jpg")}if($("#combo2").val()=="one"){text="Greatly increases the rate of fire of bombs from Dr. Fetus and turns each bomb yellow.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/fetusnumber.gif")}if($("#combo2").val()=="polyphemus"){text="Greatly decreases the fire rate of bombs down to one bomb about every 4 seconds but increases the damage of each bomb by almost double.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/fetuspoly.gif")}if($("#combo2").val()=="sacred"){text="Slightly decreases the fire rate of Dr. Fetus bombs, gives them a homing effect and increases damage by about x1.2.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/fetussacred.gif")}if($("#combo2").val()=="spider"){text="Does not add the slowing effect from Spider's Bite to the Dr. Fetus bombs.";$(".synergy-color").addClass("orange")}if($("#combo2").val()=="spoon"){text="Turns Dr. Fetus bombs purple and gives them a homing effect.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/fetusspoon.gif")}if($("#combo2").val()=="tech"){text="Dr. Fetus overrides Technology. The technology laser appears to still fire however this is simply a graphical glitch and does no damage.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/fetustech.gif")}if($("#combo2").val()=="tech2"){text="The player will fire the Technology 2 laser and the Dr. Fetus bombs together.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/fetustech2.gif")}if($("#combo2").val()=="wiggle"){text="Slightly increases the fire rate of Dr. Fetus bombs but does not give the bombs the wiggle effect.";$(".synergy-color").addClass("green")}}
   else if ($("#combo1").val() == "knife")
   {
	   	if ($("#combo2").val() == "brimstone")	
		{
			text = "Mom's Knife overrides Brimstone. Brimstone has no effect on Mom's Knife in terms of damage or charge time.";
			$(".synergy-color").addClass("orange");	
		}
		
		if ($("#combo2").val() == "chocolate")	
		{
			text = "Chocolate Milk does not effect Mom's Knife in any way.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "cold")	
		{
			text = "Mom's Knife will gain the poison effect from the Common Cold, which gives a 1/4 chance to poison enemies and do 2 damage per tick when active.";
			$(".synergy-color").addClass("green");		
		}
		
		if ($("#combo2").val() == "epic")	
		{
			text = "Epic Fetus overrides Mom's Knife.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "fetus")	
		{
			text = "Mom's Knife overrides Dr. Fetus.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "triple")	
		{
			text = "Mom's Knife overrides triple shot and makes the knife take longer to charge. The Inner Eye does not change the damage of Mom's Knife at all.";
			$(".synergy-color").addClass("red");
		}
		
		if ($("#combo2").val() == "ipecac")	
		{
			text = "Mom's Knife overrides the Ipecac shots and makes the knife take longer to charge. Ipecac does not increase the damage of Mom's Knife.";
			$(".synergy-color").addClass("red");
		}
		
		if ($("#combo2").val() == "quad")	
		{
			text = "Mom's Knife overrides quad shot and makes the knife take longer to charge. Taking Mutant Spider when you already have Mom's Knife is not advised because if you also then took Polyphemus on top of this, your damage would be half as much as it would be if you had just Mom's Knife and Polyphemus.";
			$(".synergy-color").addClass("red");
		}
		
		if ($("#combo2").val() == "contacts")	
		{
			text = "Mom's Knife turns red and makes the Mom's Contact effect occur much more frequently.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "one")	
		{
			text = "Turns Mom's Knife yellow and makes the knife charge time much quicker. The range down from Number one does not decrease the damage of Mom's Knife.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "polyphemus")	
		{
			text = "Mom's Knife and Polyphemus drastically increases your damage up to 90 damage with just those two items. This combination is one of the most over powered in the game and will allow you to kill the final bosses within 4 seconds. In this situation you do NOT want to take the Mutant Spider, which would cut your damage in half.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "sacred")	
		{
			text = "Greatly increases the damage of Mom's Knife and gives it a very slight homing effect.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "spider")	
		{
			text = "Gives Mom's Knife the slowing effect from Spider's Bite, making the effect much more likely to activate.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "spoon")	
		{
			text = "Turns Mom's Knife purple and gives it a very slight homing effect.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "tech")	
		{
			text = "Mom's Knife overrides Technology 1.";
			$(".synergy-color").addClass("orange");
			
		}
		
		if ($("#combo2").val() == "tech2")	
		{
			text = "Mom's Knife overrides Technology 2. The -35% damage from Technology 2 still applies to Mom's Knife (VERY BAD) and the laser will look like it is firing but does no damage, so this is a graphical glitch.";
			$(".synergy-color").addClass("red");
		}
		
		if ($("#combo2").val() == "wiggle")	
		{
			text = "Wiggle Worm causes Mom's Knife to move in a wiggling fashion across the screen and also makes the knife charge quicker very slightly.";
			$(".synergy-color").addClass("green");
		}
   }
   else if($("#combo1").val()=="brimstone"){if($("#combo2").val()=="chocolate"){text="Chocolate Milk allows you to release non-fully charged Brimstone shots which do less damage. The damage per laser scales linearly to 100% damage at 2 seconds of charge. If you pre-charge Brimstone before entering another room, the Chocolate Milk will make the first shot do no damage. Chocolate Milk also prevents use of the Brimstone Glitch.";$(".synergy-color").addClass("red");$(".synergy-image img").attr("src","images/jifs/brimchoc.gif")}if($("#combo2").val()=="cold"){text="Brimstone shots have a chance to apply the poison effect from the Common Cold.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/brimcold.gif")}if($("#combo2").val()=="epic"){text="Epic Fetus overrides Brimstone and you do not retain the x3 damage from Brimstone shots.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/brimfetus.jpg")}if($("#combo2").val()=="fetus"){text="Brimstone overrides Dr. Fetus with no other stat changes.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/brimfetus.jpg")}if($("#combo2").val()=="triple"){text="Brimstone overrides Triple shot, but Brimstone shots now do 300% damage and take a much longer time to charge. The damage x3 effects of Ipecac and Mutant Spider on Brimstone do not stack with the Inner Eye's x3 multiplier.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/brimtriple.gif")}if($("#combo2").val()=="ipecac"){text="Brimstone overrides Ipecac, but Brimstone shots now do 300% damage and take a much longer time to charge. The damage x3 effects of Inner Eye and Mutant Spider on Brimstone do not stack with the Ipecac's x3 multiplier.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/brimtriple.gif")}if($("#combo2").val()=="quad"){text="Brimstone overrides Mutant Spider, but Brimstone shots now do 300% damage and take a much longer time to charge. The damage x3 effects of Inner Eye and Ipecac on Brimstone do not stack with the Mutant Spider's x3 multiplier. If you have Brimstone and Polyphemus, you do NOT want to take Mutant Spider, as it would reduce your damage by roughly half.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/brimtriple.gif")}if($("#combo2").val()=="contacts"){text="Mom's Contacts applies the freeze effect to Brimstone shots.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/brimcontacts.gif")}if($("#combo2").val()=="knife"){text="Mom's Knife overrides Brimstone.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/brimknife.jpg")}if($("#combo2").val()=="one"){text="Number One has no effect on Brimstone. Number One is also a special item, so picking it up would give you less chance to pick up other good 'special' items. For more information about special items, check the FAQ page.";$(".synergy-color").addClass("orange")}if($("#combo2").val()=="polyphemus"){text="Polyphemus causes Brimstone to do massive damage and makes the charge time on the laser significantly longer. The big increase in charge time is worth it with Polyphemus because having just these two items causes the Brimstone beam to do 135, instead of the usual 10.5 damage. This huge increase in damage will one shot most bosses and becomes even more powerful with the Brimstone Glitch. In this situation you do NOT want to take Mutant Spider, as it would reduce your damage by roughly half.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/brimpoly.gif")}if($("#combo2").val()=="sacred"){text="Sacred Heart causes the Brimstone laser to do significantly more damage, however it will take slightly longer to charge.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/brimsacred.gif")}if($("#combo2").val()=="spider"){text="Brimstone shots now have a random chance to apply the slowing effect from Spider's Bite.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/brimspider.gif")}if($("#combo2").val()=="spoon"){text="Spoon Bender has no effect on Brimstone shots. Spoon Bender is also a special item, so picking it up would give you less chance to pick up other good 'special' items. For more information about special items, check the FAQ page.";$(".synergy-color").addClass("orange")}if($("#combo2").val()=="tech"){text="Brimstone overrides Technology.";$(".synergy-color").addClass("orange")}if($("#combo2").val()=="tech2"){text="Both the Technology 2 and Brimstone lasers will fire together. The Brimstone laser is affected by the -35% damage down from Technology 2, however this combination is probably a damage per second increase due to the stacking of both lasers.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/brimtech2.gif")}if($("#combo2").val()=="wiggle"){text="The waving effect of Wiggle Worm has no effect on Brimstone, however it does benefit slightly from the tears up, making Brimstone lasers charge very slightly quicker.";$(".synergy-color").addClass("green")}}
   else if ($("#combo1").val() == "tech")
   {
	   	if ($("#combo2").val() == "brimstone")	
		{
			text = "Brimstone overrides Technology.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "chocolate")	
		{
			text = "Chocolate Milk allows you to charge your Technology laser, up to a maximum of +7.8 damage when the laser is fully charged. The usefulness of this synergy largely depends if you enjoy charged shots or prefer automatic.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "cold")	
		{
			text = "Common Cold gives your Technology lasers the chance to give enemies the poison effect. This synergy also turns the Technology laser green.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "epic")	
		{
			text = "Epic Fetus overrides Technology. This synergy also adds an invisible laser which acts exactly like a normal Technology laser would.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "fetus")	
		{
			text = "Dr. Fetus overrides Technology. The technology laser appears to still fire however this is simply a graphical glitch and does no damage.";
			$(".synergy-color").addClass("orange");
		}
		;
		if ($("#combo2").val() == "triple")	
		{
			text = "Technology overrides the Inner Eye and causes the laser to do x3 damage. However this also reduces your fire rate significantly. The damage x3 effects of Ipecac and Mutant Spider on Technology do not stack with the Inner Eye's x3 multiplier.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "ipecac")	
		{
			text = "Technology overrides Ipecac and causes the laser to do x3 damage. However this also reduces your fire rate significantly. The damage x3 effects of Inner Eye and Mutant Spider on Technology do not stack with the Ipecac's x3 multiplier.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "quad")	
		{
			text = "Technology overrides Mutant Spider and causes the laser to do x3 damage. However this also reduces your fire rate significantly. The damage x3 effects of Inner Eye and Ipecac on Technology do not stack with the Mutant Spider's x3 multiplier.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "contacts")	
		{
			text = "Mom's Contacts causes the Technology laser to get the Freeze effect, which gives a random chance to turn enemies into stone for a few seconds. This synergy works even better with a high tears stat.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "knife")	
		{
			text = "Mom's Knife overrides Technology.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "one")	
		{
			text = "Number One greatly increases the fire rate of technology and colours the laser yellow. The -13 range from Number One does not effect Technology in any way.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "polyphemus")	
		{
			text = "Polyphemus greatly increases Technology's laser in terms of damage and size. This synergy also causes lasers to fire far less frequently, however with only these two items you will be doing 45 damage per laser shot which is definitely worth the huge tears down.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "sacred")	
		{
			text = "Sacred Heart causes the Technology laser to do a lot more damage and colours it purple.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "spider")	
		{
			text = "This synergy causes the Technology laser to have a random chance to apply the Spider's Bite effect, which slows down enemy speed and shot speed. It will also colour the laser pink.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "spoon")	
		{
			text = "Spoon Bender turns the Technology laser purple but gives it no homing capabilities.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "tech2")	
		{
			text = "In this combination, both Technology 1 and 2 lasers will fire together. The Technology 1 laser will be affected by the -35% damage down from Technology 2, however the combination is probably an overall damage per second increase with both lasers active at the same time.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "wiggle")	
		{
			text = "Wiggle worm causes the Technology laser to have a snake pattern across the screen and slightly increases the fire rate of it.";
			$(".synergy-color").addClass("green");
		}
   }
   else if ($("#combo1").val() == "tech2")
   {
	   	if ($("#combo2").val() == "brimstone")	
		{
			text = "Both the Technology 2 and the Brimstone lasers will fire at the same time. The Brimstone laser will be affected by the -35% damage from Technology 2, however the combined lasers make up a lot of the lost damage from Brimstone. If you have Technology 2 already, taking Brimstone might be a good idea, however if you have Brimstone and see Technology 2 show up, taking it might be a very bad idea. This synergy is very situational.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "chocolate")	
		{
			text = "Chocolate Milk increases Technology 2's laser damage and allows you to also charge tears just like you would with Chocolate Milk. As Cain, this synergy will make you constantly fire the Technology 2 laser without holding the arrow keys down after the first time you press it in the current room.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "cold")	
		{
			text = "The laser from Technology 2 will have a random chance to apply the poison effect from The Common Cold.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "epic")	
		{
			text = "Epic Fetus overrides Technology 2. This synergy increases the time between each Epic Fetus shot slightly. The Technology 2 laser will stack with Epic Fetus and will only fire in the cooldown period between each Epic Fetus shot.";
			$(".synergy-color").addClass("red");
		}
		
		if ($("#combo2").val() == "fetus")	
		{
			text = "Both the Technology 2 laser and the Dr. Fetus bombs will fire, however the fire rate of Dr. Fetus lowers.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "triple")	
		{
			text = "The Inner Eye slightly increases Technology 2 laser damage and allows the player to fire both the laser and the triple shot, assuming you are not playing as Cain.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "ipecac")
		{
			text = "Both Technology 2 and Ipecac shots will fire together and the damage of the laser will be slightly increased. The -35% damage from Tech 2 does not effect the damage of Ipecac shots.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "quad")	
		{
			text = text = "The Mutant Spider slightly increases Technology 2 laser damage and allows the player to fire both the laser and the Quad shot, assuming you are not playing as Cain. ";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "contacts")	
		{
			text = "Gives Technology 2 the freezing effect from Mom's Contacts while still firing normal tears, as long as you are not playing as Cain. Technology 2 hits so frequently that the Mom's Contacts effect is active most of the time.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "knife")	
		{
			text = "Technology 2 causes Mom's Knife to do -35% damage. The laser from Technology 2 appears to work but this is just a graphical glitch and does no damage.";
			$(".synergy-color").addClass("red");
		}
		
		if ($("#combo2").val() == "one")	
		{
			text = "Number One has no discernible effect on Technology 2.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "polyphemus")	
		{
			text = "Polyphemus greatly increases the damage of Technology 2. Despite the -35% damage from Technology 2, this combination still kills bosses in under 10 seconds. In this situation you do NOT want to take the Mutant Spider, as it would cut your damage in half.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "sacred")	
		{
			text = "Both the Technology 2 laser and the Sacred heart tears will fire together at a slower rate. Sacred heart also slightly increases the damage of the Technology 2 laser.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "spider")	
		{
			text = "Gives Technology 2 the slowing effect from Spider's Bite while still firing normal tears, as long as you are not playing as Cain. Technology 2 hits so frequently that the Spider's Bite effect is active most of the time.";
			$(".synergy-color").addClass("green");
		}
		
		if ($("#combo2").val() == "spoon")	
		{
			text = "Spoon Bender has no effect on the Technology 2 laser, however normal shots will still fire alongside the laser with a homing effect.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "tech")	
		{
			text = "In this combination, both Technology 1 and 2 lasers will fire together. The Technology 1 laser will be affected by the -35% damage down from Technology 2, however the combination is probably an overall damage per second increase with both lasers active at the same time.";
			$(".synergy-color").addClass("orange");
		}
		
		if ($("#combo2").val() == "wiggle")	
		{
			text = "Wiggle worm has no effect on Technology 2 lasers, however normal shots will still fire alongside with a wiggle effect.";
			$(".synergy-color").addClass("orange");
		}
   }
   else if($("#combo1").val()=="ipecac"){if($("#combo2").val()=="brimstone"){text="Brimstone overrides Ipecac, but Brimstone shots now do 300% damage and take a much longer time to charge. The damage x3 effects of Inner Eye and Mutant Spider on Brimstone do not stack with the Ipecac's x3 multiplier.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/brimtriple.gif")}if($("#combo2").val()=="chocolate"){text="Chocolate Milk allows you to charge Ipecac shots which do slightly more damage compared to uncharged shots. Ipecac shots will no longer automatically fire if you hold down the arrow key, so if you dislike charged shots then do not take Chocolate Milk here.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/ipecacchoc.gif")}if($("#combo2").val()=="cold"){text="The Common Cold has no effect on Ipecac shots. Common Cold is also a special item, so you may wish to not take it if you already have Ipecac.";$(".synergy-color").addClass("orange")}if($("#combo2").val()=="epic"){text="Epic Fetus overrides Ipecac.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/ipecacepic.jpg")}if($("#combo2").val()=="fetus"){text="Dr. Fetus overrides Ipecac. Ipecac also severely decreases the fire rate of Dr. Fetus bombs.";$(".synergy-color").addClass("red");$(".synergy-image img").attr("src","images/jifs/ipecacfetus.gif")}if($("#combo2").val()=="triple"){text="The Inner Eye has no effect on Ipecac shots or their fire rate.";$(".synergy-color").addClass("orange")}if($("#combo2").val()=="quad"){text="Mutant Spider has no effect on Ipecac shots or their fire rate.";$(".synergy-color").addClass("orange")}if($("#combo2").val()=="contacts"){text="Mom's Contacts causes Ipecac shots to have a random chance to freeze enemies to stone for a few seconds. Having enemies frozen in place is extremely useful for aiming Ipecac shots.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/ipecaccontacts.gif")}if($("#combo2").val()=="knife"){text="Mom's Knife overrides Ipecac.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/ipecacknife.jpg")}if($("#combo2").val()=="one"){text="Number One greatly increases the fire rate and range of Ipecac shots. Having decreased range allows Ipecac shots to be aimed more easily.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/ipecacnumber.gif")}if($("#combo2").val()=="polyphemus"){text="Polyphemus increases the damage of Ipecac shots slightly (53.5 damage vs. 65 damage) but does not slow down the fire rate at all. In this situation you do not want to take the Mutant Spider, as it would slightly reduce your damage.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/ipecacpoly.gif")}if($("#combo2").val()=="sacred"){text="Sacred Heart gives Ipecac shots a homing effect which causes them to curve towards enemies, improving accuracy. Sacred Heart also very slightly increases the damage and decreases the range of each Ipecac shot. Having decreased range allows Ipecac shots to be aimed more easily.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/ipecacsacred.gif")}if($("#combo2").val()=="spider"){text="Ipecac shots now have a random chance to slow enemy speed and shot speed if the Spider's Bite effect activates.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/ipecacspider.gif")}if($("#combo2").val()=="spoon"){text="Ipecac shots gain the Spoon Bender effect, which causes them to curve towards enemies and improves accuracy.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/ipecacspoon.gif")}if($("#combo2").val()=="tech"){text="Technology 1 overrides Ipecac and causes the laser to do 300% damage. The x3 damage multiplier from Ipecac does not stack with the other x3 damage multipliers from The Inner Eye and Mutant Spider.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/ipecactech.gif")}if($("#combo2").val()=="tech2"){text="Both Technology 2 and Ipecac shots will fire together and the damage of the laser will be slightly increased. The -35% damage from Tech 2 barely effects the damage of the ipecac shots (reduces from 53.5 to just over 52.5, not much difference).";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/ipecactech2.gif")}if($("#combo2").val()=="wiggle"){text="Wiggle Worm causes Ipecac shots to wiggle as they travel through the air.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/ipecacwiggle.gif")}} else if($("#combo1").val()=="guppy"){if($("#combo2").val()=="brimstone"){text="Having Brimstone as Guppy causes blue flies to spawn each time the Brimstone laser ticks and the flies are not affected by the x3 damage multiplier that Brimstone gives. Also, if you are using the Brimstone Glitch, a fly will spawn each time the glitch hits an enemy, which can cause up to three more flies to spawn per Brimstone laser.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppybrim.gif")}if($("#combo2").val()=="chocolate"){text="Charged shots from the Chocolate Milk will cause Guppy flies to do a lot more damage. Additionally, the Guppy sprite will not show how charged your shots currently are.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppychoc.gif")}if($("#combo2").val()=="cold"){text="The Common Cold effect still works with normal tears when you are Guppy the Cat.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppycold.gif")}if($("#combo2").val()=="epic"){text="Epic Fetus overrides normal tears, therefore your fired missiles will not spawn blue flies each time they hit. You still retain the flying ability from Guppy state and your player sprite will be a flying cat with a top hat.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/guppyepic.gif")}if($("#combo2").val()=="fetus"){text="Dr. Fetus overrides normal tears, therefore your fired bombs will not spawn blue flies each time they hit. You still retain the flying ability from Guppy state and your player sprite will be a flying cat with a top hat.";$(".synergy-color").addClass("orange");$(".synergy-image img").attr("src","images/jifs/guppyfetus.gif")}if($("#combo2").val()=="triple"){text="Each of the tears from your Triple Shot which hits an enemy will cause you to spawn a blue fly. The damage that each fly does is not increased as a result of the Inner Eye.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppytriple.gif")}if($("#combo2").val()=="ipecac"){text="Ipecac stacks with Guppy and each poison ipecac shot has a chance for blue flies to spawn.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppyipecac.gif")}if($("#combo2").val()=="quad"){text="Each of the tears from your Quad Shot which hits an enemy will cause you to spawn a blue fly. The damage that each fly does is not increased as a result of the Mutant Spider.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppyquad.gif")}if($("#combo2").val()=="contacts"){text="Your normal tears have a random chance to apply the freeze effect from Mom's Contacts and will also continue to spawn blue flies.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppycontacts.gif")}if($("#combo2").val()=="knife"){text="Mom's Knife replaces your normal tears and spawns lots of blue flies each time you hit an enemy with it. Blue flies spawned this way will not get a damage increase as a result of Mom's Knife";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppyknife.gif")}if($("#combo2").val()=="one"){text="The tears up from Number one stacks with Guppy and will cause you to fire low range tears but a lot more frequently, which will cause more blue flies to spawn.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppynumber.gif")}if($("#combo2").val()=="polyphemus"){text="Polyphemus stacks with Guppy state and each blue fly spawned will do double the damage that your tears do. At base damage Polyphemus tears do 15 damage and therefore blue flies do 30 damage, which makes this an extremely powerful item synergy.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppypoly.gif")}if($("#combo2").val()=="sacred"){text="Sacred Heart stacks with Guppy state and each blue fly spawned will do double the damage that your tears do. At base damage Sacred Heart tears do ~9 damage and therefore blue flies do 18 damage, which makes this a powerful item synergy.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppysacred.gif")}if($("#combo2").val()=="spider"){text="Normal tears have a random chance to apply the Spider's Bite effect, which will slow down enemy speed and shot speed.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppyspider.gif")}if($("#combo2").val()=="spoon"){text="Normal tears get the Spoon Bender effect, which makes them curve towards enemies.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppyspoon.gif")}if($("#combo2").val()=="tech"){text="Normal tears become lasers and each laser which hits an enemy will spawn a blue fly from the Guppy effect. Isaac's player sprite will lose his cat head and replace it with the normal technology head.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppytech.gif")}if($("#combo2").val()=="tech2"){text="The very high fire rate of Technology 2 will cause significantly more blue flies to spawn. The -35% damage from Technology 2 applies to each blue fly, however this combination spawns so many flies that it more than makes up for the damage decrease.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppytech2.gif")}if($("#combo2").val()=="wiggle"){text="Isaac's tears gain the wiggle effect from Wiggle Worm and get a small fire rate increase. Blue flies spawn exactly the same as they do with normal Guppy state.";$(".synergy-color").addClass("green");$(".synergy-image img").attr("src","images/jifs/guppywiggle.gif")}} $(".synergy-text").text(text);});
}); 