'use strict'

    const data = {
      'Рыбы': {
        'Форель': {},
        'Щука': {}
      },
      'Деревья': {
        'Хвойные': {
          'Лиственница': {},
          'Ель': {}
        },
        'Цветковые': {
          'Берёза': {},
          'Тополь': {}
        }

      }
    };
    function createTree(container, obj) {
      container.innerHTML = createTreeText(obj);
    }
    
    function createTreeText(obj) {
      let li = '';
      let ul = '';
      Object.entries(obj).forEach (
        function([key, value]) {
            li = li + '<li>' + key + createTreeText(value) + '</li>';
          });
      
        if (li) {
        ul = '<ul>' + li + '</ul>'
      }
      return ul || '';
    }
    
    var container = document.getElementById('container');
    createTree(container, data);
