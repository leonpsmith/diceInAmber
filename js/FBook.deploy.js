smalltalk.addPackage('FBook', {});
smalltalk.addClass('FBook', smalltalk.Object, ['appId', 'channelUrl', 'status', 'cookie', 'xfbml'], 'FBook');
smalltalk.addMethod(
unescape('_appID_'),
smalltalk.method({
selector: unescape('appID%3A'),
fn: function (anAppID){
var self=this;
(self['@appId']=anAppID);
return self;}
}),
smalltalk.FBook);

smalltalk.addMethod(
unescape('_channelUrl_'),
smalltalk.method({
selector: unescape('channelUrl%3A'),
fn: function (aUrl){
var self=this;
(self['@channelUrl']=aUrl);
return self;}
}),
smalltalk.FBook);

smalltalk.addMethod(
unescape('_status_'),
smalltalk.method({
selector: unescape('status%3A'),
fn: function (aBoolean){
var self=this;
(self['@status']=aBoolean);
return self;}
}),
smalltalk.FBook);

smalltalk.addMethod(
unescape('_cookie_'),
smalltalk.method({
selector: unescape('cookie%3A'),
fn: function (aBoolean){
var self=this;
(self['@cookie']=aBoolean);
return self;}
}),
smalltalk.FBook);

smalltalk.addMethod(
unescape('_xfbml_'),
smalltalk.method({
selector: unescape('xfbml%3A'),
fn: function (aBoolean){
var self=this;
(self['@xfbml']=aBoolean);
return self;}
}),
smalltalk.FBook);


smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return fbook;
return self;}
}),
smalltalk.FBook.klass);


