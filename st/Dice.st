Smalltalk current createPackage: 'Dice' properties: #{}!
Object subclass: #Player
	instanceVariableNames: 'id name userName tavern key dice'
	category: 'Dice'!

!Player methodsFor: 'access'!

dice
	"return an object that represents my dice"

	^ dice
! !

!Player methodsFor: 'examples'!

exampleInTavern: aTavern
	"fill myself in for examples and testing"

	name := 'Pete Shepard'.
	userName := 'liarPete'.
	tavern := aTavern.
!

example
	"fill myself in for examples and testing"

	name := 'Pete Shepard'.
	userName := 'liarPete'.
! !

!Player methodsFor: 'initialization'!

initialize
	"get ready to be used"

	super initialize.
	dice := Dice new.
! !

Object subclass: #TavernDice
	instanceVariableNames: 'repository taverns'
	category: 'Dice'!
!TavernDice commentStamp!
TavernDice is the Model of the tavernDice application. The TavernDiceView will serve as both View and Controller until we see the beed to refactor that!

!TavernDice methodsFor: 'access'!

taverns
	"return my collection of known taverns"

	^ taverns
! !

!TavernDice methodsFor: 'examples'!

example
	"fill myself in for example and test purposes"

	taverns add: (Tavern new example).
! !

!TavernDice methodsFor: 'initialization'!

initialize
	super initialize.
	taverns := OrderedCollection new.
! !

!TavernDice class methodsFor: 'example'!

example
	"fill myself just for examples or testing and open a view on myself"

	^ self new example.
! !

Object subclass: #Game
	instanceVariableNames: 'id players started ended winner tavern'
	category: 'Dice'!

!Game methodsFor: 'access'!

players
	"return the Liars that are playing this game"

	^ players
! !

!Game methodsFor: 'initialization'!

initialize
	"comment stating purpose of message"

	players := OrderedCollection new.
	started := Date now asMilliseconds.
!

addPlayer: aPlayer
	"they want me to add aPlayer to the game. In the future I might throw an exception if too few seats or something"

	players add: aPlayer
!

setTavern: aTavern

	"where i am being played"

	tavern := aTavern
! !

!Game class methodsFor: 'not yet classified'!

on: aTavern
	"comment stating purpose of message"

	^( self new ) setTavern: aTavern
! !

Object subclass: #Tavern
	instanceVariableNames: 'id name city state maxSeats numSeatsFilled games created updated'
	category: 'Dice'!

!Tavern methodsFor: 'access'!

games
	"return the collection of games taking place at this Tavern"

	^ games
! !

!Tavern methodsFor: 'examples'!

example
	"fill me for testing or example"

	| game player |

	name := 'Kings Tavern'.
	city := 'Paradise'.
	state := 'CA'.
	maxSeats := 10.
	numSeatsFilled := 1.

	game := Game new setTavern: self.
	games add: game.

	player := Player new example.
	game addPlayer: player.
!

getName
	"return my human friendly name"

          ^ name
! !

!Tavern methodsFor: 'initialization'!

initialize
	"get ready to roll"

	super initialize.
 	games := OrderedCollection new.
! !

Object subclass: #Dice
	instanceVariableNames: 'id gameID liarID dice numDice numSides'
	category: 'Dice'!
!Dice commentStamp!
I represent a number of individual die (dice) to form what we refer to as a set of Dice for a given player!

!Dice methodsFor: 'access'!

at: anIndex
	"return the value at anIndex"

	^ dice at: anIndex
!

getDice
	"return the low level array of values. Only meant to be used by views and the like"

	^ dice
! !

!Dice methodsFor: 'initialization'!

initialize
	"make sure I have the bare minimum of state required to call myself a set of dice"

	super initialize.
	numDice := 5.
	numSides := 6.
	self roll.
! !

!Dice methodsFor: 'rolling'!

roll
	"roll my dice randomly"

	|  val |
	dice := Array new: numDice.
	1 to: numDice do:[ :i |
		val := ( 1 to: ( numSides )) atRandom.
		dice at: i put: val.
	].
	^ dice
!

size
	"return the number of dice I represent"

	^ dice size
!

remove
	"looks like Player lost a Die"

	dice removeLast.
! !

Widget subclass: #TDWidget
	instanceVariableNames: 'model canvas element'
	category: 'Dice'!
!TDWidget commentStamp!
TDWidget is the superclass for all of the Views in the TavernDice Application. Following the tested and true axiom of keeping your model separate from the views (MVC), the model object should have no knowledge of the View. 
The View does know about the model it is displaying and in a lot of cases also assumes the role of the Controller Object in a tradional MVC (Model View Controller) architecture.!

!TDWidget methodsFor: 'access'!

model
	"return the model that I am viewing"

	^ model
!

model: aModel
	"set the model that I am viewing"

	model := aModel
!

on: aModel
	"set the model that I am viewing - the same as calling the setter, just a matter of preference"

	model := aModel
! !

!TDWidget methodsFor: 'initialization'!

initialize
	super initialize
! !

!TDWidget class methodsFor: 'instantiation'!

on: aModel
	"create an instance of this view class and set its model object to be aModel"

	^ self new on: aModel
! !

TDWidget subclass: #TavernDiceView
	instanceVariableNames: 'imagePaths header diceShowing diceDiv'
	category: 'Dice'!

!TavernDiceView methodsFor: 'examples'!

example
	"open an instance on a model setup as an example"

	self model: (TavernDice example).
  	 self  appendToJQuery: 'body' asJQuery.
! !

!TavernDiceView methodsFor: 'mvc'!

on: aTavernDice
	"create an instance of my class ready to display aTavernDice model. Hopefuly the model will have no knowledge of us so we can implement new views at will"

          self model: aTavernDice
!

model: aModel
	"the object that I will monitor for changes"
	model := aModel
!

model
	"return the object that I will monitor for changes"
	^ model
! !

!TavernDiceView methodsFor: 'rendering'!

renderOn: html
  	model isNil ifTrue:[ ^ self ].
	diceShowing notNil 
	ifTrue:[ self renderDice: diceShowing on: html ]
	ifFalse:[ 
		canvas := html.
		html with: [
			model taverns do: [ :aTavern | 
				aTavern games do: [ :aGame |
					aGame players do:[ :aPlayer |
						self renderDice: (aPlayer dice) on: html ]
				 ] 
			] .
		].
		html button with: 'ROLL'; onClick: [self rollDice].
         ].
!

renderDice: aDice on: html
	"aDice is a set of individual dies values. We use the value of each value to set the appropriate image"

	| imageSrc fileName diceNum |

	diceShowing := aDice.
	diceDiv isNil ifTrue:[
		diceDiv := html div.
		diceDiv id: 'dice' .
	].
	diceDiv empty.
	diceDiv contents:[
		1 to: (aDice size) do:[ :index |
			diceNum := aDice at: index.
			imageSrc := imagePaths at: diceNum.
			(html img: imageSrc)  height:100; width: 100; style: 'margin-right:15px;'.
		].
	].
!

initialize
	"comment stating purpose of message"

        super initialize.
	self createImagePaths.
!

rollDice
	
	diceShowing roll.
	"self renderDice: diceShowing on: canvas."
	self renderOn: canvas.
!

exampleDice
  	"get a set of dice from an example player and save them"

	canvas := html.
	html with: [
		model taverns do: [ :aTavern | 
			aTavern games do: [ :aGame |
				aGame players do:[ :aPlayer |
					self renderDice: (aPlayer dice) on: html ].
			 ] 
		] .
		html button with: 'ROLL'; onClick: [self rollDice].
	].
!

exampleRenderOn: html
  	
	canvas := html.
	html with: [
		model taverns do: [ :aTavern | 
			aTavern games do: [ :aGame |
				aGame players do:[ :aPlayer |
					self renderDice: (aPlayer dice) on: html ]
			 ] 
		] .
		html button with: 'ROLL'; onClick: [self rollDice].
	].
!

createImagePaths
	"for performane reasons we'll create these in advance. If the game ever changes from six dice this will have to be changed as well"
	imagePaths := OrderedCollection new.
	imagePaths add: './images/Die-1.png'.
	imagePaths add: './images/Die-2.png'.
	imagePaths add: './images/Die-3.png'.
	imagePaths add: './images/Die-4.png'.
	imagePaths add: './images/Die-5.png'.
	imagePaths add: './images/Die-6.png'.
!

saveThisrenderDice: aDice on: html
	"aDice is a set of individual dies values. We use the value of each value to set the appropriate image"

	| imageSrc fileName image |

	diceShowing := aDice.
	diceDiv isNil ifTrue:[
		diceDiv := html div.
		diceDiv id: 'dice' .
	].
	diceDiv empty.
	diceDiv contents:[
		1 to: (aDice size) do:[ :index |
			imageSrc := String fromString: './images/Die-'.
			imageSrc := imageSrc ,  ((aDice at: index) printString) , '.png'.		
			(html img: imageSrc)  height:100; width: 100.
		].
	].
! !

TDWidget subclass: #DiceView
	instanceVariableNames: 'imagePaths diceShowing diceDiv'
	category: 'Dice'!

!DiceView methodsFor: 'examples'!

example
	"create an example of myself ready to display in a web page"

	self on: (Dice new ).
	model roll.
	 self  appendToJQuery: 'body' asJQuery.
! !

!DiceView methodsFor: 'initialization'!

initialize
	"comment stating purpose of message"

        super initialize.
	self createImagePaths.
! !

!DiceView methodsFor: 'private'!

createImagePaths
	"for performane reasons we'll create these in advance. If the game ever changes from six dice this will have to be changed as well"
	imagePaths := OrderedCollection new.
	imagePaths add: './images/Die-1.png'.
	imagePaths add: './images/Die-2.png'.
	imagePaths add: './images/Die-3.png'.
	imagePaths add: './images/Die-4.png'.
	imagePaths add: './images/Die-5.png'.
	imagePaths add: './images/Die-6.png'.
! !

!DiceView methodsFor: 'rendering'!

renderOn: html
	"we should already know the dice that we are displaying by asking the model (we start with a set number, but the player can lose one at each turn). We also save the HTML element (usually a div) so we can replace its contents.
	diceLeft is a Dice Object that contains an array of values representing the value of each die and allows us to choose the correct image for that die from the collection of imagePaths"

	| imageSrc diceNum  |

	element isNil ifTrue:[
		element := html div.
		element id: 'dice' .
	].
	element empty.
	element contents:[
		1 to: (model size) do:[ :index |
			diceNum := model at: index.
			imageSrc := imagePaths at: diceNum.
			(html img: imageSrc)  height:100; width: 100; style: 'margin-right:15px;'.
		].
	].
! !

TDWidget subclass: #GameView
	instanceVariableNames: ''
	category: 'Dice'!

TDWidget subclass: #PlayerView
	instanceVariableNames: ''
	category: 'Dice'!

TDWidget subclass: #TavernView
	instanceVariableNames: ''
	category: 'Dice'!

