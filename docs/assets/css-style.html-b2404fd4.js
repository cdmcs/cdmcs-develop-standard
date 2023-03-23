import{_ as n,V as s,W as a,a0 as e}from"./framework-2d083801.js";const p={},t=e(`<h2 id="classname命名风格" tabindex="-1"><a class="header-anchor" href="#classname命名风格" aria-hidden="true">#</a> className命名风格</h2><p>取名方式：</p><ol><li>中文首字母小写，尽量简短但不能失去核心意思。</li><li>中文首字母小写 + 适当的英文。</li><li>使用短横线进行连接，不准使用下划线或者驼峰命名。</li></ol><details class="hint-container details"><summary>查看取名示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token selector">.list</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 见明知意 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.ptfjk-list</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 就算不知道前面中文简写是啥意思，但是最起码知道这是一个列表 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.lb</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 晦涩难懂 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.ptfjklb</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 晦涩难懂 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.ptfjk_list</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 下划线连接，风格不统一 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.ptfjkList</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 驼峰命名，风格不统一 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="css书写风格" tabindex="-1"><a class="header-anchor" href="#css书写风格" aria-hidden="true">#</a> css书写风格</h2><p>说明：</p><ol><li>类名与<code>{</code>之间要有空格</li><li>属性与属性值之间要有空格。</li><li>全部采用展开形式而非紧凑型。</li><li>全部采用小写，不允许使用大写。</li><li>不准采用id选择器，因为id选择器的权重比较重，建议采用class选择器，通常情况下只允许出现<code>#app</code>。</li><li>类名定义样式与另外一个类名定义样式之间要空一行，如果是内嵌样式：写在<code>&lt;style&gt;</code>内，那么最开始和最结尾不需要换行。</li><li>尽量将有共同点的样式一起定义，不要分开定义那么多。</li><li>尽量避免使用无具体语义定义的标签选择器。</li><li>同时选中多个类名定义样式的时候，且html结构是同级的时候，需要换行。</li><li>同时选中多个类名定义样式的时候，且html结构是父子关系的时候，不需要换行，但需要用空格隔开。</li><li>定义样式时，相同类型的样式放在一起写，不要分开写。</li><li>颜色值<code>rgb()</code>、<code>rgba()</code>、<code>hsl()</code>、<code>hsla()</code>、<code>rect()</code>中不需有空格，且取值不要带有不必要的 0。</li><li>属性值十六进制数值能用简写的尽量用简写。</li><li>不要为 0 指明单位。</li><li>css属性值需要用到引号时，统一使用单引号。</li><li><code>&gt;</code>、<code>+</code>、<code>~</code> 选择器的两边各保留一个空格。</li></ol><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 类名与 { 之间要有空格 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 属性与属性值之间要有空格 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px 
    <span class="token property">height</span><span class="token punctuation">:</span>100px
<span class="token punctuation">}</span>

<span class="token comment">/* 全部采用展开形式而非紧凑型 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token comment">/* 全部采用小写，不允许使用大写 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span> 
  <span class="token property">WIDTH</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">HEIGHT</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">/* 不准采用id选择器，因为id选择器的权重比较重，建议采用class选择器，通常情况下只允许出现 #app */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 类名定义样式与另外一个类名定义样式之间要空一行，如果是内嵌样式：写在 &lt;style&gt; 内，那么最开始和最结尾不需要换行 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 尽量将有共同点的样式一起定义，不要分开定义那么多。 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.p1,
.p2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.p1</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 尽量避免使用无具体语义定义的标签选择器。 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">#app header</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">#app div</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 同时选中多个类名定义样式的时候，且html结构是同级的时候，需要换行。 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header,
.body,
.footer</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header, .body, .footer</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 同时选中多个类名定义样式的时候，且html结构是父子关系的时候，不需要换行，但需要用空格隔开。 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header .body .footer</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* bad */</span>
<span class="token selector">.header 
.body 
.footer</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 定义样式时，相同类型的样式放在一起写，不要分开写 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span>5px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#333<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad（宽高分开写了，边框和圆角也分开写了） */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#333<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span>5px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 颜色值\`rgb()\`、\`rgba()\`、\`hsl()\`、\`hsla()\`、\`rect()\`中不需有空格，且取值不要带有不必要的 0 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5 <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 属性值十六进制数值能用简写的尽量用简写 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 不要为 0 指明单位 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0px 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* css属性值需要用到引号时，统一使用单引号 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Hiragino Sans GB&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Hiragino Sans GB&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* &gt;、+、~ 选择器的两边各保留一个空格。 */</span>
<span class="token comment">/* good */</span>
<span class="token selector">main &gt; nav</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">label + input</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input:checked ~ button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #69C<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">main&gt;nav</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">label+input</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input:checked~button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #69C<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="css兼容性写法示例" tabindex="-1"><a class="header-anchor" href="#css兼容性写法示例" aria-hidden="true">#</a> css兼容性写法示例</h2><p>说明：浏览器私有前缀在前，标准前缀在后</p><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.header</span><span class="token punctuation">{</span>
    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">-o-border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">-ms-border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,11),i=[t];function c(l,o){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","css-style.html.vue"]]);export{d as default};
