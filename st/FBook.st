Smalltalk current createPackage: 'FBook' properties: #{}!
Object subclass: #FBook
	instanceVariableNames: 'appId channelUrl status cookie xfbml'
	category: 'FBook'!
!FBook commentStamp!
FBook will be our proxy object to the Facebook API in Javascript!

!FBook methodsFor: 'accessing'!

appID: anAppID
	"enter your page or application ID from FB developer page"

	appId := anAppID.
!

channelUrl: aUrl
	"enter the url for the FB server to call you back on"

	channelUrl := aUrl.
!

status: aBoolean
	"true or false to check login status first"

	status := aBoolean.
!

cookie: aBoolean
	"true or false to allow the server to store a cookie"

	cookie := aBoolean.
!

xfbml: aBoolean
	"true or false to parse xfbml tags"

	xfbml := aBoolean.
! !

!FBook class methodsFor: 'accessing'!

current
	"return the single, global instance of me"

	<return fbook>
! !

