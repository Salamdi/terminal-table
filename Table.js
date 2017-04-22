const Row = require('./Row');
const Head = require('./Head');

module.exports = class Table {
    constructor(data) {
        this.data = JSON.parse(data);
        this.rows = this.data.map(row => {
            return new Row(row);
        });
        this.head = new Head(this.data[0]);
        this.colWidths = [];
        for (let i = 0; i < Object.keys(this.data[0]).length; i++) {
            this.colWidths.push(0);
        }
        this.setColumnWidths();
    }

    setColumnWidths() {
        this.setWidth(this.head);
        this.head.setWidths(this.colWidths);
        this.rows.map(row => {
            this.setWidth(row);
        });
        this.rows.forEach(row => {
            row.setWidths(this.colWidths);
        });
    }

    setWidth(row) {
        row.getWidths().forEach((width, index) => {
                if (this.colWidths[index] < width)
                    this.colWidths[index] = width;
            });
    }

    draw() {
        this.head.putCells();
        this.head.putDevider();
        this.rows.forEach(row => row.putCells());
    }
}
