"use strict";angular.module("designkitApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angular.filter"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/landing.html",controller:"LandingCtrl"}).when("/logos",{templateUrl:"views/logos.html",controller:"LogosCtrl"}).when("/colors",{templateUrl:"views/colors.html",controller:"ColorsCtrl"}).when("/colors/:colorId",{templateUrl:"views/show_color.html",controller:"ColorsCtrl"}).when("/typography",{templateUrl:"views/typography.html",controller:"TypographyCtrl"}).when("/buttons",{templateUrl:"views/buttons.html",controller:"ButtonsCtrl"}).when("/tables",{templateUrl:"views/tables.html",controller:"TablesCtrl"}).when("/forms",{templateUrl:"views/forms.html",controller:"FormsCtrl"}).when("/ui-elements",{templateUrl:"views/ui-elements.html",controller:"UIelementsCtrl"}).when("/icons",{templateUrl:"views/icons.html",controller:"IconsCtrl"}).when("/widgets",{templateUrl:"views/widgets.html",controller:"WidgetsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("designkitApp").controller("LogosCtrl",["$scope","$rootScope","$routeParams",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.sectionClass="section-logos",b.bodyClass="layout-logos",b.colorId=c.colorId}]),angular.module("designkitApp").controller("ColorsCtrl",["$scope","$rootScope","$routeParams","$location",function(a,b,c,d){a.colors=[{id:1,section:"Brand Colors",item:{name:"Cool Blue",hex:"0A83F6",selector:"swatch-cool-blue"}},{id:2,section:"Brand Colors",item:{name:"Lima Green",hex:"80C11A",selector:"swatch-lima"}},{id:3,section:"Brand Colors",item:{name:"Fire Engine Red",hex:"C32525",selector:"swatch-fire-engine"}},{id:4,section:"Brand Colors",item:{name:"Royal Purple",hex:"7355A6",selector:"swatch-royal-purple"}},{id:5,section:"Brand Colors",item:{name:"Buckthorn Orange",hex:"F7A626",selector:"swatch-buckthorn"}},{id:6,section:"Graph Colors",item:{name:"Viking",hex:"4FBBCD",selector:"swatch-viking"}},{id:7,section:"Graph Colors",item:{name:"Royal Purple",hex:"7355A6",selector:"swatch-royal-purple"}},{id:8,section:"Graph Colors",item:{name:"Mulberry",hex:"C45887",selector:"swatch-mulberry"}},{id:9,section:"Graph Colors",item:{name:"Buckthorn Orange",hex:"F7A626",selector:"swatch-buckthorn"}},{id:10,section:"Graph Colors",item:{name:"Celery",hex:"B4CB55",selector:"swatch-celery"}},{id:11,section:"Graph Colors",item:{name:"Indian",hex:"D05A5A",selector:"swatch-indian"}},{id:12,section:"Graph Colors",item:{name:"Silver Tree",hex:"5DD08B",selector:"swatch-silver-tree"}},{id:13,section:"Graph Colors",item:{name:"Sean",hex:"3C8CC7",selector:"swatch-sean"}},{id:14,section:"Button Colors",item:{name:"Green Button",hex:"5FB000",selector:"swatch-green-button"}},{id:15,section:"Button Colors",item:{name:"Blue Button",hex:"0871D4",selector:"swatch-blue-button"}},{id:16,section:"Button Colors",item:{name:"Red Button",hex:"C32525",selector:"swatch-red-button"}},{id:17,section:"Button Colors",item:{name:"Grey Button",hex:"E7E7E7",selector:"swatch-grey-button"}},{id:18,section:"Text Colors",item:{name:"Link",hex:"0A83F6",selector:"swatch-link"}},{id:19,section:"Text Colors",item:{name:"Link Hover",hex:"0769C6",selector:"swatch-link-hover"}},{id:20,section:"Text Colors",item:{name:"Text",hex:"76899A",selector:"swatch-text"}},{id:21,section:"Text Colors",item:{name:"Heading",hex:"57626C",selector:"swatch-heading"}},{id:22,section:"Section Colors",item:{name:"Left Background (Sith)",hex:"353B41",selector:"swatch-left-dark"}},{id:23,section:"Section Colors",item:{name:"Left Background (Light)",hex:"DADEE3",selector:"swatch-left-light"}},{id:24,section:"Section Colors",item:{name:"Body",hex:"F4F5F7",selector:"swatch-body"}},{id:25,section:"Border Colors",item:{name:"Grey Border",hex:"D1D6DC",selector:"swatch-grey-border"}},{id:26,section:"Border Colors",item:{name:"Grey Border (Light)",hex:"E2E5E9",selector:"swatch-grey-border-light"}},{id:27,section:"Icon Colors",item:{name:"Grey Icon",hex:"8596A5",selector:"swatch-grey-icon"}},{id:28,section:"Icon Colors",item:{name:"Grey Icon (Highlight)",hex:"A2AFBA",selector:"swatch-grey-icon-highlight"}},{id:29,section:"Icon Colors",item:{name:"Blue Icon",hex:"2390F7",selector:"swatch-blue-icon"}},{id:30,section:"Icon Colors",item:{name:"Blue Icon (Highlight)",hex:"54A9F9",selector:"swatch-blue-icon-highlight"}},{id:30,section:"Icon Colors",item:{name:"Green Icon",hex:"80C11A",selector:"swatch-green-icon"}},{id:31,section:"Icon Colors",item:{name:"Sith Icon",hex:"30373C",selector:"swatch-sith-icon"}},{id:32,section:"Highlight Colors",item:{name:"Hover Highlight",hex:"FAFAFA",selector:"swatch-hover-highlight"}},{id:33,section:"Highlight Colors",item:{name:"Select Highlight",hex:"FAFAFA",selector:"swatch-select-highlight"}},{id:34,section:"Highlight Colors",item:{name:"Inline Highlight",hex:"FAFAFA",selector:"swatch-inline-highlight"}},{id:35,section:"Messaging Colors",item:{name:"Messaging Background",hex:"FFF7E5",selector:"swatch-messaging-background"}},{id:36,section:"Messaging Colors",item:{name:"Messaging Text",hex:"939182",selector:"swatch-messaging-text"}},{id:37,section:"Header Colors",item:{name:"Header Flat",hex:"0069CC",selector:"swatch-header-flat"}},{id:38,section:"Header Colors",item:{name:"Header Gradient Start",hex:"076CCA",selector:"swatch-header-gradient-start"}},{id:39,section:"Header Colors",item:{name:"Header Gradient End",hex:"065BAC",selector:"swatch-header-gradient-end"}},{id:40,section:"Header Colors",item:{name:"Not Found",hex:"not_found",selector:"swatch-header-gradient-end"}}],a.selectedColor=_.find(a.colors,{item:{hex:c.colorId}}),c.colorId&&void 0===a.selectedColor&&d.url("/colors/not_found"),a.sectionClass="section-colors",b.bodyClass="layout-color",b.swatchClass="swatch-body-","not_found"===c.colorId?b.colorId="000000":b.colorId=c.colorId}]),angular.module("designkitApp").controller("TypographyCtrl",["$scope","$rootScope","$routeParams",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.sectionClass="section-typeography",b.bodyClass="layout-typeography",b.colorId=c.colorId}]),angular.module("designkitApp").controller("MainCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("designkitApp").controller("IconsCtrl",["$scope","$rootScope",function(a,b){a.colors=[{name:"Grey",hex:"57626C"},{name:"Blue",hex:"2390F7"},{name:"Text",hex:"76899A"},{name:"Green",hex:"80C11A"},{name:"Sith",hex:"30373C"},{name:"White",hex:"FFFFFF","class":"blue-background"}],a.colors.selected=a.colors[0],a.icons=[{id:1.1,item:{name:"Arrow - Right",src:"images/ignore/icon-arrow-right.svg"}},{id:1.2,item:{name:"Arrow - Left",src:"images/ignore/icon-arrow-left.svg"}},{id:1.3,item:{name:"Arrow - Up",src:"images/ignore/icon-arrow-up.svg"}},{id:1.4,item:{name:"Arrow - Down",src:"images/ignore/icon-arrow-down.svg"}},{id:2,item:{name:"Calendar",src:"images/ignore/icon-calendar.svg"}},{id:3,item:{name:"Caret",src:"images/ignore/icon-caret.svg"}},{id:4,item:{name:"Close",src:"images/ignore/icon-close.svg"}},{id:5,item:{name:"Download",src:"images/ignore/icon-download.svg"}},{id:6,item:{name:"Expand",src:"images/ignore/icon-expand.svg"}},{id:7,item:{name:"Export",src:"images/ignore/icon-export.svg"}},{id:8,item:{name:"External",src:"images/ignore/icon-external.svg"}},{id:9,item:{name:"Info",src:"images/ignore/icon-info.svg"}},{id:10,item:{name:"Link",src:"images/ignore/icon-link.svg"}},{id:11,item:{name:"Markdown",src:"images/ignore/icon-markdown.svg"}},{id:12,item:{name:"Pen",src:"images/ignore/icon-pen.svg"}},{id:13,item:{name:"Plus Open",src:"images/ignore/icon-plus-open.svg"}},{id:14,item:{name:"Refresh",src:"images/ignore/icon-refresh.svg"}},{id:15,item:{name:"Search",src:"images/ignore/icon-search.svg"}},{id:16,item:{name:"Share",src:"images/ignore/icon-share.svg"}},{id:17,item:{name:"Trash",src:"images/ignore/icon-trash.svg"}},{id:18,item:{name:"Docs",src:"images/ignore/icon-docs.svg"}},{id:19,item:{name:"Check",src:"images/ignore/icon-check.svg"}},{id:20,item:{name:"Sort - Unsorted",src:"images/ignore/icon-sort-unsorted.svg"}},{id:21,item:{name:"Sort - Up",src:"images/ignore/icon-sort-up.svg"}},{id:22,item:{name:"Sort - Down",src:"images/ignore/icon-sort-down.svg"}},{id:23,item:{name:"API",src:"images/ignore/icon-api.svg"}},{id:24,item:{name:"Attachment",src:"images/ignore/icon-attachment.svg"}},{id:25,item:{name:"Back",src:"images/ignore/icon-back-button.svg"}},{id:26,item:{name:"Check",src:"images/ignore/icon-checkmark-circled.svg"}},{id:27,item:{name:"Cloud",src:"images/ignore/icon-cloud.svg"}},{id:28,item:{name:"Email",src:"images/ignore/icon-email.svg"}},{id:29,item:{name:"Phone",src:"images/ignore/icon-phone.svg"}},{id:30,item:{name:"Copy",src:"images/ignore/icon-copy.svg"}},{id:31,item:{name:"Error",src:"images/ignore/icon-error.svg"}},{id:32,item:{name:"Filter",src:"images/ignore/icon-filter.svg"}},{id:33,item:{name:"Hide",src:"images/ignore/icon-hide.svg"}},{id:34,item:{name:"Home",src:"images/ignore/icon-home.svg"}},{id:35,item:{name:"Help Info",src:"images/ignore/icon-info-help.svg"}},{id:36,item:{name:"Beta",src:"images/ignore/icon-beta.svg"}},{id:37,item:{name:"Save",src:"images/ignore/icon-saved.svg"}},{id:38,item:{name:"Read Only",src:"images/ignore/icon-read-only.svg"}},{id:39,item:{name:"Secure",src:"images/ignore/icon-secure.svg"}},{id:40,item:{name:"Caret 2",src:"images/ignore/icon-caret-2.svg"}},{id:41,item:{name:"Log Out",src:"images/ignore/icon-logout.svg"}},{id:42,item:{name:"Gear",src:"images/ignore/icon-gear.svg"}},{id:43,item:{name:"Folder",src:"images/ignore/icon-folder.svg"}},{id:44,item:{name:"Key",src:"images/ignore/icon-key.svg"}},{id:45,item:{name:"Book",src:"images/ignore/icon-book.svg"}},{id:46,item:{name:"Brush",src:"images/ignore/icon-brush.svg"}},{id:47,item:{name:"Cloud 2",src:"images/ignore/icon-cloud-2.svg"}},{id:48,item:{name:"User",src:"images/ignore/icon-user.svg"}},{id:49,item:{name:"List View",src:"images/ignore/icon-list-view.svg"}},{id:50,item:{name:"Card View",src:"images/ignore/icon-card-view.svg"}},{id:51,item:{name:"Card View",src:"images/ignore/icon-ticket.svg"}}],a.sectionClass="section-icons",b.bodyClass="layout-icons"}]),angular.module("designkitApp").controller("ButtonsCtrl",["$scope","$rootScope","$routeParams",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.sectionClass="section-buttons",b.bodyClass="layout-buttons",b.colorId=c.colorId}]),angular.module("designkitApp").controller("FormsCtrl",["$scope","$rootScope","$routeParams",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.sectionClass="section-forms",b.bodyClass="layout-forms",b.colorId=c.colorId}]),angular.module("designkitApp").controller("TablesCtrl",["$scope","$rootScope",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.sectionClass="section-tables",b.bodyClass="layout-tables",a.tableRows=[{isChecked:!1,title:"Excepteur occaecat incididunt",description:"Aute commodo laboris Lorem culpa sunt deserunt tempor enim dolore magna proident culpa cillum. Excepteur pariatur pariatur occaecat quis occaecat est veniam. Officia irure non ullamco minim culpa ad anim eiusmod eiusmod irure fugiat. Adipisicing cupidatat anim sint eiusmod labore do.",state:"images/assets/icon-server-orange.svg"},{isChecked:!0,title:"Tempor enim",description:"Minim est labore est labore est non. Ea cillum anim culpa est. Enim est anim id commodo dolor non cupidatat anim proident. Adipisicing ea pariatur do adipisicing consequat labore fugiat fugiat duis nisi. Sunt nulla commodo duis ut labore esse veniam sunt deserunt. Culpa eu esse proident tempor amet elit adipisicing ullamco anim officia quis culpa quis consectetur.",state:"images/assets/icon-server-red.svg"},{isChecked:!0,title:"Consequat eiusmod",description:"Elit elit nulla commodo mollit culpa nostrud. Ut in est deserunt fugiat laborum et. Aute proident qui aute aliqua magna aliquip consectetur excepteur eu nulla. Veniam sint aute occaecat ex culpa adipisicing laborum ea laborum ut ut sint. Quis excepteur voluptate aliquip tempor excepteur proident sit.",state:"images/assets/icon-server-orange.svg"},{isChecked:!1,title:"Ex sunt commodo culpa magna",description:"Pariatur et duis irure velit anim nisi enim. Lorem mollit ullamco veniam proident enim proident velit incididunt sit nostrud. Nulla aliquip officia sunt pariatur nisi sunt est voluptate et eiusmod amet fugiat nostrud. Non aliquip dolor aute magna aute consequat culpa. Excepteur aute consequat labore sunt ex non do pariatur sunt ex deserunt irure. Ad laboris sint tempor pariatur mollit ea ut.",state:"images/assets/icon-server-green.svg"},{isChecked:!0,title:"Nulla commodo aliqua",description:"Proident fugiat deserunt amet occaecat ut adipisicing cupidatat. Excepteur voluptate consequat enim duis reprehenderit sint enim. Labore sit eu do ad anim magna. Culpa dolore amet culpa et laboris incididunt amet laborum laborum tempor aliqua elit aute tempor. Voluptate minim fugiat consequat fugiat dolor in id nisi irure excepteur velit mollit dolor. Aute irure ex consectetur culpa id labore dolor exercitation. Ad anim nulla et Lorem adipisicing dolor dolor in aliqua laborum ullamco labore ut.",state:"images/assets/icon-server-warning.svg"},{isChecked:!1,title:"Minim non eiusmod aliqua",description:"Ut deserunt nulla laborum consectetur amet. Magna anim dolor elit et sit enim nostrud sint. Consectetur voluptate anim dolor officia. Ipsum ea laborum ex nisi anim laborum id proident. Pariatur excepteur labore pariatur elit consectetur ipsum consectetur aliqua ut. Dolore Lorem id voluptate cillum labore dolore consectetur eu dolore officia laborum.",state:"images/assets/icon-server-red.svg"},{isChecked:!1,title:"Commodo sint incididunt",description:"Velit quis qui ut ipsum. Incididunt amet sint magna aliqua sit tempor laboris pariatur aliqua ad id exercitation commodo. Lorem in culpa deserunt cupidatat reprehenderit proident. Esse culpa nisi quis esse dolore tempor elit eiusmod duis in ex. Eu sint incididunt laborum exercitation incididunt consequat laborum consequat enim magna qui Lorem irure.",state:"images/assets/icon-server-green.svg"},{isChecked:!0,title:"Amet incididunt dolor eu consectetur",description:"Ad labore cillum excepteur eiusmod ullamco. Sint quis consequat cillum consequat. Consequat deserunt enim exercitation amet sint duis amet laboris elit excepteur commodo commodo. Minim ipsum culpa officia voluptate non labore culpa. Irure aute occaecat amet labore culpa commodo tempor occaecat elit sint veniam culpa duis ipsum. Ullamco tempor occaecat sit adipisicing minim in minim aliquip nulla eu nulla aliquip.",state:"images/assets/icon-server-warning.svg"},{isChecked:!0,title:"Aliqua magna sunt officia",description:"Voluptate tempor aliquip officia cupidatat sit sunt nulla fugiat esse. Voluptate mollit cupidatat incididunt pariatur reprehenderit exercitation proident non deserunt voluptate adipisicing id id. Tempor veniam mollit laboris magna deserunt pariatur ex anim fugiat aliqua consequat ex irure. Consequat deserunt mollit cupidatat et voluptate nulla aute sunt anim esse ullamco ex sunt. Nostrud qui nisi occaecat ut fugiat deserunt exercitation labore dolore. Sit sit consequat laborum cupidatat aute in aute mollit ipsum nostrud elit. Aliquip sunt sint eu aute pariatur anim et labore.",state:"images/assets/icon-server-warning.svg"},{isChecked:!0,title:"Nisi sint non ullamco officia",description:"Dolore tempor sunt elit aute enim magna sint ipsum dolore voluptate consequat proident dolor. Commodo incididunt labore pariatur adipisicing cupidatat aliquip sunt consequat elit ex sint duis magna velit. Amet ad dolor eu elit pariatur elit ipsum quis aute pariatur. Irure culpa Lorem esse eu adipisicing fugiat. Consectetur nisi voluptate duis aliquip adipisicing aliquip anim. Tempor dolore eu commodo nulla sint nisi laborum cillum duis minim nisi nostrud ut.",state:"images/assets/icon-server-red.svg"}]}]),angular.module("designkitApp").controller("UIelementsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.tableRows=[{isChecked:!1,title:"Fusce Adipiscing Elit Mattis",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, necessitatibus. Pariatur, non vero voluptate voluptas nesciunt ipsa nostrum omnis dolorum molestias doloremque itaque, ducimus impedit fuga obcaecati amet nulla quos.",state:"images/assets/icon-server-green.svg"},{isChecked:!1,title:"Quam Consectetur Ipsum Fermentum",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias sit, soluta! Iure placeat a repellat vitae obcaecati, nobis consequatur tempora vel. Illo placeat obcaecati fugit libero quasi eius ipsam!",state:"images/assets/icon-server-red.svg"},{isChecked:!1,title:"Ornare Vulputate",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sequi optio neque explicabo autem dolor accusantium dolorum fugiat eaque quod voluptas, quisquam iure, sapiente itaque sit dicta modi iusto ratione.",state:"images/assets/icon-server-orange.svg"},{isChecked:!1,title:"Sit Tellus Vehicula",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisci praesentium eligendi vitae totam reiciendis reprehenderit nihil autem! Numquam amet esse voluptatem rem maxime illo, animi optio voluptates voluptate quis.",state:"images/assets/icon-server-warning.svg"},{isChecked:!1,title:"Risus Pharetra Euismod",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tenetur minus unde sed necessitatibus quia eum nihil, obcaecati facere? Assumenda corporis a nobis corrupti temporibus quia dolorem, voluptas rem? Placeat.",state:"images/assets/icon-server-green.svg"},{isChecked:!1,title:"Fusce Adipiscing Elit Mattis",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, necessitatibus. Pariatur, non vero voluptate voluptas nesciunt ipsa nostrum omnis dolorum molestias doloremque itaque, ducimus impedit fuga obcaecati amet nulla quos.",state:"images/assets/icon-server-green.svg"},{isChecked:!1,title:"Quam Consectetur Ipsum Fermentum",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias sit, soluta! Iure placeat a repellat vitae obcaecati, nobis consequatur tempora vel. Illo placeat obcaecati fugit libero quasi eius ipsam!",state:"images/assets/icon-server-red.svg"},{isChecked:!1,title:"Ornare Vulputate",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sequi optio neque explicabo autem dolor accusantium dolorum fugiat eaque quod voluptas, quisquam iure, sapiente itaque sit dicta modi iusto ratione.",state:"images/assets/icon-server-orange.svg"},{isChecked:!1,title:"Sit Tellus Vehicula",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisci praesentium eligendi vitae totam reiciendis reprehenderit nihil autem! Numquam amet esse voluptatem rem maxime illo, animi optio voluptates voluptate quis.",state:"images/assets/icon-server-warning.svg"},{isChecked:!1,title:"Risus Pharetra Euismod",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tenetur minus unde sed necessitatibus quia eum nihil, obcaecati facere? Assumenda corporis a nobis corrupti temporibus quia dolorem, voluptas rem? Placeat.",state:"images/assets/icon-server-green.svg"}]}]),angular.module("designkitApp").controller("WidgetsCtrl",["$scope","$rootScope","$routeParams",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.sectionClass="section-widgets",b.bodyClass="layout-widgets",b.colorId=c.colorId}]),angular.module("designkitApp").directive("downloadableIcon",["$http",function(a){var b=256;return{restrict:"E",scope:{src:"@",name:"@",color:"@",colorName:"@"},template:'<div class="store-preview-icon"></div><span class="store-icon-text"><span class="store-icon-name">{{ name }}</span><span class="store-download-link"><a class="store-download svg">SVG</a><a class="store-download png">PNG</a></span></span>',link:function(c,d){function e(){a({method:"GET",url:c.src,cache:!0}).success(function(a){var d,e,i,j=c.colorName.replace(/ +/,"-").toLowerCase(),k=_.last(c.src.split("/")).split(".")[0]+"-"+j,l=new Image,m=document.createElement("canvas");h.html(a),h.find("path").attr("fill","#"+c.color),e=_.map(h.find("svg")[0].getAttribute("viewBox").split(" "),parseFloat),i=e[3]*b/e[2],m.width=b,m.height=i,l.onload=function(){m.getContext("2d").drawImage(l,0,0,b,i),f.attr("href",m.toDataURL("image/png")),f.attr("download",k+".png")},d="data:image/svg+xml;utf8,"+encodeURIComponent(h.html()),l.src=d,g.attr("href",d),g.attr("download",k+".svg")})}var f=d.find(".png"),g=d.find(".svg"),h=d.find("div");c.$watch("color",e),h.find("svg")[0]||e()}}}]),angular.module("designkitApp").directive("selectAll",function(){return{restrict:"E",template:'<div class="checkbox_wrap"><input type="checkbox" id="checkbox-all-{{id}}" /><label for="checkbox-all-{{id}}" class="checkbox_label"><span class="sr-only">{{label}}</span></label></div>',scope:{collection:"=",attribute:"@"},link:function(a,b){a.id=Math.floor(1e4*Math.random());var c=b.find("input");c.on("change",function(){a.$apply(function(){c.prop("checked")?a.collection.forEach(function(b){b[a.attribute]=!0}):a.collection.forEach(function(b){b[a.attribute]=!1})})}),a.$watch("collection",function(d){var e=!0,f=!1;d.forEach(function(b){b[a.attribute]?f=!0:e=!1}),e?(b.find("div").removeClass("checkbox_indeterminate"),a.label="Select none",c.prop("checked",!0).prop("indeterminate",!1)):f?(b.find("div").addClass("checkbox_indeterminate"),a.label="Select all",c.prop("checked",!1).prop("indeterminate",!0)):(b.find("div").removeClass("checkbox_indeterminate"),a.label="Select all",c.prop("checked",!1).prop("indeterminate",!1))},!0)}}}),$(document).ready(function(){$("input:checkbox").change(function(){$(this).is(":checked")?$(this).parent().addClass("checked"):$(this).parent().removeClass("checked")})}),angular.module("designkitApp").controller("LandingCtrl",["$scope","$rootScope","$timeout",function(a,b,c){a.cards=[{id:"1",title:"Logos",details:"Main logo, product logos and product marks"},{id:"2",title:"Colors",details:"Branding, primary and accent colors"},{id:"3",title:"Typography",details:"Base typography and hierarchy"},{id:"4",title:"Icons",details:"Principal system icons"},{id:"5",title:"Tables",details:"Basic table UI"},{id:"6",title:"Buttons",details:"Default UI for buttons and button groups"},{id:"7",title:"Forms",details:"Basic form UI"}],a.sectionClass="section-landing",b.bodyClass="layout-landing",c(function(){a.sectionClass="animate-loaded"},100)}]);