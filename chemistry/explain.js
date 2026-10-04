/* Chemistry: step-by-step explanations for the Explain button (calculation questions).
   Each entry gives one explanation for each step of the working shown after Check Answer, in the same order.
   The code before each entry identifies the question type; it is made by xk() in subjects.js from the question's method text. */
Object.assign(EXPL,{
/* ---- Particles & states of matter ---- */
'z6keru':[`When a substance melts, freezes, boils or condenses, its particles only change how they are arranged and how they move. No particles are made or destroyed, so the mass stays exactly the same.`],
'wn8x0z':[`The melted substance still contains every one of its particles, so it has the same mass as before. The total is just the two masses added together.`],
'5l3rjv':[`A sealed flask lets nothing in or out. The particles spread out when the substance changes state, but they are all still inside, so the balance reads the same.`],
'ucyq9':[`The temperature goes up by the same amount every minute, so multiply the rise per minute by the number of minutes to get the total rise.`,`The liquid did not start at zero. Add the rise to the starting temperature to find the final temperature.`],
/* ---- Atoms, elements & compounds ---- */
'8nd6bw':[`In a formula, the small number after a symbol counts that atom; a symbol with no number means one atom. Count each element, then add them all up.`],
'1j5r79c':[`Go through the formula one element at a time. Use the small number after each symbol (or 1 if there is none), then add the counts together.`],
'1pyjxzq':[`Every element's symbol begins with a capital letter, sometimes followed by a small letter. Count the capital letters to count the different elements.`],
'1ur4xxx':[`No atoms are lost when a substance breaks down, so the products together weigh the same as the starting substance. Take the product you know away from the total to find the other.`],
'1f0fsb':[`In a reaction the atoms are only rearranged, not created or destroyed. The product must contain all the atoms of both reactants, so add their masses.`],
'37g4l':[`Mass is always conserved. If the solid left behind weighs less, the difference has left as a gas. Subtract the final mass from the starting mass.`],
'192nrv':[`The compound contains all the iron and all the sulfur that reacted. Take the mass of iron away from the mass of the compound to leave the mass of sulfur.`],
'u8105a':[`A number outside a bracket multiplies every atom inside it. Multiply out the bracket first, then add the atoms outside the bracket.`],
'9cok5z':[`First use conservation of mass to find how much carbon dioxide comes from the larger amount. The same fraction is lost whatever the starting mass, so scale it down: multiply by the new mass and divide by the original mass.`],
'149iabo':[`Hydrogen and oxygen always combine in the same ratio by mass: 8 g of oxygen for every 1 g of hydrogen. Multiply the hydrogen mass by 8.`,`Water contains all of the hydrogen and all of the oxygen that reacted, so add the two masses.`],
'li1wxn':[`The magnesium gains mass because oxygen atoms from the air join onto it. The gain in mass is the mass of oxygen, so subtract the magnesium's mass from the product's.`],
'p1xd27':[`A big number in front of a formula means that many separate units. Each unit has the same number of hydrogen atoms, so multiply.`],
'ds2v3t':[`A big number in front of a formula means that many separate units. Each unit has the same number of oxygen atoms, so multiply.`],
/* ---- Mixtures & separation ---- */
'1e9dq9c':[`When a solid dissolves, its particles spread out between the water particles but they are all still there. The solution's mass is the solute's mass plus the solvent's mass.`],
's6nybl':[`The solution is made of just the solute and the solvent. Take the solute's mass away from the solution's mass to find the mass of the solvent (or the other way round).`],
'1pprb59':[`Each gram of water can dissolve the same amount of solid. Find the amount for the new mass of water by multiplying by the new mass and dividing by 100.`],
'1jps37m':[`Rf = distance moved by the spot ÷ distance moved by the solvent. To get the spot's distance on its own, multiply the Rf value by the solvent's distance.`],
'aadleh':[`The Rf value compares how far the spot moved with how far the solvent moved, so divide one by the other. It has no unit and is always less than 1.`],
'5v6j17':[`The percentage is of the mass in grams, so first change kilograms into grams: multiply by 1000.`,`To find a percentage of an amount, multiply by the percentage and divide by 100.`],
'kq5fbs':[`As the solution cools, less solid can stay dissolved. The difference between the two solubilities is the mass of crystals that forms for every 100 g of water.`,`There is not 100 g of water here, so scale the answer: multiply by the actual mass of water and divide by 100.`],
'ef9yrh':[`Solubility is given for 100 g of water. Scale it to the mass of water actually used: multiply by that mass and divide by 100.`,`A saturated solution contains the water and all the salt dissolved in it, so add the two masses.`],
'1gnl02t':[`Distance moved by a spot = its Rf value × the distance the solvent moved.`,`Do the same for the second dye, using its own Rf value.`,`The gap between the two spots is the difference between the distances they travelled.`],
/* ---- Chemical reactions ---- */
'17ddgis':[`When copper is heated in air, oxygen atoms join onto it, so the product is heavier. The increase in mass is the mass of oxygen that reacted.`],
'1e92ine':[`Atoms are rearranged in a reaction but never created or destroyed, so the products together have the same mass as the reactants together.`],
'1fsr7z3':[`The big number in front says how many molecules there are; the small number says how many of that atom are in each molecule. Multiply them to count the atoms.`],
'5g0f3a':[`A balanced equation has the same number of each kind of atom on both sides, because atoms cannot appear or disappear. Count each element on both sides and choose the number that makes them match.`],
'yrcw2i':[`The same reaction always uses and makes substances in the same ratio by mass. Scale the known amount: multiply by the new mass and divide by the original mass.`],
'1qumisa':[`The masses are in proportion. If the starting mass is a quarter as much, the product is a quarter as much: multiply by the new mass and divide by the original mass.`],
'1vmszng':[`First add the masses of the two reactants to find the mass of product from the full amount. Then scale it to the smaller amount: multiply by the new mass and divide by the original mass.`],
'1ykpb3c':[`Count the atoms of each element on the complete side. The other side must have exactly the same numbers, so choose the big number that makes them equal.`],
/* ---- Acids & alkalis ---- */
'1j1f6rr':[`Neutralisation needs acid and alkali in a fixed ratio. If there is several times more acid, the same number of times more alkali is needed, so multiply.`],
'b2a73v':[`Subtract one pH from the other to find how many steps apart they are on the pH scale.`,`Each step of 1 on the pH scale means the acid is 10 times more (or less) concentrated, so multiply by 10 once for every step.`],
'1ro4u65':[`Divide the new volume of alkali by the original volume to find the scale factor.`,`Acid and alkali react in a fixed ratio, so multiply the original acid volume by the same factor.`],
'17furw2':[`Subtract one pH from the other to find how many steps apart they are on the pH scale.`,`Each step means 10 times, so two steps is 10 × 10 and three steps is 10 × 10 × 10.`],
/* ---- Periodic table ---- */
'e9gq5y':[`Elements in a group show a steady trend, so a missing value should lie about halfway between its neighbours. Add the two known values and divide by 2 to find the midpoint.`],
/* ---- Energy changes ---- */
'n82gh4':[`The temperature has fallen, so the change is the starting temperature minus the final temperature. A fall in temperature shows that the reaction took in energy (endothermic).`],
'lcaxzj':[`The change in temperature is the final reading minus the starting reading. A rise shows that the reaction gave out energy (exothermic).`],
'1xhc9qx':[`The mean shares the total equally between the results. Add all the results, then divide by how many there are.`],
'eha2oe':[`To compare fuels fairly, find the temperature rise for ONE gram of fuel: divide the rise by the mass burned.`,`Do the same for the second fuel.`,`Subtract the smaller value from the larger to see how much better one fuel is per gram.`],
'uz5n96':[`Dividing the temperature rise by the mass of fuel gives the rise produced by each gram, which lets different fuels be compared fairly.`],
'1po7evy':[`Breaking bonds takes energy in; making bonds gives energy out. If more is given out than taken in, the difference is released to the surroundings, so subtract.`],
'u9nrm':[`Breaking bonds takes energy in; making bonds gives energy out. Here more is taken in than given out, so the difference is absorbed from the surroundings. Subtract the smaller from the larger.`],
'4d58b7':[`The energy gained by the water = mass of water × 4.2 × temperature rise. The 4.2 is the energy in joules needed to warm 1 g of water by 1 °C.`],
'1qiwpyu':[`It is the WATER that is heated, so its mass goes into the formula: mass of water × 4.2 × temperature rise. The mass of fuel burned is not used here.`],
'kalh1k':[`Each gram of fuel releases the same amount of energy. Divide the energy needed by the energy from one gram to find how many grams are required.`],
/* ---- Materials & Earth resources ---- */
'1svxjmf':[`To find a percentage of an amount, divide the percentage by 100 and multiply by the amount.`],
'1i9wapd':[`Only part of the ore is metal. To find that percentage of the ore's mass, divide the percentage by 100 and multiply by the mass.`],
'fp986z':[`The metal is only a fraction of the ore, so more ore than metal is needed. Write the percentage as a decimal, then divide the mass of metal wanted by it.`],
'yuo4s3':[`Multiply the amount in each item by the number of items to get the total in milligrams. There are 1000 mg in 1 g, so divide by 1000.`],
'n50vgv':[`First find how much copper is in the ore: that percentage of the ore's mass.`,`Not all of that copper is successfully extracted. Find the second percentage of the copper, not of the ore.`],
'd0w2y8':[`Multiply the mass recycled each week by the number of weeks to get the total in kilograms, then divide by 1000 to change to tonnes.`,`Each tonne recycled saves the same amount of energy, so multiply the number of tonnes by the saving per tonne.`],
'1y1durh':[`The reaction always produces iron in the same proportion. Scale the known result: multiply by the new mass of iron oxide and divide by the original mass.`],
/* ---- Earth & atmosphere ---- */
'1s55wum':[`Air is a mixture, and nitrogen makes up 78% of it. To find 78% of a volume, divide 78 by 100 and multiply by the volume.`],
'1smodn4':[`Find how much the value has gone up by subtracting the original from the new value.`,`Compare the increase with the ORIGINAL value: divide by the original and multiply by 100 to give a percentage.`],
'8jpr0j':[`The level rises by the same amount each year, so multiply by the number of years. There are 10 mm in 1 cm, so divide by 10 to change to centimetres.`],
'oqv6dd':[`There are 1000 litres in 1 m³, so multiply the volume by 1000 to change it into litres.`,`To find a percentage of an amount, multiply by the percentage and divide by 100. The percentage here is very small, so the answer is small too.`],
'1yh6fpj':[`Multiply the grams released per kilometre by the number of kilometres to get the total in grams. There are 1 000 000 g in a tonne, so divide by 1 000 000.`],
/* ---- Practical & investigation skills ---- */
'1f9amea':[`The mean shares the total equally between the readings. Add all the readings, then divide by how many there are. It is more reliable than a single reading.`],
'kawu1l':[`The balance shows the beaker and its contents together. Take away the mass of the empty beaker to leave just the mass of the contents.`],
'292ax4':[`The volume used is the difference between the two readings on the scale. Subtract the starting reading from the final reading.`],
'2h5ziv':[`A percentage compares a part with the whole. Divide the mass of salt by the mass of the rock salt it came from, then multiply by 100.`],
'pm7iz3':[`Rate means how much gas is made each second. Share the volume equally between the seconds by dividing. The unit is cm³/s.`],
'1fd3ap':[`Solubility is quoted for 100 g of water so that results can be compared. Scale the measured mass up: multiply by 100 and divide by the mass of water used.`],
'825e1a':[`One result does not fit the others, so leave it out. Add the remaining volumes and divide by how many there are to find the mean.`,`Rate = volume ÷ time, using the mean volume.`],
'8wb829':[`Percentage yield compares what was actually collected with what was expected. Divide the actual mass by the expected mass and multiply by 100. It is less than 100% because some product is always lost.`]
});
