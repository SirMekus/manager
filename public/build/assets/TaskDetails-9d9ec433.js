import{q as h,c as D}from"./helper-82031ce3.js";import{_ as v,r as w,l as M,D as x,G as T,o as c,m as f,w as p,j as q,h as d,b as t,d as y,e as k,c as B,g as e,t as o}from"./app-c1148ba7.js";import{g as b}from"./index-9d0725f1.js";import{f as L}from"./index-37ddc8a9.js";const N={setup(){const r=q(),a=w({loading:!1,id:h("id")}),{result:i,loading:s}=M(b`
            query getTasks {
                tasks(id: ${h("id")}) {
                    id
                    title
                    description
                    due_date
                    status
                    created_at
                }
            }
        `);a.loading=s;const{mutate:l,loading:_,onDone:n}=x(b`
                mutation deleteTask ($id: Int!) {
                    deleteTask (id: $id) {
                        id
                        title
                    }
                }
                `);return document.addEventListener("delete",u=>{a.loading=_,l({id:Number(a.id)}),n(m=>{T("Deleted successfully."),setTimeout(()=>{r.push({name:"tasks",replace:!0})},2e3)})}),{state:a,capitalLetters:D,format:L,result:i}}},j={class:"row justify-content-center"},C={class:"col-md-12"},V={class:"card overflow-scroll"},E={class:"card-body"},S={key:1,class:"card"},A={class:"card-body"},H={class:"d-flex justify-content-center"},G={class:"flex-grow-1 ms-5"},I={class:"mb-1"},Q=t("span",{class:"fw-bold"},"Title:",-1),R={class:"mb-1"},z=t("span",{class:"fw-bold"},"Description:",-1),F={class:"mb-1"},J=t("span",{class:"fw-bold"},"Status:",-1),K={class:"mb-1"},O=t("span",{class:"fw-bold"},"Date Created:",-1),P={class:"mb-1"},U=t("span",{class:"fw-bold"},"Due Date:",-1),W={class:"card-footer"},X={class:"btn-group d-flex justify-content-center"},Y=t("a",{href:"#",class:"pre-run btn btn-dark btn-sm","data-caption":"Are you sure you want to delete this task?","data-classname":"run-get-request","data-bc":"delete"},"Delete",-1);function Z(r,a,i,s,l,_){const n=d("BodyHeader"),u=d("Loading"),m=d("router-link"),g=d("DashboardMenu");return c(),f(g,null,{default:p(()=>[t("div",j,[t("div",C,[t("div",V,[t("div",E,[y(n,{heading:"Details"}),s.state.loading?(c(),f(u,{key:0})):k("",!0),s.result&&s.result.tasks.length>=1?(c(),B("div",S,[t("div",A,[t("div",H,[t("div",G,[t("p",I,[Q,e(" "+o(s.capitalLetters(s.result.tasks[0].title)),1)]),t("p",R,[z,e(" "+o(s.result.tasks[0].description),1)]),t("p",F,[J,e(" "+o(s.result.tasks[0].status),1)]),t("p",K,[O,e(" "+o(s.format(new Date(s.result.tasks[0].created_at),"do,MMMM yyyy @ p")),1)]),t("p",P,[U,e(" "+o(s.format(new Date(s.result.tasks[0].due_date),"do,MMMM yyyy")),1)])])])]),t("div",W,[t("div",X,[Y,y(m,{class:"text-decoration-none bg-primary btn-sm btn text-white ms-3",to:{name:"task_editor",query:{id:s.result.tasks[0].id}}},{default:p(()=>[e(" Edit ")]),_:1},8,["to"])])])])):k("",!0)])])])])]),_:1})}const at=v(N,[["render",Z]]);export{at as default};
