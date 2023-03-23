import{_ as n,V as s,W as a,a0 as e}from"./framework-2d083801.js";const i={},c=e(`<h2 id="css注释" tabindex="-1"><a class="header-anchor" href="#css注释" aria-hidden="true">#</a> CSS注释</h2><ol><li>注释写在类名的上方，不能写在侧边或里面</li><li>使用简短的中文或英文</li></ol><h3 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释</h3><details class="hint-container details"><summary>查看注释示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>

<span class="token comment">/* 页面头部 */</span>
<span class="token selector">.page-header</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token selector">.page-header</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 页面头部 */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.page-header</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 页面头部 */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.page-header</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span><span class="token comment">/* 页面头部 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="模块注释" tabindex="-1"><a class="header-anchor" href="#模块注释" aria-hidden="true">#</a> 模块注释</h3><p>说明：注释内容第一个字符和最后一个字符都是一个空格字符，<code>/*</code>与 模块信息描述占一行，多个横线分隔符-与<code>*/</code>占一行，行与行之间相隔两行。 对于<code>-</code>的个数大于10个，且同页面<code>-</code>长度要相同，也就是一次性注释好了，后面用的时候直接复制。</p><details class="hint-container details"><summary>查看注释示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* good */</span>
<span class="token comment">/* Module A
---------------------------------------------------------------- */</span>
<span class="token selector">.mod_a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token comment">/* Module B
---------------------------------------------------------------- */</span>
<span class="token selector">.mod_b</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* bad */</span>
<span class="token comment">/* Module A ---------------------------------------------------- */</span>
<span class="token selector">.mod_a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">/* Module B ---------------------------------------------------- */</span>
<span class="token selector">.mod_b</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="文件信息注释" tabindex="-1"><a class="header-anchor" href="#文件信息注释" aria-hidden="true">#</a> 文件信息注释</h3><p>说明：可选用，此情况常适用于创建独立的css文件。</p><details class="hint-container details"><summary>查看注释示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">;</span></span>
<span class="token comment">/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10),l=[c];function t(d,o){return s(),a("div",null,l)}const u=n(i,[["render",t],["__file","css-note.html.vue"]]);export{u as default};
