var team = {
teamName: "Minnesota Vikings",
sportPlayed: "football",
leagueName: "National Football League",
leagueDivision: "NFC North",
divisionMoniker: "Black and Blue Division",
divisionRivals: ["Green Bay Packers", "Chicago Bears", "Detroit Lions"],
divisionChampionships: 19,
playoffBerths: 29,
superBowlAppearances: 4,
superBowlWins: 0,
};


var o = {superBowlWins:0}
  Object.defineProperties(o, {
    "b": {get: function() {return this.superBowlWins - 2;} },
    "c": {set: function(x) {this.superBowlWins = x / 2;} }

  });

o.c = 4;

console.log("The " + team.teamName + " play " + team.sportPlayed + " in the " + team.leagueName + "(NFL). The NFL is divided into eight divisions and the " + team.teamName + " play in the " +
team.leagueDivision + ", which has earned the nickname of the '" + team.divisionMoniker + "' due to how brutal it has been throughout its history. The " +
team.leagueDivision + " hosts 3 other teams besides the " + team.teamName + ", those teams include the " + team.divisionRivals[0] + ", the " +
team.divisionRivals[1] + " and the " + team.divisionRivals[2] + ". Throughout their history, the " + team.teamName + " have won " + team.divisionChampionships +
" Division Championships and have had " + team.playoffBerths + " playoff appearances. In those " + team.playoffBerths + " playoff appearances the " +
team.teamName + " have made it to the Super Bowl " + team.superBowlAppearances + " times. However, they won exactly " + (o.b) + " of those appearances.");
