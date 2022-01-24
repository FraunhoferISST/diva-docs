(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[933],{7232:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>n});const n={key:"v-d2d8570e",path:"/development/architecture/keycloak.html",title:"Keycloak",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Deployment",slug:"deployment",children:[]},{level:2,title:"Realm",slug:"realm",children:[]},{level:2,title:"Authentication",slug:"authentication",children:[]},{level:2,title:"Users management",slug:"users-management",children:[]}],filePathRelative:"development/architecture/keycloak.md",git:{contributors:[]}}},9345:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>R});var n=a(6252);const o=(0,n.Wm)("h1",{id:"keycloak"},[(0,n.Wm)("a",{class:"header-anchor",href:"#keycloak"},"#"),(0,n.Uk)(" Keycloak")],-1),r={href:"https://www.keycloak.org/",target:"_blank",rel:"noopener noreferrer"},l=(0,n.Uk)("Keycloak"),i=(0,n.Uk)(" is a popular Open Source identity and access management software. In DIVA v2.2 we integrated Keycloak to 1) reuse enterprise ready identity and user account management that Keycloak provides out of the box and 2) to open for the companies the possibility to configure more granular the access and authentication flow in DIVA."),s=(0,n.Wm)("h2",{id:"deployment"},[(0,n.Wm)("a",{class:"header-anchor",href:"#deployment"},"#"),(0,n.Uk)(" Deployment")],-1),c=(0,n.Uk)("DIVA is shipped with already "),d={href:"https://github.com/FraunhoferISST/diva/blob/main/core/keycloak/default-realm.json",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("preconfigured"),u=(0,n.Uk)(" Keycloak 15 instance that can be started up directly with the other components. You will find more details in the "),m=(0,n.Uk)("Docker guide"),k=(0,n.Uk)(". The provided configuration has a realm with all necessary settings to accept Web-Client connections and authorize users."),p=(0,n.Wm)("h2",{id:"realm"},[(0,n.Wm)("a",{class:"header-anchor",href:"#realm"},"#"),(0,n.Uk)(" Realm")],-1),f=(0,n.Uk)("The pre-configured realm is automatically loaded into DIVA Keycloak at startup and has a client for DIVA Web app. The default names for the realm and client are "),g=(0,n.Wm)("code",null,"diva-kc-realm",-1),y=(0,n.Uk)(" and "),v=(0,n.Wm)("code",null,"diva-kc-client",-1),W=(0,n.Uk)(". This names are not mandatory and can be changed. You have only to reflect the name changes in the "),w=(0,n.Uk)("Web client configuration"),b=(0,n.Uk)(". For the local development environment all values can be used as provided in default configuration."),U=(0,n.Wm)("h2",{id:"authentication"},[(0,n.Wm)("a",{class:"header-anchor",href:"#authentication"},"#"),(0,n.Uk)(" Authentication")],-1),A=(0,n.Wm)("p",null,[(0,n.Uk)("The Kong API Gateway uses from Keycloak issued JWT tokens to authenticate users for further access to the DIVA API. By default, we use tokens with RS256 signature algorithm with default expiration policies. The Web-Client checks the token validity every "),(0,n.Wm)("strong",null,"60"),(0,n.Uk)(" seconds.")],-1),I={class:"custom-container warning"},D=(0,n.Wm)("p",{class:"custom-container-title"},"WARNING",-1),K=(0,n.Uk)("If you change token settings in Keycloak, probably the adjustment in the API Gateway will be required. For more details refer to "),V=(0,n.Uk)("Kong configuration"),T=(0,n.Uk)("."),_=(0,n.uE)('<h2 id="users-management"><a class="header-anchor" href="#users-management">#</a> Users management</h2><p>DIVA uses Keycloak <strong>only</strong> as identity management and log in service. That means all users date except <code>email</code> and <code>password</code> are still managed in DIVA. DIVA users have additional fields like <code>username</code>, <code>jobTitle</code>, <code>company</code> etc. and a profile image. All this data can be edited only in DIVA Web-client and the changes does not affect Keycloak users state.</p><p>The users from Keycloak are transferred to DIVA at login or register. Each time someone logs in or registers via Keycloak, the user data is updated in DIVA or a new user is created, if it does not yet exist in DIVA. This means that email and password can be updated in Keycloak, but only email and password.</p><div class="custom-container warning"><p class="custom-container-title">Users attributes</p><p>Please note that in DIVA we only import the <strong>email</strong> of the keycloak user. The changes of the other user attributes in DIVA do not affect Keycloak and vice versa.</p></div>',4),R={render:function(e,t){const a=(0,n.up)("OutboundLink"),R=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[o,(0,n.Wm)("p",null,[(0,n.Wm)("a",r,[l,(0,n.Wm)(a)]),i]),s,(0,n.Wm)("p",null,[c,(0,n.Wm)("a",d,[h,(0,n.Wm)(a)]),u,(0,n.Wm)(R,{to:"/development/deployment/docker.html"},{default:(0,n.w5)((()=>[m])),_:1}),k]),p,(0,n.Wm)("p",null,[f,g,y,v,W,(0,n.Wm)(R,{to:"/development/architecture/web-client.html#configuration"},{default:(0,n.w5)((()=>[w])),_:1}),b]),U,A,(0,n.Wm)("div",I,[D,(0,n.Wm)("p",null,[K,(0,n.Wm)(R,{to:"/development/architecture/gateway.html"},{default:(0,n.w5)((()=>[V])),_:1}),T])]),_],64)}}}}]);