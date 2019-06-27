import { config } from './data/config.js'
import { locale } from './i18n.js'

export function getTopChampionsForLeague(patch, league)
{
  const lang = locale()
  var data = require('./data/patches/'+ lang + '/'+ patch.split(".").join("") +'.json')
  return data["top_champions"][league]
}

export function getBuffsList(patch)
{
  const lang = locale()
  var data = require('./data/patches/'+ lang + '/'+ patch.split(".").join("") +'.json')
  return data["buffs"]
}

export function getNerfsList(patch)
{
  const lang = locale()
  var data = require('./data/patches/'+ lang + '/'+ patch.split(".").join("") +'.json')
  return data["nerfs"]
}

export function getUpdatesList(patch)
{
  const lang = locale()
  var data = require('./data/patches/'+ lang + '/'+ patch.split(".").join("") +'.json')
  return data["updates"]
}

export function getCurrentPatch(){
  return config["currentPatch"]
}
export function getChampionsTiles()
{
  return {
    'Aatrox': require('./assets/champion/Aatrox.png'),
    'Ahri': require('./assets/champion/Ahri.png'),
    'Akali': require('./assets/champion/Akali.png'),
    'Alistar': require('./assets/champion/Alistar.png'),
    'Amumu': require('./assets/champion/Amumu.png'),
    'Anivia': require('./assets/champion/Anivia.png'),
    'Annie': require('./assets/champion/Annie.png'),
    'Ashe': require('./assets/champion/Ashe.png'),
    'AurelionSol': require('./assets/champion/AurelionSol.png'),
    'Azir': require('./assets/champion/Azir.png'),
    'Bard': require('./assets/champion/Bard.png'),
    'Blitzcrank': require('./assets/champion/Blitzcrank.png'),
    'Brand': require('./assets/champion/Brand.png'),
    'Braum': require('./assets/champion/Braum.png'),
    'Caitlyn': require('./assets/champion/Caitlyn.png'),
    'Camille': require('./assets/champion/Camille.png'),
    'Cassiopeia': require('./assets/champion/Cassiopeia.png'),
    'Chogath': require('./assets/champion/Chogath.png'),
    'Corki': require('./assets/champion/Corki.png'),
    'Darius': require('./assets/champion/Darius.png'),
    'Diana': require('./assets/champion/Diana.png'),
    'Draven': require('./assets/champion/Draven.png'),
    'DrMundo': require('./assets/champion/DrMundo.png'),
    'Ekko': require('./assets/champion/Ekko.png'),
    'Elise': require('./assets/champion/Elise.png'),
    'Evelynn': require('./assets/champion/Evelynn.png'),
    'Ezreal': require('./assets/champion/Ezreal.png'),
    'Fiddlesticks': require('./assets/champion/Fiddlesticks.png'),
    'Fiora': require('./assets/champion/Fiora.png'),
    'Fizz': require('./assets/champion/Fizz.png'),
    'Galio': require('./assets/champion/Galio.png'),
    'Gangplank': require('./assets/champion/Gangplank.png'),
    'Garen': require('./assets/champion/Garen.png'),
    'Gnar': require('./assets/champion/Gnar.png'),
    'Gragas': require('./assets/champion/Gragas.png'),
    'Graves': require('./assets/champion/Graves.png'),
    'Hecarim': require('./assets/champion/Hecarim.png'),
    'Heimerdinger': require('./assets/champion/Heimerdinger.png'),
    'Illaoi': require('./assets/champion/Illaoi.png'),
    'Irelia': require('./assets/champion/Irelia.png'),
    'Ivern': require('./assets/champion/Ivern.png'),
    'Janna': require('./assets/champion/Janna.png'),
    'JarvanIV': require('./assets/champion/JarvanIV.png'),
    'Jax': require('./assets/champion/Jax.png'),
    'Jayce': require('./assets/champion/Jayce.png'),
    'Jhin': require('./assets/champion/Jhin.png'),
    'Jinx': require('./assets/champion/Jinx.png'),
    'Kaisa': require('./assets/champion/Kaisa.png'),
    'Kalista': require('./assets/champion/Kalista.png'),
    'Karma': require('./assets/champion/Karma.png'),
    'Karthus': require('./assets/champion/Karthus.png'),
    'Kassadin': require('./assets/champion/Kassadin.png'),
    'Katarina': require('./assets/champion/Katarina.png'),
    'Kayle': require('./assets/champion/Kayle.png'),
    'Kayn': require('./assets/champion/Kayn.png'),
    'Kennen': require('./assets/champion/Kennen.png'),
    'Khazix': require('./assets/champion/Khazix.png'),
    'Kindred': require('./assets/champion/Kindred.png'),
    'Kled': require('./assets/champion/Kled.png'),
    'KogMaw': require('./assets/champion/KogMaw.png'),
    'Leblanc': require('./assets/champion/Leblanc.png'),
    'LeeSin': require('./assets/champion/LeeSin.png'),
    'Leona': require('./assets/champion/Leona.png'),
    'Lissandra': require('./assets/champion/Lissandra.png'),
    'Lucian': require('./assets/champion/Lucian.png'),
    'Lulu': require('./assets/champion/Lulu.png'),
    'Lux': require('./assets/champion/Lux.png'),
    'Malphite': require('./assets/champion/Malphite.png'),
    'Malzahar': require('./assets/champion/Malzahar.png'),
    'Maokai': require('./assets/champion/Maokai.png'),
    'MasterYi': require('./assets/champion/MasterYi.png'),
    'MissFortune': require('./assets/champion/MissFortune.png'),
    'MonkeyKing': require('./assets/champion/MonkeyKing.png'),
    'Mordekaiser': require('./assets/champion/Mordekaiser.png'),
    'Morgana': require('./assets/champion/Morgana.png'),
    'Nami': require('./assets/champion/Nami.png'),
    'Nasus': require('./assets/champion/Nasus.png'),
    'Nautilus': require('./assets/champion/Nautilus.png'),
    'Neeko': require('./assets/champion/Neeko.png'),
    'Nidalee': require('./assets/champion/Nidalee.png'),
    'Nocturne': require('./assets/champion/Nocturne.png'),
    'Nunu': require('./assets/champion/Nunu.png'),
    'Olaf': require('./assets/champion/Olaf.png'),
    'Orianna': require('./assets/champion/Orianna.png'),
    'Ornn': require('./assets/champion/Ornn.png'),
    'Pantheon': require('./assets/champion/Pantheon.png'),
    'Poppy': require('./assets/champion/Poppy.png'),
    'Pyke': require('./assets/champion/Pyke.png'),
    'Quinn': require('./assets/champion/Quinn.png'),
    'Rakan': require('./assets/champion/Rakan.png'),
    'Rammus': require('./assets/champion/Rammus.png'),
    'RekSai': require('./assets/champion/RekSai.png'),
    'Renekton': require('./assets/champion/Renekton.png'),
    'Rengar': require('./assets/champion/Rengar.png'),
    'Riven': require('./assets/champion/Riven.png'),
    'Rumble': require('./assets/champion/Rumble.png'),
    'Ryze': require('./assets/champion/Ryze.png'),
    'Sejuani': require('./assets/champion/Sejuani.png'),
    'Shaco': require('./assets/champion/Shaco.png'),
    'Shen': require('./assets/champion/Shen.png'),
    'Shyvana': require('./assets/champion/Shyvana.png'),
    'Singed': require('./assets/champion/Singed.png'),
    'Sion': require('./assets/champion/Sion.png'),
    'Sivir': require('./assets/champion/Sivir.png'),
    'Skarner': require('./assets/champion/Skarner.png'),
    'Sona': require('./assets/champion/Sona.png'),
    'Soraka': require('./assets/champion/Soraka.png'),
    'Swain': require('./assets/champion/Swain.png'),
    'Sylas': require('./assets/champion/Sylas.png'),
    'Syndra': require('./assets/champion/Syndra.png'),
    'TahmKench': require('./assets/champion/TahmKench.png'),
    'Taliyah': require('./assets/champion/Taliyah.png'),
    'Talon': require('./assets/champion/Talon.png'),
    'Taric': require('./assets/champion/Taric.png'),
    'Teemo': require('./assets/champion/Teemo.png'),
    'Thresh': require('./assets/champion/Thresh.png'),
    'Tristana': require('./assets/champion/Tristana.png'),
    'Trundle': require('./assets/champion/Trundle.png'),
    'Tryndamere': require('./assets/champion/Tryndamere.png'),
    'TwistedFate': require('./assets/champion/TwistedFate.png'),
    'Twitch': require('./assets/champion/Twitch.png'),
    'Udyr': require('./assets/champion/Udyr.png'),
    'Urgot': require('./assets/champion/Urgot.png'),
    'Varus': require('./assets/champion/Varus.png'),
    'Vayne': require('./assets/champion/Vayne.png'),
    'Veigar': require('./assets/champion/Veigar.png'),
    'Velkoz': require('./assets/champion/Velkoz.png'),
    'Vi': require('./assets/champion/Vi.png'),
    'Viktor': require('./assets/champion/Viktor.png'),
    'Vladimir': require('./assets/champion/Vladimir.png'),
    'Volibear': require('./assets/champion/Volibear.png'),
    'Warwick': require('./assets/champion/Warwick.png'),
    'Xayah': require('./assets/champion/Xayah.png'),
    'Xerath': require('./assets/champion/Xerath.png'),
    'XinZhao': require('./assets/champion/XinZhao.png'),
    'Yasuo': require('./assets/champion/Yasuo.png'),
    'Yorick': require('./assets/champion/Yorick.png'),
    'Yuumi': require('./assets/champion/Yuumi.png'),
    'Zac': require('./assets/champion/Zac.png'),
    'Zed': require('./assets/champion/Zed.png'),
    'Ziggs': require('./assets/champion/Ziggs.png'),
    'Zilean': require('./assets/champion/Zilean.png'),
    'Zoe': require('./assets/champion/Zoe.png'),
    'Zyra': require('./assets/champion/Zyra.png'),

  }
}

export function getRoleIcons()
{
  return {
    'top': require('./assets/roles/Top_icon.png'),
    'jg': require('./assets/roles/Jungle_icon.png'),
    'mid': require('./assets/roles/Middle_icon.png'),
    'adc': require('./assets/roles/Bottom_icon.png'),
    'sup': require('./assets/roles/Support_icon.png')
  }
}

export function getLeagueIcons()
{
  return {
    'iron': require('./assets/leagues/iron.png'),
    'bronze': require('./assets/leagues/bronze.png'),
    'silver': require('./assets/leagues/silver.png'),
    'gold': require('./assets/leagues/gold.png'),
    'platinum': require('./assets/leagues/platinum.png'),
    'diamond': require('./assets/leagues/diamond.png')
  }
}
