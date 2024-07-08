import{a as I}from"./chunk-HF45PNWV.js";import{h as Z,i as $,j as ue}from"./chunk-RMVJ52OZ.js";import{$a as Q,D as C,E as O,Fa as se,Ga as te,Ia as ie,J as d,Ja as ae,K as c,O as R,Oa as pe,Pa as D,Q as p,Qa as q,R as _,Sa as le,Ua as me,Va as A,W as h,Y as u,ab as G,bb as k,cb as P,da as r,db as z,ea as o,eb as W,fa as w,fb as H,ga as S,gb as J,hb as K,ib as X,ja as f,jb as Y,ka as F,kb as de,lb as ce,mb as ge,na as y,ob as j,pa as B,qa as L,qb as ne,ra as U,sa as re,ta as l,ua as V,va as M,wa as E,xa as v,y as N,ya as b}from"./chunk-6UFINA5C.js";var fe=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["loading-spinner"]],decls:2,vars:0,consts:[[1,"overlay"],[1,"spinner"]],template:function(e,t){e&1&&(r(0,"div",0),w(1,"div",1),o())},styles:[".overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:9999}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(255,255,255,.3);border-radius:50%;border-top:4px solid #ffffff;width:40px;height:40px;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]});let s=n;return s})();function Ve(s,n){if(s&1&&(r(0,"option",16),l(1),o()),s&2){let a=n.$implicit;u("ngValue",a.name),p(),V(a.name)}}var ee=(()=>{let n=class n{constructor(i,e){this.expenseService=i,this.router=e,this.formType="Create",this.expense={amount:0,description:"",category:{id:0,name:""},date:new Date().toISOString().split("T")[0]},this.categories=[],this.afterExpenseCreateEvent=new R}predictCategory(i){this.expenseService.predictCategory(i).subscribe(e=>{e.category!="Unknown"&&(this.predictedCategory=e.category,this.expense.amount=e.amount)})}createExpense(){if(this.predictedCategory){let i=this.categories.find(e=>e.name===this.predictedCategory);i&&(this.expense.category=i)}console.log("expense is ",this.expense),this.expenseService.createExpense(this.expense).subscribe(i=>{console.log("Expense created successfully:",i),this.expense={amount:0,description:"",category:{id:0,name:""},date:new Date().toISOString().split("T")[0]},this.predictedCategory="",this.afterExpenseCreateEvent.emit()})}updateExpense(){this.expenseService.updateExpense(this.expense).subscribe(i=>{console.log("Expense updated successfully:",i),this.router.navigate(["/expenses"])},i=>{console.log("something happend ",i)})}onFormSubmit(){this.formType==="Create"?this.createExpense():this.formType==="Update"&&this.updateExpense()}};n.\u0275fac=function(e){return new(e||n)(_(I),_(j))},n.\u0275cmp=C({type:n,selectors:[["expense-form"]],inputs:{formType:"formType",expense:"expense",categories:"categories"},outputs:{afterExpenseCreateEvent:"afterExpenseCreateEvent"},decls:25,vars:7,consts:[["ExpenseForm","ngForm"],[1,"card","p-4","shadow-lg","bg-light","rounded"],[1,"card-title","text-center","mb-4","text-primary"],[1,"form-container",3,"ngSubmit"],[1,"mb-3"],["for","description",1,"form-label"],["type","text","id","description","name","description","required","",1,"form-control",3,"ngModelChange","input","ngModel"],["for","amount",1,"form-label"],["type","number","id","amount","name","amount","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","category",1,"form-label"],["id","category","name","category","required","",1,"form-select",3,"ngModelChange","ngModel"],["class","dropdown-item",3,"ngValue",4,"ngFor","ngForOf"],["for","date",1,"form-label"],["type","date","id","date","name","date","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","btn-primary"],[1,"dropdown-item",3,"ngValue"]],template:function(e,t){if(e&1){let m=S();r(0,"div",1)(1,"h2",2),l(2),o(),r(3,"form",3,0),f("ngSubmit",function(){return d(m),c(t.onFormSubmit())}),r(5,"div",4)(6,"label",5),l(7,"Description:"),o(),r(8,"input",6),b("ngModelChange",function(g){return d(m),v(t.expense.description,g)||(t.expense.description=g),c(g)}),f("input",function(){return d(m),c(t.predictCategory(t.expense.description))}),o()(),r(9,"div",4)(10,"label",7),l(11,"Amount (INR):"),o(),r(12,"input",8),b("ngModelChange",function(g){return d(m),v(t.expense.amount,g)||(t.expense.amount=g),c(g)}),o()(),r(13,"div",4)(14,"label",9),l(15,"Category:"),o(),r(16,"select",10),b("ngModelChange",function(g){return d(m),v(t.predictedCategory,g)||(t.predictedCategory=g),c(g)}),h(17,Ve,2,2,"option",11),o()(),r(18,"div",4)(19,"label",12),l(20,"Date:"),o(),r(21,"input",13),b("ngModelChange",function(g){return d(m),v(t.expense.date,g)||(t.expense.date=g),c(g)}),o()(),r(22,"div",14)(23,"button",15),l(24),o()()()()}e&2&&(p(2),M("",t.formType," Expense"),p(6),E("ngModel",t.expense.description),p(4),E("ngModel",t.expense.amount),p(4),E("ngModel",t.predictedCategory),p(),u("ngForOf",t.categories),p(4),E("ngModel",t.expense.date),p(3),M("",t.formType," Expense"))},dependencies:[D,W,K,X,Q,H,J,G,k,Y,z,P]});let s=n;return s})();var Ie=["ExpenseForm"];function Me(s,n){s&1&&(r(0,"div",19),l(1,"Description is required."),o())}function Te(s,n){s&1&&(r(0,"div",19),l(1,"Amount is required."),o())}function Ne(s,n){if(s&1&&(r(0,"option",20),l(1),o()),s&2){let a=n.$implicit;u("ngValue",a.id),p(),V(a.name)}}function Oe(s,n){s&1&&(r(0,"div",19),l(1,"Category is required."),o())}function De(s,n){s&1&&(r(0,"div",19),l(1,"Date is required."),o())}function ke(s,n){if(s&1){let a=S();r(0,"div",7)(1,"h3"),l(2),o(),r(3,"div",8)(4,"label",9),l(5,"Description:"),o(),r(6,"input",10),b("ngModelChange",function(e){let t=d(a).$implicit;return v(t.description,e)||(t.description=e),c(e)}),o(),h(7,Me,2,0,"div",11),o(),r(8,"div",8)(9,"label",9),l(10,"Amount (INR):"),o(),r(11,"input",12),b("ngModelChange",function(e){let t=d(a).$implicit;return v(t.amount,e)||(t.amount=e),c(e)}),o(),h(12,Te,2,0,"div",11),o(),r(13,"div",8)(14,"label",9),l(15,"Category:"),o(),r(16,"select",13),b("ngModelChange",function(e){let t=d(a).$implicit;return v(t.category.id,e)||(t.category.id=e),c(e)}),h(17,Ne,2,2,"option",14),o(),h(18,Oe,2,0,"div",11),o(),r(19,"div",8)(20,"label",9),l(21,"Date:"),o(),r(22,"input",15),b("ngModelChange",function(e){let t=d(a).$implicit;return v(t.date,e)||(t.date=e),c(e)}),o(),h(23,De,2,0,"div",11),o(),r(24,"div",16)(25,"button",17),f("click",function(){let e=d(a).index,t=F();return c(t.deleteExpense(e))}),w(26,"i",18),o()()()}if(s&2){let a=n.$implicit,i=n.index,e=F(),t=re(4);p(2),M(" Expense - ",i+1,""),p(2),y("for","description-",a.identifier,""),p(2),y("id","description-",a.identifier,""),y("name","description-",a.identifier,""),E("ngModel",a.description),p(),u("ngIf",t.submitted&&t.controls["description-"+a.identifier].invalid),p(2),y("for","amount-",a.identifier,""),p(2),y("id","amount-",a.identifier,""),y("name","amount-",a.identifier,""),E("ngModel",a.amount),p(),u("ngIf",t.submitted&&t.controls["amount-"+a.identifier].invalid),p(2),y("for","category-",a.identifier,""),p(2),y("id","category-",a.identifier,""),y("name","category-",a.identifier,""),E("ngModel",a.category.id),p(),u("ngForOf",e.categories),p(),u("ngIf",t.submitted&&t.controls["category-"+a.identifier].invalid),p(2),y("for","date-",a.identifier,""),p(2),y("id","date-",a.identifier,""),y("name","date-",a.identifier,""),E("ngModel",a.date),p(),u("ngIf",t.submitted&&t.controls["date-"+a.identifier].invalid)}}var Ee=(()=>{let n=class n{constructor(i,e){this.modalService=i,this.expenseService=e,this.categories=[],this.closeModal=new R,this.afterExpenseCreateEvent=new R}onFormSubmit(){if(!this.ExpenseForm.valid){alert("Please fix the error in form field errors");return}console.log("Updated expenses",this.imported_expenses);var i=[];this.imported_expenses.forEach(e=>{e.category=this.categories.find(t=>t.id===e.category.id),this.expenseService.createExpense(e).subscribe(t=>{console.log(t)},t=>{i.push(e),console.error(t)})}),console.log("Failed expense creation ",i),this.closeModal.emit(),this.afterExpenseCreateEvent.emit()}trackByFn(i,e){return e.identifier}deleteExpense(i){this.imported_expenses.splice(i,1)}open(i){this.modalService.open(i,{ariaLabelledBy:"modal-basic-title",size:"xl"})}ngOnInit(){console.log("Imported expenses",this.imported_expenses)}};n.\u0275fac=function(e){return new(e||n)(_(Z),_(I))},n.\u0275cmp=C({type:n,selectors:[["expense-import-form"]],viewQuery:function(e,t){if(e&1&&B(Ie,5),e&2){let m;L(m=U())&&(t.ExpenseForm=m.first)}},inputs:{imported_expenses:"imported_expenses",categories:"categories"},outputs:{closeModal:"closeModal",afterExpenseCreateEvent:"afterExpenseCreateEvent"},decls:9,vars:2,consts:[["ExpenseForm","ngForm"],[1,"card","p-4","shadow-lg","bg-light","rounded"],[1,"card-title","text-center","mb-4","text-primary"],[1,"form-container",3,"ngSubmit"],["class","row mb-3",4,"ngFor","ngForOf","ngForTrackBy"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","btn-primary"],[1,"row","mb-3"],[1,"col"],[1,"form-label",3,"for"],["type","text","required","",1,"form-control",3,"ngModelChange","id","name","ngModel"],["class","text-danger",4,"ngIf"],["type","number","required","",1,"form-control",3,"ngModelChange","id","name","ngModel"],["required","",1,"form-select",3,"ngModelChange","id","name","ngModel"],[3,"ngValue",4,"ngFor","ngForOf"],["type","date","required","",1,"form-control",3,"ngModelChange","id","name","ngModel"],[1,"col-1"],["type","button",1,"btn","btn-danger",2,"margin-top","1.75em",3,"click"],[1,"fa","fa-trash"],[1,"text-danger"],[3,"ngValue"]],template:function(e,t){if(e&1){let m=S();r(0,"div",1)(1,"h2",2),l(2,"Import Expense"),o(),r(3,"form",3,0),f("ngSubmit",function(){return d(m),c(t.onFormSubmit())}),h(5,ke,27,34,"div",4),r(6,"div",5)(7,"button",6),l(8,"Submit Expense"),o()()()()}e&2&&(p(5),u("ngForOf",t.imported_expenses)("ngForTrackBy",t.trackByFn))},dependencies:[D,q,W,K,X,Q,H,J,G,k,Y,z,P]});let s=n;return s})();var We=["content"],je=(s,n,a,i,e,t,m,x,g)=>({badge:!0,"category-badge":!0,"food-badge":s,"grocery-badge":n,"utilities-badge":a,"clothes-badge":i,"commute-badge":e,"health-badge":t,"entertainment-badge":m,"rent-badge":x,"gadgets-badge":g});function Re(s,n){s&1&&w(0,"loading-spinner")}function Be(s,n){if(s&1){let a=S();r(0,"tr",26)(1,"td",27),l(2),o(),r(3,"td"),l(4),te(5,"currency"),o(),r(6,"td",28)(7,"span",29),l(8),o()(),r(9,"td"),l(10),te(11,"date"),o(),r(12,"td",28)(13,"button",30),f("click",function(){let e=d(a).$implicit,t=F();return c(t.deleteExpense(e.id))}),w(14,"i",31),o(),r(15,"button",32),f("click",function(){let e=d(a).$implicit,t=F();return c(t.updateExpense(e.id))}),w(16,"i",33),o()()()}if(s&2){let a=n.$implicit;p(2),V(a.description),p(2),V(ie(5,5,a.amount,"INR")),p(3),u("ngClass",se(11,je,[a.category.name==="Food",a.category.name==="Grocery",a.category.name==="Utilities",a.category.name==="Clothes",a.category.name==="Commute",a.category.name==="Health",a.category.name==="Entertainment",a.category.name==="Rent",a.category.name==="Gadgets"])),p(),M(" ",a.category.name," "),p(2),V(ie(11,8,a.date,"longDate"))}}function Le(s,n){if(s&1){let a=S();r(0,"div",34)(1,"button",35),f("click",function(){let e=d(a).$implicit;return c(e.dismiss("Cross click"))}),r(2,"span",36),l(3,"\xD7"),o()()(),r(4,"div",37)(5,"expense-import-form",38),f("closeModal",function(){let e=d(a).$implicit;return c(e.close())})("afterExpenseCreateEvent",function(){d(a);let e=F();return c(e.fetchExpenses())}),o()()}if(s&2){let a=F();p(5),u("imported_expenses",a.imported_expenses)("categories",a.categories)}}var ve=(()=>{let n=class n{constructor(i,e,t){this.expenseService=i,this.router=e,this.modalService=t,this.expenses=[],this.currentPage=1,this.noOfExpenses=0,this.categories=[],this.sortBy="",this.sortDirection="",this.selectedFile=null,this.modalRef=null,this.loading=!1,this.imported_expenses=[]}ngOnInit(){this.fetchExpenses(),this.fetchCategories()}fetchExpenses(){this.expenseService.getExpenses(this.currentPage).subscribe(i=>{console.log("Response from paginated ",i),this.expenses=i.results,this.noOfExpenses=i.count})}loadPageData(){this.fetchExpenses()}deleteExpense(i){confirm("Are you sure you want to delete this expense?")&&this.expenseService.deleteExpense(i).subscribe(()=>{console.log("Expense deleted successfully"),this.fetchExpenses()})}updateExpense(i){this.router.navigate(["/expenses/",i])}fetchCategories(){this.expenseService.getCategories().subscribe(i=>{this.categories=i,console.log("categories ",this.categories)})}ExportExpenses(){console.log("Exporting expenses..."),this.expenseService.ExportExpenses().subscribe(i=>{let e=new Blob([i],{type:"text/csv"}),t=window.URL.createObjectURL(e),m=document.createElement("a");m.href=t,m.download="expenses.csv",document.body.appendChild(m),m.click(),window.URL.revokeObjectURL(t),document.body.removeChild(m)},i=>{console.error("Error exporting expenses:",i)})}ImportExpenses(){console.log("Importing expenses..."),this.expenseService.ExportExpenses().subscribe(i=>{let e=new Blob([i],{type:"text/csv"}),t=window.URL.createObjectURL(e),m=document.createElement("a");m.href=t,m.download="expenses.csv",document.body.appendChild(m),m.click(),window.URL.revokeObjectURL(t),document.body.removeChild(m)},i=>{console.error("Error exporting expenses:",i)})}onFileSelected(i){this.selectedFile=i.target.files[0]}onSubmitUploadFile(){this.selectedFile?(console.log("Selected file:",this.selectedFile),this.loading=!0,this.expenseService.uploadExpense(this.selectedFile).subscribe(i=>{console.log(i),this.imported_expenses=i.transactions,this.modalRef=this.modalService.open(this.content,{ariaLabelledBy:"modal-basic-title",fullscreen:!0,scrollable:!0}),this.selectedFile=null,this.loading=!1},i=>{console.log("Error : ",i)})):console.log("No file selected")}};n.\u0275fac=function(e){return new(e||n)(_(I),_(j),_(Z))},n.\u0275cmp=C({type:n,selectors:[["app-expense-view"]],viewQuery:function(e,t){if(e&1&&B(We,5),e&2){let m;L(m=U())&&(t.content=m.first)}},decls:45,vars:6,consts:[["content",""],[4,"ngIf"],[1,"container-fluid","my-4"],[1,"row"],[1,"col-md-4","mb-4"],[1,"row","mb-4"],["formType","Create",3,"afterExpenseCreateEvent","categories"],[1,"row","m-1"],[1,"card","p-4","shadow-lg","bg-light","rounded"],[1,"card-title","text-center","mb-4","text-primary"],[1,"form-container",3,"ngSubmit"],[1,"form-group"],[1,"mb-3"],["for","file",1,"form-label"],["type","file","id","file",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary"],[1,"col-md-8"],[1,"d-flex","justify-content-end","mb-4"],[1,"btn","btn-success",3,"click"],[1,"table-responsive","mt-4"],[1,"table","table-bordered"],[1,"data-table-header"],["scope","col"],["class","data-table-item",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],[3,"pageChange","collectionSize","page"],[1,"data-table-item"],[2,"word-break","break-word"],[1,"text-center"],[3,"ngClass"],["title","Delete",1,"btn","btn-danger",3,"click"],[1,"fa","fa-trash"],["title","Edit",1,"btn","btn-info","mx-2",3,"click"],[1,"fa","fa-edit"],[1,"modal-header"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"closeModal","afterExpenseCreateEvent","imported_expenses","categories"]],template:function(e,t){if(e&1){let m=S();h(0,Re,1,0,"loading-spinner",1),r(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"expense-form",6),f("afterExpenseCreateEvent",function(){return d(m),c(t.fetchExpenses())}),o()(),r(6,"div",7)(7,"div",8)(8,"h2",9),l(9,"Import Expense"),o(),r(10,"form",10),f("ngSubmit",function(){return d(m),c(t.onSubmitUploadFile())}),r(11,"div",11)(12,"div",12)(13,"label",13),l(14),o(),r(15,"input",14),f("change",function(g){return d(m),c(t.onFileSelected(g))}),o()()(),r(16,"button",15),l(17,"Upload File"),o()()()()(),r(18,"div",16)(19,"div",8)(20,"h2",9),l(21,"Expenses"),o(),r(22,"div",17)(23,"button",18),f("click",function(){return d(m),c(t.ExportExpenses())}),l(24,"Export Expense"),o()(),r(25,"div",19)(26,"table",20)(27,"thead",21)(28,"tr")(29,"th",22),l(30,"Description"),o(),r(31,"th",22),l(32,"Amount"),o(),r(33,"th",22),l(34,"Category"),o(),r(35,"th",22),l(36,"Date"),o(),r(37,"th",22),l(38,"Action"),o()()(),r(39,"tbody"),h(40,Be,17,21,"tr",23),o()(),r(41,"div",24)(42,"ngb-pagination",25),b("pageChange",function(g){return d(m),v(t.currentPage,g)||(t.currentPage=g),c(g)}),f("pageChange",function(){return d(m),c(t.loadPageData())}),o()()()()(),h(43,Le,6,2,"ng-template",null,0,ae),o()()}e&2&&(u("ngIf",t.loading),p(5),u("categories",t.categories),p(9),V(t.selectedFile?t.selectedFile.name:"Choose file..."),p(26),u("ngForOf",t.expenses),p(2),u("collectionSize",t.noOfExpenses),E("page",t.currentPage))},dependencies:[pe,D,q,W,k,P,$,fe,ee,Ee,me,le],styles:["@media (min-width: 1200px){.modal-xl[_ngcontent-%COMP%]{max-width:1140px}}"]});let s=n;return s})();var be=(()=>{let n=class n{constructor(i,e,t){this.route=i,this.expenseService=e,this.router=t,this.predictedCategory=""}ngOnInit(){let i=this.route.snapshot.params.expenseId;this.expenseService.getCategories().subscribe(e=>{this.categories=e}),this.expense=this.expenseService.getExpenseByID(i).subscribe(e=>{console.log("Got expense:",e),this.expense=e},e=>{console.error("Theres some error in getting expense:",e)})}updateExpense(){this.expenseService.updateExpense(this.expense).subscribe(i=>{console.log("Expense updated successfully:",i),this.router.navigate(["/expenses"])},i=>{console.log("something happend ",i)})}};n.\u0275fac=function(e){return new(e||n)(_(ge),_(I),_(j))},n.\u0275cmp=C({type:n,selectors:[["app-expense-update"]],decls:2,vars:2,consts:[[1,"container","mt-5"],["formType","Update",3,"categories","expense"]],template:function(e,t){e&1&&(r(0,"div",0),w(1,"expense-form",1),o()),e&2&&(p(),u("categories",t.categories)("expense",t.expense))},dependencies:[ee]});let s=n;return s})();var Ue=[{path:"",component:ve},{path:":expenseId",component:be}],Ce=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=O({type:n}),n.\u0275inj=N({imports:[ne.forChild(Ue),ne]});let s=n;return s})();var we=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=O({type:n}),n.\u0275inj=N({imports:[A]});let s=n;return s})();var Et=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=O({type:n}),n.\u0275inj=N({imports:[A,de,Ce,$,ue,ce,we]});let s=n;return s})();export{Et as a};
