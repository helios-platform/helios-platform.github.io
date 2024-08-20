import{_ as a}from"./chunks/cli_dropshadow.DhVrK2UB.js";import{_ as i,e as r,f as s,g as e,N as t,m as n,o as l}from"./chunks/framework.CUAWebCk.js";const $=JSON.parse('{"title":"Automating Deployment","description":"","frontmatter":{},"headers":[],"relativePath":"automating-deployment.md","filePath":"automating-deployment.md"}'),c={name:"automating-deployment.md"},d=e("h1",{id:"automating-deployment",tabindex:"-1"},[n("Automating Deployment "),e("a",{class:"header-anchor",href:"#automating-deployment","aria-label":'Permalink to "Automating Deployment"'},"​")],-1),u=e("h2",{id:"command-line-interface",tabindex:"-1"},[n("Command-Line Interface "),e("a",{class:"header-anchor",href:"#command-line-interface","aria-label":'Permalink to "Command-Line Interface"'},"​")],-1),m=e("p",null,"The Helios Command-Line Interface (CLI) streamlines the deployment, configuration and management of Helios infrastructure on AWS.",-1),p=e("p",null,"This interface simplifies what would otherwise be complex AWS operations, allowing users to quickly set up, manage, and tear down their Helios environment without navigating multiple AWS interfaces or writing custom scripts.",-1),h=e("p",null,"How it works:",-1),f={class:"icon-list"},_=e("span",null,"When deploying Helios with the CLI, a user will be prompted for an AWS profile name and an optional ChatGPT API key.",-1),g=e("span",null," Once credentials are provided, the CLI uses the stored AWS credentials in your local AWS environment configuration files to deploy all Helios infrastructure within your AWS account.",-1),w=e("span",null," Under the hood, Helios leverages the AWS Cloud Development Kit (AWS CDK) which we will go into more detail below.",-1),y=e("p",null,[e("img",{src:a,alt:"CLI"})],-1),C=e("h2",{id:"aws-cdk",tabindex:"-1"},[n("AWS CDK "),e("a",{class:"header-anchor",href:"#aws-cdk","aria-label":'Permalink to "AWS CDK"'},"​")],-1),A=e("p",null,"To automate deployment for our users, we evaluated the AWS CDK and Terraform.",-1),b={class:"icon-list"},v=e("span",null,[e("strong",null,"Terraform"),n(": an open source infrastructure as code tool that enables declarative configuration of cloud resources across multiple providers, using its own domain-specific language.")],-1),S=e("span",null,[e("strong",null,"AWS CDK"),n(": an infrastructure as code framework for defining cloud infrastructure, which then compiles into CloudFormation YAML templates. This process combines the flexibility of a programming language with the reliability of declarative deployments, allowing developers to use object-oriented techniques to model their infrastructure.")],-1),W=e("p",null,"Comparing the AWS CDK and Terraform, while we found Terraform easier to use and quicker for initial deployments, however, we ultimately preferred the CDK. In our opinion, it offered us slightly better debugging capabilities and greater control in defining our infrastructure, particularly for complex, interconnected resources.",-1),D=e("p",null,"After careful consideration, we opted for the AWS CDK as our infrastructure-as-code solution.",-1);function I(k,T,x,K,L,H){const o=r("Icon");return l(),s("div",null,[d,u,m,p,h,e("div",f,[e("p",null,[t(o,{name:"CloudIcon"}),_]),e("p",null,[t(o,{name:"KeyIcon"}),g]),e("p",null,[t(o,{name:"CubeTransparentIcon"}),w])]),y,C,A,e("div",b,[e("p",null,[t(o,{name:"terraform-icon"}),v]),e("p",null,[t(o,{name:"aws-icon"}),S])]),W,D])}const q=i(c,[["render",I]]);export{$ as __pageData,q as default};
