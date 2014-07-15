var PS = new PhoneSMS();

Ext.application({
  
  fullscreen: true,
  launch: function() {
    var pnlStartup = Ext.create('Ext.Panel', {
      id: 'pnlStartup',
      fullscreen: true
    });
    var loadingMask = new Ext.LoadMask(Ext.getBody());
    loadingMask.setMessage("Загрузка...");
    pnlStartup.applyMasked(loadingMask);
    PS.onAppReady();
  }
});