smalltalk.addPackage('FBook', {});
smalltalk.addClass('FBook', smalltalk.Object, ['appId', 'channelUrl', 'status', 'cookie', 'xfbml'], 'FBook');
smalltalk.FBook.comment=unescape('FBook%20will%20be%20our%20proxy%20object%20to%20the%20Facebook%20API%20in%20Javascript')
smalltalk.addMethod(
unescape('_appID_'),
smalltalk.method({
selector: unescape('appID%3A'),
category: 'accessing',
fn: function (anAppID){
var self=this;
(self['@appId']=anAppID);
return self;},
args: ["anAppID"],
source: unescape('appID%3A%20anAppID%0A%09%22enter%20your%20page%20or%20application%20ID%20from%20FB%20developer%20page%22%0A%0A%09appId%20%3A%3D%20anAppID.%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FBook);

smalltalk.addMethod(
unescape('_channelUrl_'),
smalltalk.method({
selector: unescape('channelUrl%3A'),
category: 'accessing',
fn: function (aUrl){
var self=this;
(self['@channelUrl']=aUrl);
return self;},
args: ["aUrl"],
source: unescape('channelUrl%3A%20aUrl%0A%09%22enter%20the%20url%20for%20the%20FB%20server%20to%20call%20you%20back%20on%22%0A%0A%09channelUrl%20%3A%3D%20aUrl.%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FBook);

smalltalk.addMethod(
unescape('_status_'),
smalltalk.method({
selector: unescape('status%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@status']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('status%3A%20aBoolean%0A%09%22true%20or%20false%20to%20check%20login%20status%20first%22%0A%0A%09status%20%3A%3D%20aBoolean.%0A%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FBook);

smalltalk.addMethod(
unescape('_cookie_'),
smalltalk.method({
selector: unescape('cookie%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@cookie']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('cookie%3A%20aBoolean%0A%09%22true%20or%20false%20to%20allow%20the%20server%20to%20store%20a%20cookie%22%0A%0A%09cookie%20%3A%3D%20aBoolean.%0A%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FBook);

smalltalk.addMethod(
unescape('_xfbml_'),
smalltalk.method({
selector: unescape('xfbml%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@xfbml']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('xfbml%3A%20aBoolean%0A%09%22true%20or%20false%20to%20parse%20xfbml%20tags%22%0A%0A%09xfbml%20%3A%3D%20aBoolean.%0A%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FBook);


smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'accessing',
fn: function (){
var self=this;
return fbook;
return self;},
args: [],
source: unescape('current%0A%09%22return%20the%20single%2C%20global%20instance%20of%20me%22%0A%0A%09%3Creturn%20fbook%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FBook.klass);


