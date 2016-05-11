#How to Meet WCAG 2.0中文翻译（草稿）
##替代文本
<ol>
<li>
<a href="alternatetext/1_nontext_tdwb.html"  target="_blank">非文本内容：为所有呈现给用户的非文本内容都提供相同目的</a>
</li>
<li>
<a href="alternatetext/2_nontext_long_tdwb.html" target="_blank">为非文本内容提供长描述，且提供相同的目的、呈现相同的信息。</a>
</li>
<li>
<a href="alternatetext/3_aria-label_biaoqian.html" target="_blank">使用aria-label为对象提供标签</a>
</li>
<li>
<a href="alternatetext/4_aria-labelledby_nontext.html" target="_blank">使用aria-labelledby为非文本内容提供文本替代</a>
</li>
<li>
<a href="alternatetext/5_imggroup_aalt.html" target="_blank">使用图像群组中的一个条目的替代文本，来描述群组中所有条目</a>
</li>
<li>
<a href="alternatetext/6_imgtextcombine.html" target="_blank">将有相同目的地的临近图片和文本链接合并</a>
</li>
<li>
<a href="alternatetext/7_applt_tdwb.html" target="_blank">为applet提供替代文本</a>
</li>
<li>
<a href="alternatetext/8_img_tdwb.html" target="_blank">为img元素使用alt属性提供替代文本</a>
</li>
<li>
<a href="alternatetext/9_object_tdwb.html" target="_blank">使用object元素的主体提供替代文本</a>
</li>
<li>
<a href="alternatetext/10_ascii_tdwb.html" target="_blank">为ASCII艺术字、表情、脑残体提供替代文本；</a>
</li>
<li>
<a href="alternatetext/11_nontext_tdwb.html" target="_blank">为非文本内容提供简短描述作为替代文本</a>
</li>
<li>
<a href="alternatetext/12_img_Aria-describedby.html" target="_blank">使用Aria-describedby为图片提供描述</a>
</li>
<li>
<a href="alternatetext/13_nontext_a_long.html" target="_blank">在临近非文本内容的位置提供一个链接，链接到页面中的提供长描述的位置</a>
</li>
<li>
<a href="alternatetext/14_nontext_a_long_near.html" target="_blank">在分文本内容附件提供一个文本长描述，并在简短描述中说明长描述的位置</a>
</li>
<li>
<a href="alternatetext/15_nontext_long_same.html" target="_blank">为非文本内容提供长描述，长描述需要提供相同的目的呈现相同的信息</a>
</li>
<li>
<a href="alternatetext/16_longdesc.html" target="_blank">使用longdesc</a>
</li>
<li>
<a href="alternatetext/17_aria-labelledby_linklabel.html" target="_blank">使用aria-labelledby将很多个文本节点连接成一个标签</a>
</li>
<li>
<a href="alternatetext/18_imagemape_area_tdwb.html" target="_blank">为image mape的area元素提供文本替代</a>
</li>
<li>
<a href="alternatetext/19_link_text.html" target="_blank">提供链接文本描述链接元素的目的</a>
</li>
<li>
<a href="alternatetext/20_image_submit_alt.html" target="_blank">使用图片作为提交按钮的使用alt属性</a>
</li>
<li>
<a href="alternatetext/21_label_form.html" target="_blank">使用label元素连接文本标签和表单控件</a>
</li>
<li>
<a href="alternatetext/22_title_form.html" target="_blank">当不能使用label元素的使用，使用title属性标记表单控件</a>
</li>
<li>
<a href="alternatetext/23_media_tdwb.html" target="_blank">提供简短文本替代，描述实时纯视频、实时纯音频内容的目的</a>
</li>
<li>
<a href="alternatetext/24_nontext_sample_tdwb.html" target="_blank">为非文本内容提供一个简短替代文本，替代文本为可接收命名或描述性命名</a>
</li>
<li>
<a href="alternatetext/25_yanzhengma_tdwb.html" target="_blank">提供替代文本描述验证码的目的</a>
</li>
<li>
<a href="alternatetext/26_yanzhengma_td_method.html" target="_blank">保证页面中包含其他验证码，使用不同模式提供相同目的</a>
</li>
<li>
<a href="alternatetext/27_css_zsximage.html" target="_blank">使用CSS包含装饰性图片</a>
</li>
<li>
<a href="alternatetext/28_img_alt_null.html" target="_blank">使用图片的空alt文本、无title属性，图片可被辅助技术忽略</a>
</li>
</ol>
##可理解性
###可预测性
<ol>
<li><a href="expect/1_same_navigation.html" target="_blank">一致性导航_20160406</a></li>
<li><a href="expect/2_same_identify.html" target="_blank">一致性标识</a></li>
<li><a href="expect/3_request_change.html" target="_blank">请求变更</a></li>
<li><a href="expect/6_pages_expect.html" target="_blank">焦点：当任何用户界面组件接收焦点时，不会引起上下文变化。</a>
</li>
<li>
<a href="expect/9_warning_new.html" target="_blank">打开新窗口时提供给用户提示信息</a>
</li>
<p>改变任何用户界面组件的设置不会自动导致上下文的变化，除非在使用组件之前用户被告知了此行为会导致变化。</p>
<li><a href="expect/8_submitbutton.html" target="_blank">提供一个submit按钮</a></li>
<li><a href="expect/7_selectbutton.html" target="_blank">使用具有选择元素的按钮执行操作</a></li>
<li><a href="expect/4_inform_change.html" target="_blank">在表单的改变引起上下文的改变时，需要在提交前告知用户将要发生的改变</a></li>
<li><a href="expect/5_onchangeevent.html" target="_blank">在选择元素上使用onchange事件，而不会引起上下文的变化</a></li>
</ol>

###帮助用户避免和纠正错误
<p>如果输入错误能够被自动发现，错误类型应能被标识，并且用文本描述给用户；
</p>
<ol>
<li>
<a href="errorcorrection/1_requried_null_textcd.html" target="_blank">提供给用户文本描述来确认必填却没有完成的部分</a>
</li>
<li>
<a href="errorcorrection/2_aria-invalid_error.html" target="_blank">使用Aria-Invalid来标识错误区域</a>
</li>
<li>
<a href="errorcorrection/3_client_alert.html" target="_blank">提供客户端验证与警报</a>
</li>
<li>
<a href="errorcorrection/4_aira-alertdialog.html" target="_blank">使用aria-alertdialog确认错误</a>
</li>
<li>
<a href="errorcorrection/5_role_alert_error.html" target="_blank">使用ARIA role=alert或者即时区来显示错误</a>
</li>
<p>当需要用户输入内容时，要给出标签或说明：为交互组件提交必要的目的说明，说明信息输入的必要性
</p>
<li>
<a href="errorcorrection/6_not_allow_inlist.html" target="_blank">当需要用户提供的信息不在允许的列表值里面，提供一个文本描述</a>
</li>
<li>
<a href="errorcorrection/7_error_informt.html" target="_blank">当用户输入错误格式和错误值时，需要提供一个说明</a>
</li>
<li>
<a href="errorcorrection/8_aria-desribedby_label.html" target="_blank">使用aria-describedby属性为交互控件提供文本说明，通过使用id将 描述信息与一个或多个控件联系起来</a>
</li>
<li>
<a href="errorcorrection/9_aria-describedby_mult_node.html" target="_blank">使用aria-labelledby连接一个标签和多个文本节点</a>
</li>
<li>
<a href="errorcorrection/10_group-role.html" target="_blank">使用组的roles来区分有关表单控件</a>
</li>
<li>
<a href="errorcorrection/11_format_sample.html" target="_blank">为期望数据提供模式和样例</a>
</li>
<li>
<a href="errorcorrection/12_form_requried_cd.html" target="_blank">在表单或者一系列需要填写的区域的开端提供必要的文字来描述必须输入的内容</a>
</li>
<li>
<a href="errorcorrection/13_label_relationship.html" target="_blank">放置labels来增强关系的可预测性</a>
</li>
<li>
<a href="errorcorrection/14_label_legend_requried.html" target="_blank">使用label和legend来明确指出表单控件的必填状态</a>
</li>
<li>
<a href="errorcorrection/15_legend_group.html" target="_blank">使用fieldset和legend元素来描述表单控件中的组</a>
</li>
<li>
<a href="errorcorrection/16_title_dist_form.html" target="_blank">当标签不能用的时候,使用title属性来区分表单控件</a>
</li>
<li>
<a href="errorcorrection/17_adjacent_button.html" target="_blank">使用临近按钮来标记区域的目的</a>
</li>
<li>
<a href="errorcorrection/18_aira-raquried.html" target="_blank">使用aria-required属性来标识必填区域</a>
</li>
<p>错误建议:如果输入错误能够被自动发现，且修改建议已知，则提供建议给用户，除非它会危及安全或影响内容目的。 （AA级）
</p>
<li>
<a href="errorcorrection/19_provide_correct.html" target="_blank">提供建议修正文本</a>
</li>
<li>
<a href="errorcorrection/20_DOM_add_error.html" target="_blank">提供客户端验证，通过使用DOM添加错误信息</a>
</li>
<li>
<a href="errorcorrection/21_success_feedback.html" target="_blank">当数据提交成功后，提供一个成功反馈</a>
</li>
<p>错误预防（法律、金融、数据）: 对于用户操作将引起法律承诺或者金融交易的网页、修改或删除数据存储系统里的用户可控数据的网页、提交用户测试响应的网页等 ，对于这些网页，以下部分至少有一为真：（AA级）
</p>
<li>
<a href="errorcorrection/22_given_time_cancel.html" target="_blank">用户做了请求之后可以提供一个规定时间，允许用户来修改或取消该请求</a>
</li>
<li>
<a href="errorcorrection/23_review_answer.html" target="_blank">在提交之前为用户提供复查更正答案的能力</a>
</li>
<li>
<a href="errorcorrection/24_submit_checkbox.html" target="_blank">在提交按钮之外提供一个复选框</a>
</li>
<li>
<a href="errorcorrection/25_undo_delete.html" target="_blank">提供一种机制恢复删除信息</a>
</li>
<li>
<a href="errorcorrection/26_confirm_action.html" target="_blank">请求确认继续进行已选择的操作</a>
</li>
<p>帮助:上下文相关的帮助是可用的。</p>
<li>
<a href="errorcorrection/27_help_link.html" target="_blank">在每一个web页面上提供一个帮助链接</a>
</li>
<li>
<a href="errorcorrection/28_provide_helper.html" target="_blank">在网页上使用助手提供帮助</a>
</li>
<li>
<a href="erroecorrection/29_spellcheck_inputhelp.html" target="_blank">提供拼写检查和文本输入建议</a>
</li>
<li>
<a href="errorcorrection/30_begin_cd_requried.html" target="_blank">在表单区域起始部分提供文本说明来描述必要输入</a>
</li>
<li>
<a href="errorcorrection/31_title_sense_help.html" target="_blank">使用title属性提供上下文敏感帮助</a>
</li>
</ol>

##键盘使用
<ol>
<li><a href="keyboarduse/1_keyboarduse.html" target="_blank">键盘事件无障碍使用总结</a></li>
</li>
</ol>