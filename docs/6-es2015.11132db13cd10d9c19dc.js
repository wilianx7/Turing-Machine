(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1Mdf":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=e("ukM0"),o=e("1T4B"),a=e("X8rZ");class s{constructor(l){this.toastr=l,this.data=new Array,this.isOpen=!1,this.getConfig()}getConfig(){const l=JSON.parse(localStorage.getItem("turingConfig"));if(l)for(const n of l)this.data.push(new u.a(n.id,n.currentState,n.symbolFound,n.symbolWrote,n.direction,n.nextState));else this.setInitialConfig()}openAddStateModal(){this.addStateModal.open(),this.isOpen=!1}openStartElementsModal(){this.startElementsModal.open(),this.isOpen=!1}openDelayValueModal(){this.delayValueModal.open(),this.isOpen=!1}saveStates(){localStorage.removeItem("turingConfig"),localStorage.setItem("turingConfig",JSON.stringify(this.data)),this.addStateModal&&this.addStateModal.close(),this.showSuccess("Cadastrado com sucesso")}addState(){if(this.verifyFields()){const l=new u.a(this.getNextId(),this.currentState.nativeElement.value,this.symbolFound.nativeElement.value,this.symbolWrote.nativeElement.value,this.directionSelect.nativeElement.value,this.nextState.nativeElement.value);this.data.push(l),this.clearFields(),this.showSuccess("Cadastrado com sucesso")}else this.showError("Preencha todos os campos")}saveStartElements(){const l=this.startElements.nativeElement.value;l&&this.verifyEntry(l)?(localStorage.removeItem("turingStartElements"),localStorage.setItem("turingStartElements",JSON.stringify(l)),this.startElementsModal.close(),this.showSuccess("Cadastrado com sucesso")):this.showError("Valor inv\xe1lido")}saveDelayValue(){const l=this.delayValue.nativeElement.value;isNaN(l)?this.showError("Valor inv\xe1lido"):(localStorage.removeItem("turingDelayValue"),localStorage.setItem("turingDelayValue",JSON.stringify(l)),this.delayValueModal.close(),this.showSuccess("Cadastrado com sucesso"))}clearFields(){this.currentState.nativeElement.value="",this.symbolFound.nativeElement.value="",this.symbolWrote.nativeElement.value="",this.directionSelect.nativeElement.value="Direita",this.nextState.nativeElement.value=""}verifyFields(){return!!(this.nextState.nativeElement.value&&this.currentState.nativeElement.value&&this.symbolFound.nativeElement.value&&this.symbolWrote.nativeElement.value&&this.directionSelect.nativeElement.value)}verifyEntry(l){for(const n of l)if("*"!==n&&"_"!==n)return!1;return!0}clearConfig(){localStorage.removeItem("turingConfig"),localStorage.removeItem("turingStartElements"),localStorage.removeItem("turingDelayValue"),this.startElements.nativeElement.value="",this.delayValue.nativeElement.value="",this.clearFields(),this.data=new Array,this.setInitialConfig(),this.showSuccess("Configura\xe7\xe3o resetada")}setInitialConfig(){this.data.push(new u.a(0,"->","->","->","Direita","0")),localStorage.removeItem("turingConfig"),localStorage.setItem("turingConfig",JSON.stringify(this.data)),localStorage.removeItem("turingDelayValue"),localStorage.setItem("turingDelayValue",JSON.stringify("500"))}getNextId(){const l=this.data.pop();return this.data.push(l),l.getId()+1}setSubtractionExample(){this.data=o.a,localStorage.removeItem("turingConfig"),localStorage.removeItem("turingStartElements"),localStorage.setItem("turingConfig",JSON.stringify(this.data)),localStorage.setItem("turingStartElements",JSON.stringify("*****_***")),this.showSuccess("Exemplo configurado com sucesso")}setDivisionExample(){this.data=a.a,localStorage.removeItem("turingConfig"),localStorage.removeItem("turingStartElements"),localStorage.setItem("turingConfig",JSON.stringify(this.data)),localStorage.setItem("turingStartElements",JSON.stringify("*****_***")),this.showSuccess("Exemplo configurado com sucesso")}showSuccess(l){this.toastr.success(l,"Sucesso!")}showError(l){this.toastr.error(l,"Erro!")}}class i{}var r=e("pMnS"),c=e("SVse");class d{delete(l){this.data.splice(l,1),localStorage.removeItem("turingConfig"),localStorage.setItem("turingConfig",JSON.stringify(this.data))}}var b=t.ob({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,13,null,null,null,null,null,null,null)),(l()(),t.qb(1,0,null,null,12,"tr",[["class","flex flex-col flex-no wrap bg-white sm:table-row sm:mb-0"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"td",[["class","border-grey-light border text-center hover:bg-gray-100 p-3 truncate"]],null,null,null,null,null)),(l()(),t.Fb(3,null,["",""])),(l()(),t.qb(4,0,null,null,1,"td",[["class","border-grey-light border text-center hover:bg-gray-100 p-3 truncate"]],null,null,null,null,null)),(l()(),t.Fb(5,null,["",""])),(l()(),t.qb(6,0,null,null,1,"td",[["class","border-grey-light border text-center hover:bg-gray-100 p-3 truncate"]],null,null,null,null,null)),(l()(),t.Fb(7,null,["",""])),(l()(),t.qb(8,0,null,null,1,"td",[["class","border-grey-light border text-center hover:bg-gray-100 p-3 truncate"]],null,null,null,null,null)),(l()(),t.Fb(9,null,["",""])),(l()(),t.qb(10,0,null,null,1,"td",[["class","border-grey-light border text-center hover:bg-gray-100 p-3 truncate"]],null,null,null,null,null)),(l()(),t.Fb(11,null,["",""])),(l()(),t.qb(12,0,null,null,1,"td",[["class","border-grey-light border text-center hover:bg-gray-100 p-3 hover:font-medium text-red-400 hover:text-red-600 cursor-pointer"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==(0==l.context.index?"":l.component.delete(l.context.index))&&t),t}),null,null)),(l()(),t.Fb(13,null,["",""]))],null,(function(l,n){var e=n.context.$implicit.getCurrentState();l(n,3,0,e);var t=n.context.$implicit.getSymbolFound();l(n,5,0,t);var u=n.context.$implicit.getSymbolWrote();l(n,7,0,u);var o=n.context.$implicit.getDirection();l(n,9,0,o);var a=n.context.$implicit.getNextState();l(n,11,0,a),l(n,13,0,0==n.context.index?"":"Excluir")}))}function f(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,19,"body",[["class","flex items-center justify-center"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,18,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,17,"table",[["class","w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 table-responsive"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,13,"thead",[["class","text-white"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,12,"tr",[["class","bg-blue-500 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"th",[["class","p-3 text-center"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Estado Atual"])),(l()(),t.qb(7,0,null,null,1,"th",[["class","p-3 text-center"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Encontrou"])),(l()(),t.qb(9,0,null,null,1,"th",[["class","p-3 text-center"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Escreveu"])),(l()(),t.qb(11,0,null,null,1,"th",[["class","p-3 text-center"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Dire\xe7\xe3o"])),(l()(),t.qb(13,0,null,null,1,"th",[["class","p-3 text-center"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Novo Estado"])),(l()(),t.qb(15,0,null,null,1,"th",[["class","p-3 text-center"],["width","110px"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["A\xe7\xf5es"])),(l()(),t.qb(17,0,null,null,2,"tbody",[["class","flex-1 sm:flex-none"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,m)),t.pb(19,278528,null,0,c.h,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,19,0,n.component.data)}),null)}class p{constructor(){this.closeButton=document.querySelectorAll(".modal-close"),this.isOpen=!1}close(){this.element.nativeElement.classList.remove("fadeIn"),this.element.nativeElement.classList.add("fadeOut"),setTimeout(()=>{this.element.nativeElement.classList.remove("flex"),this.isOpen=!1},500)}open(){this.element.nativeElement.classList.remove("fadeOut"),this.element.nativeElement.classList.add("fadeIn"),this.isOpen=!0,this.element.nativeElement.classList.add("flex")}}var g=t.ob({encapsulation:0,styles:[["@-webkit-keyframes shimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.faster[_ngcontent-%COMP%]{-webkit-animation-duration:.5s;animation-duration:.5s}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.fadeOut[_ngcontent-%COMP%]{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}"]],data:{}});function h(l){return t.Gb(0,[t.Db(402653184,1,{element:0}),(l()(),t.qb(1,0,[[1,0],["element",1]],null,9,"div",[["class","tail-modal absolute w-full h-100 inset-0 z-0 overflow-hidden justify-center items-center animated fadeIn faster"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t.qb(2,0,null,null,0,"button",[["class","fixed z-10 inset-0 h-full w-full bg-black opacity-50 cursor-default"],["tabindex","-1"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,7,"div",[["class","border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,6,"div",[["class","modal-content py-4 text-left px-6"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"div",[["class","flex justify-between items-center pb-3"]],null,null,null,null,null)),t.Ab(null,0),(l()(),t.qb(7,0,null,null,1,"div",[["class","my-2"]],null,null,null,null,null)),t.Ab(null,1),(l()(),t.qb(9,0,null,null,1,"div",[["class","flex justify-end py-1"]],null,null,null,null,null)),t.Ab(null,2)],null,(function(l,n){l(n,1,0,!n.component.isOpen)}))}var v=e("EApP"),y=t.ob({encapsulation:0,styles:[["input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-radius:.5rem;border-color:#5dbdb4;outline-style:none}"]],data:{}});function x(l){return t.Gb(0,[t.Db(402653184,1,{addStateModal:0}),t.Db(402653184,2,{startElementsModal:0}),t.Db(402653184,3,{delayValueModal:0}),t.Db(402653184,4,{directionSelect:0}),t.Db(402653184,5,{currentState:0}),t.Db(402653184,6,{symbolFound:0}),t.Db(402653184,7,{symbolWrote:0}),t.Db(402653184,8,{nextState:0}),t.Db(402653184,9,{startElements:0}),t.Db(402653184,10,{delayValue:0}),(l()(),t.qb(10,0,null,null,0,"link",[["crossorigin","anonymous"],["href","https://use.fontawesome.com/releases/v5.2.0/css/all.css"],["integrity","sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"],["rel","stylesheet"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,15,"div",[["class","flex flex-col-reverse w-full p-3 md:flex-row justify-center"]],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,1,"config-table",[["class","w-full md:px-6 relative"]],null,null,null,f,b)),t.pb(13,49152,null,0,d,[],{data:[0,"data"]},null),(l()(),t.qb(14,0,null,null,12,"div",[["class","flex flex-col pl-0 md:pl-10 mt-6 xs:w-full md:w-1/2 xl:w-1/4"]],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,1,"button",[["class","py-2 px-6 bg-blue-500 text-white rounded-lg focus:outline-none md:mr-4 hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openAddStateModal()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Novo Estado"])),(l()(),t.qb(17,0,null,null,1,"button",[["class","py-2 mt-6 px-6 bg-blue-500 text-white rounded-lg focus:outline-none md:mr-4 hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openStartElementsModal()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Elementos Iniciais"])),(l()(),t.qb(19,0,null,null,1,"button",[["class","py-2 mt-6 px-6 bg-blue-500 text-white rounded-lg focus:outline-none md:mr-4 hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openDelayValueModal()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Velocidade"])),(l()(),t.qb(21,0,null,null,1,"button",[["class","py-2 mt-6 px-6 bg-red-500 text-white rounded-lg focus:outline-none md:mr-4 hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.clearConfig()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Limpar Configura\xe7\xe3o"])),(l()(),t.qb(23,0,null,null,1,"button",[["class","py-2 mt-6 px-6 bg-orange-600 text-white rounded-lg focus:outline-none md:mr-4 hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.setSubtractionExample()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Subtra\xe7\xe3o - Exemplo"])),(l()(),t.qb(25,0,null,null,1,"button",[["class","py-2 mt-6 px-6 bg-orange-600 text-white rounded-lg focus:outline-none md:mr-4 hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.setDivisionExample()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Divis\xe3o - Exemplo"])),(l()(),t.qb(27,0,null,null,34,"modal",[],null,null,null,h,g)),t.pb(28,49152,[[1,4],["addStateModal",4]],0,p,[],null,null),(l()(),t.qb(29,0,null,0,2,"div",[["header",""]],null,null,null,null,null)),(l()(),t.qb(30,0,null,null,1,"h3",[["class","font-bold font-sans"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Adicionar Estado"])),(l()(),t.qb(32,0,null,1,24,"div",[["body",""]],null,null,null,null,null)),(l()(),t.qb(33,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.qb(34,0,null,null,1,"span",[["class","font-sans font-semibold mb-4"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Estado Atual:"])),(l()(),t.qb(36,0,[[5,0],["currentState",1]],null,0,"input",[["class","py-3 px-4 w-full border rounded-lg hover:rounded-lg mt-1"],["placeholder","0, 1, 2, 3..."],["type","text"]],null,null,null,null,null)),(l()(),t.qb(37,0,null,null,3,"div",[["class","mt-4"]],null,null,null,null,null)),(l()(),t.qb(38,0,null,null,1,"span",[["class","font-sans font-semibold"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Encontrou o s\xedmbolo:"])),(l()(),t.qb(40,0,[[6,0],["symbolFound",1]],null,0,"input",[["class","py-3 px-4 mt-1 w-full border rounded-lg hover:rounded-lg"],["placeholder","*, A, B, C..."],["type","text"]],null,null,null,null,null)),(l()(),t.qb(41,0,null,null,3,"div",[["class","mt-4"]],null,null,null,null,null)),(l()(),t.qb(42,0,null,null,1,"span",[["class","font-sans font-semibold"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Escreveu o s\xedmbolo:"])),(l()(),t.qb(44,0,[[7,0],["symbolWrote",1]],null,0,"input",[["class","py-3 px-4 mt-1 w-full border rounded-lg hover:rounded-lg"],["placeholder","*, A, B, C..."],["type","text"]],null,null,null,null,null)),(l()(),t.qb(45,0,null,null,7,"div",[["class","mt-4"]],null,null,null,null,null)),(l()(),t.qb(46,0,null,null,1,"span",[["class","font-sans font-semibold"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Moveu-se para:"])),(l()(),t.qb(48,0,[[4,0],["directionSelectId",1]],null,4,"select",[["class","py-3 px-4 mt-1 w-full border rounded-lg hover:rounded-lg"],["name","directionSelect"]],null,null,null,null,null)),(l()(),t.qb(49,0,null,null,1,"option",[["value","Direita"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Direita"])),(l()(),t.qb(51,0,null,null,1,"option",[["value","Esquerda"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Esquerda"])),(l()(),t.qb(53,0,null,null,3,"div",[["class","mt-4"]],null,null,null,null,null)),(l()(),t.qb(54,0,null,null,1,"span",[["class","font-sans font-semibold"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Foi para o estado:"])),(l()(),t.qb(56,0,[[8,0],["nextState",1]],null,0,"input",[["class","py-3 px-4 mt-1 w-full border rounded-lg hover:rounded-lg"],["placeholder","0, 1, 2, 3..."],["type","text"]],null,null,null,null,null)),(l()(),t.qb(57,0,null,2,4,"div",[["footer",""]],null,null,null,null,null)),(l()(),t.qb(58,0,null,null,1,"button",[["class","py-2 mt-2 px-6 bg-blue-500 text-white rounded-lg focus:outline-none mr-4 hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addState()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Adicionar"])),(l()(),t.qb(60,0,null,null,1,"button",[["class","py-2 mt-2 px-6 bg-green-500 text-white rounded-lg focus:outline-none hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.saveStates()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Concluir"])),(l()(),t.qb(62,0,null,null,12,"modal",[],null,null,null,h,g)),t.pb(63,49152,[[2,4],["startElementsModal",4]],0,p,[],null,null),(l()(),t.qb(64,0,null,0,2,"div",[["header",""]],null,null,null,null,null)),(l()(),t.qb(65,0,null,null,1,"h3",[["class","font-bold font-sans"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Elementos Iniciais"])),(l()(),t.qb(67,0,null,1,4,"div",[["body",""]],null,null,null,null,null)),(l()(),t.qb(68,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.qb(69,0,null,null,1,"span",[["class","font-sans font-semibold mb-4"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Elementos (Somente *):"])),(l()(),t.qb(71,0,[[9,0],["startElements",1]],null,0,"input",[["class","py-3 px-4 w-full border rounded-lg hover:rounded-lg mt-1"],["placeholder","***_****..."],["type","text"]],null,null,null,null,null)),(l()(),t.qb(72,0,null,2,2,"div",[["footer",""]],null,null,null,null,null)),(l()(),t.qb(73,0,null,null,1,"button",[["class","py-2 mt-2 px-6 bg-green-500 text-white rounded-lg focus:outline-none hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.saveStartElements()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Concluir"])),(l()(),t.qb(75,0,null,null,12,"modal",[],null,null,null,h,g)),t.pb(76,49152,[[3,4],["delayValueModal",4]],0,p,[],null,null),(l()(),t.qb(77,0,null,0,2,"div",[["header",""]],null,null,null,null,null)),(l()(),t.qb(78,0,null,null,1,"h3",[["class","font-bold font-sans"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Velocidade de execu\xe7\xe3o"])),(l()(),t.qb(80,0,null,1,4,"div",[["body",""]],null,null,null,null,null)),(l()(),t.qb(81,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.qb(82,0,null,null,1,"span",[["class","font-sans font-semibold mb-4"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Delay (ms):"])),(l()(),t.qb(84,0,[[10,0],["delayValue",1]],null,0,"input",[["class","py-3 px-4 w-full border rounded-lg hover:rounded-lg mt-1"],["placeholder","500"],["type","text"]],null,null,null,null,null)),(l()(),t.qb(85,0,null,2,2,"div",[["footer",""]],null,null,null,null,null)),(l()(),t.qb(86,0,null,null,1,"button",[["class","py-2 mt-2 px-6 bg-green-500 text-white rounded-lg focus:outline-none hover:opacity-75"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.saveDelayValue()&&t),t}),null,null)),(l()(),t.Fb(-1,null,["Concluir"]))],(function(l,n){l(n,13,0,n.component.data)}),null)}function S(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,1,"turing-config",[],null,null,null,x,y)),t.pb(1,49152,null,0,s,[v.j],null,null)],null,null)}var q=t.mb("turing-config",s,S,{},{},[]),w=e("iInd");class E{}class F{}e.d(n,"ConfigModuleNgFactory",(function(){return k}));var k=t.nb(i,[],(function(l){return t.yb([t.zb(512,t.j,t.Y,[[8,[r.a,q]],[3,t.j],t.w]),t.zb(4608,c.k,c.j,[t.t,[2,c.q]]),t.zb(1073742336,c.b,c.b,[]),t.zb(1073742336,w.m,w.m,[[2,w.r],[2,w.k]]),t.zb(1073742336,E,E,[]),t.zb(1073742336,F,F,[]),t.zb(1073742336,i,i,[]),t.zb(1024,w.i,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);