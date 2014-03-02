(function ($) {

    /**
     * Justify divs into a div
     * @returns {jQuery}
     */
    $.fn.justify = function () {
        this.each(function () {
            $(this)
                .css({
                    textAlign: "justify",
                    fontSize: "0.1px"
                })
                .find(">*")
                    .css({display: "inline-block"})
                    .slice(0, -1).after(" "); // insert a white space after each element but the last to allows the space sharing
            $(this).append(
                $(document.createElement("span")).css({
                    width: "100%",
                    display: "inline-block",
                    zoom: 1
                })
            );
        });
        return this;
    };

}(jQuery));