/*
    The MIT License (MIT)

    Copyright (c) 2014 Naushad Kinya Moidin

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */


/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, browser: true */
/*global */

function BubbleBuster(numOfRows, numOfCols, parentElement) {
    "use strict";
    this.numOfRows = numOfRows;
    this.numOfCols = numOfCols;
    this.parent = parentElement;

    this.generate();
}

BubbleBuster.prototype.generate = function () {
    "use strict";
    this.parent.innerHTML = "";
    this.table = document.createElement('table');
    this.table.setAttribute('id', 'quiz-table');

    var row,
        col,
        tr,
        td;
    for (row = 0; row < this.numOfRows; row++) {
        tr = document.createElement('tr');
        this.table.appendChild(tr);
        for (col = 0; col < this.numOfCols; col++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    }

    this.generateBubbles(0, 0, this.numOfRows, this.numOfCols);
    this.parent.appendChild(this.table);
};

BubbleBuster.prototype.reGenerate = function () {
    "use strict";
    this.generate();
};

BubbleBuster.prototype.generateRandomColors = function () {
    "use strict";
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
};

BubbleBuster.prototype.generateBubbles = function (startRow, startCol, endRow, endCol) {
    "use strict";
    var row,
        col,
        bubble;
    for (row = startRow; row < endRow; row++) {
        for (col = startCol; col < endCol; col++) {
            bubble = document.createElement('div');
            bubble.setAttribute('class', 'bubble');
            bubble.style.background = this.generateRandomColors();
            this.table.rows[row].cells[col].innerHTML = "";
            this.table.rows[row].cells[col].appendChild(bubble);
        }
    }
};