smalltalk.addPackage('Dice', {});
smalltalk.addClass('Player', smalltalk.Object, ['id', 'name', 'userName', 'tavern', 'key', 'dice'], 'Dice');
smalltalk.addMethod(
unescape('_exampleInTavern_'),
smalltalk.method({
selector: unescape('exampleInTavern%3A'),
fn: function (aTavern) {
    var self = this;
    self['@name'] = "Pete Shepard";
    self['@userName'] = "liarPete";
    self['@tavern'] = aTavern;
    return self;
}
}),
smalltalk.Player);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@dice'] = smalltalk.send(smalltalk.Dice || Dice, "_new", []);
    return self;
}
}),
smalltalk.Player);

smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
fn: function () {
    var self = this;
    self['@name'] = "Pete Shepard";
    self['@userName'] = "liarPete";
    return self;
}
}),
smalltalk.Player);

smalltalk.addMethod(
unescape('_dice'),
smalltalk.method({
selector: unescape('dice'),
fn: function (){
var self=this;
return self['@dice'];
return self;}
}),
smalltalk.Player);



smalltalk.addClass('TavernDice', smalltalk.Object, ['repository', 'taverns'], 'Dice');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@taverns'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
    return self;
}
}),
smalltalk.TavernDice);

smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
fn: function () {
    var self = this;
    smalltalk.send(self['@taverns'], "_add_", [smalltalk.send(smalltalk.send(smalltalk.Tavern || Tavern, "_new", []), "_example", [])]);
    return self;
}
}),
smalltalk.TavernDice);

smalltalk.addMethod(
unescape('_taverns'),
smalltalk.method({
selector: unescape('taverns'),
fn: function (){
var self=this;
return self['@taverns'];
return self;}
}),
smalltalk.TavernDice);


smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_example", []);
return self;}
}),
smalltalk.TavernDice.klass);


smalltalk.addClass('Game', smalltalk.Object, ['id', 'players', 'started', 'ended', 'winner', 'tavern'], 'Dice');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function () {
    var self = this;
    self['@players'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
    self['@started'] = smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_now", []), "_asMilliseconds", []);
    return self;
}
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_addPlayer_'),
smalltalk.method({
selector: unescape('addPlayer%3A'),
fn: function (aPlayer) {
    var self = this;
    smalltalk.send(self['@players'], "_add_", [aPlayer]);
    return self;
}
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_setTavern_'),
smalltalk.method({
selector: unescape('setTavern%3A'),
fn: function (aTavern) {
    var self = this;
    self['@tavern'] = aTavern;
    return self;
}
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_players'),
smalltalk.method({
selector: unescape('players'),
fn: function (){
var self=this;
return self['@players'];
return self;}
}),
smalltalk.Game);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
fn: function (aTavern){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_setTavern_", [aTavern]);
return self;}
}),
smalltalk.Game.klass);


smalltalk.addClass('Tavern', smalltalk.Object, ['id', 'name', 'city', 'state', 'maxSeats', 'numSeatsFilled', 'games', 'created', 'updated'], 'Dice');
smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
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
}
}),
smalltalk.Tavern);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@games'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
    return self;
}
}),
smalltalk.Tavern);

smalltalk.addMethod(
unescape('_getName'),
smalltalk.method({
selector: unescape('getName'),
fn: function () {
    var self = this;
    return self['@name'];
    return self;
}
}),
smalltalk.Tavern);

smalltalk.addMethod(
unescape('_games'),
smalltalk.method({
selector: unescape('games'),
fn: function (){
var self=this;
return self['@games'];
return self;}
}),
smalltalk.Tavern);



smalltalk.addClass('Dice', smalltalk.Object, ['id', 'gameID', 'liarID', 'dice', 'numDice', 'numSides'], 'Dice');
smalltalk.addMethod(
unescape('_roll'),
smalltalk.method({
selector: unescape('roll'),
fn: function (){
var self=this;
var val=nil;
(self['@dice']=smalltalk.send((smalltalk.Array || Array), "_new_", [self['@numDice']]));
smalltalk.send((1), "_to_do_", [self['@numDice'], (function(i){(val=smalltalk.send(smalltalk.send((1), "_to_", [self['@numSides']]), "_atRandom", []));return smalltalk.send(self['@dice'], "_at_put_", [i, val]);})]);
return self['@dice'];
return self;}
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@numDice']=(5));
(self['@numSides']=(6));
smalltalk.send(self, "_roll", []);
return self;}
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function (){
var self=this;
return smalltalk.send(self['@dice'], "_size", []);
return self;}
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (anIndex){
var self=this;
return smalltalk.send(self['@dice'], "_at_", [anIndex]);
return self;}
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
fn: function (){
var self=this;
smalltalk.send(self['@dice'], "_removeLast", []);
return self;}
}),
smalltalk.Dice);

smalltalk.addMethod(
unescape('_getDice'),
smalltalk.method({
selector: unescape('getDice'),
fn: function (){
var self=this;
return self['@dice'];
return self;}
}),
smalltalk.Dice);



smalltalk.addClass('TDWidget', smalltalk.Widget, ['model', 'canvas', 'element'], 'Dice');
smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
fn: function (){
var self=this;
return self['@model'];
return self;}
}),
smalltalk.TDWidget);

smalltalk.addMethod(
unescape('_model_'),
smalltalk.method({
selector: unescape('model%3A'),
fn: function (aModel){
var self=this;
(self['@model']=aModel);
return self;}
}),
smalltalk.TDWidget);

smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
fn: function (aModel){
var self=this;
(self['@model']=aModel);
return self;}
}),
smalltalk.TDWidget);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
return self;}
}),
smalltalk.TDWidget);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_on_", [aModel]);
return self;}
}),
smalltalk.TDWidget.klass);


smalltalk.addClass('TavernDiceView', smalltalk.TDWidget, ['imagePaths', 'header', 'diceShowing', 'diceDiv'], 'Dice');
smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
fn: function (aTavernDice) {
    var self = this;
    smalltalk.send(self, "_model_", [aTavernDice]);
    return self;
}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_model_'),
smalltalk.method({
selector: unescape('model%3A'),
fn: function (aModel){
var self=this;
(self['@model']=aModel);
return self;}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
fn: function () {
    var self = this;
    return self['@model'];
    return self;
}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
try{((($receiver = smalltalk.send(self['@model'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_renderOn_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_renderOn_', fn: function(){return self}})})();})]));
((($receiver = smalltalk.send(self['@diceShowing'], "_notNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderDice_on_", [self['@diceShowing'], html]);})() : (function(){(self['@canvas']=html);smalltalk.send(html, "_with_", [(function(){return smalltalk.send(smalltalk.send(self['@model'], "_taverns", []), "_do_", [(function(aTavern){return smalltalk.send(smalltalk.send(aTavern, "_games", []), "_do_", [(function(aGame){return smalltalk.send(smalltalk.send(aGame, "_players", []), "_do_", [(function(aPlayer){return smalltalk.send(self, "_renderDice_on_", [smalltalk.send(aPlayer, "_dice", []), html]);})]);})]);})]);})]);return (function($rec){smalltalk.send($rec, "_with_", ["ROLL"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_rollDice", []);})]);})(smalltalk.send(html, "_button", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderDice_on_", [self['@diceShowing'], html]);}), (function(){(self['@canvas']=html);smalltalk.send(html, "_with_", [(function(){return smalltalk.send(smalltalk.send(self['@model'], "_taverns", []), "_do_", [(function(aTavern){return smalltalk.send(smalltalk.send(aTavern, "_games", []), "_do_", [(function(aGame){return smalltalk.send(smalltalk.send(aGame, "_players", []), "_do_", [(function(aPlayer){return smalltalk.send(self, "_renderDice_on_", [smalltalk.send(aPlayer, "_dice", []), html]);})]);})]);})]);})]);return (function($rec){smalltalk.send($rec, "_with_", ["ROLL"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_rollDice", []);})]);})(smalltalk.send(html, "_button", []));})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderOn_'){return e.fn()} throw(e)}}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_renderDice_on_'),
smalltalk.method({
selector: unescape('renderDice%3Aon%3A'),
fn: function (aDice, html){
var self=this;
var imageSrc=nil;
var fileName=nil;
var diceNum=nil;
(self['@diceShowing']=aDice);
((($receiver = smalltalk.send(self['@diceDiv'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@diceDiv']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@diceDiv'], "_id_", ["dice"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@diceDiv']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@diceDiv'], "_id_", ["dice"]);})]));
smalltalk.send(self['@diceDiv'], "_empty", []);
smalltalk.send(self['@diceDiv'], "_contents_", [(function(){return smalltalk.send((1), "_to_do_", [smalltalk.send(aDice, "_size", []), (function(index){(diceNum=smalltalk.send(aDice, "_at_", [index]));(imageSrc=smalltalk.send(self['@imagePaths'], "_at_", [diceNum]));return (function($rec){smalltalk.send($rec, "_height_", [(100)]);smalltalk.send($rec, "_width_", [(100)]);return smalltalk.send($rec, "_style_", [unescape("margin-right%3A15px%3B")]);})(smalltalk.send(html, "_img_", [imageSrc]));})]);})]);
return self;}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
smalltalk.send(self, "_createImagePaths", []);
return self;}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
fn: function (){
var self=this;
smalltalk.send(self, "_model_", [smalltalk.send((smalltalk.TavernDice || TavernDice), "_example", [])]);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_rollDice'),
smalltalk.method({
selector: unescape('rollDice'),
fn: function (){
var self=this;
smalltalk.send(self['@diceShowing'], "_roll", []);
smalltalk.send(self, "_renderOn_", [self['@canvas']]);
return self;}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_exampleDice'),
smalltalk.method({
selector: unescape('exampleDice'),
fn: function (){
var self=this;
(self['@canvas']=(typeof html == 'undefined' ? nil : html));
smalltalk.send((typeof html == 'undefined' ? nil : html), "_with_", [(function(){smalltalk.send(smalltalk.send(self['@model'], "_taverns", []), "_do_", [(function(aTavern){return smalltalk.send(smalltalk.send(aTavern, "_games", []), "_do_", [(function(aGame){return smalltalk.send(smalltalk.send(aGame, "_players", []), "_do_", [(function(aPlayer){return smalltalk.send(self, "_renderDice_on_", [smalltalk.send(aPlayer, "_dice", []), (typeof html == 'undefined' ? nil : html)]);})]);})]);})]);return (function($rec){smalltalk.send($rec, "_with_", ["ROLL"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_rollDice", []);})]);})(smalltalk.send((typeof html == 'undefined' ? nil : html), "_button", []));})]);
return self;}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_exampleRenderOn_'),
smalltalk.method({
selector: unescape('exampleRenderOn%3A'),
fn: function (html){
var self=this;
(self['@canvas']=html);
smalltalk.send(html, "_with_", [(function(){smalltalk.send(smalltalk.send(self['@model'], "_taverns", []), "_do_", [(function(aTavern){return smalltalk.send(smalltalk.send(aTavern, "_games", []), "_do_", [(function(aGame){return smalltalk.send(smalltalk.send(aGame, "_players", []), "_do_", [(function(aPlayer){return smalltalk.send(self, "_renderDice_on_", [smalltalk.send(aPlayer, "_dice", []), html]);})]);})]);})]);return (function($rec){smalltalk.send($rec, "_with_", ["ROLL"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_rollDice", []);})]);})(smalltalk.send(html, "_button", []));})]);
return self;}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_createImagePaths'),
smalltalk.method({
selector: unescape('createImagePaths'),
fn: function (){
var self=this;
(self['@imagePaths']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-1.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-2.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-3.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-4.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-5.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-6.png")]);
return self;}
}),
smalltalk.TavernDiceView);

smalltalk.addMethod(
unescape('_saveThisrenderDice_on_'),
smalltalk.method({
selector: unescape('saveThisrenderDice%3Aon%3A'),
fn: function (aDice, html){
var self=this;
var imageSrc=nil;
var fileName=nil;
var image=nil;
(self['@diceShowing']=aDice);
((($receiver = smalltalk.send(self['@diceDiv'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@diceDiv']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@diceDiv'], "_id_", ["dice"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@diceDiv']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@diceDiv'], "_id_", ["dice"]);})]));
smalltalk.send(self['@diceDiv'], "_empty", []);
smalltalk.send(self['@diceDiv'], "_contents_", [(function(){return smalltalk.send((1), "_to_do_", [smalltalk.send(aDice, "_size", []), (function(index){(imageSrc=smalltalk.send((smalltalk.String || String), "_fromString_", [unescape("./images/Die-")]));(imageSrc=smalltalk.send(smalltalk.send(imageSrc, "__comma", [smalltalk.send(smalltalk.send(aDice, "_at_", [index]), "_printString", [])]), "__comma", [".png"]));return (function($rec){smalltalk.send($rec, "_height_", [(100)]);return smalltalk.send($rec, "_width_", [(100)]);})(smalltalk.send(html, "_img_", [imageSrc]));})]);})]);
return self;}
}),
smalltalk.TavernDiceView);



smalltalk.addClass('DiceView', smalltalk.TDWidget, ['imagePaths', 'diceShowing', 'diceDiv'], 'Dice');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var imageSrc=nil;
var diceNum=nil;
((($receiver = smalltalk.send(self['@element'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@element']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@element'], "_id_", ["dice"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@element']=smalltalk.send(html, "_div", []));return smalltalk.send(self['@element'], "_id_", ["dice"]);})]));
smalltalk.send(self['@element'], "_empty", []);
smalltalk.send(self['@element'], "_contents_", [(function(){return smalltalk.send((1), "_to_do_", [smalltalk.send(self['@model'], "_size", []), (function(index){(diceNum=smalltalk.send(self['@model'], "_at_", [index]));(imageSrc=smalltalk.send(self['@imagePaths'], "_at_", [diceNum]));return (function($rec){smalltalk.send($rec, "_height_", [(100)]);smalltalk.send($rec, "_width_", [(100)]);return smalltalk.send($rec, "_style_", [unescape("margin-right%3A15px%3B")]);})(smalltalk.send(html, "_img_", [imageSrc]));})]);})]);
return self;}
}),
smalltalk.DiceView);

smalltalk.addMethod(
unescape('_createImagePaths'),
smalltalk.method({
selector: unescape('createImagePaths'),
fn: function (){
var self=this;
(self['@imagePaths']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-1.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-2.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-3.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-4.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-5.png")]);
smalltalk.send(self['@imagePaths'], "_add_", [unescape("./images/Die-6.png")]);
return self;}
}),
smalltalk.DiceView);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TDWidget);
smalltalk.send(self, "_createImagePaths", []);
return self;}
}),
smalltalk.DiceView);

smalltalk.addMethod(
unescape('_example'),
smalltalk.method({
selector: unescape('example'),
fn: function (){
var self=this;
smalltalk.send(self, "_on_", [smalltalk.send((smalltalk.Dice || Dice), "_new", [])]);
smalltalk.send(self['@model'], "_roll", []);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.DiceView);



smalltalk.addClass('GameView', smalltalk.TDWidget, [], 'Dice');


smalltalk.addClass('PlayerView', smalltalk.TDWidget, [], 'Dice');


smalltalk.addClass('TavernView', smalltalk.TDWidget, [], 'Dice');


