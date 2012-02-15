Smalltalk current createPackage: 'Dice' properties: #{}!
Widget subclass: #TDWidget
	instanceVariableNames: 'model canvas'
	category: 'Dice'!

!TDWidget methodsFor: 'access'!

model
	"return the model that I am viewing"

	^ model
! !

Object subclass: #Dice
	instanceVariableNames: 'id gameID liarID dice numDice numSides'
	category: 'Dice'!
!Dice commentStamp!
I represent a number of individual die (dice) to form what we refer to as a set of Dice for a given player!

!Dice methodsFor: 'access'!

setNumDice: num
	"set the number of dice ledt in this player's hand"

	numDice := num.
!

getNumDice
	"the number of dice ledt in this player's hand"

	^ numDice
!

at: anIndex
	"return the value at anIndex"

	^ dice at: anIndex
!

getNumSides
	"return the number of sides on a dice"

	numSides isNil iftrue:[ numSides := 6].
	^ numSides
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
	dice := Array new: (self getNumDice).
	1 to: ( self getNumDice ) do:[ :i |
		"this hardcoded value of 6 will need to change if normal dice ever have more or less sides"
		val := ( 1 to: ( numSides )) atRandom.
		dice at: i put: val.
	].
	^ dice
!

size
	"return the number od dice I represent"

	^ dice size
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

TDWidget subclass: #DiceView
	instanceVariableNames: 'imagePaths diceShowing diceDiv'
	category: 'Dice'!

TDWidget subclass: #GameView
	instanceVariableNames: ''
	category: 'Dice'!

TDWidget subclass: #PlayerView
	instanceVariableNames: ''
	category: 'Dice'!

TDWidget subclass: #TavernView
	instanceVariableNames: ''
	category: 'Dice'!

