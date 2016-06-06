window.onload = initialise;
function initialise()
{	
var objForms = document.getElementsByTagName('form');
	//获得名字为form的所有表单
var iCounter;

	//为每一个表单连接一个事件处理器	
for (iCounter=0; iCounter<objForms.length; iCounter++)
{
objForms[iCounter].onsubmit = function(){return validateForm(this);};
	//指定表单的onsubmit事件
}

}



//表单的事件处理器
function validateForm(objForm)

{
	
var arClass = [];
	
var iErrors = 0;
	
var objField = objForm.getElementsByTagName('input');
	//获得name为input的元素给objfield
var objLabel = objForm.getElementsByTagName('label');
	//获得name为label的元素给objlabel
var objList = document.createElement('ol');//创建一个无序列表objlist
var objError, objExisting, objNew, objTitle, objParagraph, objAnchor, objPosition;
	
var strLinkID, iFieldCounter, iClassCounter, iCounter;

	
// 获得每个表单的id或者name，确保他们的唯一性	
// 片段标识符
	
if (objForm.id)
	
{
		
	strLinkID = objForm.id + 'ErrorID';
	//strLinkID是该表单的错误id
}
	
	else
	
{
		
	strLinkID = objForm.name + 'ErrorID';
	
}

	
// 遍历输入表单控件，寻找验证类；	
for (iFieldCounter=0; iFieldCounter<objField.length; iFieldCounter++)
	
{
		
	// 获取类区域，并寻找合适的类
		
	arClass = objField[iFieldCounter].className.split(' ');
//把句子分割成单词	
	for (iClassCounter=0; iClassCounter<arClass.length; iClassCounter++)
	
	{
			
		switch (arClass[iClassCounter])
			
		{
				
			case 'string':
					
			if (!isString(objField[iFieldCounter].value, arClass))
		
			{
						
				if (iErrors === 0)
					
				{
							
					logError(objField[iFieldCounter], objLabel, objList, strLinkID);
	
				}
						
				else
						
				{
							
					logError(objField[iFieldCounter], objLabel, objList, '');
		
				}
						
				iErrors++;
					
			}
					
			break;
				
			case 'number':
					
			if (!isNumber(objField[iFieldCounter].value, arClass))
					{
						
				if (iErrors === 0)
					
				{
							
					logError(objField[iFieldCounter], objLabel, objList, strLinkID);
	
				}
						
				else
						
				{
							
					logError(objField[iFieldCounter], objLabel, objList, '');
			
				}
						
				iErrors++;
					
			}
					
			break;

				
			case 'email' :
					
			if (!isEmail(objField[iFieldCounter].value, arClass))
					{
						
				if (iErrors === 0)
					
				{
							
					logError(objField[iFieldCounter], objLabel, objList, strLinkID);
	
				}
						
				else
						
				{
							
					logError(objField[iFieldCounter], objLabel, objList, '');
			
				}
						
				iErrors++;
					
			}
					
			break;
			
		}
		
	}

}

	
if (iErrors > 0)
	
{
		
// 如果无效，显示错误信息
		
	objError = objForm.getElementsByTagName('div');
// 寻找出现的错误，获得表单中类型为div的元素
	
	//遍历objError中的元素，找到classname为	validationerrors，赋给objExisting；
	for (iCounter=0; iCounter<objError.length; iCounter++)
	
	{
			
		if (objError[iCounter].className == 'validationerrors')
		
		{
			
			objExisting = objError[iCounter];
						
		}
		
	}

		
	objNew = document.createElement('div');
			
	objTitle = document.createElement('h2');
		
	objParagraph = document.createElement('p');
			
	objAnchor = document.createElement('a');

		
	if (iErrors == 1)

	{
			
		//为a元素objAnchor添加文本1 Error in Submission；
		objAnchor.appendChild(document.createTextNode('1 Error in Submission'));
		
	}
		
		else
		
	{
			
		objAnchor.appendChild(document.createTextNode(iErrors + ' Errors in Submission'));
		
	}
		
	objAnchor.href = '#' + strLinkID;
			
	objAnchor.className = 'submissionerror';

				
	objTitle.appendChild(objAnchor);
		
	objParagraph.appendChild(document.createTextNode('Please review the following'));
		
	objNew.className = 'validationerrors';

			
	objNew.appendChild(objTitle);
		
	objNew.appendChild(objParagraph);
			
	objNew.appendChild(objList);
		
		
	// 如果有现有的错误，用新的大量取代他们，
	//否则添加新的错误形式开始
		
	if (objExisting)
		
	{
			
		objExisting.parentNode.replaceChild(objNew, objExisting);
//用objnew取代objExisting；	
	}
		
	else
		
	{
		
		objPosition = objForm.firstChild;
				
		objForm.insertBefore(objNew, objPosition);
		
	}

		
	// 允许延迟
		
	setTimeout(function() { objAnchor.focus(); }, 50);

	// 不要提交表单
			
	objForm.submitAllowed = false;
		
	return false;
	
	}

	// 提交表单
	
return true;

}


	// 功能添加列表项指向问题的现场控制链接

	
function addError(objList, strError, strID, strErrorID)

{
	
	var objListItem = document.createElement('li');
	
	var objAnchor = document.createElement('a');
	
	// 片段标识符的表单控件
		objAnchor.href='#' + strID;

	
	// 使这个目标的错误标题
	
	if (strErrorID.length > 0)
	
	{
		
		objAnchor.id = strErrorID;
	
	}

	// 使用标签提示错误信息
	
	objAnchor.appendChild(document.createTextNode(strError));
	//添加键盘和鼠标事件将焦点设置到窗体控件
	objAnchor.onclick = function(event){return focusFormField(this, event);};
	
	objAnchor.onkeypress = function(event){return focusFormField(this, event);};
	
	objListItem.appendChild(objAnchor);
	
	objList.appendChild(objListItem);

}



function focusFormField(objAnchor, objEvent)

{
	
	var strFormField, objForm;

	// 允许键盘导航到该链接
	
	if (objEvent && objEvent.type == 'keypress')
	
	{
		
		if (objEvent.keyCode != 13 && objEvent.keyCode != 32)
		
		{
			
		return true;
		
		}
	
	}

	// 设置焦点到表单控件
	
	strFormField = objAnchor.href.match(/[^#]\w*$/);
		
	objForm = getForm(strFormField);
	
	objForm[strFormField].focus();
	
	return false;

}


//函数从给定的表单字段名返回的表单元素

function getForm(strField)
{
	
	var objElement = document.getElementById(strField);

	//找到合适的表单
	
	do
	{
objElement = objElement.parentNode;
	} 
	while (!objElement.tagName.match(/form/i) && objElement.parentNode);

	
	return objElement;

	}



//功能列表中的记录错误
		
function logError(objField, objLabel, objList, strErrorID)
{
	
	var iCounter, strError;

	
	// 搜索的标签错误提示
	
	for (iCounter=0; iCounter<objLabel.length; iCounter++)
	
	{
		
		if (objLabel[iCounter].htmlFor == objField.id)
		
		{
			
			strError = objLabel[iCounter].firstChild.nodeValue;
		
		}
	
	}

	
	addError(objList, strError, objField.id, strErrorID);

}



//验证程序 - 添加按要求


function isString(strValue, arClass)

{
	
	var bValid = (typeof strValue == 'string' && strValue.replace(/^\s*|\s*$/g, '') !== '' && isNaN(strValue));

	
	return checkOptional(bValid, strValue, arClass);

}


function isEmail(strValue, arClass)

{
	
	var objRE = /^[\w-\.\']{1,}\@([\da-zA-Z\-]{1,}\.){1,}[\da-zA-Z\-]{2,}$/;
	
	var bValid = objRE.test(strValue);

	
	return checkOptional(bValid, strValue, arClass);

}


function isNumber(strValue, arClass)

{
	
	var bValid = (!isNaN(strValue) && strValue.replace(/^\s*|\s*$/g, '') !== '');

	
	return checkOptional(bValid, strValue, arClass);

}


function checkOptional(bValid, strValue, arClass)
{
	
	var bOptional = false;
	
	var iCounter;

	// Check if optional
	
	for (iCounter=0; iCounter<arClass.length; iCounter++)
	
	{
		
		if (arClass[iCounter] == 'optional')
				{
			
			bOptional = true;
		
		}
	
	}

	
	if (bOptional && strValue.replace(/^\s*|\s*$/g, '') === '')
		
	{
		
		return true;
	
	}

	
	return bValid;

}

