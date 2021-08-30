"use strict";
this.name="Shruthi";
function method1()
{
    console.log(this.name);
}

method1.call(this);