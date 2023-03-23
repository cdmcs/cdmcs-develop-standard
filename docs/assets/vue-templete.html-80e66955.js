import{_ as n,V as s,W as a,a0 as t}from"./framework-2d083801.js";const p={},e=t(`<h3 id="基础模板" tabindex="-1"><a class="header-anchor" href="#基础模板" aria-hidden="true">#</a> 基础模板</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&quot;#app&quot;</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">created</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求示例模板" tabindex="-1"><a class="header-anchor" href="#请求示例模板" aria-hidden="true">#</a> 请求示例模板</h3><p>需搭配element-ui模板：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> user <span class="token operator">=</span> top<span class="token punctuation">.</span>_globPlateUserInfo<span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
	<span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">tableData</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//表格数据源</span>
      <span class="token literal-property property">isLoading</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//表格是否加载中</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">//获取表格数据</span>
		<span class="token function-variable function">getTableData</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//推荐使用this之前先这么处理，后面就是that.xxx，不破坏vue语法结构。</span>
			that<span class="token punctuation">.</span>isLoading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AjaxProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			http<span class="token punctuation">.</span><span class="token function">addParm</span><span class="token punctuation">(</span><span class="token string">&quot;PN_USERID&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>userid<span class="token punctuation">)</span><span class="token punctuation">;</span>
			http<span class="token punctuation">.</span><span class="token function">addParm</span><span class="token punctuation">(</span><span class="token string">&quot;PC_USERNAME&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
			http<span class="token punctuation">.</span><span class="token function">invokeProc</span><span class="token punctuation">(</span>
				<span class="token string">&quot;APPUSER2017.xxxxx.xxxxxx&quot;</span><span class="token punctuation">,</span>
				<span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">http</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">var</span> sysError <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">getSysError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					that<span class="token punctuation">.</span>isLoading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>sysError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						that<span class="token punctuation">.</span><span class="token function">$alert</span><span class="token punctuation">(</span>sysError<span class="token punctuation">,</span> <span class="token string">&quot;错误&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
							<span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">&quot;确定&quot;</span><span class="token punctuation">,</span>
						<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
						<span class="token keyword">return</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					<span class="token keyword">var</span> res <span class="token operator">=</span> http<span class="token punctuation">.</span>responseInfo<span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token constant">PN_RET</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token comment">//有错</span>
						that<span class="token punctuation">.</span><span class="token function">$alert</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token constant">PC_MSG</span><span class="token punctuation">,</span> <span class="token string">&quot;错误&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
							<span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">&quot;确定&quot;</span><span class="token punctuation">,</span>
						<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        that<span class="token punctuation">.</span>tableData <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token constant">P_RESULT</span><span class="token punctuation">.</span>row_value<span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				http
			<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTableData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","vue-templete.html.vue"]]);export{r as default};
