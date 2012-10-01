tinyMCEPopup.requireLangPack();

var MathquillDialog = {
  init : function() {
    var $ = window.top.$;
    this.mathquill = $('.mathquill-editor', document).mathquill('editor')
      .keydown(function(e) {
        if (e.which === 13) {
          tinyMCEPopup.close();
        }
      });
    var existing = tinyMCEPopup.getWindowArg('existing_latex');
    this.mathquill.mathquill('latex', existing).mathquill('redraw').focus();
  },

  getLatex : function() {
    return this.mathquill.mathquill('latex');
  }
};

tinyMCEPopup.onInit.add(MathquillDialog.init, MathquillDialog);
