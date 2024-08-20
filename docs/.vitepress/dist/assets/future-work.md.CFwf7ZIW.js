import{_ as s,e as r,f as n,g as e,N as a,c as i,m as o,o as l}from"./chunks/framework.CE9GIcbU.js";const T=JSON.parse('{"title":"Future Work","description":"","frontmatter":{},"headers":[],"relativePath":"future-work.md","filePath":"future-work.md"}'),u={name:"future-work.md"},d=i('<h1 id="future-work" tabindex="-1">Future Work <a class="header-anchor" href="#future-work" aria-label="Permalink to &quot;Future Work&quot;">​</a></h1><h2 id="api-endpoints" tabindex="-1">API Endpoints <a class="header-anchor" href="#api-endpoints" aria-label="Permalink to &quot;API Endpoints&quot;">​</a></h2><p>The introduction of API endpoints in Helios would significantly enhance user capabilities by allowing them to expose query results as accessible HTTP endpoints. Users can define those endpoints to accept parameters, execute preset queries, and return results in a standardized format. This would enable seamless integration of Helios data into other applications and services.</p><h3 id="use-cases" tabindex="-1">Use Cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use Cases&quot;">​</a></h3>',4),p={class:"icon-list"},c=e("span",null,[e("strong",null,"Real-time Dashboards"),o(": Endpoints can be integrated with visualization tools like Grafana.")],-1),h=e("span",null,[e("strong",null,"Data Integration"),o(": Other applications can easily incorporate Helios data into their workflows without having to use our console.")],-1),f=i('<h2 id="supporting-materialized-views" tabindex="-1">Supporting Materialized Views <a class="header-anchor" href="#supporting-materialized-views" aria-label="Permalink to &quot;Supporting Materialized Views&quot;">​</a></h2><p>Materialized views allow users to shift the cost of computation from query time to insert time, resulting in faster SELECT queries. Supporting materialized views will help utilize the efficiency and real-time abilities of our ClickHouse database. Explaining ClickHouse’s version of materialized views is best done by ClickHouse themselves:</p><blockquote><p>“A ClickHouse materialized view is a trigger that runs a query on blocks of data as they are inserted into a table. The result of this query is inserted into a second &quot;target&quot; table …</p><p>The principal motivation for materialized views is that the results inserted into the target table represent the results of an aggregation, filtering, or transformation on rows. These results will often be a smaller representation of the original data ….</p><p>[This] ensures query times are faster than if the same computation was performed on the original data, shifting computation (and thus query latency) from query time to insert time.</p><p>Materialized views in ClickHouse are updated in real-time as data flows into the table they are based on, functioning more like continually updating indexes. This is in contrast to other databases where materialized views are typically static snapshots of a query that must be refreshed”</p></blockquote><h2 id="additional-data-sources" tabindex="-1">Additional data sources <a class="header-anchor" href="#additional-data-sources" aria-label="Permalink to &quot;Additional data sources&quot;">​</a></h2><p>Our initial release supports data ingestion solely through Amazon Kinesis. While this decision was strategic, given our limited resources and the synergy with our AWS-hosted infrastructure, we recognize that many companies use other streaming providers.</p><p>Future versions of Helios could expand support for additional streaming platforms. To address this, we&#39;ve outlined an approach to expand our data ingestion capabilities:</p><ol><li><p>Apache Kafka Integration: As the industry leader, Kafka integration is our top priority. We&#39;ll approach this in two stages:</p><ul><li>Amazon MSK Integration: We&#39;ll first support Amazon Managed Service for Apache Kafka, leveraging our existing Lambda function logic</li><li>Direct Kafka Support: Following this, we&#39;ll re-architect our Lambda Connector function for direct Kafka integration. </li></ul></li><li><p>Additional Platforms: After Kafka, we would extend support to other popular streaming platforms, including:</p><ul><li>Google Pub/Sub</li><li>Redpanda</li><li>Confluent <em>(a popular Kafka managed service)</em></li></ul></li></ol><p>This expansion will require a number of changes to our current implementation. Our existing serverless function, which ingests data from Kinesis and inserts it into ClickHouse DB, relies on AWS Lambda Triggers.</p><p>By broadening our data source support, Helios will be accessible to a wider range of companies, regardless of their preferred streaming platform.</p>',9);function m(g,_,w,b,k,v){const t=r("Icon");return l(),n("div",null,[d,e("div",p,[e("p",null,[a(t,{name:"PresentationChartLineIcon"}),c]),e("p",null,[a(t,{name:"PuzzlePieceIcon"}),h])]),f])}const q=s(u,[["render",m]]);export{T as __pageData,q as default};
