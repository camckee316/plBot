// Imports
const { channel } = require('diagnostics_channel');
const { MessageEmbed, Message } = require('discord.js');

// Storage of Embed's colors
let Ecolor = {
  "blue" : "#0099ff",
  "black" : "black",
  "pink": "#deaded"
}

// Storage of Embed's data
function midData(pokeID){
let midStructure = new MessageEmbed()
	.setColor(`${Ecolor.blue}`)
  .setTitle("You must be Logged in to view the Pokemon")
  .setDescription(`https://www.pokemongods.com/game/monster/${pokeID}`);
 return midStructure;
}

function legendData(){
  let legendList = ["Articuno", "Giratina", "Cresselia", "Heatran", "Latios", 
                    "Latias", "Mewtwo", "Moltres", "Regice", "Regirock",
                    "Registeel", "Zapdos"] 
  let mythList = ["Manaphy", "Mew", "Phione", "Shaymin"]
  
  let legendStructure = new MessageEmbed()
  	.setColor(`${Ecolor.blue}`)
    .setTitle("List of Legendary & Mythical Pokemons available in the Game")
    .addFields(
      {name: 'Mythical Pokemons', value:`${mythList}`, inline: true },
      {name: '\u200B', value: '\u200B' },
      {name: 'Legendary Pokemons', value:`${legendList}`, inline: true }
    )
    .setFooter({ text: "To obtain these check guides on forum" + "\n\n" + "https://www.pokemongodsguide.com/"})
  return legendStructure;
}

function escapeData(){
  escapeStructure = new MessageEmbed()
	.setColor(`${Ecolor.blue}`)
  .setTitle("List of pokemons that can escape during a battle")
  //.setDescription(`${escapeList}`);
  .addFields(
    {name: 'Pokemon that can follow you in game', value:
    `Articuno, Cubone, Delibird, Dragonair, Dratini, 
    Eevee, Grimer, Heracross, Magnemite, Moltress, 
    Mr.Mime, Phanpy, Porygon, Quagsire, Snubbull, 
    Tangela, Teddiursa, Togetic, Umbreon, Unown, Zapdos
    `, inline: true }
  )
    return escapeStructure;
}

function timeData(){
let timeStructure = new MessageEmbed()
	.setColor(`${Ecolor.blue}`)
  .setTitle("Server Time for Day & Night cycle")
  .setDescription(
`03:00 - 09:00 Night
09:00 - 15:00 Day
15:00 - 21:00 Night
21:00 - 03:00 Day`)
  .setFooter({ text: "TIP: On game's English chat, type /time to know exact time"});
 return timeStructure;
}

function plmapData(){
// Moved to commands/./plmap.ks
// coz Function allows 1 return only
// but we needed to return 7
}

function followerData(){
let followerStructure = new MessageEmbed()
	.setColor(`${Ecolor.blue}`)
  .setTitle("List of Pokemons that can be your follower")
	.addFields(
		{ name: 'Followers from Kanto Region', value: 
`
		Bulbasaur - Ivysaur - Venusaur
		Charmander - Charmeleon - Charizard
		Squirtle - Wartotle - Blastosie
		Caterpie
		Pikachu - Raichu
		Krabby - Magikarp
`, inline: true },
		{ name: 'Followers from Johto', value: 
`
		Chikotira - Bayleef - Meganium
		Cyndaquil - Quilava - Typhlosion
		Totodile - Croconaw - Feraligatr
		Sentret
`, inline: true },
		{ name: 'Followers from Hoenn', value: 
`
		Treecko - Grovyle - Sceptile
		Torchic - Combusken - Blaziken
		Mudkip - Marshtomp - Swampert
		Wurmple
		Spinda
`, inline: true },
		{ name: 'Followers from Sinnoh', value: 
`
		Turtwig - Grotle - Torterra
		Chimchar - Monferno - Infernape
		Piplup - Prinplup - Empoleon
		Bidoof
`, inline: true },
		{ name: 'Followers from Unova', value: 
`
		Victini
		Snivy - Servine - Serperior
		Tepig - Pignite - Emboar
		Oshawott - Dewott - Samurott
		Patrat
		Munna - Musharna
		Cottonee
		Petilil
		Krokorok
		Zorua
		Minccino
		Cobalion
		Terrakion
		Virizion
		Keldeo
`, inline: true },
		{ name: 'Followers from Kalos', value: 
`
		Chespin - Quilladin - Chesnaught
		Fennekin - Braixen - Delphox
		Froakie - Frogadier - Greninja
`, inline: true }
	)
 return followerStructure;
}

function helpData(){
  let helpStructure = new MessageEmbed()
    .setColor(`${Ecolor.blue}`)
    .setTitle("Provides a list of bot commands with a description")
    .addFields(
      { name: '!pokeinfo <pokemonName>', value:
    `
    !pokemoninfo scizor, provides national pokemon number, pokemon name, evolutions, what map/event they are found on, ev yield given, possible abilities, basestats, growth rate, pokemon type. 
    `, inline: true }, 
      
      {name: '!escape', value: 
    `
    !escape, provides a list of pokemon that can escape during a battle. 
    `, inline: true },
      
      {name: '!follower', value:
    `
    !follower, provides a list of pokemons that can follow you in game.
    `, inline: true },
    
      {name:'!help', value:
    `
    !help, provides a list of commands for bot usage. 
    `, inline: true },
    
      {name: '!legend', value:
    `
    !legend, Provides a list of legendary & mythical pokemons found in the game.
    `, inline: true }, 
      
      {name: '!nonmap', value: 
    `
    !nonmap, Provides a list of non-map pokemons.
    `, inline: true },
    
      {name: '!plmap', value:
    `
    !plmap, Provides maps of serveral regions of the game.
    `, inline: true },
    
      {name: '!time', value: 
    `
    !time, Provides information about server time and Day-Night cycle.
    `, inline: true }, 
    
      {name: '!ability <nameOfAbility>', value:
    `
    !ability skill link, Provides information about a pokemons ability.
    `, inline: true },
    
      {name: '!area <mapName>', value: 
    `
    !area grassy patch, provides information on whih pokemon are found on that map and there ev yields
    `, inline: true }, 
    
      {name: '!breed <pokemonName>', value: 
    `
    !breed venipede, gives a list of pokemon the can produce eggs. 
    `, inline: true }, 
    
      {name: '!cover <type> or !cover <type1, type2>', value:
    `
    !cover dark or !cover rock,dark, provides the coverage type or type combination. 
    `, inline: true }, 
    
      {name: '!evtrain <stat>,', value: 
    `
    !evtrain attack, provides information on which pokemon to faint to collect the ev yield
    `, inline: true }, 
    
      {name: '!item <nameOfItem>', value:
    `
    !item pokeball, provides information on item. 
    `, inline: true }, 
    
      {name: '!move <nameOfMove>', value:
    `
    !move calm mind, list the move and gives a description of the move, power, accuracy and what caterogy it is in.
    `, inline: true },
    
      {name: '!movetutor <moveType>', value: 
    `
    !movetutor dark, provides information location of move tutor and the moves taught. 
    `, inline: true }, 
    
      {name: '!weak <pokemonName>', value:
    `
    !weak scizor, provides information on pokemon weakness, resistance, and immuities
    `, inline: true }, 
    
      {name: '!rebirth <pokemonName>', value:
    `
    !rebirth mew, provides information on where to rebirth legendaries, rebirthing requires having rebirth crystals
    `, inline: true },
    
      {name: '!tournament <nameOfTournament>', value:
    `
    !tournament starters, provides information on which pokemon can be won
    `, inline: true }, 
    
      {name: '!nature', value:
    `
    !nature, shows nature chart.
    `, inline: true },
    
      {name: '!drop', value:
    `
    !drop, gives a list of pokemon that may ocasionally drop items. 
    `, inline: true }, 
    
      {name: '!thanks', value:
    `
    !thanks, special thanks to those who have helped and are helping the making GyaradosThief (GT) 
    `, inline: true }
    )
    return helpStructure;
    }
    
    function thanksData(){
      let thanksStructure = new MessageEmbed()
      .setColor(`${Ecolor.blue}`)
      .setTitle("A thanks to those who contributed to the making and updating of GT.")
      .addFields(
        {name: 'Thank you all very much', value: 
      `
      I would like to thank the follow individules for there contribution to GyaradosThief also know as karpthief back when irc was used. 
    
            PrincessPhoenix for allowing me to make karpthief a home in irc, information on items, pokemon, and many other things, and for helping with the code.
            
            Nexus for helping with the coding when I was unable to find a solution, information on items, pokemon and many other things. 
            
            All the players who made the guides on the forum, for that is where some commands came from, and are too numorous to mention. 
            
            Elkavya11 who has revamp GT coding to make it run better.
      `, inline: true }
      )
      return thanksStructure;
      }  
      
      function dropData(){
        let dropData = new MessageEmbed()
        .setColor(`${Ecolor.blue}`)
        .setTitle("List of pokemon that may drop an item.")
        .addFields(
          {name: 'Pokemon that may drop items', value: 
        `
        Caterpie, Sentret, Pidgey, Weedle, Lotad, Spinarak, Wingull, Zubat, Misdreavus, Paras, Miltank, Geodude, Larvesta
        `, inline: true },
        
        {name: 'Use the command !pokedex to find the item which the pokemon may drop', value:
        `
        Items are not always 100% 
        `, inline: true}
        )
        return dropData;
        }
function nonmapData(){
	nonmapStructure = new MessageEmbed()
		.setColor(`${Ecolor.blue}`)
		.setTitle("List of pokemon that can follow you in game")
		.addFields(
			{name: 'Pokemon that can follow you in game', value: 
		`
		Alomomola, Amaura, Audino, Axew, Basculin, Bergmite,
                Binacle, Carbink, Chingling, Clauncher, Cottonee, 
                Cranidos, Croagunk, Cryogonal, Cubchoo, Darumaka, 
                Dedenne, Deino, Drifloon, Drilbur, Druddigon, Durant,
                Emolga, Espurr, Frillish, Glaceon, Glameow, Golett,
                Goomy-Shiny Goomy, Gothita, Hawlucha, Helioptile, Happiny,
                Honedge, Inkay, Karrablast, Klink, Lillipup, Litwick,
                Mantyke, Mienfoo, Mimejr, Minccino, Mothim, Munna, 
                Noibat, Pachirisu, Pancham, Pawniard,Phantum, 
                Pumpkaboo, Riolu, Roggenrola, Rotom, Sandile, Scraggy,
                Shieldon, Sigilyph, Skorupi, Skrelp, Snover, Solosis,
                Spiritomb, Spritzee, Stunfisk, Swirlix, Timburr, 
                Tirtouga, Trubbish, Tympole, Tynamo, Tyrunt, Vanillite,
                Vullaby, Woobat, Wormadam, Yamask
		`, inline: true}
		)
		return nonmapStructure;    
    }
    
    function nonmapData(){
      nonmapStructure = new MessageEmbed()
        .setColor(`${Ecolor.blue}`)
        .addFields(
          {name: 'Pokemon that can follow you in game', value: 
        `
        Alomomola, Amaura, Audino, Axew, Basculin, Bergmite,
                    Binacle, Carbink, Chingling, Clauncher, Cottonee, 
                    Cranidos, Croagunk, Cryogonal, Cubchoo, Darumaka, 
                    Dedenne, Deino, Drifloon, Drilbur, Druddigon, Durant,
                    Emolga, Espurr, Frillish, Glaceon, Glameow, Golett,
                    Goomy-Shiny Goomy, Gothita, Hawlucha, Helioptile, Happiny,
                    Honedge, Inkay, Karrablast, Klink, Lillipup, Litwick,
                    Mantyke, Mienfoo, Mimejr, Minccino, Mothim, Munna, 
                    Noibat, Pachirisu, Pancham, Pawniard,Phantum, 
                    Pumpkaboo, Riolu, Roggenrola, Rotom, Sandile, Scraggy,
                    Shieldon, Sigilyph, Skorupi, Skrelp, Snover, Solosis,
                    Spiritomb, Spritzee, Stunfisk, Swirlix, Timburr, 
                    Tirtouga, Trubbish, Tympole, Tynamo, Tyrunt, Vanillite,
                    Vullaby, Woobat, Wormadam, Yamask
        `, inline: true}
        )
        return nonmapStructure;
        }

        



module.exports = {
  midData : midData,
  legendData : legendData,
  escapeData : escapeData,
  timeData : timeData,
  nonmapData : nonmapData,
  followerData : followerData,
  helpData : helpData,
  thanksData : thanksData,
  dropData : dropData,
  nonmapData : nonmapData, 
  Ecolor : Ecolor
}