 /* Функция, позволяющая навешивать обработчик события элементу 
 * (по сути отношение к статье не имеет, добавлена просто для удобства)
 * @param object elem - элемент, к которому будем привязывать событие
 * @param string evType - тип события (например: "click","mouseover")
 * @param function call - функция-обработчик (можно анонимную)
 */
function addEvent(elem,evType,call)
{
     if(elem.addEventListener)
     {  
        elem.addEventListener(evType, call, false);
     } 
     else if(elem.attachEvent) 
     {  
        elem.attachEvent('on' + evType, call); 
     }                
}  

/**
 * Функция, обеспечивающая инициализацию функционала блоков
 */
function initStart()
{
     var arrayElem = document.getElementsByTagName('*');

     var arrayElemLength = arrayElem.length;
     
     for(var i=0;i<arrayElemLength;i++)
      {
            var attr = arrayElem[i].className;
            if(attr)
            {
                if(attr.indexOf('fp-viewing') !== -1)
                 {
                    var initText = attr.substr(attr.indexOf('fp-viewing'));
                    
                    if (initObject[initText])
                    {
                       initObject[initText](arrayElem[i])
                    }

                 }
            }
 
      }
}

/* Как только страница загрузится, инициализируем наши функции для блоков */
addEvent(window,'load',initStart);
