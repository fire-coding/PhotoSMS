/*
	Home Form
*/

var HomeForm = function() {

	// Форма
	this.form = null;

	// Инициализация
	this.init = function() {
		this.form = this.getForm();
	}

	// Открыть форму
	this.open = function() {
		if(this.form == null) this.init();
		PS.mainView.setActiveItem(this.form);
	}

	// Закрыть форму
	this.close = function() {
		TI.mainView.remove(this.form);
		this.form = null;
	}

	// Получить форму
	this.getForm = function() {
		var scope = this;
		var form = Ext.create("Ext.Panel", {
	    cls: 'x-form-background',
	    items: [
	    	{
	    		docked: 'top',
	    		title: 'Photo SMS',
          xtype: 'toolbar',
          items: [
	          {
	            xtype: 'button',
	            ui: 'normal',
	            width: 150,
	            text: "Выход",
	            listeners: { 
	            	tap: function() {

	            	}
	          	}
	          },
	          { xtype: 'spacer', width: '100%' },
	          {
	            xtype: 'button',
	            ui: 'action',
	            width: 180,
	            text: "Отправить",
	            listeners: { 
	            	tap: function() {

	            	}
	          	}
	          }
	        ]
	    	},
	    	{
	    		xtype: 'panel',
	    		cls: 'empty_photo',
	    		height: 200
	    	},
	    	{
	    		xtype: 'fieldset',
	    		title: 'Отправить по SMS',
	    		height: 200,
	    		ui: 'round',
	    		items: [
	    			{
	    				xtype: 'numberfield',
	    				label: 'Номер',
	    				placeHolder: '+70921231212'
	    			},
	    			{
              xtype: 'textareafield',
              label: 'Текст',
              placeHolder: 'Текст SMS',
              maxRows: 4,
          	}
	    		]
	    	},
	    	{
	    		docked: 'bottom',
          xtype: 'toolbar',
          items: [
	          {
	            xtype: 'button',
	            ui: 'normal',
	            text: "Камера",
	            listeners: { 
	            	tap: function() {

	            	}
	          	}
	          },
	          {
	            xtype: 'button',
	            ui: 'normal',
	            text: "Сделать фото",
	            listeners: { 
	            	tap: function() {

	            	}
	          	}
	          },
	          {
	            xtype: 'button',
	            ui: 'normal',
	            disabled: true,
	            text: "Инвертировать",
	            listeners: { 
	            	tap: function() {

	            	}
	          	}
	          },
	    		]
	    	}
	    ]
		});
		return form;
	}

	

}

var homeForm = new HomeForm();