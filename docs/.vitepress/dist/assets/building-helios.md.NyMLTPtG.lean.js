import{_ as n,e as o,f as r,g as e,N as a,u as l,c as s,o as c,m as d}from"./chunks/framework.CE9GIcbU.js";const u="/case-study/assets/eventtable.2ng75EEu.png",h="/case-study/assets/rowbased.CzBh14Lk.png",p="/case-study/assets/columnbased.BF7ZPucB.png",m="/case-study/assets/node_cluster_opt.CWSwPPFP.png",g="/case-study/assets/lambdacoldstarts.xrsyvsw9.png",Q=JSON.parse('{"title":"Building Helios: Design Choices","description":"","frontmatter":{},"headers":[],"relativePath":"building-helios.md","filePath":"building-helios.md"}'),f={name:"building-helios.md"},b=s("",4),y={class:"icon-list"},_=e("span",null,"High write throughput: The database must be capable of handling continuous writes of large volumes of streaming data, allowing Helios to ingest data efficiently without bottlenecks.",-1),w=e("span",null,"Low-latency query performance: Aggregating large datasets for analytical queries inherently challenges performance, and real-time analytics demands rapid insights for timely decision-making. Specifically, the database should be able to execute aggregation queries spanning multiple columns across tens of millions of rows in under a few seconds.",-1),v=e("span",null,"Extensive SQL support: Given SQL's popularity and reliability as a querying language, we prioritized databases that support a wide range of SQL features. This ensures users can leverage complex joins, filters, and aggregations, enhancing the flexibility and depth of their data analysis.",-1),k=s("",19),C={class:"icon-list"},q=e("span",null,"High write throughput",-1),x=e("span",null,"Low-latency query performance",-1),T=e("span",null,"Comprehensive Documentation",-1),S=e("span",null,"Open Source",-1),P=s("",8),A={class:"icon-list"},H=e("span",null,"Performance optimization: ClickHouse can efficiently handle massive datasets on a single server",-1),I=e("span",null,"Simplicity: Reduced complexity in deployment and management compared to a clustered setup.",-1),B=e("span",null,"Cost-effectiveness: Maximizing resource utilization before scaling horizontally.",-1),D=e("span",null,"Scalability: Ensuring our architecture can still accommodate future growth when necessary.",-1),L=s("",8);function z(E,N,W,V,R,O){const t=o("Icon"),i=o("TippyWrapper");return c(),r("div",null,[b,e("div",y,[e("p",null,[a(t,{name:"ArrowTrendingUpIcon"}),_]),e("p",null,[a(t,{name:"BoltIcon"}),w]),e("p",null,[a(t,{name:"CodeBracketIcon"}),v])]),k,e("div",C,[e("p",null,[a(t,{name:"ArrowTrendingUpIcon"}),q]),e("p",null,[a(t,{name:"BoltIcon"}),x]),e("p",null,[a(t,{name:"CodeBracketIcon"}),a(i,{content:"Provides the most support for ANSI SQL compared to the other columnar databases we evaluated such as Apache Druid and Apache Pinot, allowing users to leverage familiar query syntax and features"},{default:l(()=>[d("SQL Support")]),_:1})]),e("p",null,[a(t,{name:"DocumentTextIcon"}),T]),e("p",null,[a(t,{name:"LockOpenIcon"}),S])]),P,e("div",A,[e("p",null,[a(t,{name:"CpuChipIcon"}),H]),e("p",null,[a(t,{name:"CircleStackIcon"}),I]),e("p",null,[a(t,{name:"CurrencyDollarIcon"}),B]),e("p",null,[a(t,{name:"ArrowsPointingOutIcon"}),D])]),L])}const U=n(f,[["render",z]]);export{Q as __pageData,U as default};
