import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as s}from"./app.d57c20c4.js";const a={},e=s(`<h1 id="lincms\u5982\u4F55\u5207\u6362\u6210sql-server" tabindex="-1"><a class="header-anchor" href="#lincms\u5982\u4F55\u5207\u6362\u6210sql-server" aria-hidden="true">#</a> LinCms\u5982\u4F55\u5207\u6362\u6210SQL server</h1><p>\u9700\u8981\u4FEE\u6539LinCms.Web\u4E2D\u7684appsetting.json\u914D\u7F6E</p><h3 id="\u6570\u636E\u5E93\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u914D\u7F6E" aria-hidden="true">#</a> \u6570\u636E\u5E93\u914D\u7F6E</h3><p>DefaultDB\uFF1A\u6539\u62101 SqlServer\uFF1A\u6539\u6210\u81EA\u5DF1\u7684\u6570\u636E\u5E93\u914D\u7F6E</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;ConnectionStrings&quot;: {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    &quot;DefaultDB&quot;: &quot;0&quot;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &quot;DefaultDB&quot;: &quot;1&quot;,
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &quot;DataType&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;MySql&quot;: 0,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;SqlServer&quot;: 1,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;PostgreSQL&quot;: 2,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;Oracle&quot;: 3,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;Sqlite&quot;: 4
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;MySql&quot;: &quot;Data Source=localhost;Port=3306;User ID=root;Password=rCsRedisoot;Initial Catalog=lincms;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20&quot;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &quot;SqlServer&quot;: &quot;Data Source=.;User ID=sa;Password=123456;Integrated Security=True;Initial Catalog=LinCMS;Pooling=true;Min Pool Size=1&quot;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> },
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="serilog\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#serilog\u914D\u7F6E" aria-hidden="true">#</a> Serilog\u914D\u7F6E</h3><p>Using\u5F15\u7528 <code>&quot;Serilog.Sinks.MSSqlServer&quot;</code>,\u53BB\u6389<code> &quot;Serilog.Sinks.MariaDB&quot;</code></p><p>\u628A <code>&quot;Name&quot;</code>\u4E3A <code>&quot;MariaDB&quot;</code>\u7684json\u6CE8\u91CA\u6389\u3002</p><p>\u628A<code>&quot;Name&quot;</code>\u4E3A <code>&quot;MSSqlServer&quot;</code>\u7684json\u6CE8\u91CA\u53BB\u6389\u3002</p><p>\u5E76\u6539\u6389<code>Args:connectionString</code>\u7684\u8FDE\u63A5\u4E32\u3002</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &quot;Serilog&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;Using&quot;: [
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;Serilog.Sinks.Console&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;Serilog.Sinks.File&quot;,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">      &quot;Serilog.Sinks.MariaDB&quot;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">      &quot;Serilog.Sinks.MSSqlServer&quot;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   ],
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;MinimumLevel&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;Default&quot;: &quot;Information&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;Override&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">       &quot;Microsoft&quot;: &quot;Information&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">       &quot;System&quot;: &quot;Warning&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">     }
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;WriteTo&quot;: [
</span><span class="token prefix unchanged"> </span><span class="token line">     {
</span><span class="token prefix unchanged"> </span><span class="token line">       &quot;Name&quot;: &quot;File&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">       &quot;Args&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;path&quot;: &quot;Logs/log.txt&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;rollingInterval&quot;: &quot;Day&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">       }
</span><span class="token prefix unchanged"> </span><span class="token line">     },
</span><span class="token prefix unchanged"> </span><span class="token line">     {
</span><span class="token prefix unchanged"> </span><span class="token line">       &quot;Name&quot;: &quot;Console&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">       &quot;Args&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;theme&quot;: &quot;Serilog.Sinks.SystemConsole.Themes.AnsiConsoleTheme::Code, Serilog.Sinks.Console&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;outputTemplate&quot;: &quot;[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} &lt;s:{SourceContext}&gt;{NewLine}{Exception}&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">       }
</span><span class="token prefix unchanged"> </span><span class="token line">     },
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">      {
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">       &quot;Name&quot;: &quot;MariaDB&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">       &quot;Args&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;connectionString&quot;: &quot;Data Source=localhost;Port=3308;User ID=root;Password=root;Initial Catalog=lincms;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;autoCreateTable&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;tableName&quot;: &quot;app_serilog&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;restrictedToMinimumLevel&quot;: &quot;Information&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;batchPostingLimit&quot;: 4, //1000
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;period&quot;: &quot;0.00:00:03&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">         &quot;options&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">           &quot;PropertiesToColumnsMapping&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">             &quot;Exception&quot;: &quot;exception&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">             &quot;Level&quot;: &quot;level&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">             &quot;Message&quot;: &quot;message&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">             &quot;MessageTemplate&quot;: &quot;message_template&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">             &quot;Properties&quot;: &quot;properties&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">             &quot;Timestamp&quot;: &quot;timestamp&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">           },
</span><span class="token prefix unchanged"> </span><span class="token line">           &quot;TimestampInUtc&quot;: false,
</span><span class="token prefix unchanged"> </span><span class="token line">           &quot;ExcludePropertiesWithDedicatedColumn&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">           &quot;EnumsAsInts&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">           &quot;LogRecordsCleanupFrequency&quot;: &quot;0.02:00:00&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">           &quot;LogRecordsExpiration&quot;: &quot;31.00:00:00&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">         }
</span><span class="token prefix unchanged"> </span><span class="token line">       }
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">      }
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">      //{
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     //  &quot;Name&quot;: &quot;MSSqlServer&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //  &quot;Args&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //    &quot;connectionString&quot;: &quot;Data Source=.;User ID=sa;Password=123456;Integrated Security=True;Initial Catalog=LinCMS;Pooling=true;Min Pool Size=1&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //    &quot;restrictedToMinimumLevel&quot;: &quot;Information&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //    &quot;sinkOptionsSection&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;tableName&quot;: &quot;app_serilog&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;schemaName&quot;: &quot;dbo&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;autoCreateSqlTable&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;batchPostingLimit&quot;: 1000,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;period&quot;: &quot;0.00:00:15&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">     //    },
</span><span class="token prefix unchanged"> </span><span class="token line">     //    &quot;columnOptionsSection&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;disableTriggers&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;clusteredColumnstoreIndex&quot;: false,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;primaryKeyColumnName&quot;: &quot;id&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;addStandardColumns&quot;: [ &quot;LogEvent&quot; ],
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;removeStandardColumns&quot;: [ &quot;Properties&quot; ],
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;additionalColumns&quot;: [
</span><span class="token prefix unchanged"> </span><span class="token line">     //        {
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;ColumnName&quot;: &quot;event_type&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;DataType&quot;: &quot;int&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;AllowNull&quot;: true
</span><span class="token prefix unchanged"> </span><span class="token line">     //        },
</span><span class="token prefix unchanged"> </span><span class="token line">     //        {
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;ColumnName&quot;: &quot;release&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;DataType&quot;: &quot;varchar&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;DataLength&quot;: 32
</span><span class="token prefix unchanged"> </span><span class="token line">     //        },
</span><span class="token prefix unchanged"> </span><span class="token line">     //        {
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;ColumnName&quot;: &quot;environment_user_name&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;PropertyName&quot;: &quot;UserName&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;DataType&quot;: &quot;varchar&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;DataLength&quot;: 50
</span><span class="token prefix unchanged"> </span><span class="token line">     //        },
</span><span class="token prefix unchanged"> </span><span class="token line">     //        {
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;ColumnName&quot;: &quot;all_sqlcolumn_defaults&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;DataType&quot;: &quot;varchar&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;AllowNull&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;DataLength&quot;: -1,
</span><span class="token prefix unchanged"> </span><span class="token line">     //          &quot;NonClusteredIndex&quot;: false
</span><span class="token prefix unchanged"> </span><span class="token line">     //        }
</span><span class="token prefix unchanged"> </span><span class="token line">     //      ],
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;id&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;columnName&quot;: &quot;id&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;nonClusteredIndex&quot;: true
</span><span class="token prefix unchanged"> </span><span class="token line">     //      },
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;level&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;columnName&quot;: &quot;level&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;storeAsEnum&quot;: true
</span><span class="token prefix unchanged"> </span><span class="token line">     //      },
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //&quot;Properties&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;columnName&quot;: &quot;properties&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;excludeAdditionalProperties&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;dictionaryElementName&quot;: &quot;dict&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;itemElementName&quot;: &quot;item&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;omitDictionaryContainerElement&quot;: false,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;omitSequenceContainerElement&quot;: false,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;omitStructureContainerElement&quot;: false,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;omitElementIfEmpty&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;propertyElementName&quot;: &quot;prop&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;rootElementName&quot;: &quot;root&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;sequenceElementName&quot;: &quot;seq&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;structureElementName&quot;: &quot;struct&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //  &quot;usePropertyKeyAsElementName&quot;: false
</span><span class="token prefix unchanged"> </span><span class="token line">     //      //},
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;TimeStamp&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;columnName&quot;: &quot;timestamp&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;convertToUtc&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;DataType&quot;: &quot;tinyint&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">     //      },
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;MessageTemplate&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;columnName&quot;: &quot;message_template&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;convertToUtc&quot;: true
</span><span class="token prefix unchanged"> </span><span class="token line">     //      },
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;Timestamp&quot;: &quot;timestamp&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;Exception&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;columnName&quot;: &quot;exception&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">     //      },
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;Message&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;columnName&quot;: &quot;message&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">     //      },
</span><span class="token prefix unchanged"> </span><span class="token line">     //      &quot;logEvent&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;columnName&quot;: &quot;properties&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;excludeAdditionalProperties&quot;: true,
</span><span class="token prefix unchanged"> </span><span class="token line">     //        &quot;excludeStandardColumns&quot;: true
</span><span class="token prefix unchanged"> </span><span class="token line">     //      }
</span><span class="token prefix unchanged"> </span><span class="token line">     //    }
</span><span class="token prefix unchanged"> </span><span class="token line">     //  }
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">      //}
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   ]
</span><span class="token prefix unchanged"> </span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br></div></div><h3 id="cap\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#cap\u914D\u7F6E" aria-hidden="true">#</a> CAP\u914D\u7F6E</h3><p>\u56E0\u4E3A\u7528\u4E86<code>CAP</code>\u3002cap\u6362<code>sql server</code>\u3002\u8FD9\u91CC\u6539\u6210 <code>DefaultStorage</code>\u6539\u62102\u3002</p><p>\u5982\u679CMessqueue\u6362rabbitmq\u7684\u8BDD\uFF0C<code>DefaultMessageQueue</code>\u5C31\u6539\u62101.\u7136\u540E\u914D\u7F6E RabbitMQ</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;CAP&quot;: {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    &quot;DefaultStorage&quot;: &quot;1&quot;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &quot;DefaultStorage&quot;: &quot;2&quot;,
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &quot;DefaultMessageQueue&quot;: &quot;0&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;Storage&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;InMemoryStorage&quot;: 0,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;MySql&quot;: 1,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;SqlServer&quot;: 2
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;MessageQueue&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;InMemoryQueue&quot;: 0,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;RabbitMQ&quot;: 1
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;RabbitMQ&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;HostName&quot;: &quot;localhost&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;UserName&quot;: &quot;admin&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;Password&quot;: &quot;123456&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;Port&quot;: 5672,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;VirtualHost&quot;: &quot;/admin&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">   }
</span><span class="token prefix unchanged"> </span><span class="token line"> },
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u53CC\u51FB<code>LinCms.Application</code>\u9879\u76EE,\u6CE8\u91CA\u6389<code>DotNetCore.CAP.MySql</code>\u7684\u5F15\u7528\uFF0C\u5F15\u7528 SqlServer\u7684\u5305</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>	&lt;ItemGroup&gt;
		&lt;PackageReference Include=&quot;AspNet.Security.OAuth.Gitee&quot; Version=&quot;5.0.11&quot; /&gt;
		&lt;PackageReference Include=&quot;AspNet.Security.OAuth.GitHub&quot; Version=&quot;5.0.11&quot; /&gt;
		&lt;PackageReference Include=&quot;AspNet.Security.OAuth.QQ&quot; Version=&quot;5.0.11&quot; /&gt;
		&lt;PackageReference Include=&quot;AutoMapper&quot; Version=&quot;10.1.1&quot; /&gt;
		&lt;PackageReference Include=&quot;Autofac.Extensions.DependencyInjection&quot; Version=&quot;7.1.0&quot; /&gt;
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">		&lt;PackageReference Include=&quot;DotNetCore.CAP.MySql&quot; Version=&quot;5.1.3&quot; /&gt;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">		&lt;PackageReference Include=&quot;DotNetCore.CAP.SqlServer&quot; Version=&quot;5.1.3&quot; /&gt;
</span></span>		&lt;PackageReference Include=&quot;IdentityServer4&quot; Version=&quot;4.1.2&quot; /&gt;
		&lt;PackageReference Include=&quot;DotNetCore.CAP&quot; Version=&quot;5.1.3&quot; /&gt;
		&lt;PackageReference Include=&quot;IdentityModel&quot; Version=&quot;5.1.0&quot; /&gt;
		&lt;PackageReference Include=&quot;MQiniu.Core&quot; Version=&quot;1.0.1&quot; /&gt;
		&lt;PackageReference Include=&quot;Caching.CSRedis&quot; Version=&quot;3.6.60&quot; /&gt;
		&lt;PackageReference Include=&quot;CSRedisCore&quot; Version=&quot;3.6.6&quot; /&gt;
	&lt;/ItemGroup&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6253\u5F00<code>LinCms.Application</code>\u9879\u76EE\u4E2D\u7684<code>CapUnitOfWorkExtensions.cs</code>\u6587\u4EF6</p><p>\u4FEE\u6539\u65B9\u6CD5<code>BeginTransaction</code></p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>public static ICapTransaction BeginTransaction(this IUnitOfWork unitOfWork, ICapPublisher publisher, bool autoCommit = false)
{
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   //\u770B\u4E86\u6E90\u7801\uFF0C\u6362\u4E86\u65B0\u7684\u5199\u6CD5\uFF0C\u6362\u4E0D\u540C\u7684\u6570\u636E\u5E93\uFF0C\u5C31\u9700\u8981\u624B\u52A8\u4FEE\u6539\u8FD9\u6BB5\u4EE3\u7801\u4E86\uFF08MySqlCapTransaction\uFF09
</span><span class="token prefix unchanged"> </span><span class="token line">   //publisher.Transaction.Value = (ICapTransaction)publisher.ServiceProvider.GetService(typeof(ICapTransaction));\u65B0\u7248\u672C\u53EA\u80FD\u5F97\u5230nul
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   publisher.Transaction.Value = ActivatorUtilities.CreateInstance&lt;MySqlCapTransaction&gt;(publisher.ServiceProvider);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   publisher.Transaction.Value = ActivatorUtilities.CreateInstance&lt;SqlServerCapTransaction&gt;(publisher.ServiceProvider);
</span></span>}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,20);function p(t,l){return e}var c=n(a,[["render",p],["__file","change-sqlserver.html.vue"]]);export{c as default};
