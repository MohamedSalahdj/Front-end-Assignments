resivioned
- Outline : study it
        - outline-offest : add space etween an outline and border
                ______________________________________________________________________________________________

- Box Model  : 
    - is used when talking about design and layout.
    - The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins. 
    !- Total element width = width + left padding + right padding + left border + right border

    !- Total element height = height + top padding + bottom padding + top border + bottom border

    # Note: The margin property also affects the total space that the box will take up on the page, but the margin is not included in the actual size of the box. The box's total width and height stops at the border.

        ______________________________________________________________________________________________

- Background:
        - color
        - opacity : using it effect on background, content
                - if you want not apply opacity on child (content) 
                background: rgba(0, 128, 0, 0.3) , fourth parameter is a opacity [alpha channel (RGBA) - which specifies the opacity for a color.]
        ------------------------------------
        -image: url('path')
                - repeat cover entire content 
                - By default, the background-image property repeats an image both horizontally and vertically.

        -----------------------------------
        -repeat: repeat-x, repeat-y, no-repeat
        -----------------------------------
        -position: right-top, left-bottom, % %, px, [f you only specify one value, the other value will be 50%. ]
        -----------------------------------
        attachment: scroll, or be fixed
        [can use position property to set position of imaeg when using fixedvalue]
                ----------------
                It does not matter if one of the property values is missing, as long as the other ones are in this order. 

                background-color
                background-image
                background-repeat
                background-attachment
                background-position
                 ----------------
        _______________________________________________________________________________________

- display
        : change default display behavior of html element 

        display: none vs visibility: hidden;
               - none:
                        The element will be hidden, and the page will be displayed as if the element is not there:

               -hidden:
                        The element will be hidden, and the page will be displayed as if the element is not there:

        ______________________________________________________________________________________________

- overflow: [overflow-x, overflow-y]
        -visible:-> default 
        - hidden
        - scroll
        -auto : add scrollbar only when necessary 
        [Note: The overflow property only works for block elements with a specified height.]


- text:
        - The default text color for a page is defined in the body selector. body {color: blue;}

        Text Alignment and Text Direction 
                - text-align
                        alignment - left by default when direction ltr and vise verse

                        - justify [each line is stretched so that every line has equal width, and the left and right margins are straight ]

                - text-align-last

                        - direction : rtl (left to right [move sentence ])
                        - unicode-bidi: bidi-override [get charcter from left to right ]

                - vertical-align: take value from the following list [text-top, text-bottom, base-line, sub, super]
                ------------------------------------------------------------------
        Text Decoration
                - text-decoration-line [overline, line-through, underline, combine value]
                - text-decoration-color : make text-decoration-line color
                - text-decoration-style [dotted, solid, wavy, double, ..]
                - text-decoration-thickness:  px value, %, auto
                - text-decoration line[requird] color [option] style[option] thichness[option] or [none] 
        ----------------------------------------------------------------------------------
        Text Transformation : Controls the capitalization of text
                - text-transform : [uppercase, lowercase, capitalize[each first charcter of word upper],]
        ----------------------------------------------------------------------------------
        Text Spacing
                - text-indent :  property is used to specify the indentation of the first line of a text:

                - letter-spacing
                - word-spacing: accept negative value
                - line-spacing : used to specify the space between lines: only number with out unit
                
                - white-space [ property specifies how white-space inside an element is handled.] (nowrap, normal, pre)

