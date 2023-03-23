import{_ as n,V as s,W as a,a0 as p}from"./framework-2d083801.js";const e={},t=p(`<h2 id="常用查询语句" tabindex="-1"><a class="header-anchor" href="#常用查询语句" aria-hidden="true">#</a> 常用查询语句</h2><p>判断设备横竖屏</p><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 横屏 */</span>
<span class="token atrule"><span class="token rule">@media</span> all <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span> <span class="token punctuation">:</span>landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span> 

<span class="token comment">/* 竖屏 */</span>
<span class="token atrule"><span class="token rule">@media</span> all <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span> <span class="token punctuation">:</span>portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>判断设备宽高</p><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 设备宽度大于 320px 小于 640px */</span>
<span class="token atrule"><span class="token rule">@media</span> all <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>320px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>640px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>判断设备像素比</p><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 设备像素比为 1 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token comment">/* 设备像素比为 1.5 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-pixel-ratio</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token comment">/* 设备像素比为 2 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="常用设备设置" tabindex="-1"><a class="header-anchor" href="#常用设备设置" aria-hidden="true">#</a> 常用设备设置</h2><h3 id="iphones" tabindex="-1"><a class="header-anchor" href="#iphones" aria-hidden="true">#</a> iPhones</h3><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* ----------- iPhone 4 and 4S ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* ----------- iPhone 5 and 5S ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 568px<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 568px<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 568px<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* ----------- iPhone 6 ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 667px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 667px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 

<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 667px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 

<span class="token punctuation">}</span>

<span class="token comment">/* ----------- iPhone 6+ ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 736px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 736px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 

<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 736px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="galaxy-phones" tabindex="-1"><a class="header-anchor" href="#galaxy-phones" aria-hidden="true">#</a> Galaxy Phones</h3><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* ----------- Galaxy S3 ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* ----------- Galaxy S4 ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* ----------- Galaxy S5 ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 360px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 360px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 360px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="htc-phones" tabindex="-1"><a class="header-anchor" href="#htc-phones" aria-hidden="true">#</a> HTC Phones</h3><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* ----------- HTC One ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 360px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 360px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 360px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="ipads" tabindex="-1"><a class="header-anchor" href="#ipads" aria-hidden="true">#</a> iPads</h3><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* ----------- iPad mini ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* ----------- iPad 1 and 2 ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* ----------- iPad 3 and 4 ----------- */</span>

<span class="token comment">/* Portrait and Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Portrait */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">/* Landscape */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span> 
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,16),i=[t];function c(o,l){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","css-media.html.vue"]]);export{d as default};
