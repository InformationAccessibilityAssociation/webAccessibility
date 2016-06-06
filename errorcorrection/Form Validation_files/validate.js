window.onload = initialise;
function initialise()
{	
var objForms = document.getElementsByTagName('form');
	//�������Ϊform�����б�
var iCounter;

	//Ϊÿһ��������һ���¼�������	
for (iCounter=0; iCounter<objForms.length; iCounter++)
{
objForms[iCounter].onsubmit = function(){return validateForm(this);};
	//ָ������onsubmit�¼�
}

}



//�����¼�������
function validateForm(objForm)

{
	
var arClass = [];
	
var iErrors = 0;
	
var objField = objForm.getElementsByTagName('input');
	//���nameΪinput��Ԫ�ظ�objfield
var objLabel = objForm.getElementsByTagName('label');
	//���nameΪlabel��Ԫ�ظ�objlabel
var objList = document.createElement('ol');//����һ�������б�objlist
var objError, objExisting, objNew, objTitle, objParagraph, objAnchor, objPosition;
	
var strLinkID, iFieldCounter, iClassCounter, iCounter;

	
// ���ÿ������id����name��ȷ�����ǵ�Ψһ��	
// Ƭ�α�ʶ��
	
if (objForm.id)
	
{
		
	strLinkID = objForm.id + 'ErrorID';
	//strLinkID�Ǹñ��Ĵ���id
}
	
	else
	
{
		
	strLinkID = objForm.name + 'ErrorID';
	
}

	
// ����������ؼ���Ѱ����֤�ࣻ	
for (iFieldCounter=0; iFieldCounter<objField.length; iFieldCounter++)
	
{
		
	// ��ȡ�����򣬲�Ѱ�Һ��ʵ���
		
	arClass = objField[iFieldCounter].className.split(' ');
//�Ѿ��ӷָ�ɵ���	
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
		
// �����Ч����ʾ������Ϣ
		
	objError = objForm.getElementsByTagName('div');
// Ѱ�ҳ��ֵĴ��󣬻�ñ�������Ϊdiv��Ԫ��
	
	//����objError�е�Ԫ�أ��ҵ�classnameΪ	validationerrors������objExisting��
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
			
		//ΪaԪ��objAnchor����ı�1 Error in Submission��
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
		
		
	// ��������еĴ������µĴ���ȡ�����ǣ�
	//��������µĴ�����ʽ��ʼ
		
	if (objExisting)
		
	{
			
		objExisting.parentNode.replaceChild(objNew, objExisting);
//��objnewȡ��objExisting��	
	}
		
	else
		
	{
		
		objPosition = objForm.firstChild;
				
		objForm.insertBefore(objNew, objPosition);
		
	}

		
	// �����ӳ�
		
	setTimeout(function() { objAnchor.focus(); }, 50);

	// ��Ҫ�ύ��
			
	objForm.submitAllowed = false;
		
	return false;
	
	}

	// �ύ��
	
return true;

}


	// ��������б���ָ��������ֳ���������

	
function addError(objList, strError, strID, strErrorID)

{
	
	var objListItem = document.createElement('li');
	
	var objAnchor = document.createElement('a');
	
	// Ƭ�α�ʶ���ı��ؼ�
		objAnchor.href='#' + strID;

	
	// ʹ���Ŀ��Ĵ������
	
	if (strErrorID.length > 0)
	
	{
		
		objAnchor.id = strErrorID;
	
	}

	// ʹ�ñ�ǩ��ʾ������Ϣ
	
	objAnchor.appendChild(document.createTextNode(strError));
	//��Ӽ��̺�����¼����������õ�����ؼ�
	objAnchor.onclick = function(event){return focusFormField(this, event);};
	
	objAnchor.onkeypress = function(event){return focusFormField(this, event);};
	
	objListItem.appendChild(objAnchor);
	
	objList.appendChild(objListItem);

}



function focusFormField(objAnchor, objEvent)

{
	
	var strFormField, objForm;

	// ������̵�����������
	
	if (objEvent && objEvent.type == 'keypress')
	
	{
		
		if (objEvent.keyCode != 13 && objEvent.keyCode != 32)
		
		{
			
		return true;
		
		}
	
	}

	// ���ý��㵽���ؼ�
	
	strFormField = objAnchor.href.match(/[^#]\w*$/);
		
	objForm = getForm(strFormField);
	
	objForm[strFormField].focus();
	
	return false;

}


//�����Ӹ����ı��ֶ������صı�Ԫ��

function getForm(strField)
{
	
	var objElement = document.getElementById(strField);

	//�ҵ����ʵı�
	
	do
	{
objElement = objElement.parentNode;
	} 
	while (!objElement.tagName.match(/form/i) && objElement.parentNode);

	
	return objElement;

	}



//�����б��еļ�¼����
		
function logError(objField, objLabel, objList, strErrorID)
{
	
	var iCounter, strError;

	
	// �����ı�ǩ������ʾ
	
	for (iCounter=0; iCounter<objLabel.length; iCounter++)
	
	{
		
		if (objLabel[iCounter].htmlFor == objField.id)
		
		{
			
			strError = objLabel[iCounter].firstChild.nodeValue;
		
		}
	
	}

	
	addError(objList, strError, objField.id, strErrorID);

}



//��֤���� - ��Ӱ�Ҫ��


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

