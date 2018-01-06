$.bigfoot({
    actionOriginalFN: "ignore",
    numberResetSelector: "article",
    buttonMarkup: (
        "<a href=\"#\" class=\"footnote-button\" " +
            "id=\"{{SUP:data-footnote-backlink-ref}}\" " +
            "data-footnote-identifier=\"{{FOOTNOTEID}}\" " +
            "data-footnote-style=\"default\"" +
            "alt=\"See Footnote {{FOOTNOTEID}}\" " +
            "rel=\"footnote\"" +
            "data-footnote-content=\"{{FOOTNOTECONTENT}}\">" +
                "{{FOOTNOTENUM}}" +
        "</a>"
    )
  });