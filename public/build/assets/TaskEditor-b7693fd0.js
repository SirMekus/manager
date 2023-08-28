import{q as m,c as x}from"./helper-82031ce3.js";import{_ as D,r as C,l as $,D as b,o as _,m as T,w as V,h as f,b as t,e as y,d as E,p as n,E as p,c as M,v as N,i as U,G as w,g as B}from"./app-c1148ba7.js";import{g}from"./index-9d0725f1.js";const L={setup(){const e=C({loading:!1,result:null,form:{id:m("id")??null,title:null,description:null,status:null,due_date:null}});if(m("id")){const{loading:a,onResult:u}=$(g`
            query getTasks {
                tasks(id: ${m("id")}) {
                    id
                    title
                    description
                    due_date
                    status
                }
            }
           `);e.loading=a,u(S=>{const d=S.data.tasks[0];e.form.id=d.id,e.form.title=d.title,e.form.description=d.description,e.form.due_date=d.due_date,e.form.status=d.status=="COMPLETED"?0:d.status=="IN_PROGRESS"?1:2})}const{mutate:s,loading:v,onDone:o}=b(g`
                mutation createTask ($title: String!, $due_date: String!, $description: String!) {
                    createTask (title: $title, due_date: $due_date, description: $description) {
                        id
                        title
                    }
                }
                `),{mutate:h,loading:k,onDone:l}=b(g`
                mutation updateTask ($id: Int!, $title: String, $status: Int, $due_date: String, $description: String) {
                    updateTask (id: $id, title: $title, status: $status, due_date: $due_date, description: $description) {
                        id
                        title
                    }
                }
                `);function r(){e.loading=v,s(e.form),o(a=>{w("Task was successfully created.");for(const u in e.form)e.form[u]=null})}function c(){e.loading=k,e.form.id=Number(e.form.id),h(e.form),l(a=>{w("Task was successfully updated.")})}function i(){e.form.id?c():r()}return{state:e,capitalLetters:x,runAm:i}}},q={class:"row justify-content-center"},I={class:"col-md-12"},A={class:"card overflow-scroll pb-4",style:{"border-radius":"30px"}},G={class:"card-body"},O={id:"tasker"},P={class:"pt-4"},R=t("div",null,[t("h1",{class:"text-center fw-bold"},"Task Editor")],-1),H={class:"row mt-3"},j={class:"col-12"},F=t("label",null,[B("Title"),t("span",{style:{color:"red"}},"*")],-1),Q={key:0,class:"row mt-3"},z={class:"col-12"},J=t("label",null,"Status",-1),K=t("option",{value:""},"Select Status",-1),W=t("option",{value:"0"},"Completed",-1),X=t("option",{value:"1"},"In Progress",-1),Y=t("option",{value:"2"},"Not Completed",-1),Z=[K,W,X,Y],tt={class:"row mt-3"},et={class:"col-12"},ot=t("label",null,"Due Date",-1),st={class:"row mt-3"},at={class:"col-12"},dt=t("label",null,"Description",-1),it={class:"form-group mt-3"},nt=["disabled","value"];function lt(e,s,v,o,h,k){const l=f("Loading"),r=f("BodyHeader"),c=f("DashboardMenu");return _(),T(c,null,{default:V(()=>{var i;return[t("div",q,[t("div",I,[t("div",A,[o.state.loading?(_(),T(l,{key:0})):y("",!0),t("div",G,[E(r,{heading:`${(i=o.state.result)!=null&&i.id?"Update":"Create"} Task`},null,8,["heading"]),t("form",O,[t("div",P,[R,t("div",H,[t("div",j,[F,n(t("input",{type:"text",class:"form-control form-control-lg borderless-input",autocomplete:"","onUpdate:modelValue":s[0]||(s[0]=a=>o.state.form.title=a),name:"firstname"},null,512),[[p,o.state.form.title]])])]),o.state.form.id?(_(),M("div",Q,[t("div",z,[J,n(t("select",{class:"form-control form-control-lg",name:"gender","onUpdate:modelValue":s[1]||(s[1]=a=>o.state.form.status=a)},Z,512),[[N,o.state.form.status]])])])):y("",!0),t("div",tt,[t("div",et,[ot,n(t("input",{type:"date",required:"",class:"form-control form-control-lg borderless-input","onUpdate:modelValue":s[2]||(s[2]=a=>o.state.form.due_date=a),name:"due_date"},null,512),[[p,o.state.form.due_date]])])]),t("div",st,[t("div",at,[dt,n(t("textarea",{"onUpdate:modelValue":s[3]||(s[3]=a=>o.state.form.description=a),name:"description",placeholder:"Give a description of this task",class:"form-control form-control-lg",style:{"border-radius":"10px"},col:"2",rows:"2"},`\r
                                        `,512),[[p,o.state.form.description]])])]),t("div",it,[t("input",{class:"btn btn-home btn-lg w-100",type:"submit",disabled:o.state.loading,value:o.state.form.id?"Update Task":"Create Task",onClick:s[4]||(s[4]=U(a=>o.runAm(),["prevent"]))},null,8,nt)])])])])])])])]}),_:1})}const mt=D(L,[["render",lt]]);export{mt as default};
