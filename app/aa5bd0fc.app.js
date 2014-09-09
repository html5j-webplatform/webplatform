"use strict";angular.module("webplatformApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),c.html5Mode(!0)}]),angular.module("webplatformApp").controller("ArchiveCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("webplatformApp").config(["$stateProvider",function(a){a.state("archive",{url:"/archive",templateUrl:"app/archive/archive.html",controller:"ArchiveCtrl"})}]),angular.module("webplatformApp").controller("MainCtrl",["$scope","$http",function(a){a.awesomeThings=[{name:"プラットフォーム/デバイス",info:""},{name:"ライブラリ/フレームワーク",info:""},{name:"マネタイズマネタイズ / エコシステム",info:""},{name:"プラットフォームのアーキテクチャ",info:""},{name:"html5デバイスやAPI",info:""},{name:"HTML5(Web)セキュリティ",info:""},{name:"パッケージングと展開について",info:""},{name:"Web プラットデバッグ方法",info:""},{name:"パッケージングと展開について",info:""},{name:"SPA と ナビゲーション",info:""},{name:"オフラインについて",info:""},{name:"通信と組込み機器の関係/P2P",info:""},{name:"ネイティブとハイブリッド",info:""},{name:"外部機器連携",info:""}]}]),angular.module("webplatformApp").config(["$stateProvider",function(a){a.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"})}]),angular.module("webplatformApp").controller("MemberCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("webplatformApp").config(["$stateProvider",function(a){a.state("member",{url:"/member",templateUrl:"app/member/member.html",controller:"MemberCtrl"})}]),angular.module("webplatformApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("webplatformApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"メーリングリスト",link:"/"},{title:"アーカイブ",link:"archive()"},{title:"メンバー",link:"member()"}],a.isCollapsed=!0,a.isActive=function(a){return a===b.path()}}]),angular.module("webplatformApp").run(["$templateCache",function(a){a.put("app/archive/archive.html","<div ng-include=\"'components/navbar/navbar.html'\"></div><div class=col-md-12><h2>アーカイブ</h2><blockquote><h4><a href=https://atnd.org/events/52247>2014/08/04 HTML5 開発ツール天下一武道会 (エディタ 編 : 海開きの陣)</a></h4></blockquote><blockquote><h4><a href=https://atnd.org/events/51361>2014/06/09 HTML5 開発ツール天下一武道会 (IDE+α編 : 初夏の陣)</a></h4></blockquote><blockquote><h4><a href=https://atnd.org/events/49152>2014/04/09 HTML5 でネイティブアプリを実現する 3 つのプラットフォーム概要</a></h4></blockquote></div>"),a.put("app/main/main.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><header class=hero-unit id=banner><div class=container><h1>html5j Web Platform</h1><h2 class=lead>Web プラットフォーム部活動方針について</h2><p>Web プラットフォーム部は、html5jの部活動として特にWebプラットフォームに焦点をあて活動しています。具体的には、HTML5(Web)の知識を使った、クロスデバイス/クロスプラット開発の知識を身に着けることにより、技術者としての可能性を広げるためのセミナーを定期的に行っています。我々が得意とする分野は次の通りです。</p></div></header><div class=container><div class=row><div class=col-lg-12><h1 class=page-header>Features:</h1><ul class="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6" ng-repeat="thing in awesomeThings"><li><a href=# tooltip={{thing.info}}>{{thing.name}}</a></li></ul></div></div></div><footer class=footer><div class=container><p>html5j Web Platform</p><!--\n        <a href="https://twitter.com/tyhenkel">@tyhenkel</a> |\n         <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p>\n        --></div></footer>'),a.put("app/member/member.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=col-md-12><span><img src=assets/images/be6b7d12.member.jpg alt="I\'m Web Platform" width=640 height=359 class="alignnone size-full wp-image-5780"></span><hr><p>Webプラットフォーム部は、HTML5でネイティブのアプリを開発できるプラットフォームの動向に着目し、これらのプラットフォームで動作するアプリを開発するためのノウハウを発信、共有する部活動です。アプリを様々なプラットフォームに向けて開発する方法や各種マーケットでのマネタイズに至るまで、知っておくと得をするノウハウをアプリの開発者の皆さまに届けていきたいと思います。第一回目の勉強会を近日開催予定です。皆さんも一緒にWebの未来を追いかけていきましょう！</p></div>'),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-default navbar-static-top" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="isCollapsed = !isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand><span style=vartical-align:middle><img style="height: 50px" src=assets/images/7c8ac3dc.html5j_webplatform.png alt="I\'m Web Platform"></span></a></div><div collapse=isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in menu" ui-sref-active=active><a ui-sref={{item.link}}>{{item.title}}</a></li></ul></div></div></div>')}]);