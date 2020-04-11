jQuery('.accordian-toggle').click(function (e) {
    e.preventDefault();
    var $this = jQuery(this);
    $this.toggleClass("toggled");


    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        // $this.parent().find('accordian-toggle').removeClass('toggled');
        // $this.parent().parent().find('li .inner').removeClass('show');
        //$this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
