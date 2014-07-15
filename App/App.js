var PhoneSMS = function() {

	// Маска
	this.loadingMask = null;

	// Основное окно
	this.mainView = null;

	// Base64
	this.base64 = new Base64(); 

	// Готовность приложения
	this.onAppReady = function() {
		this.init();
	}

	// Инициализация
	this.init = function() {

		// Создание основного вьювера приложения
    this.mainView = Ext.create('Ext.navigation.View',
			{ 
			  id: 'mainAppNavigator',
				fullscreen: true,
				layout: {
					animation: {
						type: 'slide',
						direction: 'left'
					}
				},
				navigationBar: { hidden: true	}
		  });

    // Инициализация маски
		this.maskInit();

		this.bindApp();
	};

	// Инициализация маски
  this.maskInit = function() {
		this.loadingMask = new Ext.LoadMask(Ext.getBody());
		this.loadingMask.setMessage("Wait...");
		this.mainView.applyMasked(this.loadingMask);
		this.loadingMask.hide();
  }

  // Построение приложения
  this.bindApp = function() {

  	// Открываем главную форму
  	homeForm.open();

  	// Убираем маску загрузки приложения
		var pnlStartup = Ext.getCmp('pnlStartup');
		if (pnlStartup) pnlStartup.destroy();
  }
}