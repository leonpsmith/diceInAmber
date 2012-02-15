smalltalk.addPackage('Dice', {});
smalltalk.addClass('Player', smalltalk.Object, ['id', 'name', 'userName', 'tavern', 'key', 'dice'], 'Dice');
smalltalk.addMethod(
unescape('_exampleInTavern_'),
smalltalk.method({
selector: unescape('exampleInTavern%3A'),
category: 'examples',
fn: function (aTavern) {
    var self = this;
    self['@name'] = "Pete Shepard";
    self['@userName'] = "liarPete";
    self['@tavern'] = aTavern;
    return self;
},
args: ["aTavern"],
source: unescape('exampleInTavern%3A%20aTavern%0A%09%22fill%20myself%20in%20for%20examples%20and%20testing%22%0A%0A%09name%20%3A%3D%20%27Pete%20Shepard%27.%0A%09userName%20%3A%3D%20%27liarPete%27.%0A%09tavern%20%3A%3D%20aTavern.%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Player);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@dice'] = smalltalk.send(smalltalk.Dice || Dice, "_new", []);
    return self;
},
args: [],
source: unescape('initialize%0A%09%22get%20ready%20to%20be%20used%22%0A%0A%09super%20initialize.%0A%09dice%20%3A%3D%20Dice%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: ["Dice"]
}),
smalltalk.Player);

smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
category: 'examples',
fn: function () {
    var self = this;
    self['@name'] = "Pete Shepard";
    self['@userName'] = "liarPete";
    return self;
},
args: [],
source: unescape('example%0A%09%22fill%20myself%20in%20for%20examples%20and%20testing%22%0A%0A%09name%20%3A%3D%20%27Pete%20Shepard%27.%0A%09userName%20%3A%3D%20%27liarPete%27.%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Player);

smalltalk.addMethod(
unescape('_dice'),
smalltalk.method({
selector: unescape('dice'),
category: 'access',
fn: function (){
var self=this;
return self['@dice'];
return self;},
args: [],
source: unescape('dice%0A%09%22return%20an%20object%20that%20represents%20my%20dice%22%0A%0A%09%5E%20dice'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Player);



smalltalk.addClass('TavernDice', smalltalk.Object, ['repository', 'taverns'], 'Dice');
smalltalk.TavernDice.comment=unescape('TavernDice%20is%20the%20Model%20of%20the%20tavernDice%20application.%20The%20TavernDiceView%20will%20serve%20as%20both%20View%20and%20Controller%20until%20we%20see%20the%20beed%20to%20refactor%20that')
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@taverns'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
    return self;
},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09taverns%20%3A%3D%20OrderedCollection%20new.%0A%09'),
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TavernDice);

smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
category: 'examples',
fn: function () {
    var self = this;
    smalltalk.send(self['@taverns'], "_add_", [smalltalk.send(smalltalk.send(smalltalk.Tavern || Tavern, "_new", []), "_example", [])]);
    return self;
},
args: [],
source: unescape('example%0A%09%22fill%20myself%20in%20for%20example%20and%20test%20purposes%22%0A%0A%09taverns%20add%3A%20%28Tavern%20new%20example%29.'),
messageSends: ["add:", "example", "new"],
referencedClasses: ["Tavern"]
}),
smalltalk.TavernDice);

smalltalk.addMethod(
unescape('_taverns'),
smalltalk.method({
selector: unescape('taverns'),
category: 'access',
fn: function (){
var self=this;
return self['@taverns'];
return self;},
args: [],
source: unescape('taverns%0A%09%22return%20my%20collection%20of%20known%20taverns%22%0A%0A%09%5E%20taverns'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TavernDice);


smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
category: 'example',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_example", []);
return self;},
args: [],
source: unescape('example%0A%09%22fill%20myself%20just%20for%20examples%20or%20testing%20and%20open%20a%20view%20on%20myself%22%0A%0A%09%5E%20self%20new%20example.%0A%0A'),
messageSends: ["example", "new"],
referencedClasses: []
}),
smalltalk.TavernDice.klass);


smalltalk.addClass('Game', smalltalk.Object, ['id', 'players', 'started', 'ended', 'winner', 'tavern'], 'Dice');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function () {
    var self = this;
    self['@players'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
    self['@started'] = smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_now", []), "_asMilliseconds", []);
    return self;
},
args: [],
source: unescape('initialize%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%09players%20%3A%3D%20OrderedCollection%20new.%0A%09started%20%3A%3D%20Date%20now%20asMilliseconds.%0A'),
messageSends: ["new", "asMilliseconds", "now"],
referencedClasses: ["OrderedCollection", "Date"]
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_addPlayer_'),
smalltalk.method({
selector: unescape('addPlayer%3A'),
category: 'initialization',
fn: function (aPlayer) {
    var self = this;
    smalltalk.send(self['@players'], "_add_", [aPlayer]);
    return self;
},
args: ["aPlayer"],
source: unescape('addPlayer%3A%20aPlayer%0A%09%22they%20want%20me%20to%20add%20aPlayer%20to%20the%20game.%20In%20the%20future%20I%20might%20throw%20an%20exception%20if%20too%20few%20seats%20or%20something%22%0A%0A%09players%20add%3A%20aPlayer'),
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_setTavern_'),
smalltalk.method({
selector: unescape('setTavern%3A'),
category: 'initialization',
fn: function (aTavern) {
    var self = this;
    self['@tavern'] = aTavern;
    return self;
},
args: ["aTavern"],
source: unescape('setTavern%3A%20aTavern%0A%0A%09%22where%20i%20am%20being%20played%22%0A%0A%09tavern%20%3A%3D%20aTavern'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_players'),
smalltalk.method({
selector: unescape('players'),
category: 'access',
fn: function (){
var self=this;
return self['@players'];
return self;},
args: [],
source: unescape('players%0A%09%22return%20the%20Liars%20that%20are%20playing%20this%20game%22%0A%0A%09%5E%20players'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Game);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (aTavern){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_setTavern_", [aTavern]);
return self;},
args: ["aTavern"],
source: unescape('on%3A%20aTavern%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%09%5E%28%20self%20new%20%29%20setTavern%3A%20aTavern'),
messageSends: ["setTavern:", "new"],
referencedClasses: []
}),
smalltalk.Game.klass);


smalltalk.addClass('Tavern', smalltalk.Object, ['id', 'name', 'city', 'state', 'maxSeats', 'numSeatsFilled', 'games', 'created', 'updated'], 'Dice');
smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
category: 'examples',
fn: function () {
    var self = this;
    var game = nil;
    var player = nil;
    self['@name'] = "Kings Tavern";
    self['@city'] = "Paradise";
    self['@state'] = "CA";
    self['@maxSeats'] = 10;
    self['@numSeatsFilled'] = 1;
    game = smalltalk.send(smalltalk.send(smalltalk.Game || Game, "_new", []), "_setTavern_", [self]);
    smalltalk.send(self['@games'], "_add_", [game]);
    player = smalltalk.send(smalltalk.send(smalltalk.Player || Player, "_new", []), "_example", []);
    smalltalk.send(game, "_addPlayer_", [player]);
    return self;
},
args: [],
source: unescape('example%0A%09%22fill%20me%20for%20testing%20or%20example%22%0A%0A%09%7C%20game%20player%20%7C%0A%0A%09name%20%3A%3D%20%27Kings%20Tavern%27.%0A%09city%20%3A%3D%20%27Paradise%27.%0A%09state%20%3A%3D%20%27CA%27.%0A%09maxSeats%20%3A%3D%2010.%0A%09numSeatsFilled%20%3A%3D%201.%0A%0A%09game%20%3A%3D%20Game%20new%20setTavern%3A%20self.%0A%09games%20add%3A%20game.%0A%0A%09player%20%3A%3D%20Player%20new%20example.%0A%09game%20addPlayer%3A%20player.%0A'),
messageSends: ["setTavern:", "new", "add:", "example", "addPlayer:"],
referencedClasses: ["Game", "Player"]
}),
smalltalk.Tavern);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@games'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
    return self;
},
args: [],
source: unescape('initialize%0A%09%22get%20ready%20to%20roll%22%0A%0A%09super%20initialize.%0A%20%09games%20%3A%3D%20OrderedCollection%20new.%0A'),
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Tavern);

smalltalk.addMethod(
unescape('_getName'),
smalltalk.method({
selector: unescape('getName'),
category: 'examples',
fn: function () {
    var self = this;
    return self['@name'];
    return self;
},
args: [],
source: unescape('getName%0A%09%22return%20my%20human%20friendly%20name%22%0A%0A%20%20%20%20%20%20%20%20%20%20%5E%20name'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Tavern);

smalltalk.addMethod(
unescape('_games'),
smalltalk.method({
selector: unescape('games'),
category: 'access',
fn: function (){
var self=this;
return self['@games'];
return self;},
args: [],
source: unescape('games%0A%09%22return%20the%20collection%20of%20games%20taking%20place%20at%20this%20Tavern%22%0A%0A%09%5E%20games'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Tavern);



smalltalk.addClass('Dice', smalltalk.Object, ['id', 'gameID', 'liarID', 'dice', 'numDice', 'numSides'], 'Dice');
smalltalk.Dice.comment=unescape('I%20represent%20a%20number%20of%20individual%20die%20%28dice%29%20to%20form%20what%20we%20refer%20to%20as%20a%20set%20of%20Dice%20for%20a%20given%20player')
smalltalk.addMethod(
unescape('_roll'),
smalltalk.method({
selector: unescape('roll'),
category: 'rolling',
fn: function (){
var self=this;
var val=nil;
(self['@dice']=smalltalk.send((smalltalk.Array || Array), "_new_", [smalltalk.send(self, "_getNumDice", [])]));
smalltalk.send((1), "_to_do_", [smalltalk.send(self, "_getNumDice", []), (function(i){(val=smalltalk.send(smalltalk.send((1), "_to_", [self['@numSides']]), "_atRandom", []));return smalltalk.send(self['@dice'], "_at_put_", [i, val]);})]);
return self['@dice'];
return self;},
args: [],
source: unescape('roll%0A%09%22roll%20my%20dice%20randomly%22%0A%0A%09%7C%20%20val%20%7C%0A%09dice%20%3A%3D%20Array%20new%3A%20%28self%20getNumDice%29.%0A%091%20to%3A%20%28%20self%20getNumDice%20%29%20do%3A%5B%20%3Ai%20%7C%0A%09%09%22this%20hardcoded%20value%20of%206%20will%20need%20to%20change%20if%20normal%20dice%20ever%20have%20more%20or%20less%20sides%22%0A%09%09val%20%3A%3D%20%28%201%20to%3A%20%28%20numSides%20%29%29%20atRandom.%0A%09%09dice%20at%3A%20i%20put%3A%20val.%0A%09%5D.%0A%09%5E%20dice%0A%09'),
messageSends: ["new:", "getNumDice", "to:do:", "atRandom", "to:", "at:put:"],
referencedClasses: ["Array"]
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@numDice']=(5));
(self['@numSides']=(6));
smalltalk.send(self, "_roll", []);
return self;},
args: [],
source: unescape('initialize%0A%09%22make%20sure%20I%20have%20the%20bare%20minimum%20of%20state%20required%20to%20call%20myself%20a%20set%20of%20dice%22%0A%0A%09super%20initialize.%0A%09numDice%20%3A%3D%205.%0A%09numSides%20%3A%3D%206.%0A%09self%20roll.%0A'),
messageSends: ["initialize", "roll"],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'rolling',
fn: function (){
var self=this;
return smalltalk.send(self['@dice'], "_size", []);
return self;},
args: [],
source: unescape('size%0A%09%22return%20the%20number%20of%20dice%20I%20represent%22%0A%0A%09%5E%20dice%20size'),
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_setNumDice_'),
smalltalk.method({
selector: unescape('setNumDice%3A'),
category: 'access',
fn: function (num){
var self=this;
(self['@numDice']=num);
return self;},
args: ["num"],
source: unescape('setNumDice%3A%20num%0A%09%22set%20the%20number%20of%20dice%20ledt%20in%20this%20player%27s%20hand%22%0A%0A%09numDice%20%3A%3D%20num.%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_getNumDice'),
smalltalk.method({
selector: unescape('getNumDice'),
category: 'access',
fn: function (){
var self=this;
return self['@numDice'];
return self;},
args: [],
source: unescape('getNumDice%0A%09%22the%20number%20of%20dice%20ledt%20in%20this%20player%27s%20hand%22%0A%0A%09%5E%20numDice'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'access',
fn: function (anIndex){
var self=this;
return smalltalk.send(self['@dice'], "_at_", [anIndex]);
return self;},
args: ["anIndex"],
source: unescape('at%3A%20anIndex%0A%09%22return%20the%20value%20at%20anIndex%22%0A%0A%09%5E%20dice%20at%3A%20anIndex'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_getNumSides'),
smalltalk.method({
selector: unescape('getNumSides'),
category: 'access',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@numSides'], "_isNil", []), "_iftrue_", [(function(){return (self['@numSides']=(6));})]);
return self['@numSides'];
return self;},
args: [],
source: unescape('getNumSides%0A%09%22return%20the%20number%20of%20sides%20on%20a%20dice%22%0A%0A%09numSides%20isNil%20iftrue%3A%5B%20numSides%20%3A%3D%206%5D.%0A%09%5E%20numSides'),
messageSends: ["iftrue:", "isNil"],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'rolling',
fn: function (){
var self=this;
smalltalk.send(self['@dice'], "_removeLast", []);
return self;},
args: [],
source: unescape('remove%0A%09%22looks%20like%20Player%20lost%20a%20Die%22%0A%0A%09dice%20removeLast.%0A'),
messageSends: ["removeLast"],
referencedClasses: []
}),
smalltalk.Dice);



smalltalk.addClass('TDWidget', smalltalk.Widget, ['model', 'canvas', 'element'], 'Dice');
smalltalk.TDWidget.comment=unescape('TDWidget%20is%20the%20superclass%20for%20all%20of%20the%20Views%20in%20the%20TavernDice%20Application.%20Following%20the%20tested%20and%20true%20axiom%20of%20keeping%20your%20model%20separate%20from%20the%20views%20%28MVC%29%2C%20the%20model%20object%20should%20have%20no%20knowledge%20of%20the%20View.%20%0AThe%20View%20does%20know%20about%20the%20model%20it%20is%20displaying%20and%20in%20a%20lot%20of%20cases%20also%20assumes%20the%20role%20of%20the%20Controller%20Object%20in%20a%20tradional%20MVC%20%28Model%20View%20Controller%29%20architecture.')
smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
category: 'access',
fn: function (){
var self=this;
return self['@model'];
return self;},
args: [],
source: unescape('model%0A%09%22return%20the%20model%20that%20I%20am%20viewing%22%0A%0A%09%5E%20model'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TDWidget);

smalltalk.addMethod(
unescape('_model_'),
smalltalk.method({
selector: unescape('model%3A'),
category: 'access',
fn: function (aModel){
var self=this;
(self['@model']=aModel);
return self;},
args: ["aModel"],
source: unescape('model%3A%20aModel%0A%09%22set%20the%20model%20that%20I%20am%20viewing%22%0A%0A%09model%20%3A%3D%20aModel'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TDWidget);

smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'access',
fn: function (aModel){
var self=this;
(self['@model']=aModel);
return self;},
args: ["aModel"],
source: unescape('on%3A%20aModel%0A%09%22set%20the%20model%20that%20I%20am%20viewing%20-%20the%20same%20as%20calling%20the%20setter%2C%20just%20a%20matter%20of%20preference%22%0A%0A%09model%20%3A%3D%20aModel'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TDWidget);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'instantiation',
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_on_", [aModel]);
return self;},
args: ["aModel"],
source: unescape('on%3A%20aModel%0A%09%22create%20an%20instance%20of%20this%20view%20class%20and%20set%20its%20model%20object%20to%20be%20aModel%22%0A%0A%09%5E%20self%20new%20on%3A%20aModel'),
messageSends: ["on:", "new"],
referencedClasses: []
}),
smalltalk.TDWidget.klass);


smalltalk.addClass('TavernDiceView', smalltalk.TDWidget, ['imagePaths', 'header', 'diceShowing', 'diceDiv'], 'Dice');
smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'mvc',
fn: function (aTavernDice) {
    var self = this;
    smalltalk.send(self, "_model_", [aTavernDice]);
    return self;
},
args: ["aTavernDice"],
source: unescape('on%3A%20aTavernDice%0A%09%22create%20an%20instance%20of%20my%20class%20ready%20to%20display%20aTavernDice%20model.%20Hopefuly%20the%20model%20will%20have%20no%20knowledge%20of%20us%20so%20we%20can%20implement%20new%20views%20at%20will%22%0A%0A%20%20%20%20%20%20%20%20%20%20self%20model%3A%20aTavernDice'),
messageSends: ["model:"],
referencedClasses: []
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_model_'),
smalltalk.method({
selector: unescape('model%3A'),
category: 'mvc',
fn: function (aModel){
var self=this;
(self['@model']=aModel);
return self;},
args: ["aModel"],
source: unescape('model%3A%20aModel%0A%09%22the%20object%20that%20I%20will%20monitor%20for%20changes%22%0A%09model%20%3A%3D%20aModel%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
category: 'mvc',
fn: function () {
    var self = this;
    return self['@model'];
    return self;
},
args: [],
source: unescape('model%0A%09%22return%20the%20object%20that%20I%20will%20monitor%20for%20changes%22%0A%09%5E%20model%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
try{((($receiver = smalltalk.send(self['@model'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_renderOn_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_renderOn_', fn: function(){return self}})})();})]));
((($receiver = smalltalk.send(self['@diceShowing'], "_notNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderDice_on_", [self['@diceShowing'], html]);})() : (function(){(self['@canvas']=html);smalltalk.send(html, "_with_", [(function(){return smalltalk.send(smalltalk.send(self['@model'], "_taverns", []), "_do_", [(function(aTavern){return smalltalk.send(smalltalk.send(aTavern, "_games", []), "_do_", [(function(aGame){return smalltalk.send(smalltalk.send(aGame, "_players", []), "_do_", [(function(aPlayer){return smalltalk.send(self, "_renderDice_on_", [smalltalk.send(aPlayer, "_dice", []), html]);})]);})]);})]);})]);return (function($rec){smalltalk.send($rec, "_with_", ["ROLL"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_rollDice", []);})]);})(smalltalk.send(html, "_button", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderDice_on_", [self['@diceShowing'], html]);}), (function(){(self['@canvas']=html);smalltalk.send(html, "_with_", [(function(){return smalltalk.send(smalltalk.send(self['@model'], "_taverns", []), "_do_", [(function(aTavern){return smalltalk.send(smalltalk.send(aTavern, "_games", []), "_do_", [(function(aGame){return smalltalk.send(smalltalk.send(aGame, "_players", []), "_do_", [(function(aPlayer){return smalltalk.send(self, "_renderDice_on_", [smalltalk.send(aPlayer, "_dice", []), html]);})]);})]);})]);})]);return (function($rec){smalltalk.send($rec, "_with_", ["ROLL"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_rollDice", []);})]);})(smalltalk.send(html, "_button", []));})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderOn_'){return e.fn()} throw(e)}},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%20%20%09model%20isNil%20ifTrue%3A%5B%20%5E%20self%20%5D.%0A%09diceShowing%20notNil%20%0A%09ifTrue%3A%5B%20self%20renderDice%3A%20diceShowing%20on%3A%20html%20%5D%0A%09ifFalse%3A%5B%20%0A%09%09canvas%20%3A%3D%20html.%0A%09%09html%20with%3A%20%5B%0A%09%09%09model%20taverns%20do%3A%20%5B%20%3AaTavern%20%7C%20%0A%09%09%09%09aTavern%20games%20do%3A%20%5B%20%3AaGame%20%7C%0A%09%09%09%09%09aGame%20players%20do%3A%5B%20%3AaPlayer%20%7C%0A%09%09%09%09%09%09self%20renderDice%3A%20%28aPlayer%20dice%29%20on%3A%20html%20%5D%0A%09%09%09%09%20%5D%20%0A%09%09%09%5D%20.%0A%09%09%5D.%0A%09%09html%20button%20with%3A%20%27ROLL%27%3B%20onClick%3A%20%5Bself%20rollDice%5D.%0A%20%20%20%20%20%20%20%20%20%5D.%0A%0A%0A%09'),
messageSends: ["ifTrue:", "isNil", "ifTrue:ifFalse:", "notNil", "renderDice:on:", "with:", "do:", "taverns", "games", "players", "dice", "onClick:", "rollDice", "button"],
referencedClasses: []
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_renderDice_on_'),
smalltalk.method({
selector: unescape('renderDice%3Aon%3A'),
category: 'rendering',
fn: function (aDice, html){
var self=this;
var imageSrc=nil;
var fileName=nil;
var diceNum=nil;
(self['@diceShowing']=aDice);
((($receiver = smalltalk.send(self['@diceDiv'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@diceDiv']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@diceDiv'], "_id_", ["dice"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@diceDiv']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@diceDiv'], "_id_", ["dice"]);})]));
smalltalk.send(self['@diceDiv'], "_empty", []);
smalltalk.send(self['@diceDiv'], "_contents_", [(function(){return smalltalk.send((1), "_to_do_", [smalltalk.send(aDice, "_size", []), (function(index){(diceNum=smalltalk.send(aDice, "_at_", [index]));(imageSrc=smalltalk.send(self['@imagePaths'], "_at_", [diceNum]));return (function($rec){smalltalk.send($rec, "_height_", [(100)]);smalltalk.send($rec, "_width_", [(100)]);return smalltalk.send($rec, "_style_", [unescape("margin-right%3A15px%3B")]);})(smalltalk.send(html, "_img_", [imageSrc]));})]);})]);
return self;},
args: ["aDice", "html"],
source: unescape('renderDice%3A%20aDice%20on%3A%20html%0A%09%22aDice%20is%20a%20set%20of%20individual%20dies%20values.%20We%20use%20the%20value%20of%20each%20value%20to%20set%20the%20appropriate%20image%22%0A%0A%09%7C%20imageSrc%20fileName%20diceNum%20%7C%0A%0A%09diceShowing%20%3A%3D%20aDice.%0A%09diceDiv%20isNil%20ifTrue%3A%5B%0A%09%09diceDiv%20%3A%3D%20html%20div.%0A%09%09diceDiv%20id%3A%20%27dice%27%20.%0A%09%5D.%0A%09diceDiv%20empty.%0A%09diceDiv%20contents%3A%5B%0A%09%091%20to%3A%20%28aDice%20size%29%20do%3A%5B%20%3Aindex%20%7C%0A%09%09%09diceNum%20%3A%3D%20aDice%20at%3A%20index.%0A%09%09%09imageSrc%20%3A%3D%20imagePaths%20at%3A%20diceNum.%0A%09%09%09%28html%20img%3A%20imageSrc%29%20%20height%3A100%3B%20width%3A%20100%3B%20style%3A%20%27margin-right%3A15px%3B%27.%0A%09%09%5D.%0A%09%5D.%0A'),
messageSends: ["ifTrue:", "isNil", "div", "id:", "empty", "contents:", "to:do:", "size", "at:", "height:", "width:", "style:", "img:"],
referencedClasses: []
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
smalltalk.send(self, "_createImagePaths", []);
return self;},
args: [],
source: unescape('initialize%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%20%20%20%20%20%20%20%20super%20initialize.%0A%09self%20createImagePaths.%0A%0A%20'),
messageSends: ["initialize", "createImagePaths"],
referencedClasses: []
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
category: 'examples',
fn: function (){
var self=this;
smalltalk.send(self, "_model_", [smalltalk.send((smalltalk.TavernDice || TavernDice), "_example", [])]);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('example%0A%09%22open%20an%20instance%20on%20a%20model%20setup%20as%20an%20example%22%0A%0A%09self%20model%3A%20%28TavernDice%20example%29.%0A%20%20%09%20self%20%20appendToJQuery%3A%20%27body%27%20asJQuery.%0A'),
messageSends: ["model:", "example", "appendToJQuery:", "asJQuery"],
referencedClasses: ["TavernDice"]
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_rollDice'),
smalltalk.method({
selector: unescape('rollDice'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@diceShowing'], "_roll", []);
smalltalk.send(self, "_renderOn_", [self['@canvas']]);
return self;},
args: [],
source: unescape('rollDice%0A%09%0A%09diceShowing%20roll.%0A%09%22self%20renderDice%3A%20diceShowing%20on%3A%20canvas.%22%0A%09self%20renderOn%3A%20canvas.%0A%20%20%0A%09'),
messageSends: ["roll", "renderOn:"],
referencedClasses: []
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_exampleDice'),
smalltalk.method({
selector: unescape('exampleDice'),
category: 'rendering',
fn: function (){
var self=this;
(self['@canvas']=(typeof html == 'undefined' ? nil : html));
smalltalk.send((typeof html == 'undefined' ? nil : html), "_with_", [(function(){smalltalk.send(smalltalk.send(self['@model'], "_taverns", []), "_do_", [(function(aTavern){return smalltalk.send(smalltalk.send(aTavern, "_games", []), "_do_", [(function(aGame){return smalltalk.send(smalltalk.send(aGame, "_players", []), "_do_", [(function(aPlayer){return smalltalk.send(self, "_renderDice_on_", [smalltalk.send(aPlayer, "_dice", []), (typeof html == 'undefined' ? nil : html)]);})]);})]);})]);return (function($rec){smalltalk.send($rec, "_with_", ["ROLL"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_rollDice", []);})]);})(smalltalk.send((typeof html == 'undefined' ? nil : html), "_button", []));})]);
return self;},
args: [],
source: unescape('exampleDice%0A%20%20%09%22get%20a%20set%20of%20dice%20from%20an%20example%20player%20and%20save%20them%22%0A%0A%09canvas%20%3A%3D%20html.%0A%09html%20with%3A%20%5B%0A%09%09model%20taverns%20do%3A%20%5B%20%3AaTavern%20%7C%20%0A%09%09%09aTavern%20games%20do%3A%20%5B%20%3AaGame%20%7C%0A%09%09%09%09aGame%20players%20do%3A%5B%20%3AaPlayer%20%7C%0A%09%09%09%09%09self%20renderDice%3A%20%28aPlayer%20dice%29%20on%3A%20html%20%5D.%0A%09%09%09%20%5D%20%0A%09%09%5D%20.%0A%09%09html%20button%20with%3A%20%27ROLL%27%3B%20onClick%3A%20%5Bself%20rollDice%5D.%0A%09%5D.%0A%0A%0A%09'),
messageSends: ["with:", "do:", "taverns", "games", "players", "renderDice:on:", "dice", "onClick:", "rollDice", "button"],
referencedClasses: []
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_exampleRenderOn_'),
smalltalk.method({
selector: unescape('exampleRenderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@canvas']=html);
smalltalk.send(html, "_with_", [(function(){smalltalk.send(smalltalk.send(self['@model'], "_taverns", []), "_do_", [(function(aTavern){return smalltalk.send(smalltalk.send(aTavern, "_games", []), "_do_", [(function(aGame){return smalltalk.send(smalltalk.send(aGame, "_players", []), "_do_", [(function(aPlayer){return smalltalk.send(self, "_renderDice_on_", [smalltalk.send(aPlayer, "_dice", []), html]);})]);})]);})]);return (function($rec){smalltalk.send($rec, "_with_", ["ROLL"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_rollDice", []);})]);})(smalltalk.send(html, "_button", []));})]);
return self;},
args: ["html"],
source: unescape('exampleRenderOn%3A%20html%0A%20%20%09%0A%09canvas%20%3A%3D%20html.%0A%09html%20with%3A%20%5B%0A%09%09model%20taverns%20do%3A%20%5B%20%3AaTavern%20%7C%20%0A%09%09%09aTavern%20games%20do%3A%20%5B%20%3AaGame%20%7C%0A%09%09%09%09aGame%20players%20do%3A%5B%20%3AaPlayer%20%7C%0A%09%09%09%09%09self%20renderDice%3A%20%28aPlayer%20dice%29%20on%3A%20html%20%5D%0A%09%09%09%20%5D%20%0A%09%09%5D%20.%0A%09%09html%20button%20with%3A%20%27ROLL%27%3B%20onClick%3A%20%5Bself%20rollDice%5D.%0A%09%5D.%0A%0A%0A%09'),
messageSends: ["with:", "do:", "taverns", "games", "players", "renderDice:on:", "dice", "onClick:", "rollDice", "button"],
referencedClasses: []
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_createImagePaths'),
smalltalk.method({
selector: unescape('createImagePaths'),
category: 'rendering',
fn: function (){
var self=this;
(self['@imagePaths']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-1.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-2.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-3.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-4.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-5.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-6.png")]);
return self;},
args: [],
source: unescape('createImagePaths%0A%09%22for%20performane%20reasons%20we%27ll%20create%20these%20in%20advance.%20If%20the%20game%20ever%20changes%20from%20six%20dice%20this%20will%20have%20to%20be%20changed%20as%20well%22%0A%09imagePaths%20%3A%3D%20OrderedCollection%20new.%0A%09imagePaths%20add%3A%20%27./images/Die-1.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-2.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-3.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-4.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-5.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-6.png%27.%0A'),
messageSends: ["new", "add:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_saveThisrenderDice_on_'),
smalltalk.method({
selector: unescape('saveThisrenderDice%3Aon%3A'),
category: 'rendering',
fn: function (aDice, html){
var self=this;
var imageSrc=nil;
var fileName=nil;
var image=nil;
(self['@diceShowing']=aDice);
((($receiver = smalltalk.send(self['@diceDiv'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@diceDiv']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@diceDiv'], "_id_", ["dice"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@diceDiv']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@diceDiv'], "_id_", ["dice"]);})]));
smalltalk.send(self['@diceDiv'], "_empty", []);
smalltalk.send(self['@diceDiv'], "_contents_", [(function(){return smalltalk.send((1), "_to_do_", [smalltalk.send(aDice, "_size", []), (function(index){(imageSrc=smalltalk.send((smalltalk.String || String), "_fromString_", [unescape("./images/Die-")]));(imageSrc=smalltalk.send(smalltalk.send(imageSrc, "__comma", [smalltalk.send(smalltalk.send(aDice, "_at_", [index]), "_printString", [])]), "__comma", [".png"]));return (function($rec){smalltalk.send($rec, "_height_", [(100)]);return smalltalk.send($rec, "_width_", [(100)]);})(smalltalk.send(html, "_img_", [imageSrc]));})]);})]);
return self;},
args: ["aDice", "html"],
source: unescape('saveThisrenderDice%3A%20aDice%20on%3A%20html%0A%09%22aDice%20is%20a%20set%20of%20individual%20dies%20values.%20We%20use%20the%20value%20of%20each%20value%20to%20set%20the%20appropriate%20image%22%0A%0A%09%7C%20imageSrc%20fileName%20image%20%7C%0A%0A%09diceShowing%20%3A%3D%20aDice.%0A%09diceDiv%20isNil%20ifTrue%3A%5B%0A%09%09diceDiv%20%3A%3D%20html%20div.%0A%09%09diceDiv%20id%3A%20%27dice%27%20.%0A%09%5D.%0A%09diceDiv%20empty.%0A%09diceDiv%20contents%3A%5B%0A%09%091%20to%3A%20%28aDice%20size%29%20do%3A%5B%20%3Aindex%20%7C%0A%09%09%09imageSrc%20%3A%3D%20String%20fromString%3A%20%27./images/Die-%27.%0A%09%09%09imageSrc%20%3A%3D%20imageSrc%20%2C%20%20%28%28aDice%20at%3A%20index%29%20printString%29%20%2C%20%27.png%27.%09%09%0A%09%09%09%28html%20img%3A%20imageSrc%29%20%20height%3A100%3B%20width%3A%20100.%0A%09%09%5D.%0A%09%5D.%0A'),
messageSends: ["ifTrue:", "isNil", "div", "id:", "empty", "contents:", "to:do:", "size", "fromString:", unescape("%2C"), "printString", "at:", "height:", "width:", "img:"],
referencedClasses: ["String"]
}),
smalltalk.TavernDiceView);



smalltalk.addClass('DiceView', smalltalk.TDWidget, ['imagePaths', 'diceShowing', 'diceDiv'], 'Dice');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var imageSrc=nil;
var diceNum=nil;
var diceShowing=nil;
(self['@diceShowing']=smalltalk.send(self['@model'], "_diceLeft", []));
((($receiver = smalltalk.send(self['@element'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@element']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@element'], "_id_", ["dice"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@element']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@element'], "_id_", ["dice"]);})]));
smalltalk.send(self['@element'], "_empty", []);
smalltalk.send(self['@element'], "_contents_", [(function(){return smalltalk.send((1), "_to_do_", [smalltalk.send(self['@model'], "_size", []), (function(index){(diceNum=smalltalk.send(self['@model'], "_at_", [index]));(imageSrc=smalltalk.send(self['@imagePaths'], "_at_", [diceNum]));return (function($rec){smalltalk.send($rec, "_height_", [(100)]);smalltalk.send($rec, "_width_", [(100)]);return smalltalk.send($rec, "_style_", [unescape("margin-right%3A15px%3B")]);})(smalltalk.send(html, "_img_", [imageSrc]));})]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%22we%20should%20already%20know%20the%20dice%20that%20we%20are%20displaying%20by%20asking%20the%20model%20%28we%20start%20with%20a%20set%20number%2C%20but%20the%20player%20can%20lose%20one%20at%20each%20turn%29.%20We%20also%20save%20the%20HTML%20element%20%28usually%20a%20div%29%20so%20we%20can%20replace%20its%20contents.%0A%09diceLeft%20is%20a%20Dice%20Object%20that%20contains%20an%20array%20of%20values%20representing%20the%20value%20of%20each%20die%20and%20allows%20us%20to%20choose%20the%20correct%20image%20for%20that%20die%20from%20the%20collection%20of%20imagePaths%22%0A%0A%09%7C%20imageSrc%20diceNum%20diceShowing%20%7C%0A%0A%09diceShowing%20%3A%3D%20model%20diceLeft.%0A%09element%20isNil%20ifTrue%3A%5B%0A%09%09element%20%3A%3D%20html%20div.%0A%09%09element%20id%3A%20%27dice%27%20.%0A%09%5D.%0A%09element%20empty.%0A%09element%20contents%3A%5B%0A%09%091%20to%3A%20%28model%20size%29%20do%3A%5B%20%3Aindex%20%7C%0A%09%09%09diceNum%20%3A%3D%20model%20at%3A%20index.%0A%09%09%09imageSrc%20%3A%3D%20imagePaths%20at%3A%20diceNum.%0A%09%09%09%28html%20img%3A%20imageSrc%29%20%20height%3A100%3B%20width%3A%20100%3B%20style%3A%20%27margin-right%3A15px%3B%27.%0A%09%09%5D.%0A%09%5D.%0A'),
messageSends: ["diceLeft", "ifTrue:", "isNil", "div", "id:", "empty", "contents:", "to:do:", "size", "at:", "height:", "width:", "style:", "img:"],
referencedClasses: []
}),
smalltalk.DiceView);

smalltalk.addMethod(
unescape('_createImagePaths'),
smalltalk.method({
selector: unescape('createImagePaths'),
category: 'private',
fn: function (){
var self=this;
(self['@imagePaths']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-1.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-2.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-3.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-4.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-5.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-6.png")]);
return self;},
args: [],
source: unescape('createImagePaths%0A%09%22for%20performane%20reasons%20we%27ll%20create%20these%20in%20advance.%20If%20the%20game%20ever%20changes%20from%20six%20dice%20this%20will%20have%20to%20be%20changed%20as%20well%22%0A%09imagePaths%20%3A%3D%20OrderedCollection%20new.%0A%09imagePaths%20add%3A%20%27./images/Die-1.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-2.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-3.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-4.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-5.png%27.%0A%09imagePaths%20add%3A%20%27./images/Die-6.png%27.%0A'),
messageSends: ["new", "add:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.DiceView);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TDWidget);
smalltalk.send(self, "_createImagePaths", []);
return self;},
args: [],
source: unescape('initialize%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%20%20%20%20%20%20%20%20super%20initialize.%0A%09self%20createImagePaths.%0A'),
messageSends: ["initialize", "createImagePaths"],
referencedClasses: []
}),
smalltalk.DiceView);



smalltalk.addClass('GameView', smalltalk.TDWidget, [], 'Dice');


smalltalk.addClass('PlayerView', smalltalk.TDWidget, [], 'Dice');


smalltalk.addClass('TavernView', smalltalk.TDWidget, [], 'Dice');


